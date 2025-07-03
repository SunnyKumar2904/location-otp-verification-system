✅ README.md — Location-Based OTP Verification System
markdown
Copy
Edit
# 📍 Location-Based OTP Verification System

This project is a secure OTP (One-Time Password) verification system built with **Node.js**, **Express**, **Twilio**, and **MySQL**, enhanced with **Google Maps Distance Matrix API** to validate the user’s current location during OTP verification.

It is designed to prevent fraud by ensuring that OTPs are verified only within a limited radius from where they were initially requested.

---

## 📌 Features

- ✅ Send OTP to a mobile number using Twilio
- 📍 Capture and store user’s location (latitude/longitude)
- 🚫 Prevent OTP misuse by checking distance between request and verification
- 🕵️ Secure and privacy-focused
- 📈 Scalable backend built with Express and MySQL
- 🖥️ Clean and responsive frontend

---

## 🛠️ Tech Stack

| Layer        | Tools Used                             |
|--------------|-----------------------------------------|
| Backend      | Node.js, Express.js                    |
| Database     | MySQL                                  |
| OTP Service  | Twilio API                             |
| Geolocation  | Google Maps Distance Matrix API        |
| Frontend     | HTML5, CSS3, Vanilla JS                |
| Hosting (Local) | Node server on localhost:3000        |

---

## 🚀 How to Run Locally

### ⚙️ 1. Clone the Repository

```bash
git clone https://github.com/SunnyKumar2904/location-otp-verification-system.git
cd location-otp-verification-system
📦 2. Install Dependencies
bash
Copy
Edit
npm install
🔑 3. Configure Environment
Create a .env file in the root with the following:

env
Copy
Edit
PORT=3000
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=otp_verification

TWILIO_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE=your_twilio_phone_number
GOOGLE_API_KEY=your_google_maps_api_key
💡 Make sure MySQL is running and you’ve created the database otp_verification.

You can use the provided SQL script to create necessary tables.

▶️ 4. Start the Server
bash
Copy
Edit
node app.js
Visit: http://localhost:3000



🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.



👤 Developed By
Sunny Kumar
GitHub Profile



