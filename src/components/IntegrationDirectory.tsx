"use client";

import { useState } from "react";
import {
  Building2,
  Users,
  CreditCard,
  FileCheck2,
  ShoppingBag,
  MessageSquare,
  ArrowRight,
  Layers,
  Sparkles,
} from "lucide-react";

const categories = [
  { id: "all", label: "All Integrations", count: 50 },
  { id: "erp", label: "Enterprise ERP", icon: Building2, count: 12 },
  { id: "hris", label: "HRIS & HCM", icon: Users, count: 10 },
  { id: "banking", label: "Banking & Payments", icon: CreditCard, count: 14 },
  { id: "govt", label: "Statutory & Govt", icon: FileCheck2, count: 8 },
  { id: "messaging", label: "Messaging & Collab", icon: MessageSquare, count: 6 },
];

const integrations = [
  // ERP
  { name: "SAP S/4HANA", category: "erp", type: "Bidirectional Sync", protocol: "OData / RFC", status: "Certified Connector" },
  { name: "Oracle Cloud ERP", category: "erp", type: "Financials & SCM", protocol: "REST / Webhooks", status: "Certified Connector" },
  { name: "Microsoft Dynamics 365", category: "erp", type: "Procurement & GL", protocol: "Dataverse API", status: "Certified Connector" },
  { name: "Tally Prime", category: "erp", type: "Ledger & GST Sync", protocol: "XML / ODBC", status: "Certified Connector" },
  { name: "Zoho Books", category: "erp", type: "Invoicing & Banking", protocol: "REST API", status: "Certified Connector" },
  { name: "NetSuite", category: "erp", type: "Multi-Subsidiary", protocol: "SuiteTalk REST", status: "Certified Connector" },

  // HRIS
  { name: "Workday", category: "hris", type: "Worker Sync & Payroll", protocol: "RaaS / WQL", status: "Certified Connector" },
  { name: "SAP SuccessFactors", category: "hris", type: "Employee Central", protocol: "OData v4", status: "Certified Connector" },
  { name: "Darwinbox", category: "hris", type: "Attendance & Leaves", protocol: "REST Webhooks", status: "Certified Connector" },
  { name: "BambooHR", category: "hris", type: "Talent Records", protocol: "REST API", status: "Certified Connector" },
  { name: "ADP Global Payroll", category: "hris", type: "Disbursement Bridge", protocol: "SFTP / API", status: "Certified Connector" },

  // Banking
  { name: "NPCI / UPI Gateway", category: "banking", type: "Real-time P2M / P2P", protocol: "ISO 20022 / REST", status: "Production Ready" },
  { name: "RazorpayX", category: "banking", type: "Automated Payouts", protocol: "REST / Webhooks", status: "Certified Connector" },
  { name: "Stripe Connect", category: "banking", type: "Global Card Processing", protocol: "REST API", status: "Certified Connector" },
  { name: "Cashfree Payments", category: "banking", type: "Instant Verification", protocol: "REST API", status: "Certified Connector" },
  { name: "ICICI Corporate E-CMS", category: "banking", type: "Direct Bank Ledger", protocol: "Host-to-Host", status: "Enterprise Direct" },
  { name: "HDFC SmartHub", category: "banking", type: "Merchant Settlement", protocol: "API Gateway", status: "Enterprise Direct" },

  // Govt & Statutory
  { name: "ABDM Health Gateway", category: "govt", type: "FHIR Bridge M1-M3", protocol: "REST / Encryption", status: "Govt Certified" },
  { name: "Aadhaar UIDAI (e-KYC)", category: "govt", type: "Biometric & OTP", protocol: "UIDAI Auth v2.5", status: "Govt Certified" },
  { name: "DigiLocker API", category: "govt", type: "Document Fetch & Push", protocol: "Govt API v2", status: "Govt Certified" },
  { name: "GSTN E-Invoicing", category: "govt", type: "IRN Generation", protocol: "NIC GSP Gateway", status: "Govt Certified" },
  { name: "EPFO & TRACES", category: "govt", type: "Statutory Filing Sync", protocol: "Automated RPA/API", status: "Production Ready" },

  // Messaging & Collab
  { name: "WhatsApp Business API", category: "messaging", type: "AI Conversational Bot", protocol: "Cloud API", status: "Meta Official" },
  { name: "Microsoft Teams", category: "messaging", type: "Approvals & Copilot", protocol: "Graph API", status: "Certified Connector" },
  { name: "Slack Enterprise", category: "messaging", type: "Incident Alerts & Bot", protocol: "Bolt / Events", status: "Certified Connector" },
  { name: "Twilio Voice & SMS", category: "messaging", type: "Global Telephony", protocol: "REST API", status: "Certified Connector" },
];

export default function IntegrationDirectory() {
  const [selectedCat, setSelectedCat] = useState("all");

  const filtered =
    selectedCat === "all"
      ? integrations
      : integrations.filter((item) => item.category === selectedCat);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="slugline">Enterprise Ecosystem</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-surface">
            50+ Pre-Built Enterprise Connectors
          </h2>
          <p className="mt-2 max-w-xl text-xs leading-relaxed text-slate">
            Seamlessly plug Cybelinx platforms into your existing ERP, core banking, HRIS, and statutory government infrastructure with zero-code data pipelines.
          </p>
        </div>

        <a
          href="/contact"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline self-start md:self-auto"
        >
          Request a Custom Connector
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCat(cat.id)}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
              selectedCat === cat.id
                ? "bg-primary text-white shadow-sm"
                : "border border-border bg-background text-slate hover:text-surface"
            }`}
          >
            {cat.label}
            <span
              className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                selectedCat === cat.id ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
              }`}
            >
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Connectors Grid */}
      <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between rounded-2xl border border-border bg-background p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
          >
            <div className="space-y-0.5">
              <div className="font-display text-sm font-bold text-surface">{item.name}</div>
              <div className="text-[11px] text-slate/70">{item.type}</div>
              <div className="text-[10px] font-mono text-primary/80">{item.protocol}</div>
            </div>

            <span className="rounded-md bg-live/10 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-live shrink-0 ml-2">
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
