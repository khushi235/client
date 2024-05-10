import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCompass, faBookmark, faLayerGroup, faAddressCard, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import newyorkImage from '../beach.jpg';

function Favorites() {
    const location = useLocation();
    const userId = location.state?.userId;
    const [favorites, setFavorites] = useState([]);
    const [destinationDetails, setDestinationDetails] = useState([]);

    useEffect(() => {
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

    useEffect(() => {
        const fetchDetails = async () => {
            const detailsPromises = favorites.map(favorite => axios.get(`http://localhost:5500/api/data/${favorite.destinationId}`));
            const detailsResponses = await Promise.all(detailsPromises);
            const detailsData = detailsResponses.map(response => response.data);
            setDestinationDetails(detailsData);
        };

        fetchDetails();
    }, [favorites]);

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
                                <Link to={{ pathname: "/favorites", state: { userId } }} className="nav-link">
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

            <div className="d-flex flex-row flex-wrap justify-content-center">
                {destinationDetails.map(destination => (
                    <div className="travel-card1" key={destination._id}>
                        <img src={'../newyork.jpg'} className="travel-card1-image" alt={destination.Destination} />
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
};

export default Favorites;
