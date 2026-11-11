import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Basic server-side validation
    if (!data.name || !data.phone || !data.service) {
      return NextResponse.json(
        { error: "Name, phone, and service are required fields." },
        { status: 400 }
      );
    }

    const bookingId = `ALN-${Date.now().toString().slice(-6)}`;
    const submissionTime = new Date().toISOString();

    const newBooking = {
      id: bookingId,
      createdAt: submissionTime,
      name: data.name.trim(),
      phone: data.phone.trim(),
      email: data.email?.trim() || "Not provided",
      service: data.service,
      date: data.date || "Anytime",
      time: data.time || "Anytime",
      stylist: data.stylist || "No preference",
      message: data.message || "None",
      status: "pending",
    };

    // 1. Log to server console
    console.log("==========================================");
    console.log("NEW APPOINTMENT REQUEST RECEIVED [ALENORA]");
    console.log("Booking ID:", bookingId);
    console.log("Time:", submissionTime);
    console.log("Client Name:", newBooking.name);
    console.log("Phone Number:", newBooking.phone);
    console.log("Email:", newBooking.email);
    console.log("Service Requested:", newBooking.service);
    console.log("Preferred Date:", newBooking.date);
    console.log("Preferred Time:", newBooking.time);
    console.log("Preferred Stylist:", newBooking.stylist);
    console.log("Message / Notes:", newBooking.message);
    console.log("==========================================");

    // 2. Persist booking safely to local data/bookings.json
    try {
      const dataDir = path.join(process.cwd(), "data");
      const bookingsFilePath = path.join(dataDir, "bookings.json");

      let existingBookings = [];
      try {
        const fileContent = await fs.readFile(bookingsFilePath, "utf8");
        existingBookings = JSON.parse(fileContent);
      } catch (e) {
        // File doesn't exist yet or is empty
        existingBookings = [];
      }

      existingBookings.unshift(newBooking);
      await fs.writeFile(bookingsFilePath, JSON.stringify(existingBookings, null, 2), "utf8");
    } catch (fileErr) {
      console.error("Failed to save booking to local file:", fileErr);
    }

    // 3. Optional: Forward to Email via Resend if RESEND_API_KEY is configured in .env.local
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Alenora Bookings <onboarding@resend.dev>",
            to: process.env.STUDIO_NOTIFICATION_EMAIL || "alenora2024@gmail.com",
            subject: `New Appointment Request [${bookingId}]: ${newBooking.name} - ${newBooking.service}`,
            html: `
              <h2>New Appointment Request - Alenora Beauty Studio</h2>
              <p><strong>Booking ID:</strong> ${bookingId}</p>
              <p><strong>Client:</strong> ${newBooking.name}</p>
              <p><strong>Phone:</strong> <a href="tel:${newBooking.phone}">${newBooking.phone}</a></p>
              <p><strong>Email:</strong> ${newBooking.email}</p>
              <p><strong>Service:</strong> ${newBooking.service}</p>
              <p><strong>Preferred Date:</strong> ${newBooking.date}</p>
              <p><strong>Preferred Time:</strong> ${newBooking.time}</p>
              <p><strong>Preferred Stylist:</strong> ${newBooking.stylist}</p>
              <p><strong>Special Notes:</strong> ${newBooking.message}</p>
            `,
          }),
        });
      } catch (emailErr) {
        console.error("Failed to send email notification:", emailErr);
      }
    }

    // 4. Optional: Forward to Webhook (e.g. Google Sheets / Zapier / Make)
    if (process.env.BOOKING_WEBHOOK_URL) {
      try {
        await fetch(process.env.BOOKING_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newBooking),
        });
      } catch (webhookErr) {
        console.error("Failed to dispatch webhook:", webhookErr);
      }
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you! Your appointment request has been received. Our team will contact you shortly to confirm.",
      bookingId,
    });
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please call or WhatsApp us directly." },
      { status: 500 }
    );
  }
}

