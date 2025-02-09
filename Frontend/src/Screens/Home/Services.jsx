// src/pages/ServicesPage.js
import React from 'react';
import HomeNavbar from '../../Components/HomeNavbar';

function Services() {
  return (
    <div>
      <HomeNavbar />
      <div className='container'>
      <h1>Our Services</h1>
      <p>
        We offer a wide range of services to cater to all your pet's needs:
      </p>
      <ul>
        <li>Routine Check-ups and Vaccinations</li>
        <li>Dental Care</li>
        <li>Emergency Services</li>
        <li>Surgical Procedures</li>
        <li>Grooming and Boarding</li>
        <li>Nutritional Counseling</li>
      </ul>
      <p>
        Each service is designed to ensure the best care for your pet. Contact us for more information or to schedule an appointment.
      </p>
      </div>
    </div>
  );
}

export default Services;
