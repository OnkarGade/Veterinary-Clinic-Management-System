// src/pages/ContactPage.js
import React from 'react';
import HomeNavbar from '../../Components/HomeNavbar';

function Contact() {
  return (
    <div>
      <HomeNavbar />
      <div
        className="container"
      >
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us using the information below:</p>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
            backgroundColor: "rgba(255, 255, 255, 0.8)" // Optional: semi-transparent background for readability
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f4f4f4" }}>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Department</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Phone</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>General Inquiries</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>123-456-7890</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>info@clinic.com</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>Appointments</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>098-765-4321</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>appointments@clinic.com</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>Emergency</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>911</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>emergency@clinic.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contact;
