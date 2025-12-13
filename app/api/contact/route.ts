import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/lib/config";

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

    // Here you would integrate with EmailJS or another email service
    // For now, we'll just log the message and return success
    console.log("Contact form submission:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // If using EmailJS, uncomment and configure:
    /*
    const emailjs = require('emailjs-com');
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
    */

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
