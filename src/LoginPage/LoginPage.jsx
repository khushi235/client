import React from "react";
import { withRouter } from 'react-router-dom';
import "./LoginPage.css";
import newyorkImage from '../back.jpg';




function LoginPage(props) {
    const backgroundImageStyle = {
        backgroundImage: `url(${newyorkImage})`,
        backgroundSize: 'cover', // Adjust background size to cover the container
        backgroundPosition: 'center', // Center the background image
        width: '100%',
        height:'820px',// Set the dimensions of the container if needed
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
                    <input type="email" placeholder="Email address or phone number"></input><br/>
                    <input type="password" placeholder="Password"></input><br/>
                    <button className="btn">
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
