require("dotenv").config();
const express = require("express");
const mysql = require("mysql2"); // Using mysql2
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",  // Change if using a different MySQL user
  password: "075930",  // Add your MySQL password if required
  database: "incident_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  authPlugins: {
    mysql_native_password: () => () => Buffer.from("password") // Fix authentication issue
  }
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.message);
  } else {
    console.log("Connected to MySQL database");
  }
});

// ✅ Route: Fetch All Incidents
app.get("/incidents", (req, res) => {
  const sql = "SELECT * FROM incidents";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database error: " + err.message });
    }
    res.status(200).json(results);
  });
});

// ✅ Route: Add an Incident
app.post("/add-incident", (req, res) => {
  const { lastName, firstName, date, time, reason } = req.body;
  const sql = "INSERT INTO incidents (last_name, first_name, date_of_incident, time_of_incident, reason) VALUES (?, ?, ?, ?, ?)";

  db.query(sql, [lastName, firstName, date, time, reason], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database error: " + err.message });
    }
    res.status(200).json({ message: "Incident recorded successfully" });
  });
});

// ✅ Route: Update (Edit) an Incident
app.put("/incidents/:id", (req, res) => {
  const { reason } = req.body;
  const { id } = req.params;
  const sql = "UPDATE incidents SET reason = ? WHERE id = ?";

  db.query(sql, [reason, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database error: " + err.message });
    }
    res.status(200).json({ message: "Incident updated successfully" });
  });
});

// ✅ Route: Approve an Incident
app.put("/incidents/:id/approve", (req, res) => {
  const { id } = req.params;
  const sql = "UPDATE incidents SET status = 'Approved' WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database error: " + err.message });
    }
    res.status(200).json({ message: `Incident #${id} approved successfully!` });
  });
});

// ✅ Route: Delete an Incident
app.delete("/incidents/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM incidents WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database error: " + err.message });
    }
    res.status(200).json({ message: `Incident #${id} deleted successfully!` });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
