import glob
import os

image_files = set(os.listdir('public/images'))
print('Actual image files in public/images:')
for img in sorted(list(image_files)):
    print('  -', img)

print('\nChecking content/blog/*.md thumbnails:')
for f in sorted(glob.glob('content/blog/*.md')):
    with open(f, 'r', encoding='utf-8') as fp:
        lines = fp.readlines()
        has_thumb = False
        for l in lines:
            if l.startswith('thumbnail:'):
                has_thumb = True
                thumb = l.split('thumbnail:')[1].strip().strip('"').strip("'")
                filename = os.path.basename(thumb)
                exists = filename in image_files
                print(f'{os.path.basename(f)}: thumb={thumb} (exists={exists})')
        if not has_thumb:
            print(f'{os.path.basename(f)}: NO THUMBNAIL (uses default fallback)')
