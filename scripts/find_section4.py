import requests
import re

h = {'User-Agent': 'Mozilla/5.0'}
r = requests.get('https://cognivectra.com/assets/index-szLosV52.js', headers=h, timeout=30)
content = r.text

# Search for company names in the context of a technology section
# Look for patterns like AWS, GCP, Kubernetes, OpenAI, Supabase near each other
# First find chunks that contain multiple of these keywords

keywords = ['AWS', 'GCP', 'Kubernetes', 'OpenAI', 'Supabase', 'Docker', 'Node.js', 'Python', 'React', 'TypeScript', 'PostgreSQL', 'Redis']

# Split content into chunks around 5000 chars each
chunk_size = 5000
overlap = 2000

for i in range(0, len(content), chunk_size - overlap):
    chunk = content[i:i + chunk_size]
    found = [k for k in keywords if k in chunk]
    if len(found) >= 3:
        safe = ''.join(c if ord(c) >= 32 and ord(c) < 127 else '?' for c in chunk)
        print('=== Chunk at %d, keywords: %s ===' % (i, found))
        print(safe[:1000])
        print()
