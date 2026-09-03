import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(320),
  company: z.string().trim().min(2).max(160),
  interest: z.string().trim().min(1).max(160),
  message: z.string().trim().min(10).max(5000),
  website: z.string().max(0).optional(),
  attribution: z.object({
    source: z.string().max(120).optional(),
    medium: z.string().max(120).optional(),
    campaign: z.string().max(160).optional(),
    content: z.string().max(160).optional(),
    landingPage: z.string().max(500).optional(),
  }).optional(),
});

const requestLog = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

function isRateLimited(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientKey = forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  const now = Date.now();
  const recentRequests = (requestLog.get(clientKey) || []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  recentRequests.push(now);
  requestLog.set(clientKey, recentRequests);
  return recentRequests.length > RATE_LIMIT_MAX_REQUESTS;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character] || character);
}

function getLeadRoute(interest: string) {
  const normalizedInterest = interest.toLowerCase();
  const routes = [
    { match: ["health", "pharma", "hospital"], env: "RESEND_TO_HEALTHCARE" },
    { match: ["bank", "fintech"], env: "RESEND_TO_FINANCE" },
    { match: ["hrms", "human resource"], env: "RESEND_TO_HR" },
    { match: ["commerce", "retail"], env: "RESEND_TO_COMMERCE" },
    { match: ["erp", "real estate"], env: "RESEND_TO_OPERATIONS" },
    { match: ["ai"], env: "RESEND_TO_AI" },
  ];

  return routes.find((route) => route.match.some((term) => normalizedInterest.includes(term)))?.env;
}

export async function POST(request: Request) {
  try {
    if (isRateLimited(request)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Lead delivery is not configured yet." },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const parsedLead = leadSchema.safeParse(await request.json());
    if (!parsedLead.success) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const { name, email, company, interest, message, attribution = {} } = parsedLead.data;
    if (parsedLead.data.website) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const routeEnv = getLeadRoute(interest);
    const recipient = (routeEnv && process.env[routeEnv]) || process.env.RESEND_TO || "sales@cybelinx.com";
    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      company: escapeHtml(company),
      interest: escapeHtml(interest),
      message: escapeHtml(message).replace(/\n/g, "<br />"),
      source: escapeHtml(String(attribution.source || "direct")),
      medium: escapeHtml(String(attribution.medium || "")),
      campaign: escapeHtml(String(attribution.campaign || "")),
      content: escapeHtml(String(attribution.content || "")),
      landingPage: escapeHtml(String(attribution.landingPage || "")),
    };

    const subject = `New Cybelinx lead: ${interest}`;
    const html = `
      <h2>New Cybelinx lead</h2>
      <p><strong>Name:</strong> ${safe.name}</p>
      <p><strong>Email:</strong> ${safe.email}</p>
      <p><strong>Company:</strong> ${safe.company}</p>
      <p><strong>Interest:</strong> ${safe.interest}</p>
      <p><strong>Attribution:</strong> ${safe.source} / ${safe.medium || "direct"} / ${safe.campaign || "no campaign"}</p>
      <p><strong>Landing/referrer:</strong> ${safe.landingPage || "direct"}</p>
      <p><strong>Message:</strong></p>
      <p>${safe.message}</p>
    `;

    const response = await resend.emails.send({
      from: process.env.RESEND_FROM || "Cybelinx <onboarding@cybelinx.com>",
      to: [recipient],
      replyTo: email,
      subject,
      html,
    });

    if (response.error) {
      throw new Error(response.error.message || "Unable to send email.");
    }

    return NextResponse.json({ success: true, id: response.data?.id ?? null });
  } catch (error) {
    console.error("Resend email error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
