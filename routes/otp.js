const express = require("express");
const router = express.Router();
const db = require("../db/config");
const generateOtp = require("../utils/generateOtp");
const axios = require("axios");
const twilio = require("twilio")(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

router.post("/send-otp", async (req, res) => {
  const { phone, lat, lng } = req.body;
  const otp = generateOtp();
  const expiry = new Date(Date.now() + 5 * 60 * 1000); // 5 mins

  db.query(
    "INSERT INTO users (phone, otp, otp_expiry, registered_lat, registered_lng) VALUES (?, ?, ?, ?, ?)",
    [phone, otp, expiry, lat, lng],
    (err) => {
      if (err) return res.status(500).send("DB Error");
      twilio.messages.create({
        body: `Your OTP is ${otp}`,
        from: process.env.TWILIO_PHONE,
        to: phone
      });
      res.send("OTP Sent");
    }
  );
});

router.post("/verify-otp", async (req, res) => {
  const { phone, otp, current_lat, current_lng } = req.body;

  db.query("SELECT * FROM users WHERE phone = ? ORDER BY id DESC LIMIT 1", [phone], async (err, results) => {
    if (err || results.length === 0) return res.status(400).send("User not found");

    const user = results[0];
    if (user.otp !== otp || new Date(user.otp_expiry) < new Date()) {
      return res.status(401).send("Invalid or expired OTP");
    }

    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${user.registered_lat},${user.registered_lng}&destinations=${current_lat},${current_lng}&key=${process.env.GOOGLE_API_KEY}`;

    const distanceRes = await axios.get(url);
    const distance = distanceRes.data.rows[0].elements[0].distance.value; // in meters

    if (distance <= 500) {
      res.send("OTP Verified & Location Matched");
    } else {
      res.status(403).send("Location mismatch");
    }
  });
});

module.exports = router;