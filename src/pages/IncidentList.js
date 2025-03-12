import React, { useState, useEffect } from "react";
import axios from "axios";
import "./IncidentList.css";

const IncidentList = () => {
  const [incidents, setIncidents] = useState([]);

  // Fetch incident reports from the backend
  useEffect(() => {
    axios.get("http://localhost:4000/incidents")
      .then((response) => {
        setIncidents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching incidents:", error);
      });
  }, []);

  // View Incident Details
  const handleView = (incident) => {
    alert(`Viewing details for ${incident.last_name} ${incident.first_name}, Reason: ${incident.reason}`);
  };

  // Edit Incident
  const handleEdit = (incident) => {
    const newReason = prompt(`Edit reason for ${incident.last_name} ${incident.first_name}:`, incident.reason);
    if (newReason) {
      axios.put(`http://localhost:4000/incidents/${incident.id}`, { reason: newReason })
        .then(() => {
          setIncidents(incidents.map(i => i.id === incident.id ? { ...i, reason: newReason } : i));
          alert("Incident updated successfully!");
        })
        .catch((error) => console.error("Error updating incident:", error));
    }
  };

  // Approve Incident
  const handleApprove = (incident) => {
    axios.put(`http://localhost:4000/incidents/${incident.id}/approve`)
      .then(() => {
        alert(`Incident #${incident.id} approved!`);
      })
      .catch((error) => console.error("Error approving incident:", error));
  };

  // Delete Incident
  const handleDelete = (incidentId) => {
    if (window.confirm("Are you sure you want to delete this incident?")) {
      axios.delete(`http://localhost:4000/incidents/${incidentId}`)
        .then(() => {
          setIncidents(incidents.filter(i => i.id !== incidentId));
          alert("Incident deleted successfully!");
        })
        .catch((error) => console.error("Error deleting incident:", error));
    }
  };

  return (
    <div className="incident-reports-container">
      {/* Compile Incident Reports Section */}
      <div className="compile-section">
        <button className="compile-button">Compile Incident Reports</button>
      </div>

      {/* Incident List Section */}
      <div className="list-section">
        <h2 className="list-title">List of Incident Reports</h2>
        <table className="incident-table">
          <tbody>
            {incidents.map((incident) => (
              <tr key={incident.id}>
                <td>{incident.last_name}.{incident.first_name} Incident #{incident.id}</td>
                <td><button className="btn view-btn" onClick={() => handleView(incident)}>VIEW</button></td>
                <td><button className="btn edit-btn" onClick={() => handleEdit(incident)}>EDIT</button></td>
                <td><button className="btn approve-btn" onClick={() => handleApprove(incident)}>APPROVE</button></td>
                <td><button className="btn delete-btn" onClick={() => handleDelete(incident.id)}>DELETE</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IncidentList;
