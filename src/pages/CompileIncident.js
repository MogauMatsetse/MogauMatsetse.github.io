import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CompileIncident.css';

const CompileIncident = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    date: '',
    time: '',
    reason: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/add-incident", formData);
      alert(response.data.message);
      setFormData({ lastName: '', firstName: '', date: '', time: '', reason: '' });
    } catch (error) {
      alert("Error submitting incident: " + error.response.data.error);
    }
  };

  return (
    <div className="page-content">
      <div className="Mainbtn">
        <table>
          <tbody>
            <tr>
              <td>
                <button className="btnCompile" onClick={() => navigate('/incident-report')}>
                  Compile Incident Report
                </button>
              </td> 
              <td>
                <button className="btnView" onClick={() => navigate('/incidentList')}>
                  View Incident Report
                </button>
              </td>  
            </tr>
          </tbody>
        </table>
      </div>
    
      <form className="incident-form" onSubmit={handleSubmit}>
        <div>
          <label>Employee Last Name</label>
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div>
          <label>Employee First Name</label>
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div>
          <label>Date of Incident</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div>
          <label>Time of Incident</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </div>
        <div>
          <label>Reason for Incident</label>
          <textarea name="reason" placeholder="Reason for incident" value={formData.reason} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="submit-btn nji" >Submit</button>
      </form>
    </div>
  );
};

export default CompileIncident;
