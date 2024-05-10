import React, { useState } from "react";
import { withRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import "./LoginPage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import newyorkImage from '../back.jpg';

function LoginPage(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = createBrowserHistory({forceRefresh:true});

    const backgroundImageStyle = {
        backgroundImage: `url(${newyorkImage})`,
        backgroundSize: 'cover', // Adjust background size to cover the container
        backgroundPosition: 'center', // Center the background image
        width: '100%',
        height: '820px', // Set the dimensions of the container if needed
    };

    const handleLogin = async () => {
        try {
            // Send POST request to backend API endpoint
            const response = await fetch('http://localhost:5500/backend/travel/Login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

    
                    if (response.ok) {
                        // User info found in database, navigate to home page
                        // props.history.push('/home');
                        // window.location.reload();
                        const data = await response.json();
                        const userId = data.userId; 
                        history.push(`/home?userId=${userId}`);

                    } else {
                        // User info not found in database, show alert
                        alert('User info not found');
                    }
                } catch (error) {
                    console.error('Error logging in:', error.message);
                    // Handle error (e.g., show error message)
                }
            
    };

    return (
        <div className="container" style={backgroundImageStyle}>
            <div className="Login">
                <div className="facebook">
                    <div className="roamease">
                        RoamEase
                    </div>
                    <div className="title">
                        Discover the world with ease.
                    </div>
                </div>
            
                <div className="logincontainer1">
                    <div className="logindetail">
                        <input type="email" placeholder="Email address or phone number" value={email} onChange={e => setEmail(e.target.value)} /><br/>
                        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br/>
                        <button className="btn" onClick={handleLogin}>
                            Log in
                        </button>
                        <div className="forget">
                            <a href="forget"> Forgot Password?</a>
                            <a href="home">Skip </a><br/>
                        </div>
                        <div className="create">
                            <button className="btns" onClick={event =>  window.location.href='/register'}>Create Account</button>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default withRouter(LoginPage);
