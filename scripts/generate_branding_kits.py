import os
import base64
import subprocess

def get_base64(path):
    if not os.path.exists(path):
        return ""
    with open(path, "rb") as f:
        ext = os.path.splitext(path)[1].lower()
        mime = "image/png" if ext == ".png" else ("image/jpeg" if ext in [".jpg", ".jpeg"] else "image/svg+xml")
        return f"data:{mime};base64," + base64.b64encode(f.read()).decode("utf-8")

os.makedirs("public/branding", exist_ok=True)

logo_b64 = get_base64("public/cybelinx-logo.png")
logo_dark_b64 = get_base64("public/cybelinx-logo-dark.png")
emblem_b64 = get_base64("public/cybelinx-logo-embelem.png")
qr_b64 = get_base64("public/branding/cybelinx-qr-code.png")

# 1. GENERATE LETTERHEAD HTML
letterhead_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cybelinx Professional Letterhead - A4</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
<style>
  @page {{
    size: A4 portrait;
    margin: 0;
  }}
  * {{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }}
  body {{
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #f1f5f9;
    color: #1e293b;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px 0;
  }}
  @media print {{
    body {{
      background: transparent;
      padding: 0;
      margin: 0;
    }}
    .page-container {{
      box-shadow: none !important;
      margin: 0 !important;
    }}
    .no-print {{
      display: none !important;
    }}
  }}
  .page-container {{
    width: 210mm;
    height: 297mm;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }}

  /* Top Accent Gradient Line */
  .top-accent-bar {{
    height: 6px;
    width: 100%;
    background: linear-gradient(90deg, #0D47FF 0%, #00C2FF 50%, #7B61FF 100%);
  }}

  /* Watermark Emblem at Exact Center */
  .watermark-center {{
    position: absolute;
    top: 52%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 380px;
    height: 380px;
    opacity: 0.058;
    pointer-events: none;
    z-index: 1;
  }}
  .watermark-center img {{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }}

  /* Header Section */
  .header {{
    padding: 30px 45px 20px 45px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    z-index: 2;
  }}
  .header-logo {{
    height: 48px;
  }}
  .header-logo img {{
    height: 100%;
    width: auto;
    object-fit: contain;
  }}
  .header-meta {{
    text-align: right;
    font-size: 8.5pt;
    color: #475569;
    line-height: 1.45;
  }}
  .header-badge {{
    display: inline-block;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 7pt;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: #0D47FF;
    background: #EFF6FF;
    border: 1px solid #BFDBFE;
    border-radius: 4px;
    padding: 2px 8px;
    margin-bottom: 6px;
    text-transform: uppercase;
  }}
  .header-meta .doc-id {{
    font-weight: 600;
    color: #0f172a;
  }}

  .header-divider {{
    margin: 0 45px;
    height: 1px;
    background: linear-gradient(90deg, #E2E8F0 0%, #CBD5E1 50%, #E2E8F0 100%);
    position: relative;
    z-index: 2;
  }}

  /* Content Section */
  .content {{
    flex: 1;
    padding: 28px 45px 20px 45px;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }}

  .meta-grid {{
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;
    font-size: 9.5pt;
  }}
  .meta-grid .ref-block {{
    color: #334155;
  }}
  .meta-grid .ref-block strong {{
    color: #0f172a;
    font-weight: 600;
  }}
  .meta-grid .date-block {{
    text-align: right;
    color: #334155;
  }}
  .meta-grid .date-block strong {{
    color: #0f172a;
    font-weight: 600;
  }}

  .recipient-block {{
    margin-bottom: 20px;
    font-size: 9.5pt;
    line-height: 1.5;
    color: #334155;
  }}
  .recipient-block .to {{
    font-weight: 600;
    color: #0f172a;
  }}
  .recipient-block .name {{
    font-weight: 700;
    color: #0f172a;
    font-size: 10pt;
  }}

  .subject-line {{
    margin-bottom: 18px;
    padding: 8px 12px;
    background: #F8FAFC;
    border-left: 3.5px solid #0D47FF;
    border-radius: 0 6px 6px 0;
    font-size: 9.5pt;
    font-weight: 700;
    color: #0f172a;
    font-family: 'Space Grotesk', sans-serif;
    letter-spacing: 0.02em;
  }}

  .letter-body {{
    font-size: 9.25pt;
    line-height: 1.68;
    color: #334155;
    text-align: justify;
  }}
  .letter-body p {{
    margin-bottom: 12px;
  }}

  .key-deliverables {{
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 8px;
    padding: 10px 16px;
    margin: 12px 0 14px 0;
  }}
  .key-deliverables h4 {{
    font-size: 8.5pt;
    font-weight: 700;
    color: #0D47FF;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 6px;
    font-family: 'Space Grotesk', sans-serif;
  }}
  .deliverable-grid {{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    font-size: 8pt;
  }}
  .deliverable-item {{
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 6px;
    padding: 6px 10px;
  }}
  .deliverable-item strong {{
    display: block;
    color: #0f172a;
    font-weight: 600;
    margin-bottom: 2px;
  }}
  .deliverable-item span {{
    color: #64748B;
  }}

  /* Signatory Block */
  .signatory-section {{
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }}
  .signature-block {{
    font-size: 9pt;
    color: #334155;
  }}
  .signature-block .salutation {{
    margin-bottom: 6px;
  }}
  .signature-image {{
    height: 44px;
    margin: 4px 0;
    display: flex;
    align-items: center;
  }}
  .signature-image svg {{
    height: 38px;
    stroke: #0D47FF;
  }}
  .signature-block .signer-name {{
    font-weight: 700;
    color: #0f172a;
    font-size: 10pt;
    font-family: 'Space Grotesk', sans-serif;
  }}
  .signature-block .signer-title {{
    color: #0D47FF;
    font-weight: 600;
    font-size: 8.5pt;
  }}
  .signature-block .company-name {{
    color: #64748B;
    font-size: 8pt;
  }}

  /* Corporate Stamp / Seal */
  .corporate-seal {{
    width: 82px;
    height: 82px;
    border: 2px dashed #0D47FF;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4px;
    opacity: 0.85;
    background: rgba(13, 71, 255, 0.02);
    transform: rotate(-8deg);
  }}
  .seal-inner {{
    width: 68px;
    height: 68px;
    border: 1px solid rgba(13, 71, 255, 0.4);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }}
  .seal-text-top {{
    font-size: 5pt;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: #0D47FF;
    text-transform: uppercase;
  }}
  .seal-icon {{
    width: 20px;
    height: 20px;
    margin: 1px 0;
  }}
  .seal-icon img {{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }}
  .seal-text-bottom {{
    font-size: 4.5pt;
    font-weight: 600;
    letter-spacing: 0.08em;
    color: #0D47FF;
    text-transform: uppercase;
  }}

  /* Footer Section */
  .footer {{
    background: #F8FAFC;
    border-top: 1px solid #E2E8F0;
    padding: 16px 45px 18px 45px;
    position: relative;
    z-index: 2;
  }}
  .footer-grid {{
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr;
    gap: 16px;
    font-size: 7.5pt;
    color: #64748B;
    line-height: 1.45;
  }}
  .footer-col strong {{
    display: block;
    color: #0f172a;
    font-size: 7.5pt;
    font-weight: 700;
    margin-bottom: 2px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }}
  .footer-col a {{
    color: #0D47FF;
    text-decoration: none;
  }}
  .footer-bottom {{
    margin-top: 10px;
    padding-top: 8px;
    border-top: 1px solid #E2E8F0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 6.8pt;
    color: #94A3B8;
  }}
  .footer-compliance {{
    font-weight: 600;
    color: #475569;
  }}
  .footer-gradient-bottom {{
    height: 4px;
    width: 100%;
    background: linear-gradient(90deg, #7B61FF 0%, #00C2FF 50%, #0D47FF 100%);
  }}

  /* Floating Print Action Button (screen only) */
  .print-actions {{
    position: fixed;
    top: 20px;
    right: 20px;
    display: flex;
    gap: 12px;
    z-index: 999;
  }}
  .btn {{
    padding: 10px 18px;
    border-radius: 8px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    border: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transition: all 0.2s;
  }}
  .btn-primary {{
    background: #0D47FF;
    color: #FFFFFF;
  }}
  .btn-primary:hover {{
    background: #0037D6;
    transform: translateY(-2px);
  }}
</style>
</head>
<body>

  <div class="print-actions no-print">
    <button class="btn btn-primary" onclick="window.print()">
      <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 14h12v8H6z"/></svg>
      Print / Save as PDF
    </button>
  </div>

  <div class="page-container">
    <!-- Top Brand Accent Bar -->
    <div class="top-accent-bar"></div>

    <!-- Centered Brand Watermark Emblem -->
    <div class="watermark-center">
      <img src="{emblem_b64}" alt="Cybelinx Watermark Emblem" />
    </div>

    <!-- Top Header -->
    <header class="header">
      <div class="header-logo">
        <img src="{logo_b64}" alt="Cybelinx - Engineering Intelligent Products" />
      </div>
      <div class="header-meta">
        <div class="header-badge">Official Enterprise Letterhead</div>
        <div>Doc ID: <span class="doc-id">CBX/EXEC/2026/089</span></div>
        <div>Classification: <strong>Confidential / Client</strong></div>
      </div>
    </header>

    <div class="header-divider"></div>

    <!-- Main Letter Content -->
    <main class="content">
      <div>
        <div class="meta-grid">
          <div class="ref-block">
            Reference: <strong>CBX-PARTNER-PROPOSAL-V4</strong>
          </div>
          <div class="date-block">
            Date: <strong>September 01, 2026</strong>
          </div>
        </div>

        <div class="recipient-block">
          <div class="to">To,</div>
          <div class="name">Executive Leadership & Engineering Directorate</div>
          <div>Enterprise Client Technology Division</div>
          <div>Global Innovation Center, Bangalore / Singapore</div>
        </div>

        <div class="subject-line">
          SUBJECT: FORMAL ARCHITECTURAL PARTNERSHIP & ENTERPRISE INTELLIGENCE SYSTEM ENGAGEMENT
        </div>

        <div class="letter-body">
          <p>Dear Technology Leadership,</p>
          <p>
            We are pleased to submit this formal proposal on behalf of <strong>Cybelinx Platform Technologies</strong>. As an enduring enterprise technology partner operating across 12 countries, Cybelinx engineers unified, resilient digital platforms that harmonize Artificial Intelligence, SaaS/PaaS runtimes, multi-cloud DevSecOps, and quantum-ready cryptographic safeguards.
          </p>
          <p>
            Unlike traditional one-off software services, our modular architecture guarantees schema-isolated multi-tenancy, sub-200ms P95 AI inference latencies, zero-downtime canary delivery, and automated SOC 2 Type II compliance controls. Our core objective is to future-proof your organization's digital foundation, ensuring continuous adaptability without code refactoring or technological debt.
          </p>

          <div class="key-deliverables">
            <h4>Strategic Platform Scope & Architecture Highlights</h4>
            <div class="deliverable-grid">
              <div class="deliverable-item">
                <strong>01. AI & LLMOps Engine</strong>
                <span>Domain-isolated RAG search, automated compliance copilots & real-time inference.</span>
              </div>
              <div class="deliverable-item">
                <strong>02. Zero-Trust DevSecOps</strong>
                <span>Continuous SAST/DAST scanning, automated secret vaults & multi-cloud golden paths.</span>
              </div>
              <div class="deliverable-item">
                <strong>03. Quantum-Ready Core</strong>
                <span>NIST PQC ML-KEM & ML-DSA cryptographic protection for mission-critical assets.</span>
              </div>
            </div>
          </div>

          <p>
            We look forward to executing this milestone engagement and driving transformative velocity for your enterprise. Should you require any technical clarifications, please do not hesitate to reach out directly.
          </p>
        </div>
      </div>

      <!-- Signatory Block -->
      <div class="signatory-section">
        <div class="signature-block">
          <div class="salutation">Sincerely,</div>
          <div class="company-name">For <strong>Cybelinx Platform Technologies Pvt. Ltd.</strong></div>
          <div class="signature-image">
            <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 28C25 15 40 8 60 18C75 25 80 12 95 10C110 8 120 30 140 18C148 13 152 22 155 20" stroke="#0D47FF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M35 32C55 30 95 32 145 28" stroke="#00C2FF" stroke-width="1.2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="signer-name">Arunachalam V.</div>
          <div class="signer-title">Chief Technology Officer & Director</div>
          <div class="company-name">Cybelinx Global Engineering</div>
        </div>

        <div class="corporate-seal">
          <div class="seal-inner">
            <span class="seal-text-top">Cybelinx Tech</span>
            <div class="seal-icon">
              <img src="{emblem_b64}" alt="Seal" />
            </div>
            <span class="seal-text-bottom">Official Seal</span>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-grid">
        <div class="footer-col">
          <strong>Registered Office</strong>
          No. 41 & 42, 89/5, Prakruthi Township, 1st Block,<br>
          Horamavu Agara Main Road, Bangalore, KA 560113, India
        </div>
        <div class="footer-col">
          <strong>Direct Contact</strong>
          Email: <a href="mailto:sales@cybelinx.com">sales@cybelinx.com</a><br>
          Portal: <a href="https://www.cybelinx.com" target="_blank">www.cybelinx.com</a><br>
          Phone: +91 (080) 4122-8900
        </div>
        <div class="footer-col">
          <strong>Compliance & Standards</strong>
          CIN: U72900KA2024PTC189201<br>
          SOC 2 Type II &bull; ISO 27001:2022<br>
          NIST PQC Standards Verified
        </div>
      </div>
      <div class="footer-bottom">
        <div>&copy; 2026 Cybelinx Platform Technologies Pvt. Ltd. All rights reserved.</div>
        <div class="footer-compliance">SECURE AUTHENTICATED CORPORATE STATIONERY &bull; PAGE 1 OF 1</div>
      </div>
    </footer>

    <!-- Bottom Brand Accent Bar -->
    <div class="footer-gradient-bottom"></div>
  </div>

</body>
</html>"""

with open("public/branding/letterhead-template.html", "w", encoding="utf-8") as f:
    f.write(letterhead_html)
print("Saved public/branding/letterhead-template.html")


# 2. GENERATE BUSINESS CARDS HTML (FRONT + BACK + 8-UP SHEET)
business_cards_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cybelinx Professional Business Cards - Front & Back</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700;800&display=swap" rel="stylesheet">
<style>
  @page {{
    size: A4 landscape;
    margin: 15mm;
  }}
  * {{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }}
  body {{
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    background-color: #0f172a;
    color: #ffffff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }}
  @media print {{
    body {{
      background: #FFFFFF !important;
      color: #000000 !important;
      padding: 0 !important;
    }}
    .no-print {{
      display: none !important;
    }}
    .showcase-container {{
      gap: 30px !important;
    }}
  }}

  .header-title {{
    text-align: center;
    margin-bottom: 30px;
  }}
  .header-title h1 {{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 26px;
    font-weight: 700;
    background: linear-gradient(135deg, #FFFFFF 0%, #4FD8FF 50%, #00C2FF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 6px;
  }}
  .header-title p {{
    font-size: 13px;
    color: #94A3B8;
  }}

  .showcase-container {{
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
    align-items: center;
  }}

  .card-wrapper {{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }}
  .card-label {{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #4FD8FF;
  }}

  /* Standard Business Card Dimensions: 3.5in x 2.0in (88.9mm x 50.8mm) */
  .biz-card {{
    width: 3.5in;
    height: 2.0in;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.1);
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s;
  }}
  .biz-card:hover {{
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 24px 48px rgba(13, 71, 255, 0.3), 0 0 0 1px rgba(79, 216, 255, 0.4);
  }}

  /* ── FRONT SIDE (Clean Executive White / Blue Finish) ── */
  .card-front {{
    background: #FFFFFF;
    color: #0f172a;
    padding: 18px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }}
  .card-front-accent {{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #0D47FF 0%, #00C2FF 60%, #7B61FF 100%);
  }}
  .card-front-watermark {{
    position: absolute;
    right: -15px;
    bottom: -20px;
    width: 140px;
    height: 140px;
    opacity: 0.045;
    pointer-events: none;
  }}
  .card-front-watermark img {{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }}

  .front-header {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;
  }}
  .front-logo {{
    height: 26px;
  }}
  .front-logo img {{
    height: 100%;
    width: auto;
    object-fit: contain;
  }}
  .front-chip {{
    display: flex;
    align-items: center;
    gap: 4px;
    background: rgba(13, 71, 255, 0.06);
    border: 1px solid rgba(13, 71, 255, 0.18);
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 5.5pt;
    font-weight: 700;
    color: #0D47FF;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }}

  .front-middle {{
    margin: 8px 0;
    position: relative;
    z-index: 2;
  }}
  .person-name {{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 11pt;
    font-weight: 800;
    color: #061034;
    letter-spacing: 0.02em;
    line-height: 1.1;
  }}
  .person-title {{
    font-size: 6.8pt;
    font-weight: 700;
    color: #0D47FF;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-top: 2px;
  }}

  .front-bottom {{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    z-index: 2;
  }}
  .contact-details {{
    font-size: 5.8pt;
    color: #475569;
    line-height: 1.45;
  }}
  .contact-item {{
    display: flex;
    align-items: center;
    gap: 4px;
  }}
  .contact-item strong {{
    color: #0f172a;
    font-weight: 600;
  }}
  .contact-item a {{
    color: #0D47FF;
    text-decoration: none;
  }}

  .qr-badge {{
    width: 44px;
    height: 44px;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 6px;
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 6px rgba(0,0,0,0.06);
  }}
  .qr-badge img {{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }}

  /* ── BACK SIDE (Ultra-Luxury Deep Navy `#061034` with Centered Glowing Emblem) ── */
  .card-back {{
    background: #061034;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    padding: 16px 20px;
    background-image: 
      radial-gradient(circle at center, rgba(13, 71, 255, 0.28) 0%, transparent 70%),
      radial-gradient(circle at 10% 20%, rgba(0, 194, 255, 0.12) 0%, transparent 40%),
      radial-gradient(circle at 90% 80%, rgba(123, 97, 255, 0.15) 0%, transparent 40%);
  }}
  .card-back::before {{
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px);
    background-size: 14px 14px;
    pointer-events: none;
    opacity: 0.4;
  }}

  .back-glow-container {{
    position: relative;
    width: 48px;
    height: 48px;
    margin-bottom: 6px;
    z-index: 2;
  }}
  .back-glow-ring {{
    position: absolute;
    inset: -8px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 194, 255, 0.35) 0%, rgba(13, 71, 255, 0) 70%);
    animation: pulse 3s ease-in-out infinite alternate;
  }}
  .back-emblem {{
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: relative;
    z-index: 2;
    filter: drop-shadow(0 0 12px rgba(0, 194, 255, 0.6));
  }}

  .back-wordmark {{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 12pt;
    font-weight: 800;
    letter-spacing: 0.22em;
    color: #FFFFFF;
    margin-bottom: 2px;
    position: relative;
    z-index: 2;
    text-transform: uppercase;
  }}
  .back-tagline {{
    font-size: 5.5pt;
    font-weight: 500;
    color: #94A3B8;
    letter-spacing: 0.06em;
    margin-bottom: 8px;
    position: relative;
    z-index: 2;
  }}

  .back-pills {{
    display: flex;
    gap: 4px;
    justify-content: center;
    margin-bottom: 8px;
    position: relative;
    z-index: 2;
  }}
  .back-pill {{
    font-size: 4.8pt;
    font-weight: 700;
    letter-spacing: 0.04em;
    color: #4FD8FF;
    background: rgba(79, 216, 255, 0.10);
    border: 1px solid rgba(79, 216, 255, 0.22);
    border-radius: 9999px;
    padding: 1.5px 5px;
    text-transform: uppercase;
  }}

  .back-url {{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 6.5pt;
    font-weight: 700;
    color: #00C2FF;
    letter-spacing: 0.12em;
    position: relative;
    z-index: 2;
  }}

  /* Print Action Controls */
  .print-actions {{
    margin-top: 30px;
    display: flex;
    gap: 12px;
  }}
  .btn {{
    padding: 10px 20px;
    border-radius: 8px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    border: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s;
  }}
  .btn-primary {{
    background: #0D47FF;
    color: #FFFFFF;
    box-shadow: 0 4px 14px rgba(13, 71, 255, 0.35);
  }}
  .btn-primary:hover {{
    background: #0037D6;
    transform: translateY(-2px);
  }}
  .btn-secondary {{
    background: rgba(255, 255, 255, 0.1);
    color: #FFFFFF;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }}
  .btn-secondary:hover {{
    background: rgba(255, 255, 255, 0.18);
  }}
</style>
</head>
<body>

  <div class="header-title no-print">
    <h1>Cybelinx Executive Business Cards</h1>
    <p>Standard International Dimensions (3.5" &times; 2.0" / 88.9mm &times; 50.8mm) &bull; Front & Back Presentation</p>
  </div>

  <div class="showcase-container">
    <!-- FRONT SIDE -->
    <div class="card-wrapper">
      <div class="card-label no-print">01 &bull; Front Side (Executive White)</div>
      <div class="biz-card card-front">
        <div class="card-front-accent"></div>
        <div class="card-front-watermark">
          <img src="{emblem_b64}" alt="Watermark" />
        </div>

        <div class="front-header">
          <div class="front-logo">
            <img src="{logo_b64}" alt="Cybelinx Logo" />
          </div>
          <div class="front-chip">
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
            Verified ID
          </div>
        </div>

        <div class="front-middle">
          <div class="person-name">ARUNACHALAM V.</div>
          <div class="person-title">Chief Technology Officer & Director</div>
        </div>

        <div class="front-bottom">
          <div class="contact-details">
            <div class="contact-item">
              <span>&#9742;</span>
              <strong>+91 (080) 4122-8900</strong> &bull; +91 98801 23456
            </div>
            <div class="contact-item">
              <span>&#9993;</span>
              <a href="mailto:arun@cybelinx.com">arun@cybelinx.com</a>
            </div>
            <div class="contact-item">
              <span>&#127760;</span>
              <a href="https://www.cybelinx.com">www.cybelinx.com</a>
            </div>
            <div class="contact-item">
              <span>&#128205;</span>
              Bangalore &bull; Singapore &bull; San Francisco
            </div>
          </div>

          <div class="qr-badge">
            <img src="{qr_b64}" alt="vCard QR" />
          </div>
        </div>
      </div>
    </div>

    <!-- BACK SIDE -->
    <div class="card-wrapper">
      <div class="card-label no-print">02 &bull; Back Side (Deep Navy & Centered Emblem)</div>
      <div class="biz-card card-back">
        <div class="back-glow-container">
          <div class="back-glow-ring"></div>
          <img src="{emblem_b64}" alt="Cybelinx Emblem" class="back-emblem" />
        </div>

        <div class="back-wordmark">CYBELINX</div>
        <div class="back-tagline">Engineering the Future of Enterprise Intelligence</div>

        <div class="back-pills">
          <span class="back-pill">AI & GenAI</span>
          <span class="back-pill">SaaS/PaaS</span>
          <span class="back-pill">DevSecOps</span>
          <span class="back-pill">Quantum-Ready</span>
        </div>

        <div class="back-url">WWW.CYBELINX.COM</div>
      </div>
    </div>
  </div>

  <div class="print-actions no-print">
    <button class="btn btn-primary" onclick="window.print()">
      <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 14h12v8H6z"/></svg>
      Print / Save PDF
    </button>
  </div>

</body>
</html>"""

with open("public/branding/business-cards.html", "w", encoding="utf-8") as f:
    f.write(business_cards_html)
print("Saved public/branding/business-cards.html")


# 3. GENERATE A4 8-CARD IMPOSITION PRINT SHEET HTML
card_sheet_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cybelinx Business Cards - 8-Up A4 Print Sheet</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700;800&display=swap" rel="stylesheet">
<style>
  @page {{
    size: A4 portrait;
    margin: 10mm;
  }}
  * {{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }}
  body {{
    font-family: 'Plus Jakarta Sans', sans-serif;
    background: #f1f5f9;
    color: #0f172a;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }}
  @media print {{
    body {{
      background: transparent;
      padding: 0;
    }}
    .no-print {{
      display: none !important;
    }}
    .sheet-page {{
      box-shadow: none !important;
      margin: 0 !important;
    }}
  }}
  .sheet-page {{
    width: 210mm;
    min-height: 297mm;
    background: #FFFFFF;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    padding: 14mm 10mm;
    display: flex;
    flex-direction: column;
    align-items: center;
    page-break-after: always;
  }}
  .sheet-header {{
    width: 100%;
    margin-bottom: 8mm;
    display: flex;
    justify-content: space-between;
    font-size: 8pt;
    color: #64748b;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 4mm;
  }}
  .sheet-grid {{
    display: grid;
    grid-template-columns: repeat(2, 3.5in);
    grid-template-rows: repeat(4, 2.0in);
    gap: 6mm 10mm;
    justify-content: center;
  }}
  .sheet-card {{
    width: 3.5in;
    height: 2.0in;
    border-radius: 6px;
    border: 1px dashed #cbd5e1;
    overflow: hidden;
    position: relative;
  }}
  /* Front styles */
  .front-box {{
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    padding: 14px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }}
  .front-accent {{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3.5px;
    background: linear-gradient(90deg, #0D47FF, #00C2FF, #7B61FF);
  }}
  .front-watermark {{
    position: absolute;
    right: -10px;
    bottom: -15px;
    width: 110px;
    height: 110px;
    opacity: 0.045;
  }}
  /* Back styles */
  .back-box {{
    width: 100%;
    height: 100%;
    background: #061034;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 12px 16px;
    position: relative;
    background-image: radial-gradient(circle at center, rgba(13, 71, 255, 0.28) 0%, transparent 70%);
  }}
</style>
</head>
<body>

  <!-- PAGE 1: 8x FRONT CARDS -->
  <div class="sheet-page">
    <div class="sheet-header">
      <div><strong>Cybelinx Business Cards</strong> &bull; Front Side (8-Up Imposition Sheet)</div>
      <div>Trim Size: 3.5" &times; 2.0" &bull; Print at 100% Scale</div>
    </div>
    <div class="sheet-grid">
      {''.join([f'''
      <div class="sheet-card">
        <div class="front-box">
          <div class="front-accent"></div>
          <img src="{emblem_b64}" class="front-watermark" />
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <img src="{logo_b64}" style="height:22px; width:auto; object-fit:contain;" />
            <span style="font-size:5pt; font-weight:700; color:#0D47FF; letter-spacing:0.08em; background:#eff6ff; padding:1px 4px; border-radius:3px;">VERIFIED ID</span>
          </div>
          <div style="margin:4px 0;">
            <div style="font-family:'Space Grotesk'; font-size:9.5pt; font-weight:800; color:#061034;">ARUNACHALAM V.</div>
            <div style="font-size:6pt; font-weight:700; color:#0D47FF; text-transform:uppercase;">Chief Technology Officer & Director</div>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:flex-end;">
            <div style="font-size:5.2pt; color:#475569; line-height:1.4;">
              <div>&#9742; <strong>+91 (080) 4122-8900</strong> &bull; +91 98801 23456</div>
              <div>&#9993; arun@cybelinx.com &bull; www.cybelinx.com</div>
              <div>&#128205; Bangalore &bull; Singapore &bull; SF</div>
            </div>
            <img src="{qr_b64}" style="width:34px; height:34px; border:1px solid #e2e8f0; border-radius:4px; padding:1px;" />
          </div>
        </div>
      </div>
      ''' for _ in range(8)])}
    </div>
  </div>

  <!-- PAGE 2: 8x BACK CARDS -->
  <div class="sheet-page">
    <div class="sheet-header">
      <div><strong>Cybelinx Business Cards</strong> &bull; Back Side (8-Up Imposition Sheet)</div>
      <div>Deep Navy (#061034) &bull; Centered Logo Emblem</div>
    </div>
    <div class="sheet-grid">
      {''.join([f'''
      <div class="sheet-card">
        <div class="back-box">
          <img src="{emblem_b64}" style="width:38px; height:38px; object-fit:contain; margin-bottom:4px; filter:drop-shadow(0 0 8px rgba(0,194,255,0.5));" />
          <div style="font-family:'Space Grotesk'; font-size:10pt; font-weight:800; letter-spacing:0.2em; color:#fff; margin-bottom:1px;">CYBELINX</div>
          <div style="font-size:4.8pt; color:#94a3b8; margin-bottom:6px;">Engineering the Future of Enterprise Intelligence</div>
          <div style="display:flex; gap:3px; justify-content:center; margin-bottom:6px;">
            <span style="font-size:4.2pt; font-weight:700; color:#4fd8ff; background:rgba(79,216,255,0.1); border:1px solid rgba(79,216,255,0.2); border-radius:99px; padding:1px 4px;">AI & GenAI</span>
            <span style="font-size:4.2pt; font-weight:700; color:#4fd8ff; background:rgba(79,216,255,0.1); border:1px solid rgba(79,216,255,0.2); border-radius:99px; padding:1px 4px;">SaaS/PaaS</span>
            <span style="font-size:4.2pt; font-weight:700; color:#4fd8ff; background:rgba(79,216,255,0.1); border:1px solid rgba(79,216,255,0.2); border-radius:99px; padding:1px 4px;">DevSecOps</span>
          </div>
          <div style="font-family:'Space Grotesk'; font-size:5.5pt; font-weight:700; color:#00c2ff; letter-spacing:0.1em;">WWW.CYBELINX.COM</div>
        </div>
      </div>
      ''' for _ in range(8)])}
    </div>
  </div>

</body>
</html>"""

with open("public/branding/business-card-sheet.html", "w", encoding="utf-8") as f:
    f.write(card_sheet_html)
print("Saved public/branding/business-card-sheet.html")

# 4. COMPILE TO PROFESSIONAL PDFs USING MICROSOFT EDGE HEADLESS
edge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not os.path.exists(edge_path):
    edge_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

print(f"Using browser at: {edge_path}")

pdf_tasks = [
    ("public/branding/letterhead-template.html", "public/branding/cybelinx-letterhead-template.pdf"),
    ("public/branding/business-cards.html", "public/branding/cybelinx-business-cards.pdf"),
    ("public/branding/business-card-sheet.html", "public/branding/cybelinx-business-card-sheet.pdf"),
]

for html_file, pdf_file in pdf_tasks:
    abs_html = os.path.abspath(html_file)
    abs_pdf = os.path.abspath(pdf_file)
    cmd = [
        edge_path,
        "--headless=new",
        "--disable-gpu",
        "--no-pdf-header-footer",
        f"--print-to-pdf={abs_pdf}",
        abs_html
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if os.path.exists(abs_pdf):
        print(f"Created PDF: {pdf_file} (Size: {os.path.getsize(abs_pdf):,} bytes)")
    else:
        print(f"Error creating {pdf_file}: {res.stderr}")
