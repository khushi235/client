import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Favorites() {
    const location = useLocation();
    const userId = location.state?.userId;
    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
    
        const fetchFavorites = async () => {
          try {
            const response = await axios.get(`http://localhost:5500/api/favorite_destinations/${userId}`);
            setFavorites(response.data);
          } catch (err) {
            console.error('Error fetching favorites:', err);
          }
        };
    
        fetchFavorites();
      }, [userId]);
    


  return (
    


    <div>
      <h1>Other Page</h1>
      <p>User ID: {userId}</p>
      <ul>
        {favorites.map(favorite => (
          <li key={favorite._id}>{favorite.destinationId}</li>
        ))}
      </ul>
      {/* Display favorites */}
    </div>
  );
};

export default Favorites;





// import React from 'react';

// const Favorites = ({ favorites }) => {
//   return (
//     <div>
//       <h1>Other Page</h1>
//       {/* Display favorites */}
//       <ul>
//         {favorites.map(favorite => (
//           <li key={favorite._id}>{favorite.destinationId}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Favorites;