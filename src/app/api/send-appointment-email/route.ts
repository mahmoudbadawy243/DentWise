import AppointmentConfirmationEmail from "@/components/emails/AppointmentConfirmationEmail";
import resend from "@/lib/resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

  try {
    const body = await request.json();

    // body for email that frontend will use
    const { userEmail, doctorName, appointmentDate, appointmentTime, appointmentType, duration, price } = body;

    // validate required fields
    if (!userEmail || !doctorName || !appointmentDate || !appointmentTime) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // send the email
    const { data, error } = await resend.emails.send({
      from: "DentWise <no-reply@resend.dev>", // do not use this in prod, only for testing purposes, in prod shoud use my domain
      to: [userEmail], // 
      subject: "Appointment Confirmation - DentWise",
      react: AppointmentConfirmationEmail({  // create this component to make the email beautiful in custom styles 
            doctorName, appointmentDate, appointmentTime, appointmentType, duration, price,}),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    // not error
    return NextResponse.json(
      { message: "Email sent successfully", emailId: data?.id },
      { status: 200 }
    );
  } 
  catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
