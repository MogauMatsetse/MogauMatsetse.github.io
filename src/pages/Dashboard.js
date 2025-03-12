import React, { useState } from "react";
import {
  FaUsers,
  FaCalendarCheck,
  FaChartBar,
  FaMoneyBillWave,
  FaBriefcase,
  FaClock,
  FaHandshake,
} from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  // Card details
  const cards = [
    { id: 1, icon: <FaUsers />, title: "Total Employees", value: "120", color: "#ff9f43", details: "This section provides details about all employees." },
    { id: 2, icon: <FaCalendarCheck />, title: "Today's Attendance", value: "95%", color: "#2ed573", details: "Track today's employee attendance records." },
    { id: 3, icon: <FaChartBar />, title: "Pending Reports", value: "8", color: "#2ed573", details: "View all pending HR reports that require action." },
    { id: 4, icon: <FaMoneyBillWave />, title: "Payroll Processed", value: "R50,000", color: "#ffb142", details: "Check payroll details for the current month." },
    { id: 5, icon: <FaHandshake />, title: "Upcoming Meetings", value: "3", color: "#ff9f43", details: "View and manage upcoming HR meetings." },
    { id: 6, icon: <FaClock />, title: "Pending Leaves", value: "5 Requests", color: "#2ed573", details: "Approve or decline pending leave requests." },
    { id: 7, icon: <FaBriefcase />, title: "Ongoing Projects", value: "7", color: "#2ed573", details: "Manage active HR projects and tasks." },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">HR Dashboard</h1>

      {/* If no card is selected, show all cards */}
      {!selectedCard ? (
        <div className="stats-grid">
          {cards.map((card) => (
            <StatCard key={card.id} {...card} onClick={() => setSelectedCard(card)} />
          ))}
        </div>
      ) : (
        <div className="card-details">
          <button className="back-button" onClick={() => setSelectedCard(null)}>← Back</button>
          <div className="selected-card">
            <div className="stat-icon" style={{ color: selectedCard.color }}>{selectedCard.icon}</div>
            <h2>{selectedCard.title}</h2>
            <h3>{selectedCard.value}</h3>
            <p>{selectedCard.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Reusable Stat Card Component
const StatCard = ({ icon, title, value, color, onClick }) => {
  return (
    <div className="stat-card" style={{ borderColor: color }} onClick={onClick}>
      <div className="stat-icon" style={{ color }}>{icon}</div>
      <div className="stat-info">
        <p className="stat-title">{title}</p>
        <h3 className="stat-value">{value}</h3>
      </div>
    </div>
  );
};

export default Dashboard;
