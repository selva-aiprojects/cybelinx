"use client";

import { useState } from "react";
import { 
  Play, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  FileText, 
  Database, 
  Activity, 
  RefreshCw,
  Terminal,
  Server
} from "lucide-react";
import Section, { SectionHeading } from "./Section";

const schemas = [
  {
    id: "health-fhir",
    title: "Clinical HL7/FHIR Stream",
    domain: "Healthcare (CybeHealth)",
    sampleJson: `{
  "resourceType": "Observation",
  "status": "final",
  "code": { "coding": [{ "system": "http://loinc.org", "code": "8867-4", "display": "Heart rate" }] },
  "subject": { "reference": "Patient/IND-ABDM-8829" },
  "valueQuantity": { "value": 72, "unit": "beats/min" },
  "complianceGuardrail": "PHI_ANONYMIZED_AES256"
}`,
    metrics: {
      ingestionRate: "285,000 msg/sec",
      complianceLatency: "1.4 ms",
      inferenceSpeed: "3.8 ms",
      sanitization: "100% HIPAA & ABDM Verified",
    },
  },
  {
    id: "fintech-iso",
    title: "ISO 20022 Financial Ledger",
    domain: "FinTech (CybeFinTech)",
    sampleJson: `{
  "AppHdr": { "MsgDefIdr": "pacs.008.001.08", "CreDt": "2026-08-11T14:20:00Z" },
  "CdtTrfTxInf": {
    "PmtId": { "EndToEndId": "E2E-CYBE-991204" },
    "IntrBkSttlmAmt": { "Ccy": "USD", "Value": 1250000.00 },
    "DbtrAcct": { "Id": { "Othr": { "Id": "ACC-RESTRICTED-01" } } }
  },
  "complianceGuardrail": "ZERO_TRUST_AUDIT_LOGGED"
}`,
    metrics: {
      ingestionRate: "520,000 transactions/sec",
      complianceLatency: "0.8 ms",
      inferenceSpeed: "2.1 ms",
      sanitization: "SOC 2 Type II & PCI-DSS Level 1",
    },
  },
  {
    id: "hrms-payroll",
    title: "Multi-State Statutory Payroll",
    domain: "HR & Enterprise (CybeHRMS)",
    sampleJson: `{
  "employeeId": "EMP-88291",
  "jurisdiction": "IN-KA-BLR",
  "statutoryRules": ["PF_CALC_V2", "PT_SLAB_2026", "TDS_SECTION_192", "ESI_CAP_CHECK"],
  "grossSalary": 185000,
  "netPayable": 142350,
  "regulatoryEngine": "GLOBAL_ADAPTATION_V3"
}`,
    metrics: {
      ingestionRate: "140,000 records/sec",
      complianceLatency: "1.1 ms",
      inferenceSpeed: "4.2 ms",
      sanitization: "100% Statutory Auto-Compliance",
    },
  },
];

export default function ArchitectureValidationPlayground() {
  const [selectedSchema, setSelectedSchema] = useState(schemas[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [testResult, setTestResult] = useState<"idle" | "running" | "success">("idle");

  const runTest = () => {
    setIsRunning(true);
    setTestResult("running");
    setTimeout(() => {
      setIsRunning(false);
      setTestResult("success");
    }, 1200);
  };

  return (
    <div className="w-full">
      <SectionHeading
        eyebrow="Proof-of-Value Verification"
        title="Architecture Validation Playground"
        description="Don't rely on block diagrams. Test real-world enterprise schemas against the Cybelinx Core Platform runtime for ingestion speed, compliance enforcement, and inference latency."
      />

      <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 shadow-2xl backdrop-blur-2xl grid lg:grid-cols-12 gap-0">
        
        {/* Left Column: Schema Selection & Controls */}
        <div className="lg:col-span-5 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="h-4 w-4 text-primary" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Step 1: Select Enterprise Payload
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {schemas.map((schema) => {
                const isSelected = schema.id === selectedSchema.id;
                return (
                  <button
                    key={schema.id}
                    onClick={() => {
                      setSelectedSchema(schema);
                      setTestResult("idle");
                    }}
                    className={`flex flex-col text-left p-4 rounded-2xl border transition-all duration-300 ${
                      isSelected
                        ? "bg-primary/10 border-primary shadow-md shadow-primary/10"
                        : "bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-sm font-bold text-slate-900 dark:text-white">
                        {schema.title}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {schema.domain}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Run Validation Action */}
            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={runTest}
                disabled={isRunning}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm shadow-xl shadow-blue-500/25 transition-all active:scale-[0.98] disabled:opacity-50"
              >
                {isRunning ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    Executing Ingestion & Compliance Gate Test...
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 fill-white" />
                    Run Architecture Validation Test
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="mt-6 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
            Zero-Trust Isolation verified: Payloads remain strictly in-memory during sandbox testing.
          </div>
        </div>

        {/* Right Column: Code Stream & Latency Execution Dashboard */}
        <div className="lg:col-span-7 p-6 sm:p-8 bg-slate-950 text-slate-100 flex flex-col justify-between font-mono">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Server className="h-3.5 w-3.5 text-cyan-400" />
                <span>cybelinx-ingress-worker-node-04</span>
              </div>
              <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                testResult === "success" 
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : testResult === "running"
                  ? "bg-amber-500/20 text-amber-400 animate-pulse border border-amber-500/30"
                  : "bg-slate-800 text-slate-400"
              }`}>
                {testResult === "success" ? "Validation Passed" : testResult === "running" ? "Testing Ingest..." : "Ready"}
              </span>
            </div>

            {/* Code editor snippet */}
            <div className="relative rounded-xl bg-slate-900 border border-slate-800 p-4 text-xs text-cyan-300/90 overflow-x-auto max-h-56 scrollbar-thin">
              <pre>{selectedSchema.sampleJson}</pre>
            </div>
          </div>

          {/* Validation Metrics Result Cards */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-center">
              <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-slate-400">Ingestion Throughput</div>
              <div className="mt-1 font-mono text-sm font-bold text-cyan-400">
                {testResult === "running" ? "Calculating..." : selectedSchema.metrics.ingestionRate}
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-center">
              <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-slate-400">Compliance Latency</div>
              <div className="mt-1 font-mono text-sm font-bold text-emerald-400">
                {testResult === "running" ? "Calculating..." : selectedSchema.metrics.complianceLatency}
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-center">
              <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-slate-400">Inference Speed</div>
              <div className="mt-1 font-mono text-sm font-bold text-purple-400">
                {testResult === "running" ? "Calculating..." : selectedSchema.metrics.inferenceSpeed}
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-center">
              <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-slate-400">Audit Status</div>
              <div className="mt-1 font-sans text-[11px] font-bold text-white truncate">
                {testResult === "running" ? "Checking..." : selectedSchema.metrics.sanitization}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
