const express = require("express");
const registrationStore = require("../store");

const router = express.Router();

router.post("/", (req, res) => {
  const { name, age, city, email, phone, bookingFor, profession, painArea } = req.body;

  if (!phone) {
    return res.status(400).json({ error: "Phone required" });
  }

  registrationStore.set(phone, {
    name,
    age,
    city,
    email,
    phone,
    bookingFor,
    profession,
    painArea,
    timestamp: Date.now(),
  });

  return res.json({ success: true });
});

module.exports = router;
