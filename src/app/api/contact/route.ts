import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, interest, message } = body;

    if (!name || !email || !company || !interest || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const subject = `New lead inquiry: ${interest}`;
    const html = `
      <h2>New Cybelinx lead</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Interest:</strong> ${interest}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `;

    const response = await resend.emails.send({
      from: process.env.RESEND_FROM || "Cybelinx <onboarding@cybelinx.com>",
      to: [process.env.RESEND_TO || "sales@cybelinx.com"],
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
