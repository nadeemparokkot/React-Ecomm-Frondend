import React from 'react';
import '../Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to My Website</h1>
        <p>Your go-to platform for amazing content and experiences.</p>
      </header>
      <section className="home-content">
        <div className="card">
          <h2>About Us</h2>
          <p>Learn more about our mission and values.Click below</p>
          <a href="/about" className="btn">Read More</a>
        </div>
        <div className="card">
          <h2>Services</h2>
          <p>Discover the services we offer to help you succeed.</p>
          <a href="/services" className="btn">Explore Services</a>
        </div>
        <div className="card">
          <h2>Contact</h2>
          <p>Get in touch with us for any inquiries or support.</p>
          <a href="/contact" className="btn">Contact Us</a>
        </div>
      </section>
      <footer className="home-footer">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
