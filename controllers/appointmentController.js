const db = require("../config/dbConfig");

// Function to handle appointment scheduling
const scheduleAppointment = (req, res) => {
  const { date, time, name, email, phone, message } = req.body;

  // Validate required fields
  if (!date || !time || !name || !email) {
    return res.status(400).json({
      error: "All fields (date, time, name, email) are required",
    });
  }

  // Insert data into the database
  const query = `
    INSERT INTO bookings (date, time, name, email, phone, message) 
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  db.query(query, [date, time, name, email, phone, message], (err, result) => {
    if (err) {
      console.error("Database Insert Error:", err.message);
      return res.status(500).json({ error: "Database error occurred" });
    }

    res.status(201).json({
      message: "Appointment scheduled successfully",
      appointment: {
        id: result.insertId,
        date,
        time,
        name,
        email,
        phone,
        message,
      },
    });
  });
};

module.exports = { scheduleAppointment };
