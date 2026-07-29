import requests
h = {'User-Agent': 'Mozilla/5.0'}
r = requests.get('https://cognivectra.com/assets/index-szLosV52.js', headers=h, timeout=30)
content = r.text

keywords = ['Enterprise Foundations', 'AWS', 'GCP', 'Kubernetes', 'OpenAI', 'Supabase', 'Built On']
for kw in keywords:
    idx = content.find(kw)
    if idx >= 0:
        start = max(0, idx - 300)
        end = min(len(content), idx + len(kw) + 800)
        snippet = content[start:end]
        print('=== Found "%s" at offset %d ===' % (kw, idx))
        print(snippet)
        print()
    else:
        print('NOT FOUND: %s' % kw)
