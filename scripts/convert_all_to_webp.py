import os
import io
import json
import re
from PIL import Image, ImageOps

print("=== STARTING COMPLETE WEBP CONVERSION & CODE MIGRATION ===")

def optimize_to_webp(input_path, max_kb=95):
    target_bytes = max_kb * 1024
    
    with Image.open(input_path) as im:
        try:
            im = ImageOps.exif_transpose(im)
        except Exception:
            pass
            
        has_alpha = False
        if im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info):
            alpha = im.convert('RGBA').split()[-1]
            if alpha.getextrema() != (255, 255):
                has_alpha = True
                im = im.convert('RGBA')
            else:
                im = im.convert('RGB')
        else:
            im = im.convert('RGB')
            
        orig_w, orig_h = im.size
        max_dims = [1920, 1600, 1400, 1200, 1000, 800, 600]
        
        for max_dim in max_dims:
            scale = min(1.0, max_dim / max(orig_w, orig_h))
            cur_w = max(1, int(round(orig_w * scale)))
            cur_h = max(1, int(round(orig_h * scale)))
            
            if scale < 1.0:
                resized = im.resize((cur_w, cur_h), Image.Resampling.LANCZOS)
            else:
                resized = im
                
            for q in range(85, 30, -5):
                buf = io.BytesIO()
                resized.save(buf, format='WEBP', quality=q, method=6)
                cur_size = buf.tell()
                
                if cur_size <= target_bytes:
                    return buf.getvalue(), (cur_w, cur_h), q, max_dim
                    
        # Ultimate fallback
        scale = min(1.0, 500 / max(orig_w, orig_h))
        cur_w = max(1, int(round(orig_w * scale)))
        cur_h = max(1, int(round(orig_h * scale)))
        resized = im.resize((cur_w, cur_h), Image.Resampling.LANCZOS)
        buf = io.BytesIO()
        resized.save(buf, format='WEBP', quality=35, method=6)
        return buf.getvalue(), (cur_w, cur_h), 35, 500

# 1. Collect all files in public/ to convert
files_to_process = []
image_exts = {'.jpg', '.jpeg', '.png', '.webp'}

for root, dirs, files in os.walk('public'):
    for f in files:
        ext = os.path.splitext(f)[1].lower()
        if ext in image_exts:
            full_path = os.path.join(root, f)
            rel_path = os.path.relpath(full_path, 'public').replace('\\', '/')
            files_to_process.append((full_path, rel_path, f, ext))

print(f"Found {len(files_to_process)} image files to convert/optimize in public/.")

# 2. Convert and map
mapping = {} # old_rel_path -> new_rel_path, old_fn -> new_fn
dimensions = {} # new_rel_path -> (w, h)
old_files_to_delete = []

for full_path, rel_path, fn, ext in files_to_process:
    # Determine new filename and rel_path
    folder = os.path.dirname(rel_path)
    
    # Clean slider filenames: e.g. slider01.JPG.jpeg -> slider01.webp
    if 'slider' in fn.lower():
        base_name = re.sub(r'(\.jpg|\.jpeg)+$', '', fn, flags=re.IGNORECASE)
        new_fn = f"{base_name}.webp"
    else:
        base_name = os.path.splitext(fn)[0]
        # In case of double extension like .JPG.jpeg
        base_name = re.sub(r'(\.jpg|\.jpeg)+$', '', base_name, flags=re.IGNORECASE)
        new_fn = f"{base_name}.webp"
        
    new_rel_path = f"{folder}/{new_fn}" if folder else new_fn
    new_full_path = os.path.join('public', new_rel_path.replace('/', os.sep))
    
    print(f"Converting: {rel_path} -> {new_rel_path}")
    data, (w, h), q, max_d = optimize_to_webp(full_path, max_kb=95)
    
    # Write new WebP
    # If old file is different path, or same path
    if full_path != new_full_path:
        old_files_to_delete.append(full_path)
        
    with open(new_full_path, 'wb') as out_f:
        out_f.write(data)
        
    sz_kb = len(data) / 1024
    print(f"  Saved {new_rel_path} ({w}x{h}, {sz_kb:.1f} KB, Q={q})")
    
    mapping[rel_path] = new_rel_path
    mapping[f"/{rel_path}"] = f"/{new_rel_path}"
    mapping[fn] = new_fn
    dimensions[new_rel_path] = (w, h)
    dimensions[f"/{new_rel_path}"] = (w, h)

# 3. Delete old non-webp files
print(f"\nRemoving {len(old_files_to_delete)} old non-webp / duplicate files...")
for op in old_files_to_delete:
    if os.path.exists(op):
        os.remove(op)
print("Removed old files.")

# 4. Update data/bridalImages.json
with open('data/bridalImages.json', 'r') as f:
    bridal_data = json.load(f)

for item in bridal_data:
    old_src = item['src']
    # e.g. /bridal-studio/alenora-bride-01.jpg -> .webp
    new_src = re.sub(r'\.(jpg|jpeg|png)$', '.webp', old_src, flags=re.IGNORECASE)
    item['src'] = new_src
    if new_src in dimensions:
        nw, nh = dimensions[new_src]
        item['width'] = nw
        item['height'] = nh
        item['aspectRatio'] = round(nw / nh, 3)

with open('data/bridalImages.json', 'w') as f:
    json.dump(bridal_data, f, indent=2)
print("Updated data/bridalImages.json with WebP paths and dimensions.")

# 5. Update data/galleryPhotos.json
with open('data/galleryPhotos.json', 'r') as f:
    gallery_data = json.load(f)

for item in gallery_data:
    old_url = item['url']
    new_url = re.sub(r'\.(jpg|jpeg|png)$', '.webp', old_url, flags=re.IGNORECASE)
    item['url'] = new_url
    if new_url in dimensions:
        nw, nh = dimensions[new_url]
        item['width'] = nw
        item['height'] = nh
        item['aspectRatio'] = round(nw / nh, 3)

with open('data/galleryPhotos.json', 'w') as f:
    json.dump(gallery_data, f, indent=2)
print("Updated data/galleryPhotos.json with WebP paths and dimensions.")

# 6. Update all other code files (.ts, .tsx, .js, .json, .css, .mjs)
code_exts = {'.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.html', '.mjs'}
code_files = []
for root, dirs, files in os.walk('.'):
    if any(p in root for p in ['.git', '.next', 'node_modules', 'scratch', 'public', '.gemini']):
        continue
    for f in files:
        if os.path.splitext(f)[1] in code_exts:
            code_files.append(os.path.join(root, f))

# Sort mapping keys by length descending to avoid partial substring collisions
sorted_keys = sorted(mapping.keys(), key=lambda k: len(k), reverse=True)

modified_code_count = 0
for cp in code_files:
    if cp in ['data/bridalImages.json', 'data/galleryPhotos.json']:
        continue
    try:
        with open(cp, 'r', encoding='utf-8') as cf:
            content = cf.read()
            
        orig_content = content
        for k in sorted_keys:
            if k in content:
                content = content.replace(k, mapping[k])
                
        if content != orig_content:
            with open(cp, 'w', encoding='utf-8') as cf:
                cf.write(content)
            modified_code_count += 1
            print(f"Updated references in {cp}")
    except Exception as e:
        print(f"Error updating {cp}: {e}")

print(f"\nUpdated image references in {modified_code_count} source code files.")
print("=== CONVERSION AND MIGRATION FINISHED SUCCESSFULLY ===")
