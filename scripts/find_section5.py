import requests
import re

h = {'User-Agent': 'Mozilla/5.0'}
r = requests.get('https://cognivectra.com/assets/index-szLosV52.js', headers=h, timeout=30)
content = r.text

# Search for any of these terms in the whole JS
terms = ['AWS', 'GCP', 'Kubernetes', 'OpenAI', 'Supabase', 'enterprise', 'foundation']
for t in terms:
    count = content.count(t)
    print('%s: %d occurrences' % (t, count))

# Search for the specific phrase
phrase = 'Built On'
idx = content.find(phrase)
if idx >= 0:
    print('Found "Built On" at', idx)
    print(repr(content[idx:idx+500]))
else:
    # Try variations
    for p in ['built', 'Built', 'BUILT']:
        idx = content.find(p)
        if idx >= 0:
            print('Found "%s" at %d' % (p, idx))
            print(repr(content[max(0,idx-100):idx+200]))
            break
