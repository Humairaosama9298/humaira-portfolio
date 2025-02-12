import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
  

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required!" },
        { status: 400 }
      );
    }

    const response = await resend.emails.send({
      from: "onboarding@resend.dev",  
      to: "faryalfilza@gmail.com",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true, response });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to send email." },
      { status: 500 }
    );
  }
}
