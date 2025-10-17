// About.jsx
import React from 'react';
import './About.css'; // Optional: create this file for styling

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn more about our company, mission, and values.</p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="mission">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vivamus lacinia odio vitae vestibulum vestibulum.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="member">
              <img src="/images/member1.jpg" alt="Team Member 1" />
              <h3>John Doe</h3>
              <p>CEO</p>
            </div>
            <div className="member">
              <img src="/images/member2.jpg" alt="Team Member 2" />
              <h3>Jane Smith</h3>
              <p>CTO</p>
            </div>
            {/* Add more members as needed */}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <h2>Our Values</h2>
          <ul>
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Customer Focus</li>
            <li>Teamwork</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Join Us on Our Journey</h2>
          <button>Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default About;
