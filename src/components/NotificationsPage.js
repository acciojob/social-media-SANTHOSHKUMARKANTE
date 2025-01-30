import React from "react";
import "../styles/NotificationsPage.css"
function NotificationsPage({ notifications, clearNotifications }) {
  return (
    <div className="notifications-container">
      <h1>Notifications</h1>
      <button className="button" onClick={clearNotifications}>Clear Notifications</button>

      {notifications.length === 0 ? (
        <p>No new notifications.</p>
      ) : (
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>{notification}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NotificationsPage;
  