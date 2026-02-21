const express = require("express");
const crypto = require("crypto");
const axios = require("axios");
const registrationStore = require("../store");

const router = express.Router();

// Helper to normalize phone: strip country code and non-digits
function normalizePhone(contact) {
  if (!contact) return "";
  return contact.replace(/^\+91/, "").replace(/\D/g, "").slice(-10);
}

router.post("/", async (req, res) => {
  try {
    // Verify Razorpay webhook signature
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
    const signature = req.headers["x-razorpay-signature"];

    if (webhookSecret && signature) {
      const expectedSignature = crypto
        .createHmac("sha256", webhookSecret)
        .update(req.body) // raw body required for correct hash
        .digest("hex");

      if (signature !== expectedSignature) {
        console.error("Webhook signature mismatch");
        return res.status(400).json({ error: "Invalid signature" });
      }
    }

    const payload = JSON.parse(req.body.toString());
    const event = payload.event;

    console.log("Razorpay Webhook Event:", event);

    if (event === "payment.captured" || event === "payment_link.paid") {
      const payment = payload.payload.payment.entity;
      const paymentId = payment.id;
      const amount = (payment.amount / 100).toString();
      const email = payment.email || "";
      const phone = normalizePhone(payment.contact);

      // Look up pre-saved form data by phone number
      const formData = registrationStore.get(phone) || {};

      // Merge: prefer our form data, fall back to Razorpay's payment data
      const row = {
        name: formData.name || payment.notes?.name || "",
        age: formData.age || "",
        city: formData.city || payment.notes?.city || "",
        email: formData.email || email,
        phone: formData.phone || phone,
        bookingFor: formData.bookingFor || "",
        profession: formData.profession || payment.notes?.occupation || "",
        painArea: Array.isArray(formData.painArea)
          ? formData.painArea.join(", ")
          : (formData.painArea || ""),
        txnid: paymentId,
        amount,
      };

      await axios.post(process.env.GOOGLE_SHEET_URL, row);
      console.log("Saved to Google Sheet:", paymentId);

      // Clean up pre-saved entry
      if (phone) registrationStore.delete(phone);
    }

    // Always return 200 — Razorpay retries if it gets anything else
    return res.json({ status: "ok" });

  } catch (error) {
    console.error("Webhook Error:", error.message);
    // Return 200 even on error to prevent Razorpay retry loops
    return res.json({ status: "ok" });
  }
});

module.exports = router;
