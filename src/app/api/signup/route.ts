import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const destination = "penciliva@gmail.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value.replace(/[&<>"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
  })[character] ?? character);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const website = typeof body.website === "string" ? body.website.trim() : "";

    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || name.length > 100) {
      return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
    }

    if (!emailPattern.test(email) || email.length > 254) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json({ error: "Signup notifications are temporarily unavailable." }, { status: 503 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "IGSTA Signups <onboarding@resend.dev>",
      to: destination,
      subject: `New IGSTA signup: ${name}`,
      replyTo: email,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#041243">
          <h2>New IGSTA cohort signup</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p>This signup came from the IGSTA Academy website.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend notification failed", error);
      return NextResponse.json({ error: "We could not complete your signup. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Signup request failed", error);
    return NextResponse.json({ error: "We could not complete your signup. Please try again." }, { status: 500 });
  }
}
