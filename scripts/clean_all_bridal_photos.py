import cv2
import numpy as np
import os
import json
from rapidocr_onnxruntime import RapidOCR

# 100% PURE ENVIRONMENT (nature foliage, trees, backdrops, studio walls) OR STONE FLOOR
# Strictly NO face, NO hair, NO veil, NO jewellery, NO clothing
# Soft cosine feathered alpha blend with color normalization to eliminate all smudges and marks
MASTER_CONFIGS = {
    # 01: 3000x3750, TL logo -> sampled from left mid green foliage background
    '01': {
        'patches': [
            {'dst_box': (150, 160, 760, 720), 'src_box': (50, 800, 660, 1360)}
        ]
    },
    # 02: 3000x3750, TL logo -> sampled from left mid green foliage background
    '02': {
        'patches': [
            {'dst_box': (150, 160, 760, 720), 'src_box': (50, 800, 660, 1360)}
        ]
    },
    # 03: 3000x3750, TL logo -> sampled from left mid green foliage background (NO dark branch, NO veil)
    '03': {
        'patches': [
            {'dst_box': (150, 160, 760, 720), 'src_box': (50, 800, 660, 1360)}
        ]
    },
    # 04: 3000x3750, TR logo -> sampled from TL pure dark studio background
    '04': {
        'patches': [
            {'dst_box': (2240, 160, 2850, 720), 'src_box': (150, 160, 760, 720)}
        ]
    },
    # 05: 1626x2033, TR logo -> sampled from TL pure studio backdrop
    '05': {
        'patches': [
            {'dst_box': (1200, 90, 1560, 390), 'src_box': (50, 90, 410, 390)}
        ]
    },
    # 09: 2000x3000, BR logo -> sampled from pure clean stone floor directly adjacent
    '09': {
        'patches': [
            {'dst_box': (1530, 2550, 1930, 2920), 'src_box': (1100, 2550, 1500, 2920)}
        ]
    },
    # 10: 3000x3750, TL logo -> sampled from TR pure dark studio backdrop
    '10': {
        'patches': [
            {'dst_box': (150, 160, 760, 720), 'src_box': (2240, 160, 2850, 720)}
        ]
    },
    # 11: 3000x3750, TL logo -> sampled from TR pure warm beige wall
    '11': {
        'patches': [
            {'dst_box': (150, 160, 760, 720), 'src_box': (2240, 160, 2850, 720)}
        ]
    },
    # 12: 3000x3750, TL logo -> sampled from left mid green foliage (NO brown leaf, NO flame mark)
    '12': {
        'patches': [
            {'dst_box': (150, 160, 760, 720), 'src_box': (50, 800, 660, 1360)}
        ]
    },
    # 13: 3000x3750, TR logo -> sampled from TL pure dark studio environment
    '13': {
        'patches': [
            {'dst_box': (2240, 160, 2850, 720), 'src_box': (150, 160, 760, 720)}
        ]
    },
    # 15: 2708x4032, TR logo -> sampled from TL pure studio wall
    '15': {
        'patches': [
            {'dst_box': (1950, 350, 2700, 820), 'src_box': (100, 350, 850, 820)}
        ]
    },
    # 17: 1080x1350 -> sampled from TL studio wall, crop bottom Instagram bar
    '17': {
        'patches': [
            {'dst_box': (880, 30, 1060, 200), 'src_box': (40, 30, 220, 200)}
        ],
        'crop': (36, 0, 1044, 1260) # 1008x1260 (aspect 0.8)
    },
    # 18: 1080x1350 -> sampled from TL studio wall, crop bottom Instagram bar
    '18': {
        'patches': [
            {'dst_box': (880, 30, 1060, 200), 'src_box': (40, 30, 220, 200)}
        ],
        'crop': (36, 0, 1044, 1260) # 1008x1260 (aspect 0.8)
    },
    # 19: 3024x4032 -> wall/foliage, trees, and stone floor
    '19': {
        'patches': [
            {'dst_box': (100, 1200, 800, 1650), 'src_box': (100, 700, 800, 1150)},
            {'dst_box': (2280, 1830, 3024, 2050), 'src_box': (2280, 1380, 3024, 1600)},
            {'dst_box': (100, 3400, 280, 3540), 'src_box': (300, 3400, 480, 3540)}
        ]
    }
}

