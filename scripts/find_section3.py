import requests
h = {'User-Agent': 'Mozilla/5.0'}
r = requests.get('https://cognivectra.com/assets/index-szLosV52.js', headers=h, timeout=30)
content = r.text

# Search for section patterns - tech logos, partner logos
patterns = ['AWS', 'GCP', 'Kubernetes', 'OpenAI', 'Supabase', 'partner', 'logo-ticker', 'tech-logos', 'cloud']

for p in patterns:
    idx = 0
    count = 0
    while True:
        idx = content.find(p, idx)
        if idx == -1:
            break
        count += 1
        if count <= 5:
            start = max(0, idx - 100)
            end = min(len(content), idx + len(p) + 200)
            snippet = content[start:end]
            # Print only printable ascii
            safe = ''.join(c if ord(c) >= 32 and ord(c) < 127 else '?' for c in snippet)
            print('=== %s #%d at %d ===' % (p, count, idx))
            print(safe[:300])
            print()
        idx += 1
    print('Total %s: %d' % (p, count))
