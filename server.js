const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const appointmentRoutes = require("./routes/appointmentRoutes");
const fetchAppointmentRoutes = require("./routes/fetchAppointmentRoutes");

// Load environment variables
dotenv.config();

// Create an Express app
const app = express();

// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up routes
app.use("/appointments", appointmentRoutes);
app.use("/fetch-appointments", fetchAppointmentRoutes);

// Start the server
const PORT = process.env.APP_PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