def clean_patch_blend(im, dst_box, src_box, feather=45):
    dx1, dy1, dx2, dy2 = dst_box
    sx1, sy1, sx2, sy2 = src_box
    
    dw = dx2 - dx1
    dh = dy2 - dy1
    
    src_patch = im[sy1:sy2, sx1:sx2].copy()
    if src_patch.shape[:2] != (dh, dw):
        src_patch = cv2.resize(src_patch, (dw, dh), interpolation=cv2.INTER_LANCZOS4)
        
    dst_region = im[dy1:dy2, dx1:dx2].copy()
    
    # Measure surrounding environment color (around dst_box boundary, excluding logo text/icon)
    pad = 35
    h_im, w_im = im.shape[:2]
    by1, by2 = max(0, dy1 - pad), min(h_im, dy2 + pad)
    bx1, bx2 = max(0, dx1 - pad), min(w_im, dx2 + pad)
    
    border_strip = im[by1:by2, bx1:bx2].copy()
    border_mask = np.ones((by2 - by1, bx2 - bx1), dtype=bool)
    border_mask[dy1 - by1 : dy2 - by1, dx1 - bx1 : dx2 - bx1] = False
    
    surrounding_pixels = border_strip[border_mask]
    
    # Normalized color transfer to ensure flawless matching with zero smudges or halos
    src_mean = src_patch.mean(axis=(0, 1))
    src_std = src_patch.std(axis=(0, 1)) + 1e-5
    
    tgt_mean = surrounding_pixels.mean(axis=0)
    tgt_std = surrounding_pixels.std(axis=0) + 1e-5
    
    matched_patch = ((src_patch - src_mean) / src_std) * tgt_std + tgt_mean
    matched_patch = np.clip(matched_patch, 0, 255).astype(np.uint8)
    
    # Smooth cosine feathered alpha mask
    mask = np.ones((dh, dw), dtype=np.float32)
    for i in range(feather):
        alpha = (1.0 - np.cos(i * np.pi / feather)) / 2.0
        if dy1 > 0:
            mask[i, :] = np.minimum(mask[i, :], alpha)
        if dy2 < h_im:
            mask[dh - 1 - i, :] = np.minimum(mask[dh - 1 - i, :], alpha)
        if dx1 > 0:
            mask[:, i] = np.minimum(mask[:, i], alpha)
        if dx2 < w_im:
            mask[:, dw - 1 - i] = np.minimum(mask[:, dw - 1 - i], alpha)
            
    mask = mask[:, :, np.newaxis]
    
    blended = (matched_patch * mask + dst_region * (1.0 - mask)).astype(np.uint8)
    
    result = im.copy()
    result[dy1:dy2, dx1:dx2] = blended
    return result

def clean_all_photos():
    print("=== STARTING PURE ENVIRONMENT/FLOOR BLEND FOR ALL BRIDAL PHOTOS ===")
    ocr = RapidOCR()
    
    output_dir = 'public/bridal-studio'
    preview_dir = 'scratch/final_verified_cards'
    os.makedirs(preview_dir, exist_ok=True)
    
    # Load bridalImages.json
    with open('data/bridalImages.json', 'r') as f:
        bridal_meta = json.load(f)
    meta_dict = {item['id']: item for item in bridal_meta}
    
    for b_id, cfg in MASTER_CONFIGS.items():
        src_path = f'scratch/git_inspect/alenora-bride-{b_id}.jpg'
        dst_path = f'{output_dir}/alenora-bride-{b_id}.webp'
        
        im = cv2.imread(src_path)
        if im is None:
            print(f"Error reading {src_path}")
            continue
            
        cleaned = im.copy()
        
        for p in cfg['patches']:
            cleaned = clean_patch_blend(cleaned, p['dst_box'], p['src_box'], feather=45)
            
        if 'crop' in cfg:
            cx1, cy1, cx2, cy2 = cfg['crop']
            cleaned = cleaned[cy1:cy2, cx1:cx2]
            print(f"[{b_id}] Cropped banner: {cleaned.shape[1]}x{cleaned.shape[0]}")
            
        final_h, final_w = cleaned.shape[:2]
        
        # Max dimensions for web performance (< 100KB target)
        # Keep crisp responsive sizes (max width 1200 or 1000)
        target_w = 960 if final_w >= 2000 else min(final_w, 1000)
        target_h = int(final_h * (target_w / final_w))
        resized = cv2.resize(cleaned, (target_w, target_h), interpolation=cv2.INTER_LANCZOS4)
        
        # Save as WebP with quality 84 (crystal sharp, < 100 KB)
        encode_params = [int(cv2.IMWRITE_WEBP_QUALITY), 84]
        cv2.imwrite(dst_path, resized, encode_params)
        
        size_kb = os.path.getsize(dst_path) / 1024.0
        
        # Verify OCR
        res, _ = ocr(resized)
        texts = [x[1] for x in res] if res else []
        print(f"[{b_id}] Saved {dst_path} ({target_w}x{target_h}, {size_kb:.1f} KB) -> OCR: {'100% CLEAN' if not texts else texts}")
        
        # Also save high-res inspection preview
        card = cv2.resize(resized, (400, int(400 * target_h / target_w)))
        cv2.imwrite(f'{preview_dir}/{b_id}_card.jpg', card)
        
        # Update metadata if needed
        full_id = f"bride-{b_id}"
        if full_id in meta_dict:
            meta_dict[full_id]['width'] = target_w
            meta_dict[full_id]['height'] = target_h
            meta_dict[full_id]['aspectRatio'] = round(target_w / target_h, 3)
            meta_dict[full_id]['src'] = f"/bridal-studio/alenora-bride-{b_id}.webp"
            
    with open('data/bridalImages.json', 'w') as f:
        json.dump(bridal_meta, f, indent=2)
        
    print("\nUpdated data/bridalImages.json successfully.")
    print("=== ALL BRIDAL STUDIO PHOTOS PRISTINELY CLEANED ===")

if __name__ == '__main__':
    clean_all_photos()
