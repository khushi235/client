import React from 'react';
import './aboutus.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom'; 
import newyorkImage from '../beach.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCompass, faBookmark, faLayerGroup, faAddressCard, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


function Aboutus() {
  const location = useLocation();
    const backgroundImageStyle = {
        backgroundImage: `url(${newyorkImage})`,
        backgroundSize: 'cover', // Adjust background size to cover the container
        backgroundPosition: 'center', // Center the background image
        width: '100%',
        minHeight: '100vh', // Set minimum height to cover the entire screen
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    };

  return (
    <div style={backgroundImageStyle}>
     
     <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src="../roamease.jpg" alt="Roamease" className="navbar-logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                <FontAwesomeIcon icon={faHome} />
                <span className="nav-link-text">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/explore" className="nav-link">
                <FontAwesomeIcon icon={faCompass} />
                <span className="nav-link-text">Explore</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/saved" className="nav-link">
                <FontAwesomeIcon icon={faBookmark} />
                <span className="nav-link-text">Saved</span>
              </Link>
            </li>
            
            <li className={`nav-item ${location.pathname === '/aboutus' ? 'active' : ''}`}>
  <Link to="/aboutus" className="nav-link">
    <FontAwesomeIcon icon={faLayerGroup} />
    <span className="nav-link-text">About</span>
  </Link>
</li>

            <li className="nav-item">
              <Link to="/contactus" className="nav-link">
                <FontAwesomeIcon icon={faAddressCard} />
                <span className="nav-link-text">Contact</span>
              </Link>
            </li>
            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    <FontAwesomeIcon icon={faSignOutAlt} />
                                    <span className="nav-link-text">Logout</span>
                                </Link>
                            </li>
          </ul>
        </div>
      </div>
    </nav>


      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h2 className="display-4 mb-4">Our Mission</h2>
            <p className="lead">At Roamease, our mission is to inspire and empower travelers to explore the world fearlessly. We believe that travel has the power to broaden horizons, foster connections, and create lifelong memories.</p>
            <p className="lead">We strive to make travel accessible to everyone by providing comprehensive resources, expert advice, and exceptional service. Whether you're a seasoned globetrotter or a first-time traveler, we're here to support you every step of the way.</p>
          </div>
          <div className="col-lg-4 mb-4">
            <h2 className="display-4 mb-4">Our Story</h2>
            <p className="lead">Welcome to Roamease, your ultimate travel companion. We are passionate about exploring the world and providing unforgettable travel experiences.</p>
            <p className="lead">Founded in 2024, Roamease started with a vision to revolutionize the way people travel. Our team of dedicated travel enthusiasts works tirelessly to curate unique itineraries, discover hidden gems, and ensure seamless journeys for our customers.</p>
          </div>
          <div className="col-lg-4">
            <h2 className="display-4 mb-4">Our Team</h2>
            <p className="lead">Meet the passionate individuals behind Roamease:</p>
            <ul className="list-unstyled">
              <li>
                <h5>Khushi Shukla</h5>
                <p className="lead">Co-founder & CEO</p>
              </li>
              <li>
                <h5>Tanish Bansal</h5>
                <p className="lead">Co-founder & COO</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
