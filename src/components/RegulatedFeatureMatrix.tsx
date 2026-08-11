"use client";

import Link from "next/link";
import { Shield, Landmark, ArrowRight, Check } from "lucide-react";

export default function RegulatedFeatureMatrix() {
  return (
    <section className="bg-brand-navy-50 dark:bg-brand-navy-900/60 py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-brand-cyan-700 dark:text-brand-cyan-400 uppercase tracking-widest">
            Market Offerings
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-brand-navy-900 dark:text-white tracking-tight">
            Regulated Technology Solutions
          </p>
          <p className="text-base text-brand-navy-500 dark:text-slate-300 leading-relaxed">
            Engineered specifically for institutional ecosystems demanding tight data isolation, verified audit control logs, and strict compliance layers.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Healthcare Card */}
          <div className="bg-white dark:bg-brand-navy-800 rounded-xl shadow-md hover:shadow-2xl border-t-4 border-industry-healthcare p-8 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-5">
              <div className="inline-flex p-3 rounded-lg bg-teal-50 dark:bg-teal-950/40 text-industry-healthcare">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy-900 dark:text-white">
                CybeHealth & Pharma
              </h3>
              <p className="text-sm text-brand-navy-500 dark:text-slate-300 leading-relaxed">
                A comprehensive, interoperability-first platform balancing clinical excellence with automated operational workflows. Integrates structured EHR databases effortlessly.
              </p>
              <ul className="space-y-3 pt-2 text-sm text-brand-navy-800 dark:text-slate-200 font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="text-industry-healthcare font-bold">✔</span> 
                  Automated FHIR medical record structure pipelines
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-industry-healthcare font-bold">✔</span> 
                  Real-time automated voice-to-text AI clinical scribes
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-industry-healthcare font-bold">✔</span> 
                  Complete Ayushman Bharat Digital Mission (ABDM) Level 2 alignment
                </li>
              </ul>
            </div>
            
            <div className="pt-6 border-t border-brand-navy-100 dark:border-brand-navy-700/60 mt-8 flex items-center justify-between">
              <span className="text-xs font-semibold px-3 py-1 rounded bg-teal-50 dark:bg-teal-950/40 text-industry-healthcare uppercase tracking-wider">
                HIPAA Certified
              </span>
              <Link 
                href="#architecture-review" 
                className="text-sm font-bold text-industry-healthcare hover:underline inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
              >
                Request Operational Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* FinTech Card */}
          <div className="bg-white dark:bg-brand-navy-800 rounded-xl shadow-md hover:shadow-2xl border-t-4 border-industry-finance p-8 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-5">
              <div className="inline-flex p-3 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-industry-finance">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy-900 dark:text-white">
                CybeFinTech & Banking
              </h3>
              <p className="text-sm text-brand-navy-500 dark:text-slate-300 leading-relaxed">
                AI-native financial processing built on secure multi-cloud architectures. Offers portfolio intelligence and sub-50ms execution runtime for critical decision pipelines.
              </p>
              <ul className="space-y-3 pt-2 text-sm text-brand-navy-800 dark:text-slate-200 font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="text-industry-finance font-bold">✔</span> 
                  Active-active multi-region continuous transactional database backup
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-industry-finance font-bold">✔</span> 
                  Unified investment metrics and clear portfolio risk analysis dashboards
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-industry-finance font-bold">✔</span> 
                  Regulatory-ready architecture scaling safely past 50M API requests
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-brand-navy-100 dark:border-brand-navy-700/60 mt-8 flex items-center justify-between">
              <span className="text-xs font-semibold px-3 py-1 rounded bg-blue-50 dark:bg-blue-950/40 text-industry-finance uppercase tracking-wider">
                99.999% SLA Uptime
              </span>
              <Link 
                href="#architecture-review" 
                className="text-sm font-bold text-industry-finance hover:underline inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
              >
                Request Financial Specs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
