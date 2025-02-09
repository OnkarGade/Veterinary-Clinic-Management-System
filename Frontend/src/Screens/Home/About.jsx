// src/pages/AboutPage.js
import React from 'react';
import HomeNavbar from '../../Components/HomeNavbar'; 

function About() {
  return (
    <div>
      <HomeNavbar />
      <div className='container'>

      <h1>About Us</h1>
      <p>
        Our Veterinary Clinic Management System has been serving the community for over 20 years. We believe in compassionate service and personalized care.
      </p>
      <p>
        Our team of experienced veterinarians and support staff is dedicated to providing a friendly and professional environment. We are committed to excellence and continuous improvement in pet care.
      </p>
      </div>

    </div>
  );
}

export default About;
