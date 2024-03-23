import React,{Component} from 'react';
import './home.css';
import { withRouter } from 'react-router-dom';
  

const Home = ({ image, title, description }) => {
    return (
      <div className="travel-card1">
        <img src={'../newyork.jpg'} alt={title} className="travel-card1-image" />
        <div className="travel-card1-content">
          <p className="travel-card1-title">New York</p>
          <p className="travel-card1-description">New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park.</p>
          <button className="travel-card1-button" >List of Activity </button>
        </div>
      </div>
    );
  };

export default Home;