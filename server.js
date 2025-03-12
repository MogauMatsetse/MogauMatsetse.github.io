require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",  // Change if using a different MySQL user
  password: "",  // Add your MySQL password if required
  database: "incident_db",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.message);
  } else {
    console.log("Connected to MySQL database");
  }
});

// Route to handle adding an incident
app.post("/add-incident", (req, res) => {
  const { lastName, firstName, date, time, reason } = req.body;
  const sql = "INSERT INTO incidents (last_name, first_name, date, time, reason) VALUES (?, ?, ?, ?, ?)";
  
  db.query(sql, [lastName, firstName, date, time, reason], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database error: " + err.message });
    }
    res.status(200).json({ message: "Incident recorded successfully" });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
