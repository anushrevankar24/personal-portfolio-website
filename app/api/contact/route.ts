import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/lib/config";
import emailjs from "@emailjs/browser";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if EmailJS is configured
    if (!siteConfig.emailjs.serviceId || !siteConfig.emailjs.templateId || !siteConfig.emailjs.publicKey) {
      console.error("EmailJS not configured properly");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Send email using EmailJS
    try {
      await emailjs.send(
        siteConfig.emailjs.serviceId,
        siteConfig.emailjs.templateId,
        {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
          to_email: siteConfig.email,
        },
        siteConfig.emailjs.publicKey
      );

      console.log("Email sent successfully:", {
        name,
        email,
        subject,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json(
        { message: "Message sent successfully" },
        { status: 200 }
      );
    } catch (emailError) {
      console.error("EmailJS error:", emailError);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
