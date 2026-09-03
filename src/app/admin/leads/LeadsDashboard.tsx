"use client";

import { FormEvent, useEffect, useState } from "react";

const statuses = ["new", "contacted", "qualified", "converted", "lost"] as const;
type Lead = {
  id: number;
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
  source: string;
  campaign: string | null;
  status: (typeof statuses)[number];
  notes: string | null;
  follow_up_at: string | null;
  created_at: string;
};

export default function LeadsDashboard() {
  const [token, setToken] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [interest, setInterest] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function loadLeads() {
    setLoading(true);
    setError("");
    const params = new URLSearchParams({ search, status, interest });
    const response = await fetch(`/api/leads?${params}`);
    if (response.status === 401) {
      setAuthenticated(false);
      setError("Your admin session has expired.");
    } else if (!response.ok) {
      setError("Unable to load leads. Confirm the database table exists.");
    } else {
      setLeads((await response.json()).leads);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (authenticated) void loadLeads();
  }, [authenticated, search, status, interest]);

  async function login(event: FormEvent) {
    event.preventDefault();
    setError("");
    const response = await fetch("/api/leads/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });
    if (!response.ok) {
      setError("Invalid admin token.");
      return;
    }
    setAuthenticated(true);
    setToken("");
  }

  async function updateLead(id: number, patch: Record<string, string | null>) {
    const response = await fetch("/api/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...patch }),
    });
    if (!response.ok) {
      setError("Unable to update this lead.");
      return;
    }
    await loadLeads();
  }

  if (!authenticated) {
    return (
      <main className="min-h-screen bg-charcoal px-6 py-20 text-surface">
        <div className="mx-auto max-w-md rounded-2xl border border-border bg-background p-8 shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Cybelinx CRM</p>
          <h1 className="mt-3 font-display text-3xl font-bold">Lead workspace</h1>
          <p className="mt-2 text-sm text-slate">Enter the admin token configured as LEADS_ADMIN_TOKEN in Vercel.</p>
          <form onSubmit={login} className="mt-6 grid gap-4">
            <input
              type="password"
              value={token}
              onChange={(event) => setToken(event.target.value)}
              placeholder="Admin token"
              required
              className="rounded-md border border-border bg-charcoal px-4 py-3 text-sm text-surface outline-none focus:border-primary"
            />
            <button className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white">Open leads</button>
          </form>
          {error && <p className="mt-4 text-sm text-rose-500">{error}</p>}
        </div>
      </main>
    );
  }

  const interests = Array.from(new Set(leads.map((lead) => lead.interest)));

  return (
    <main className="min-h-screen bg-charcoal px-4 py-8 text-surface sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Cybelinx CRM</p>
            <h1 className="mt-2 font-display text-3xl font-bold">Lead workspace</h1>
            <p className="mt-1 text-sm text-slate">{leads.length} leads in the current view</p>
          </div>
          <button onClick={() => { fetch("/api/leads/auth", { method: "DELETE" }); setAuthenticated(false); }} className="rounded-lg border border-border px-4 py-2 text-sm text-slate hover:text-surface">Sign out</button>
        </div>

        <div className="mt-8 grid gap-3 rounded-2xl border border-border bg-background p-4 md:grid-cols-[1.5fr,1fr,1fr]">
          <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search name, email, or company" className="rounded-md border border-border bg-charcoal px-3 py-2 text-sm outline-none focus:border-primary" />
          <select value={status} onChange={(event) => setStatus(event.target.value)} className="rounded-md border border-border bg-charcoal px-3 py-2 text-sm outline-none focus:border-primary">
            <option value="">All statuses</option>
            {statuses.map((value) => <option key={value} value={value}>{value}</option>)}
          </select>
          <select value={interest} onChange={(event) => setInterest(event.target.value)} className="rounded-md border border-border bg-charcoal px-3 py-2 text-sm outline-none focus:border-primary">
            <option value="">All products</option>
            {interests.map((value) => <option key={value} value={value}>{value}</option>)}
          </select>
        </div>

        {error && <p className="mt-4 rounded-lg border border-rose-300 bg-rose-50 px-4 py-3 text-sm text-rose-800">{error}</p>}
        <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-background">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="border-b border-border text-xs uppercase tracking-wide text-slate">
              <tr><th className="px-4 py-4">Lead</th><th className="px-4 py-4">Interest</th><th className="px-4 py-4">Source</th><th className="px-4 py-4">Status</th><th className="px-4 py-4">Follow-up</th><th className="px-4 py-4">Notes</th></tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-b border-border/70 align-top last:border-0">
                  <td className="px-4 py-4"><div className="font-semibold">{lead.name}</div><div className="text-slate">{lead.company}</div><a href={`mailto:${lead.email}`} className="text-primary hover:underline">{lead.email}</a><p className="mt-2 max-w-xs text-xs text-slate">{lead.message}</p></td>
                  <td className="px-4 py-4">{lead.interest}</td>
                  <td className="px-4 py-4 text-xs text-slate">{lead.source}{lead.campaign && <><br />{lead.campaign}</>}</td>
                  <td className="px-4 py-4"><select value={lead.status} onChange={(event) => void updateLead(lead.id, { status: event.target.value })} className="rounded-md border border-border bg-charcoal px-2 py-2 text-xs"><option value="new">new</option><option value="contacted">contacted</option><option value="qualified">qualified</option><option value="converted">converted</option><option value="lost">lost</option></select></td>
                  <td className="px-4 py-4"><input type="date" value={lead.follow_up_at ? lead.follow_up_at.slice(0, 10) : ""} onChange={(event) => void updateLead(lead.id, { followUpAt: event.target.value ? new Date(`${event.target.value}T09:00:00Z`).toISOString() : null })} className="rounded-md border border-border bg-charcoal px-2 py-2 text-xs" /></td>
                  <td className="px-4 py-4"><textarea defaultValue={lead.notes || ""} onBlur={(event) => void updateLead(lead.id, { notes: event.target.value })} rows={3} placeholder="Add notes" className="w-48 rounded-md border border-border bg-charcoal px-2 py-2 text-xs outline-none focus:border-primary" /></td>
                </tr>
              ))}
            </tbody>
          </table>
          {!loading && leads.length === 0 && <p className="p-10 text-center text-sm text-slate">No leads found.</p>}
          {loading && <p className="p-10 text-center text-sm text-slate">Loading leads...</p>}
        </div>
      </div>
    </main>
  );
}
