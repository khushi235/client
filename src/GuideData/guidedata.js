import React, { useState, useEffect } from 'react';
import './guidedata.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Guide() {
  
  const [destinations, setDestinations] = useState([]);

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

  // Function to open Google Maps with latitude and longitude
  const openMap = (latitude, longitude) => {
    // Construct the URL for Google Maps with latitude and longitude
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    // Open the URL in a new tab
    window.open(url, '_blank');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Navbar content */}
      </nav>

      <div className="d-flex flex-row flex-wrap justify-content-center">
        {destinations.map(destination => (
          <div className="travel-card1" key={destination._id}>
            <img src={'../newyork.jpg'} className="travel-card1-image" />
            <div className="travel-card1-content">
              <p className="travel-card1-title title">{destination.Destination}</p>
              <p className="travel-card1-description">{destination.Category}</p>
              <p className="travel-card1-description">{destination.Description}</p>
              {/* Pass latitude and longitude to openMap function */}
              <button className="location-button" onClick={() => openMap(destination.Latitude, destination.Longitude)}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />  Location
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Guide;
