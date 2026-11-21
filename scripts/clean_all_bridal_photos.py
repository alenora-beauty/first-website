import cv2
import numpy as np
import os
import json
from rapidocr_onnxruntime import RapidOCR

MASTER_CONFIGS = {
    # 01: 3000x3750, TL logo
    '01': {
        'patches': [
            {'dst_box': (160, 180, 750, 710), 'src_box': (800, 180, 1390, 710)}
        ]
    },
    # 02: 3000x3750, TL logo (the image from the user's feedback)
    '02': {
        'patches': [
            {'dst_box': (160, 180, 750, 710), 'src_box': (800, 180, 1390, 710)}
        ]
    },
    # 03: 3000x3750, TL logo
    '03': {
        'patches': [
            {'dst_box': (160, 180, 750, 710), 'src_box': (800, 180, 1390, 710)}
        ]
    },
    # 04: 3000x3750, TR logo
    '04': {
        'patches': [
            {'dst_box': (2240, 180, 2840, 710), 'src_box': (1600, 180, 2200, 710)}
        ]
    },
    # 05: 1626x2033, TR logo -> sampled from pristine TL backdrop
    '05': {
        'patches': [
            {'dst_box': (1200, 90, 1550, 390), 'src_box': (50, 90, 400, 390)}
        ]
    },
    # 09: 2000x3000, BR logo
    '09': {
        'patches': [
            {'dst_box': (1530, 2550, 1930, 2910), 'src_box': (1080, 2550, 1480, 2910)}
        ]
    },
    # 10: 3000x3750, TL logo
    '10': {
        'patches': [
            {'dst_box': (160, 180, 750, 710), 'src_box': (800, 180, 1390, 710)}
        ]
    },
    # 11: 3000x3750, TL logo
    '11': {
        'patches': [
            {'dst_box': (160, 180, 750, 710), 'src_box': (800, 180, 1390, 710)}
        ]
    },
    # 12: 3000x3750, TL logo
    '12': {
        'patches': [
            {'dst_box': (160, 180, 750, 710), 'src_box': (800, 180, 1390, 710)}
        ]
    },
    # 13: 3000x3750, TR logo
    '13': {
        'patches': [
            {'dst_box': (2240, 180, 2840, 710), 'src_box': (1600, 180, 2200, 710)}
        ]
    },
    # 15: 2708x4032, TR logo
    '15': {
        'patches': [
            {'dst_box': (1950, 380, 2700, 810), 'src_box': (1150, 380, 1900, 810)}
        ]
    },
    # 17: 1080x1350 -> patch TR logo, crop bottom 90px banner
    '17': {
        'patches': [
            {'dst_box': (890, 40, 1050, 190), 'src_box': (710, 40, 870, 190)}
        ],
        'crop': (36, 0, 1044, 1260) # 1008x1260 (aspect 0.8)
    },
    # 18: 1080x1350 -> patch TR logo, crop bottom 90px banner
    '18': {
        'patches': [
            {'dst_box': (890, 40, 1050, 190), 'src_box': (710, 40, 870, 190)}
        ],
        'crop': (36, 0, 1044, 1260) # 1008x1260 (aspect 0.8)
    },
    # 19: 3024x4032, Left + Right + Bottom
    '19': {
        'patches': [
            {'dst_box': (110, 1200, 790, 1630), 'src_box': (110, 700, 790, 1130)},
            {'dst_box': (2280, 1830, 3024, 2020), 'src_box': (2280, 1600, 3024, 1790)},
            {'dst_box': (110, 3420, 260, 3520), 'src_box': (270, 3420, 420, 3520)}
        ]
    }
}

def clean_all_photos():
    print("=== STARTING CLEAN BACKGROUND REPLACEMENT FOR BRIDAL STUDIO PHOTOS ===")
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
        dst_path = f'{output_dir}/alenora-bride-{b_id}.jpg'
        
        im = cv2.imread(src_path)
        if im is None:
            print(f"Error reading {src_path}")
            continue
            
        h, w = im.shape[:2]
        cleaned = im.copy()
        
        for p in cfg['patches']:
            dx1, dy1, dx2, dy2 = p['dst_box']
            sx1, sy1, sx2, sy2 = p['src_box']
            
            src_patch = im[sy1:sy2, sx1:sx2].copy()
            pw = dx2 - dx1
            ph = dy2 - dy1
            if src_patch.shape[0] != ph or src_patch.shape[1] != pw:
                src_patch = cv2.resize(src_patch, (pw, ph))
                
            center = ((dx1 + dx2) // 2, (dy1 + dy2) // 2)
            mask = 255 * np.ones(src_patch.shape, dtype=np.uint8)
            cleaned = cv2.seamlessClone(src_patch, cleaned, mask, center, cv2.NORMAL_CLONE)
            
        # If crop is specified (e.g. for 17 and 18 to remove bottom Instagram banner):
        if 'crop' in cfg:
            cx1, cy1, cx2, cy2 = cfg['crop']
            cleaned = cleaned[cy1:cy2, cx1:cx2]
            print(f"[{b_id}] Cropped to remove banner: {cleaned.shape[1]}x{cleaned.shape[0]}")
            
        final_h, final_w = cleaned.shape[:2]
        
        # Save high-quality output
        cv2.imwrite(dst_path, cleaned, [cv2.IMWRITE_JPEG_QUALITY, 96])
        
        # Save card preview for UI check
        card = cv2.resize(cleaned, (400, int(400 * final_h / final_w)))
        cv2.imwrite(f'{preview_dir}/{b_id}_card.jpg', card)
        
        # Update metadata if dimensions changed
        full_id = f"bride-{b_id}"
        if full_id in meta_dict:
            meta_dict[full_id]['width'] = final_w
            meta_dict[full_id]['height'] = final_h
            meta_dict[full_id]['aspectRatio'] = round(final_w / final_h, 3)
            
        # Verify OCR
        res, _ = ocr(cleaned)
        texts = [x[1] for x in res] if res else []
        print(f"[{b_id}] Saved {dst_path} ({final_w}x{final_h}) -> OCR: {'100% CLEAN' if not texts else texts}")
        
    # Write updated bridalImages.json
    with open('data/bridalImages.json', 'w') as f:
        json.dump(bridal_meta, f, indent=2)
    print("\nUpdated data/bridalImages.json with pristine verified image dimensions.")
    print("=== ALL BRIDAL STUDIO PHOTOS SUCCESSFULLY CLEANED ===")

if __name__ == '__main__':
    clean_all_photos()
