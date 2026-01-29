import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { transporter } from "@/lib/mailer";

export async function POST(req) {
  try {
    const body = await req.json();
    await connectDB();

    const newMessage = await Contact.create(body);

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: body.subject || "New Contact Message",
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${body.fullName}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Mobile:</b> ${body.mobile}</p>
        <p><b>Message:</b><br/>${body.message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
