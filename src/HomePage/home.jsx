// import React,{Component} from 'react';
// import './home.css';
// import { withRouter } from 'react-router-dom';
  

// const Home = ({ image, title, description }) => {
//     return (
//       <div className="travel-card1">
//         <img src={'../newyork.jpg'} alt={title} className="travel-card1-image" />
//         <div className="travel-card1-content">
//           <p className="travel-card1-title">New York</p>
//           
//           <button className="travel-card1-button" >List of Activity </button>
//         </div>
//       </div>
//     );
//   };

// export default Home;


import React, { useState, useEffect } from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Home() {
  
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

  return (
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {destinations.map(destination => (
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
  );
}

export default Home;