import React,{Component} from 'react';
import './guidedata.css';

const Guide = ({ image, title, description }) => {
    return (
        <div>

       
      <div className="travel-card">
        <img src={'../newyork.jpg'} alt={title} className="travel-card-image" />
        <div className="travel-card-content">
          <p className="travel-card-title">The Edge</p>
          <p className="travel-card-description">New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park.</p>
        
        </div>
      </div>
      <div className="travel-card">
        <img src={'../statue.jpg'} alt={title} className="travel-card-image" />
        <div className="travel-card-content">
          <p className="travel-card-title">Statue of Libarty</p>
          <p className="travel-card-description">New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park.</p>
        
        </div>
      </div>
      <div className="travel-card">
        <img src={'../times.jpg'} alt={title} className="travel-card-image" />
        <div className="travel-card-content">
          <p className="travel-card-title">Times Square</p>
          <p className="travel-card-description">New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park.</p>
        </div>
      </div>
      <div className="travel-card">
        <img src={'../brooklyn.jpg'} alt={title} className="travel-card-image" />
        <div className="travel-card-content">
          <p className="travel-card-title">Brooklyn Bridge</p>
          <p className="travel-card-description">New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park.</p>
    
        </div>
      </div>
     
     
      </div>
      
    );
  };
export default Guide;