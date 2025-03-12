import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <div id="incident-report">
        <h2>Compile Incident Report</h2>
        <form>
          <input type="text" placeholder="Employee Last Name" />
          <input type="text" placeholder="Employee Names" />
          <input type="date" placeholder="Date of Incident" />
          <input type="time" placeholder="Time of Incident" />
          <textarea placeholder="Reason for Incident"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div id="view-reports">
        <h2>List of Incident Reports</h2>
        <div className="report">
          <span>Moloke.K Incident #1</span>
          <button>View</button>
          <button>Edit</button>
          <button>Approve</button>
          <button>Delete</button>
        </div>
        <div className="report">
          <span>Moloke.K Incident #2</span>
          <button>View</button>
          <button>Edit</button>
          <button>Approve</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;