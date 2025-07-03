require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const otpRoutes = require("./routes/otp");
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/api", otpRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});