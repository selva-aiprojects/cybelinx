"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  FileText,
  CreditCard,
  Palette,
  Download,
  Printer,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  QrCode,
  RotateCw,
  Eye,
  Sliders,
  Share2,
  Building,
  Mail,
  Phone,
  Globe,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Layers,
} from "lucide-react";
import { brand } from "@/lib/content";

export default function BrandingKitPage() {
  const [activeTab, setActiveTab] = useState<"letterhead" | "business-cards" | "guidelines">("letterhead");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // ─── Letterhead Customizer State ───
  const [letterData, setLetterData] = useState({
    docId: "CBX/EXEC/2026/089",
    refNumber: "CBX-PARTNER-PROPOSAL-V4",
    date: "September 01, 2026",
    classification: "Confidential / Client",
    recipientName: "Executive Leadership & Engineering Directorate",
    recipientOrg: "Enterprise Client Technology Division",
    recipientLoc: "Global Innovation Center, Bangalore / Singapore",
    subject: "FORMAL ARCHITECTURAL PARTNERSHIP & ENTERPRISE INTELLIGENCE SYSTEM ENGAGEMENT",
    salutation: "Dear Technology Leadership,",
    bodyPara1:
      "We are pleased to submit this formal proposal on behalf of Cybelinx Platform Technologies. As an enduring enterprise technology partner operating across 12 countries, Cybelinx engineers unified, resilient digital platforms that harmonize Artificial Intelligence, SaaS/PaaS runtimes, multi-cloud DevSecOps, and quantum-ready cryptographic safeguards.",
    bodyPara2:
      "Unlike traditional one-off software services, our modular architecture guarantees schema-isolated multi-tenancy, sub-200ms P95 AI inference latencies, zero-downtime canary delivery, and automated SOC 2 Type II compliance controls. Our core objective is to future-proof your organization's digital foundation, ensuring continuous adaptability without code refactoring or technological debt.",
    bodyPara3:
      "We look forward to executing this milestone engagement and driving transformative velocity for your enterprise. Should you require any technical clarifications, please do not hesitate to reach out directly.",
    signerName: "Arunachalam V.",
    signerTitle: "Chief Technology Officer & Director",
    signerDept: "Cybelinx Global Engineering",
    watermarkOpacity: 6, // Percentage
  });

  // ─── Business Card Customizer State ───
  const [cardData, setCardData] = useState({
    name: "ARUNACHALAM V.",
    title: "Chief Technology Officer & Director",
    department: "Platform Engineering & AI Systems",
    phone1: "+91 (080) 4122-8900",
    phone2: "+91 98801 23456",
    email: "arun@cybelinx.com",
    website: "www.cybelinx.com",
    locations: "Bangalore • Singapore • San Francisco",
    qrUrl: "https://www.cybelinx.com",
    cardTheme: "navy" as "navy" | "white",
  });

  const [isFlipped, setIsFlipped] = useState(false);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(label);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const brandColors = [
    {
      name: "Primary Blue",
      role: "Core Brand Identity & Logo Bar",
      hex: "#0D47FF",
      rgb: "rgb(13, 71, 255)",
      cmyk: "C:95 M:72 Y:0 K:0",
      pantone: "PMS 2728 C",
      bgClass: "bg-[#0D47FF]",
      textWhite: true,
    },
    {
      name: "Accent Cyan",
      role: "Holographic Rings & Glows",
      hex: "#00C2FF",
      rgb: "rgb(0, 194, 255)",
      cmyk: "C:100 M:24 Y:0 K:0",
      pantone: "PMS Process Cyan",
      bgClass: "bg-[#00C2FF]",
      textWhite: false,
    },
    {
      name: "Deep Navy",
      role: "Luxury Dark Background & Watermark Base",
      hex: "#061034",
      rgb: "rgb(6, 16, 52)",
      cmyk: "C:88 M:69 Y:0 K:80",
      pantone: "PMS 2768 C",
      bgClass: "bg-[#061034]",
      textWhite: true,
    },
    {
      name: "Light Cyan Highlight",
      role: "Globe Specular Glare & Badges",
      hex: "#4FD8FF",
      rgb: "rgb(79, 216, 255)",
      cmyk: "C:69 M:15 Y:0 K:0",
      pantone: "PMS 298 C",
      bgClass: "bg-[#4FD8FF]",
      textWhite: false,
    },
    {
      name: "Brand Violet",
      role: "Gradient Accent & Tertiary Elements",
      hex: "#7B61FF",
      rgb: "rgb(123, 97, 255)",
      cmyk: "C:52 M:62 Y:0 K:0",
      pantone: "PMS 2665 C",
      bgClass: "bg-[#7B61FF]",
      textWhite: true,
    },
    {
      name: "Slate Gray",
      role: "Secondary Typography & Micro-copy",
      hex: "#64748B",
      rgb: "rgb(100, 116, 139)",
      cmyk: "C:28 M:17 Y:0 K:45",
      pantone: "PMS Cool Gray 9 C",
      bgClass: "bg-[#64748B]",
      textWhite: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-surface">
      {/* ── Top Hero Header (Screen Only) ─────────────────────────── */}
      <section className="relative overflow-hidden border-b border-border/80 bg-gradient-to-b from-primary/5 via-background to-background pt-32 pb-14 no-print">
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#0D47FF 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary mb-4">
                <Sparkles className="h-3.5 w-3.5" />
                Official Corporate Stationery & Brand Kit
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-surface">
                Branding Kits & Stationery
              </h1>
              <p className="mt-3 max-w-2xl text-base md:text-lg text-slate leading-relaxed">
                A4 ISO Letterhead template with centered watermark emblem, executive business cards, 8-up print sheets, and complete brand tokens.
              </p>
            </div>

            {/* Quick Download Strip */}
            <div className="flex flex-wrap gap-2.5">
              <a
                href="/branding/cybelinx-letterhead-template.pdf"
                download="Cybelinx-Letterhead-A4.pdf"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-primary/20 hover:bg-primary-deep transition-all duration-200"
              >
                <Download className="h-4 w-4" />
                Letterhead PDF (A4)
              </a>
              <a
                href="/branding/cybelinx-business-cards.pdf"
                download="Cybelinx-Business-Cards.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-4 py-2.5 text-xs font-bold text-primary hover:bg-primary/10 transition-all duration-200"
              >
                <Download className="h-4 w-4" />
                Business Cards PDF
              </a>
              <a
                href="/branding/cybelinx-business-card-sheet.pdf"
                download="Cybelinx-Business-Card-Sheet-A4.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/5 px-4 py-2.5 text-xs font-bold text-surface hover:bg-surface/10 transition-all duration-200"
              >
                <Download className="h-4 w-4" />
                8-Up Print Sheet
              </a>
            </div>
          </div>

          {/* Tab navigation */}
          <div className="mt-10 flex border-b border-border/80">
            <button
              onClick={() => setActiveTab("letterhead")}
              className={`flex items-center gap-2.5 border-b-2 px-6 py-3.5 text-sm font-bold transition-all ${
                activeTab === "letterhead"
                  ? "border-primary text-primary bg-primary/5 rounded-t-xl"
                  : "border-transparent text-slate hover:text-surface"
              }`}
            >
              <FileText className="h-4 w-4" />
              Letterhead Studio (A4)
            </button>
            <button
              onClick={() => setActiveTab("business-cards")}
              className={`flex items-center gap-2.5 border-b-2 px-6 py-3.5 text-sm font-bold transition-all ${
                activeTab === "business-cards"
                  ? "border-primary text-primary bg-primary/5 rounded-t-xl"
                  : "border-transparent text-slate hover:text-surface"
              }`}
            >
              <CreditCard className="h-4 w-4" />
              Business Card Studio
            </button>
            <button
              onClick={() => setActiveTab("guidelines")}
              className={`flex items-center gap-2.5 border-b-2 px-6 py-3.5 text-sm font-bold transition-all ${
                activeTab === "guidelines"
                  ? "border-primary text-primary bg-primary/5 rounded-t-xl"
                  : "border-transparent text-slate hover:text-surface"
              }`}
            >
              <Palette className="h-4 w-4" />
              Brand Tokens & Assets
            </button>
          </div>
        </div>
      </section>

      {/* ── Main Tab Contents ─────────────────────────────────────── */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        {/* ═════════════════════════════════════════════════════════════ */}
        {/* TAB 1: LETTERHEAD STUDIO (A4)                                 */}
        {/* ═════════════════════════════════════════════════════════════ */}
        {activeTab === "letterhead" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Live Interactive Controls (Screen only) */}
            <div className="lg:col-span-4 space-y-6 no-print">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-lg text-surface flex items-center gap-2">
                    <Sliders className="h-4 w-4 text-primary" />
                    Letterhead Controls
                  </h3>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-primary/10 text-primary uppercase">
                    A4 ISO Standard
                  </span>
                </div>
                <p className="text-xs text-slate mb-5">
                  Customize the official letter content in real-time. The watermark emblem is centered at exact optical depth.
                </p>

                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-surface mb-1">Document Reference & ID</label>
                    <input
                      type="text"
                      value={letterData.docId}
                      onChange={(e) => setLetterData({ ...letterData, docId: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-surface focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-surface mb-1">Proposal Ref</label>
                      <input
                        type="text"
                        value={letterData.refNumber}
                        onChange={(e) => setLetterData({ ...letterData, refNumber: e.target.value })}
                        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-surface focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-surface mb-1">Date</label>
                      <input
                        type="text"
                        value={letterData.date}
                        onChange={(e) => setLetterData({ ...letterData, date: e.target.value })}
                        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-surface focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-surface mb-1">Recipient Name / Directorate</label>
                    <input
                      type="text"
                      value={letterData.recipientName}
                      onChange={(e) => setLetterData({ ...letterData, recipientName: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-surface focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-surface mb-1">Recipient Organization & Address</label>
                    <input
                      type="text"
                      value={letterData.recipientOrg}
                      onChange={(e) => setLetterData({ ...letterData, recipientOrg: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-surface focus:border-primary focus:outline-none mb-2"
                    />
                    <input
                      type="text"
                      value={letterData.recipientLoc}
                      onChange={(e) => setLetterData({ ...letterData, recipientLoc: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-surface focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-surface mb-1">Subject Line</label>
                    <textarea
                      rows={2}
                      value={letterData.subject}
                      onChange={(e) => setLetterData({ ...letterData, subject: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-surface focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-surface mb-1">Signatory Name</label>
                      <input
                        type="text"
                        value={letterData.signerName}
                        onChange={(e) => setLetterData({ ...letterData, signerName: e.target.value })}
                        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-surface focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-surface mb-1">Signatory Title</label>
                      <input
                        type="text"
                        value={letterData.signerTitle}
                        onChange={(e) => setLetterData({ ...letterData, signerTitle: e.target.value })}
                        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-surface focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="font-semibold text-surface">Watermark Emblem Opacity</label>
                      <span className="text-primary font-bold">{letterData.watermarkOpacity}%</span>
                    </div>
                    <input
                      type="range"
                      min={2}
                      max={18}
                      value={letterData.watermarkOpacity}
                      onChange={(e) => setLetterData({ ...letterData, watermarkOpacity: Number(e.target.value) })}
                      className="w-full accent-primary"
                    />
                    <div className="flex justify-between text-[10px] text-slate mt-0.5">
                      <span>Subtle (2%)</span>
                      <span>Balanced (6%)</span>
                      <span>High (18%)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-border flex flex-col gap-2.5">
                  <button
                    onClick={handlePrint}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-xs font-bold text-white shadow-md hover:bg-primary-deep transition-all"
                  >
                    <Printer className="h-4 w-4" />
                    Print / Save Live Letterhead as PDF
                  </button>
                  <a
                    href="/branding/cybelinx-letterhead-template.pdf"
                    download="Cybelinx-Official-Letterhead-A4.pdf"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-xs font-bold text-surface hover:bg-surface/5 transition-all"
                  >
                    <Download className="h-4 w-4 text-primary" />
                    Download Pre-Compiled Master PDF
                  </a>
                  <a
                    href="/branding/letterhead-template.html"
                    target="_blank"
                    className="w-full inline-flex items-center justify-center gap-2 text-[11px] font-semibold text-slate hover:text-primary transition-colors py-1"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Open Raw HTML Template
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Live A4 Document Canvas Preview */}
            <div className="lg:col-span-8 flex justify-center">
              <div className="w-full max-w-[210mm] min-h-[297mm] bg-white text-slate-900 rounded-sm shadow-2xl relative overflow-hidden border border-slate-200 flex flex-col justify-between select-text print:shadow-none print:border-none print:m-0 print:w-full">
                {/* Top Accent Gradient Bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#0D47FF] via-[#00C2FF] to-[#7B61FF]" />

                {/* ── Watermark Emblem at Exact Center ── */}
                <div
                  className="absolute pointer-events-none select-none z-0"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "360px",
                    height: "360px",
                    opacity: letterData.watermarkOpacity / 100,
                  }}
                >
                  <img
                    src="/cybelinx-logo-embelem.png"
                    alt="Cybelinx Center Watermark"
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Top Header */}
                <header className="relative z-10 px-10 pt-8 pb-4 flex justify-between items-start">
                  <div className="h-12">
                    <img
                      src="/cybelinx-logo.png"
                      alt="Cybelinx Logo"
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <div className="text-right text-[9pt] text-slate-600 leading-snug">
                    <span className="inline-block font-display text-[7pt] font-bold tracking-widest text-[#0D47FF] bg-blue-50 border border-blue-200 rounded px-2 py-0.5 mb-1.5 uppercase">
                      Official Enterprise Letterhead
                    </span>
                    <div>
                      Doc ID: <span className="font-semibold text-slate-900">{letterData.docId}</span>
                    </div>
                    <div>
                      Classification: <span className="font-semibold text-slate-900">{letterData.classification}</span>
                    </div>
                  </div>
                </header>

                <div className="relative z-10 mx-10 h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200" />

                {/* Main Content Area */}
                <div className="relative z-10 flex-1 px-10 py-6 flex flex-col justify-between">
                  <div>
                    {/* Meta Row: Ref & Date */}
                    <div className="flex justify-between items-center text-[9.5pt] mb-5">
                      <div className="text-slate-700">
                        Reference: <strong className="text-slate-900">{letterData.refNumber}</strong>
                      </div>
                      <div className="text-slate-700">
                        Date: <strong className="text-slate-900">{letterData.date}</strong>
                      </div>
                    </div>

                    {/* Recipient */}
                    <div className="text-[9.5pt] text-slate-700 leading-snug mb-5">
                      <div className="font-semibold text-slate-900">To,</div>
                      <div className="font-bold text-slate-900 text-[10pt] mt-0.5">{letterData.recipientName}</div>
                      <div>{letterData.recipientOrg}</div>
                      <div>{letterData.recipientLoc}</div>
                    </div>

                    {/* Subject Line */}
                    <div className="mb-5 rounded-r-md border-l-4 border-[#0D47FF] bg-slate-50 px-3.5 py-2 font-display text-[9.5pt] font-bold text-slate-900 tracking-wide">
                      SUBJECT: {letterData.subject}
                    </div>

                    {/* Letter Body */}
                    <div className="space-y-3 text-justify text-[9.25pt] leading-[1.7] text-slate-700 font-sans">
                      <p className="font-semibold text-slate-900">{letterData.salutation}</p>
                      <p>{letterData.bodyPara1}</p>
                      <p>{letterData.bodyPara2}</p>

                      {/* Strategic Platform Scope Highlights */}
                      <div className="my-3 rounded-lg border border-slate-200 bg-slate-50/80 p-3">
                        <div className="mb-2 font-display text-[8pt] font-bold uppercase tracking-wider text-[#0D47FF]">
                          Strategic Platform Architecture Highlights
                        </div>
                        <div className="grid grid-cols-3 gap-2.5 text-[8pt]">
                          <div className="rounded border border-slate-200 bg-white p-2">
                            <strong className="block text-slate-900 mb-0.5">01. AI & LLMOps Engine</strong>
                            <span className="text-slate-500 leading-tight">Domain-isolated RAG & automated statutory compliance copilots.</span>
                          </div>
                          <div className="rounded border border-slate-200 bg-white p-2">
                            <strong className="block text-slate-900 mb-0.5">02. Zero-Trust DevSecOps</strong>
                            <span className="text-slate-500 leading-tight">Automated SAST/DAST gates & multi-cloud golden paths.</span>
                          </div>
                          <div className="rounded border border-slate-200 bg-white p-2">
                            <strong className="block text-slate-900 mb-0.5">03. Quantum-Ready Core</strong>
                            <span className="text-slate-500 leading-tight">NIST PQC ML-KEM & ML-DSA cryptographic protection.</span>
                          </div>
                        </div>
                      </div>

                      <p>{letterData.bodyPara3}</p>
                    </div>
                  </div>

                  {/* Signatory & Corporate Seal Block */}
                  <div className="mt-4 flex justify-between items-end pt-2">
                    <div className="text-[9pt] text-slate-700">
                      <div className="text-slate-600 mb-1">Sincerely,</div>
                      <div className="text-[8.5pt] text-slate-600 mb-1">
                        For <strong className="text-slate-900">Cybelinx Platform Technologies Pvt. Ltd.</strong>
                      </div>

                      {/* Signature graphic placeholder */}
                      <div className="h-10 flex items-center my-1">
                        <svg viewBox="0 0 160 40" className="h-9 w-auto">
                          <path
                            d="M10 28C25 15 40 8 60 18C75 25 80 12 95 10C110 8 120 30 140 18C148 13 152 22 155 20"
                            stroke="#0D47FF"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
                          <path d="M35 32C55 30 95 32 145 28" stroke="#00C2FF" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                        </svg>
                      </div>

                      <div className="font-display text-[10pt] font-bold text-slate-900">{letterData.signerName}</div>
                      <div className="text-[8.5pt] font-semibold text-[#0D47FF]">{letterData.signerTitle}</div>
                      <div className="text-[8pt] text-slate-500">{letterData.signerDept}</div>
                    </div>

                    {/* Official Corporate Seal */}
                    <div className="flex flex-col items-center justify-center w-20 h-20 rounded-full border-2 border-dashed border-[#0D47FF] bg-blue-50/40 p-1 rotate-[-6deg] opacity-90 shadow-sm">
                      <div className="w-full h-full rounded-full border border-blue-300 flex flex-col items-center justify-center p-0.5 text-center">
                        <span className="text-[5pt] font-bold uppercase tracking-wider text-[#0D47FF]">Cybelinx Tech</span>
                        <img src="/cybelinx-logo-embelem.png" alt="Seal Emblem" className="w-4 h-4 object-contain my-0.5" />
                        <span className="text-[4.5pt] font-bold uppercase tracking-wider text-[#0D47FF]">Official Seal</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Section */}
                <footer className="relative z-10 bg-slate-50 border-t border-slate-200 px-10 py-3.5 text-slate-500">
                  <div className="grid grid-cols-3 gap-4 text-[7.5pt] leading-tight">
                    <div>
                      <strong className="block text-slate-900 text-[7.5pt] uppercase tracking-wider mb-0.5">Registered Office</strong>
                      No. 41 & 42, 89/5, Prakruthi Township, 1st Block, Horamavu Agara Main Rd, Bangalore 560113
                    </div>
                    <div>
                      <strong className="block text-slate-900 text-[7.5pt] uppercase tracking-wider mb-0.5">Direct Contact</strong>
                      sales@cybelinx.com &bull; www.cybelinx.com &bull; +91 (080) 4122-8900
                    </div>
                    <div>
                      <strong className="block text-slate-900 text-[7.5pt] uppercase tracking-wider mb-0.5">Compliance & Standards</strong>
                      CIN: U72900KA2024PTC189201 &bull; SOC 2 Type II &bull; ISO 27001
                    </div>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-slate-200 flex justify-between items-center text-[6.8pt] text-slate-400">
                    <div>&copy; {new Date().getFullYear()} Cybelinx Platform Technologies Pvt. Ltd. All rights reserved.</div>
                    <div className="font-semibold text-slate-600">SECURE AUTHENTICATED CORPORATE STATIONERY &bull; A4</div>
                  </div>
                </footer>

                {/* Bottom Accent Gradient Bar */}
                <div className="h-1 w-full bg-gradient-to-r from-[#7B61FF] via-[#00C2FF] to-[#0D47FF]" />
              </div>
            </div>
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════ */}
        {/* TAB 2: BUSINESS CARD STUDIO                                   */}
        {/* ═════════════════════════════════════════════════════════════ */}
        {activeTab === "business-cards" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Business Card Controls */}
            <div className="lg:col-span-4 space-y-6 no-print">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-lg text-surface flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-primary" />
                    Card Customizer
                  </h3>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-primary/10 text-primary uppercase">
                    3.5" &times; 2.0"
                  </span>
                </div>
                <p className="text-xs text-slate mb-5">
                  Standard international business card with centered watermark emblem, QR code vCard, and dual-side luxury finish.
                </p>

                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-surface mb-1">Full Name</label>
                    <input
                      type="text"
                      value={cardData.name}
                      onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-surface focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-surface mb-1">Job Title & Role</label>
                    <input
                      type="text"
                      value={cardData.title}
                      onChange={(e) => setCardData({ ...cardData, title: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-surface focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-surface mb-1">Department</label>
                    <input
                      type="text"
                      value={cardData.department}
                      onChange={(e) => setCardData({ ...cardData, department: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-surface focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-surface mb-1">Office Phone</label>
                      <input
                        type="text"
                        value={cardData.phone1}
                        onChange={(e) => setCardData({ ...cardData, phone1: e.target.value })}
                        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-surface focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-surface mb-1">Mobile</label>
                      <input
                        type="text"
                        value={cardData.phone2}
                        onChange={(e) => setCardData({ ...cardData, phone2: e.target.value })}
                        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-surface focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-surface mb-1">Corporate Email</label>
                    <input
                      type="email"
                      value={cardData.email}
                      onChange={(e) => setCardData({ ...cardData, email: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-surface focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-surface mb-1">Global Office Hubs</label>
                    <input
                      type="text"
                      value={cardData.locations}
                      onChange={(e) => setCardData({ ...cardData, locations: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-surface focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-surface mb-1">QR Code Destination Link</label>
                    <input
                      type="text"
                      value={cardData.qrUrl}
                      onChange={(e) => setCardData({ ...cardData, qrUrl: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-surface focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-border flex flex-col gap-2.5">
                  <button
                    onClick={() => setIsFlipped(!isFlipped)}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-4 py-2.5 text-xs font-bold text-primary hover:bg-primary/20 transition-all"
                  >
                    <RotateCw className="h-4 w-4" />
                    Flip 3D Card ({isFlipped ? "Showing Back" : "Showing Front"})
                  </button>
                  <a
                    href="/branding/cybelinx-business-cards.pdf"
                    download="Cybelinx-Business-Cards-Master.pdf"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-xs font-bold text-white shadow-md hover:bg-primary-deep transition-all"
                  >
                    <Download className="h-4 w-4" />
                    Download Business Cards PDF
                  </a>
                  <a
                    href="/branding/cybelinx-business-card-sheet.pdf"
                    download="Cybelinx-Business-Card-Sheet-8Up.pdf"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-xs font-bold text-surface hover:bg-surface/5 transition-all"
                  >
                    <Download className="h-4 w-4 text-primary" />
                    Download 8-Up A4 Print Imposition
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Interactive Card Showcase & Dual Presentation */}
            <div className="lg:col-span-8 flex flex-col items-center gap-10">
              {/* Interactive 3D Card with Flip */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-slate mb-3 uppercase tracking-widest">
                  <Eye className="h-3.5 w-3.5 text-primary" />
                  Interactive 3D Preview (Click Card to Flip)
                </div>

                <div
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="cursor-pointer select-none transition-transform duration-500 hover:scale-105"
                  style={{ perspective: "1000px" }}
                >
                  <div
                    className="relative transition-transform duration-700 rounded-2xl shadow-2xl"
                    style={{
                      width: "420px",
                      height: "240px",
                      transformStyle: "preserve-3d",
                      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    }}
                  >
                    {/* ── CARD FRONT (White / Blue Accent) ── */}
                    <div
                      className="absolute inset-0 rounded-2xl bg-white text-slate-900 p-5 flex flex-col justify-between overflow-hidden border border-slate-200 shadow-xl"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0D47FF] via-[#00C2FF] to-[#7B61FF]" />

                      {/* Subtle watermark in background */}
                      <div className="absolute -right-4 -bottom-6 w-36 h-36 opacity-[0.045] pointer-events-none">
                        <img src="/cybelinx-logo-embelem.png" alt="Watermark" className="w-full h-full object-contain" />
                      </div>

                      {/* Top Header */}
                      <div className="flex justify-between items-center relative z-10">
                        <img src="/cybelinx-logo.png" alt="Cybelinx Logo" className="h-6 w-auto object-contain" />
                        <span className="text-[7pt] font-bold text-[#0D47FF] bg-blue-50 border border-blue-200 rounded px-2 py-0.5 tracking-wider uppercase flex items-center gap-1">
                          <ShieldCheck className="h-3 w-3" />
                          Verified
                        </span>
                      </div>

                      {/* Middle Details */}
                      <div className="relative z-10 my-1">
                        <h4 className="font-display text-[13pt] font-extrabold text-[#061034] tracking-tight leading-none">
                          {cardData.name}
                        </h4>
                        <div className="text-[7.5pt] font-bold text-[#0D47FF] uppercase tracking-wider mt-1">
                          {cardData.title}
                        </div>
                        <div className="text-[6.5pt] text-slate-500 font-medium">{cardData.department}</div>
                      </div>

                      {/* Bottom Contacts & QR Code */}
                      <div className="flex justify-between items-end relative z-10">
                        <div className="text-[6.8pt] text-slate-600 space-y-0.5">
                          <div className="flex items-center gap-1.5">
                            <Phone className="h-2.5 w-2.5 text-[#0D47FF]" />
                            <strong className="text-slate-900">{cardData.phone1}</strong> &bull; {cardData.phone2}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Mail className="h-2.5 w-2.5 text-[#0D47FF]" />
                            <a href={`mailto:${cardData.email}`} className="text-[#0D47FF] hover:underline">
                              {cardData.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Globe className="h-2.5 w-2.5 text-[#0D47FF]" />
                            <span>{cardData.website}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-500">
                            <MapPin className="h-2.5 w-2.5 text-[#0D47FF]" />
                            <span>{cardData.locations}</span>
                          </div>
                        </div>

                        <div className="w-12 h-12 rounded-lg border border-slate-200 bg-white p-1 shadow-sm flex items-center justify-center">
                          <img src="/branding/cybelinx-qr-code.png" alt="vCard QR" className="w-full h-full object-contain" />
                        </div>
                      </div>
                    </div>

                    {/* ── CARD BACK (Luxury Deep Navy with Center Emblem) ── */}
                    <div
                      className="absolute inset-0 rounded-2xl bg-[#061034] text-white p-5 flex flex-col items-center justify-center text-center overflow-hidden border border-blue-900/40 shadow-xl"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        backgroundImage:
                          "radial-gradient(circle at center, rgba(13, 71, 255, 0.35) 0%, transparent 70%), radial-gradient(circle at 10% 20%, rgba(0, 194, 255, 0.15) 0%, transparent 40%)",
                      }}
                    >
                      {/* Grid background effect */}
                      <div
                        className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{
                          backgroundImage: "radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)",
                          backgroundSize: "14px 14px",
                        }}
                      />

                      {/* Glowing center emblem */}
                      <div className="relative w-14 h-14 mb-2 z-10 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-[#00C2FF]/30 blur-md animate-pulse" />
                        <img
                          src="/cybelinx-logo-embelem.png"
                          alt="Cybelinx Emblem"
                          className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_12px_rgba(0,194,255,0.7)]"
                        />
                      </div>

                      <div className="font-display text-[13pt] font-extrabold tracking-[0.24em] text-white relative z-10">
                        CYBELINX
                      </div>
                      <div className="text-[6.5pt] text-slate-300 font-medium tracking-wider mb-2.5 relative z-10">
                        Engineering the Future of Enterprise Intelligence
                      </div>

                      <div className="flex gap-1.5 justify-center mb-2.5 relative z-10">
                        <span className="text-[5.5pt] font-bold text-[#4FD8FF] bg-[#4FD8FF]/10 border border-[#4FD8FF]/20 rounded-full px-2 py-0.5 uppercase">
                          AI & GenAI
                        </span>
                        <span className="text-[5.5pt] font-bold text-[#4FD8FF] bg-[#4FD8FF]/10 border border-[#4FD8FF]/20 rounded-full px-2 py-0.5 uppercase">
                          SaaS & PaaS
                        </span>
                        <span className="text-[5.5pt] font-bold text-[#4FD8FF] bg-[#4FD8FF]/10 border border-[#4FD8FF]/20 rounded-full px-2 py-0.5 uppercase">
                          DevSecOps
                        </span>
                        <span className="text-[5.5pt] font-bold text-[#4FD8FF] bg-[#4FD8FF]/10 border border-[#4FD8FF]/20 rounded-full px-2 py-0.5 uppercase">
                          Quantum
                        </span>
                      </div>

                      <div className="font-display text-[7pt] font-bold text-[#00C2FF] tracking-widest relative z-10">
                        WWW.CYBELINX.COM
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side-by-Side Static Layout for Print / Comparison */}
              <div className="w-full pt-8 border-t border-border">
                <h4 className="font-display font-bold text-base text-surface mb-6 text-center">
                  Full Front & Back Side Presentation
                </h4>

                <div className="flex flex-wrap gap-8 justify-center items-center">
                  {/* Front presentation card */}
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-xs font-bold text-slate uppercase">01 &bull; Front Side (Executive White)</span>
                    <div className="w-[336px] h-[192px] rounded-xl bg-white text-slate-900 p-4 flex flex-col justify-between overflow-hidden border border-slate-200 shadow-md relative">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0D47FF] via-[#00C2FF] to-[#7B61FF]" />
                      <div className="flex justify-between items-center">
                        <img src="/cybelinx-logo.png" alt="Cybelinx" className="h-5 w-auto" />
                        <span className="text-[6pt] font-bold text-[#0D47FF] bg-blue-50 border border-blue-200 rounded px-1.5 py-0.5 uppercase">
                          Verified ID
                        </span>
                      </div>
                      <div>
                        <div className="font-display text-[10.5pt] font-extrabold text-[#061034]">{cardData.name}</div>
                        <div className="text-[6pt] font-bold text-[#0D47FF] uppercase">{cardData.title}</div>
                      </div>
                      <div className="flex justify-between items-end text-[5.5pt] text-slate-600">
                        <div>
                          <div>&#9742; {cardData.phone1} &bull; {cardData.phone2}</div>
                          <div>&#9993; {cardData.email}</div>
                          <div>&#128205; {cardData.locations}</div>
                        </div>
                        <img src="/branding/cybelinx-qr-code.png" alt="QR" className="w-9 h-9 border border-slate-200 rounded p-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Back presentation card */}
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-xs font-bold text-slate uppercase">02 &bull; Back Side (Deep Navy Emblem)</span>
                    <div className="w-[336px] h-[192px] rounded-xl bg-[#061034] text-white p-4 flex flex-col items-center justify-center text-center overflow-hidden border border-blue-900/40 shadow-md relative">
                      <img
                        src="/cybelinx-logo-embelem.png"
                        alt="Emblem"
                        className="w-10 h-10 object-contain mb-1.5 drop-shadow-[0_0_8px_rgba(0,194,255,0.6)]"
                      />
                      <div className="font-display text-[10.5pt] font-extrabold tracking-[0.2em] text-white">CYBELINX</div>
                      <div className="text-[5.5pt] text-slate-300 mb-2">Engineering the Future of Enterprise Intelligence</div>
                      <div className="font-display text-[6pt] font-bold text-[#00C2FF] tracking-widest">WWW.CYBELINX.COM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════ */}
        {/* TAB 3: BRAND TOKENS & ASSET VAULT                             */}
        {/* ═════════════════════════════════════════════════════════════ */}
        {activeTab === "guidelines" && (
          <div className="space-y-12">
            {/* 1. Official Color Palette */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-surface">Official Brand Color Matrix</h3>
                  <p className="text-xs text-slate mt-1">
                    Calibrated for ultra-rich digital displays, Pantone spot inks, and commercial print accuracy.
                  </p>
                </div>
                <span className="text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                  Click Swatch to Copy HEX
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {brandColors.map((col) => (
                  <div
                    key={col.hex}
                    onClick={() => copyToClipboard(col.hex, col.hex)}
                    className="group relative cursor-pointer rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
                  >
                    <div className={`h-24 w-full rounded-xl ${col.bgClass} mb-4 flex items-center justify-center relative overflow-hidden shadow-inner`}>
                      <span className={`text-xs font-bold tracking-wider uppercase ${col.textWhite ? "text-white" : "text-slate-900"} opacity-90`}>
                        {col.hex}
                      </span>
                      {copiedCode === col.hex && (
                        <div className="absolute inset-0 bg-primary/90 flex items-center justify-center text-white text-xs font-bold gap-1.5 animate-fade-in">
                          <Check className="h-4 w-4" />
                          Copied!
                        </div>
                      )}
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <h4 className="font-display font-bold text-base text-surface">{col.name}</h4>
                        <span className="text-[11px] font-bold text-primary font-mono">{col.hex}</span>
                      </div>
                      <p className="text-xs text-slate">{col.role}</p>

                      <div className="mt-3 pt-3 border-t border-border grid grid-cols-2 gap-2 text-[11px] text-slate/80 font-mono">
                        <div>RGB: {col.rgb.replace("rgb(", "").replace(")", "")}</div>
                        <div>{col.pantone}</div>
                        <div className="col-span-2 text-[10px] text-slate/60">{col.cmyk}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Official Logo & Emblem Asset Downloads */}
            <div className="pt-8 border-t border-border">
              <h3 className="font-display font-extrabold text-2xl text-surface mb-2">Master Brand Asset Library</h3>
              <p className="text-xs text-slate mb-6">
                High-resolution, transparent, vector-ready PNGs and print-ready templates available for instant download.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Asset 1: HD Emblem */}
                <div className="rounded-2xl border border-border bg-card p-5 flex flex-col justify-between hover:border-primary transition-all">
                  <div>
                    <div className="h-32 rounded-xl bg-surface/5 border border-border/60 p-4 flex items-center justify-center mb-4">
                      <img src="/cybelinx-logo-embelem.png" alt="Emblem" className="max-h-20 max-w-full object-contain" />
                    </div>
                    <h4 className="font-display font-bold text-base text-surface">Cybelinx Brand Emblem (HD)</h4>
                    <p className="text-xs text-slate mt-1">
                      1024&times;1024 High-Definition transparent PNG icon with planetary sphere, neural ring, and multi-tone cyan/blue core.
                    </p>
                  </div>
                  <a
                    href="/branding/cybelinx-emblem-hd.png"
                    download="Cybelinx-Emblem-HD.png"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-primary/10 border border-primary/30 px-4 py-2.5 text-xs font-bold text-primary hover:bg-primary hover:text-white transition-all"
                  >
                    <Download className="h-4 w-4" />
                    Download Emblem PNG (1024px)
                  </a>
                </div>

                {/* Asset 2: Watermark Asset */}
                <div className="rounded-2xl border border-border bg-card p-5 flex flex-col justify-between hover:border-primary transition-all">
                  <div>
                    <div className="h-32 rounded-xl bg-white border border-slate-200 p-4 flex items-center justify-center mb-4">
                      <img src="/branding/cybelinx-watermark.png" alt="Watermark" className="max-h-20 max-w-full object-contain opacity-80" />
                    </div>
                    <h4 className="font-display font-bold text-base text-surface">Official Watermark Emblem</h4>
                    <p className="text-xs text-slate mt-1">
                      Calibrated 7% opacity transparent PNG engineered for center watermarks across A4 letters, contracts, and certificates.
                    </p>
                  </div>
                  <a
                    href="/branding/cybelinx-watermark.png"
                    download="Cybelinx-Center-Watermark.png"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-primary/10 border border-primary/30 px-4 py-2.5 text-xs font-bold text-primary hover:bg-primary hover:text-white transition-all"
                  >
                    <Download className="h-4 w-4" />
                    Download Watermark PNG
                  </a>
                </div>

                {/* Asset 3: Full Logo Lockup */}
                <div className="rounded-2xl border border-border bg-card p-5 flex flex-col justify-between hover:border-primary transition-all">
                  <div>
                    <div className="h-32 rounded-xl bg-white border border-slate-200 p-4 flex items-center justify-center mb-4">
                      <img src="/cybelinx-logo.png" alt="Full Logo" className="max-h-12 max-w-full object-contain" />
                    </div>
                    <h4 className="font-display font-bold text-base text-surface">Full Brand Logo Lockup (Light)</h4>
                    <p className="text-xs text-slate mt-1">
                      Complete primary logo lockup with official bar, emblem, wordmark, and tagline for white and light corporate surfaces.
                    </p>
                  </div>
                  <a
                    href="/cybelinx-logo.png"
                    download="Cybelinx-Logo-Lockup-Light.png"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-primary/10 border border-primary/30 px-4 py-2.5 text-xs font-bold text-primary hover:bg-primary hover:text-white transition-all"
                  >
                    <Download className="h-4 w-4" />
                    Download Full Logo (Light)
                  </a>
                </div>

                {/* Asset 4: Dark Mode Logo Lockup */}
                <div className="rounded-2xl border border-border bg-card p-5 flex flex-col justify-between hover:border-primary transition-all">
                  <div>
                    <div className="h-32 rounded-xl bg-[#061034] border border-blue-900/60 p-4 flex items-center justify-center mb-4">
                      <img src="/cybelinx-logo-dark.png" alt="Dark Logo" className="max-h-12 max-w-full object-contain" />
                    </div>
                    <h4 className="font-display font-bold text-base text-surface">Dark Mode Logo Lockup</h4>
                    <p className="text-xs text-slate mt-1">
                      High-contrast illuminated logo lockup engineered for midnight backgrounds, presentation decks, and executive banners.
                    </p>
                  </div>
                  <a
                    href="/cybelinx-logo-dark.png"
                    download="Cybelinx-Logo-Dark.png"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-primary/10 border border-primary/30 px-4 py-2.5 text-xs font-bold text-primary hover:bg-primary hover:text-white transition-all"
                  >
                    <Download className="h-4 w-4" />
                    Download Dark Logo PNG
                  </a>
                </div>

                {/* Asset 5: A4 Letterhead Master PDF */}
                <div className="rounded-2xl border border-border bg-card p-5 flex flex-col justify-between hover:border-primary transition-all">
                  <div>
                    <div className="h-32 rounded-xl bg-surface/5 border border-border/60 p-4 flex items-center justify-center mb-4">
                      <FileText className="h-14 w-14 text-primary" />
                    </div>
                    <h4 className="font-display font-bold text-base text-surface">A4 Letterhead Template (PDF)</h4>
                    <p className="text-xs text-slate mt-1">
                      Print-ready ISO A4 Master Document with centered emblem watermark, official corporate seal, metadata bar, and footer.
                    </p>
                  </div>
                  <a
                    href="/branding/cybelinx-letterhead-template.pdf"
                    download="Cybelinx-Letterhead-A4.pdf"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-white shadow-md hover:bg-primary-deep transition-all"
                  >
                    <Download className="h-4 w-4" />
                    Download A4 Letterhead PDF
                  </a>
                </div>

                {/* Asset 6: Business Cards Master PDF */}
                <div className="rounded-2xl border border-border bg-card p-5 flex flex-col justify-between hover:border-primary transition-all">
                  <div>
                    <div className="h-32 rounded-xl bg-surface/5 border border-border/60 p-4 flex items-center justify-center mb-4">
                      <CreditCard className="h-14 w-14 text-primary" />
                    </div>
                    <h4 className="font-display font-bold text-base text-surface">Business Cards Pack (PDF)</h4>
                    <p className="text-xs text-slate mt-1">
                      Complete print package including Front Side, Back Side with glowing centered emblem, and 8-Up imposition A4 sheet.
                    </p>
                  </div>
                  <a
                    href="/branding/cybelinx-business-cards.pdf"
                    download="Cybelinx-Business-Cards-Master.pdf"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-white shadow-md hover:bg-primary-deep transition-all"
                  >
                    <Download className="h-4 w-4" />
                    Download Business Cards PDF
                  </a>
                </div>
              </div>
            </div>

            {/* 3. Typography & Usage Guidelines */}
            <div className="pt-8 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h4 className="font-display font-bold text-lg text-surface mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Typography Hierarchy
                </h4>
                <div className="space-y-4 text-xs text-slate">
                  <div className="p-3 rounded-xl bg-background border border-border">
                    <div className="font-display text-lg font-bold text-surface">Space Grotesk</div>
                    <p className="text-[11px] text-slate mt-0.5">
                      Display Headings, Logos, Stat Metrics, and Key Feature Titles (Weights: 600, 700, 800).
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-background border border-border">
                    <div className="font-sans text-base font-semibold text-surface">Plus Jakarta Sans / Inter</div>
                    <p className="text-[11px] text-slate mt-0.5">
                      Body Paragraphs, Micro-copy, Form Labels, and Table Cells (Weights: 400, 500, 600).
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h4 className="font-display font-bold text-lg text-surface mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  Watermark Placement Rules
                </h4>
                <ul className="space-y-2.5 text-xs text-slate list-disc list-inside">
                  <li>
                    <strong className="text-surface">Exact Optical Center:</strong> The emblem must be positioned at 50% horizontal and 50% vertical center of the printable area.
                  </li>
                  <li>
                    <strong className="text-surface">Calibrated Opacity:</strong> Use 5% to 7% opacity on white paper stock so typed text remains 100% legible without eye strain.
                  </li>
                  <li>
                    <strong className="text-surface">Minimum Margin Safety:</strong> Maintain a minimum 25mm margin on all 4 sides for binding and printing trim.
                  </li>
                  <li>
                    <strong className="text-surface">Dark Presentation Backdrops:</strong> When used on deep navy (#061034), opacity can increase to 12% - 15% with a subtle cyan glow.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
