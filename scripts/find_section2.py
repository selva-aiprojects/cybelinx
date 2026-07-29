import requests
h = {'User-Agent': 'Mozilla/5.0'}
r = requests.get('https://cognivectra.com/assets/index-szLosV52.js', headers=h, timeout=30)
content = r.text

# Search for more patterns
keywords = ['foundation', 'tech-stack', 'technology', 'partner', 'enterprise', 'built-on', 'trusted by']
for kw in keywords:
    idx = 0
    found = 0
    while True:
        idx = content.find(kw, idx)
        if idx == -1:
            break
        found += 1
        if found <= 3:
            start = max(0, idx - 150)
            end = min(len(content), idx + len(kw) + 300)
            snippet = content[start:end]
            print('=== Found "%s" #%d at offset %d ===' % (kw, found, idx))
            print(repr(snippet[:200]))
            print()
        idx += 1
    print('Total found for "%s": %d' % (kw, found))
    print()
