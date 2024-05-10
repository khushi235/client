import React, { useState, useEffect } from 'react';
import './cartdata.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom'; 
import newyorkImage from '../beach.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faCompass, faBookmark, faLayerGroup, faAddressCard } from '@fortawesome/free-solid-svg-icons';

function Cartdata() {
  const [destination, setDestination] = useState(null);
  const { id } = useParams(); // Get _id parameter from URL

  useEffect(() => {
    const fetchDestinationData = async () => {
      try {
        const response = await axios.get(`http://localhost:5500/api/data/${id}`);
        setDestination(response.data);
      } catch (error) {
        console.error('Error fetching destination data:', error);
      }
    };

    fetchDestinationData();
  }, [id]); // Fetch data whenever _id changes

  if (!destination) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ backgroundImage: `url(${newyorkImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', minHeight: '100vh', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
      {/* Navigation bar code */}
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
                <Link to="/saved" className="nav-link">
                  <FontAwesomeIcon icon={faBookmark} />
                  <span className="nav-link-text">Saved</span>
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

      <div className="col-md-6 d-flex justify-content-center align-items-center cart">
        <div className="card w-100">
          <div className="card-body">
            {/* Render content based on destination data */}
            <img src={destination.imageUrl} className="travel-card1-image" alt={destination.Destination} />
            <div className="travel-card1-content">
              <p className="travel-card1-title">{destination.Destination}</p>
              <p className="travel-card1-description">Category: {destination.Category}</p>
              <p className="travel-card1-description">Location Information: {destination.Description}</p>
              <p className="travel-card1-description">Address{destination.Address}</p>
              <p className="travel-card1-description">Ticket Price: {destination["Admission Fee"]}</p>
              <p className="travel-card1-description">Open Hours: {destination["Open Hours"]}</p>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartdata;
