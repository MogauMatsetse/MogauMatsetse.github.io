import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <ul>
        <li>
          <Link to="/">
            <i className="fas fa-home"></i> {isExpanded && <span>Dashboard</span>}
          </Link>
        </li>
        <li>
          <Link to="/user-management">
            <i className="fas fa-users"></i> {isExpanded && <span>User Management</span>}
          </Link>
        </li>
        <li>
          <Link to="/compile-incident">
            <i className="fas fa-file-alt"></i> {isExpanded && <span>Incident Report</span>}
          </Link>
        </li>
        <li>
          <Link to="/notifications">
            <i className="fas fa-bell"></i> {isExpanded && <span>Notifications</span>}
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <i className="fas fa-sliders-h"></i> {isExpanded && <span>Settings</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
