import React, { useState, useEffect } from "react";

const Settings = () => {
  // State to manage settings
  const [timeZone, setTimeZone] = useState("GMT");
  const [notifications, setNotifications] = useState(true);

  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedTimeZone = localStorage.getItem("timeZone") || "GMT";
    const savedNotifications =
      localStorage.getItem("notifications") === "true";
    setTimeZone(savedTimeZone);
    setNotifications(savedNotifications);
  }, []);

  // Update settings in localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("timeZone", timeZone);
    localStorage.setItem("notifications", notifications);
  }, [timeZone, notifications]);

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h1>Settings</h1>

      {/* Time Zone Setting */}
      <div style={{ marginBottom: "20px" }}>
        <label>
          <strong>Time Zone:</strong>
        </label>
        <select
          value={timeZone}
          onChange={(e) => setTimeZone(e.target.value)}
          style={{ marginLeft: "10px" }}
        >
          <option value="GMT">GMT</option>
          <option value="PST">PST (Pacific Standard Time)</option>
          <option value="EST">EST (Eastern Standard Time)</option>
          <option value="CET">CET (Central European Time)</option>
          <option value="IST">IST (Indian Standard Time)</option>
        </select>
      </div>

      {/* Notifications Setting */}
      <div>
        <label>
          <strong>Notifications:</strong>
        </label>
        <input
          type="checkbox"
          checked={notifications}
          onChange={(e) => setNotifications(e.target.checked)}
          style={{ marginLeft: "10px" }}
        />
      </div>

      {/* Display Current Settings */}
      <div style={{ marginTop: "20px" }}>
        <h3>Current Settings:</h3>
        <p>Time Zone: {timeZone}</p>
        <p>Notifications: {notifications ? "Enabled" : "Disabled"}</p>
      </div>
    </div>
  );
};

export default Settings;
