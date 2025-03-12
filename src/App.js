import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from './pages/Dashboard';
import UserManagement from './pages/UserManagement';
import IncidentReport from './pages/IncidentReport';
import CompileIncident from './pages/CompileIncident';
import IncidentList from './pages/IncidentList';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
//import ViewIncident from './pages/ViewIncident';
import './App.css';
import './index.css';

function App() {
  return (
   
    <Router>
      <div className="App">
        
        <Sidebar />
        <div className="content">

          <Header />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/incident-report" element={<IncidentReport/>} />
              <Route path="/user-management" element={<UserManagement/>} />
              <Route path="/compile-incident" element={<CompileIncident/>} />
              <Route path="/incidentList" element={<IncidentList />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/settings" element={<Settings />} /> 
              
            </Routes>
            <div className="background-container"></div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
