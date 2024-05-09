import React, { useState, useEffect } from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import newyorkImage from '../back4.png';
import { faHome, faCompass, faBookmark, faLayerGroup, faAddressCard } from '@fortawesome/free-solid-svg-icons';


function Home() {
  const [destinations, setDestinations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5500/api/data');
        setDestinations(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredDestinations = destinations.filter(destination =>
    destination.Destination.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container" style={{ backgroundImage: `url(${newyorkImage})` }}>
     
<nav className="navbar navbar-expand-lg navbar-light bg-light">
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
              <Link to="/collection" className="nav-link">
                <FontAwesomeIcon icon={faBookmark} />
                <span className="nav-link-text">Collection</span>
              </Link>
            </li>
            <li className="nav-item">
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
          </ul>
        </div>
      </div>
    </nav>

      <div className="search-bar">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search destinations"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <div className="input-group-append">
            <span className="input-group-text bg-primary border-primary">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row flex-wrap justify-content-center">
        {filteredDestinations.map(destination => (
          <div className="travel-card1" key={destination._id}>
            <img src={'../newyork.jpg'} className="travel-card1-image" />
            <div className="travel-card1-content">
              <p className="travel-card1-title">{destination.Destination}</p>
              <p className="travel-card1-description">{destination.Category}</p>
              <p className="travel-card1-description">{destination.Description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
