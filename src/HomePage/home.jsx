import React, { useState, useEffect } from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faCompass, faBookmark, faLayerGroup, faAddressCard, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import newyorkImage from '../beach.jpg';

function Home() {
  const [destinations, setDestinations] = useState([]);
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const history = createBrowserHistory({forceRefresh:true}); 
  
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get('userId');
  const [favorites, setFavorites] = useState([]);

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
    
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(`http://localhost:5500/api/favorites/${userId}`);
        setFavorites(response.data);
      } catch (err) {
        console.error('Error fetching favorites:', err);
      }
    };

    fetchFavorites();
  }, [userId]);

  // Filter destinations based on search term
  const filteredDestinations = destinations.filter(destination =>
    destination.Destination.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle click on destination card
  const handleDestinationClick = (destination) => {
    // Implement your logic here, for example, navigate to a specific destination page
    console.log('Clicked destination:', destination);
    history.push(`/cartdata/${destination._id}`);
  };
  const handleAddFavorite = async (destinationId) => {
    try {
      const response = fetch('http://localhost:5500/api/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, destinationId })
      });
      setFavorites([...favorites, response.data]);
    } catch (err) {
      console.error('Error adding favorite:', err);
    }
  };

  return (
    <div className="home-container" style={{ backgroundImage: `url(${newyorkImage})` }}>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', boxShadow: 'none' }}>
  <div className="container">
    <Link to="/" className="navbar-brand">
      <img src="../roamease.jpg" alt="Roamease" className="navbar-logo" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className={`nav-item ${location.pathname === '/home' ? 'active' : ''}`}>
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
          <Link to={{ pathname: "/saved", state: { userId } }} className="nav-link">
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
        {filteredDestinations.map((destination, index) => (
          <div className="travel-card1" key={destination._id} onClick={() => handleDestinationClick(destination)}>
            {/* <img src={'../newyork.jpg'} className="travel-card1-image" alt={destination.Destination} /> */}
            <img src={process.env.PUBLIC_URL + `../images/${index+1}.jpg`} className="travel-card1-image" alt={destination.Destination} />
            <div className="travel-card1-content">
              <p className="travel-card1-title">{destination.Destination}</p>
              <p className="travel-card1-description">{destination.Category}</p>
              <p className="travel-card1-description">{destination.Description}</p>
              <button className='linkclass' onClick={() => handleAddFavorite(destination._id)}>Save for Later</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
