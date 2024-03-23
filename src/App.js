
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './HomePage/home';
import LoginPage from './LoginPage/LoginPage';
import NewUser from './NewUser/NewUser';
import Guide from './GuideData/guidedata';
import RegisterPage from './Register/Register';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5500/backend/travel/GetUser');
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const userData = await response.json();
      setUserData(userData);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/guide' component={Guide} />
          <Route exact path='/' component={LoginPage} />
          <Route exact path='/register' component={RegisterPage} />
          <Route exact path='/newuser' component={NewUser} />
        </Switch>
      </BrowserRouter>
      {/* Render fetched user data */}
      {userData && (
        <div>
          <h2>User Data</h2>
          <ul>
            {userData.map(user => (
              <li key={user._id}>
                Name: {user.fname} {user.lname}, Email: {user.email},Password:{user.password}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;











/*import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './HomePage/home';
import LoginPage from './LoginPage/LoginPage';
import NewUser from './NewUser/NewUser';
import Guide from './GuideData/guidedata';
import RegisterPage from './Register/Register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/guide' component={Guide} />
          <Route exact path='/' component={LoginPage} />
          <Route exact path='/register' component={RegisterPage} />
          <Route exact path='/newuser' component={NewUser} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;*/
