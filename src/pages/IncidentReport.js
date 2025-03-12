import React from "react";
import "./IncidentReport.css"; // Link the CSS file

const IncidentReport = () => {
  return (
    <div className="incident-reports-container">
      <div className="compile-section">
        <button className="compile-button">Compile Incident Reports</button>
      </div>
      <div className="list-section">
        <h3 className="list-title">List of Incident Reports</h3>
        <table className="incident-table">
          <tbody>
          <tr>
              <td>Y.Mbanguzi Incident #1</td>
              <td>
                <button className="btn view-btn">VIEW</button>
              </td>
              <td>
                <button className="btn edit-btn">EDIT</button>
              </td>
              <td>
                <button className="btn approve-btn">APPROVE</button>
              </td>
              <td>
                <button className="btn delete-btn">DELETE</button>
              </td>
            </tr>
            <tr>
              <td>M.Matsetse Incident #2</td>
              <td>
                <button className="btn view-btn">VIEW</button>
              </td>
              <td>
                <button className="btn edit-btn">EDIT</button>
              </td>
              <td>
                <button className="btn approve-btn">APPROVE</button>
              </td>
              <td>
                <button className="btn delete-btn">DELETE</button>
              </td>
            </tr>
            <tr>
              <td>ET.Mokgosi Incident #3</td>
              <td>
                <button className="btn view-btn">VIEW</button>
              </td>
              <td>
                <button className="btn edit-btn">EDIT</button>
              </td>
              <td>
                <button className="btn approve-btn">APPROVE</button>
              </td>
              <td>
                <button className="btn delete-btn">DELETE</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IncidentReport;
