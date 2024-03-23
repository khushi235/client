import React, { useState } from 'react';
import './Register.css';

function RegisterPage() {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        bdate: '',
        email: '',
        password: '',
        confirmPassword: '' // Added confirmPassword field
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
alert("button clicked");
        // Validate password and confirmPassword
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return; // Exit function if passwords don't match
        }

        // Send POST request to backend API endpoint
        fetch('http://localhost:5500/backend/travel/Register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to save user data');
            }
            console.log('User data saved successfully');
            // Handle success response (e.g., show success message)
        })
        .catch(error => {
            console.error('Error saving user data:', error.message);
            // Handle error (e.g., show error message)
        });
    };

    return (
        <div className="Login">
            <div className="facebook">
                <div className="roamease">
                    RoamEase
                </div>
                <div className="title">
                    Discover the world with ease.
                </div>
            </div>
            <div className="logincontainer">
                <div className="logindetail">
                    <form onSubmit={handleSubmit}>
                        <input type="name" name="fname" placeholder="First Name" value={formData.fname} onChange={handleChange} /><br />
                        <input type="name" name="lname" placeholder="Last Name" value={formData.lname} onChange={handleChange} /><br />
                        <input type="date" name="bdate" placeholder="Birth day (MM/DD/YY)" value={formData.bdate} onChange={handleChange} /><br />
                        <input type="email" name="email" placeholder="Email address or phone number" value={formData.email} onChange={handleChange} /><br />
                        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} /><br />
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} /><br />
                        <button type="submit" className="btn2">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;




















/*import React from "react";
import "./Register.css";
function RegisterPage(){
    return(
        <div className="Login">
        <div className="facebook">
            <div className="roamease">
            RoamEase
            </div>
            <div className="title">
               Discover the world with ease.

            </div>
        </div>
        
        <div className="logincontainer">

            <div className="logindetail">
            <input type="name" placeholder="First Name"></input><br/>
                <input type="name" placeholder="Last Name"></input><br/>
                <input type="date" placeholder="Birth day (MM/DD/YY)"></input><br/>
                <input type="email" placeholder="Email address or phone number"></input><br/>
                <input type="password" placeholder="Password"></input><br/>
                <input type="password" placeholder="Confirm Password"></input><br/>
                <button className="btn2">
                   Log in
                </button>
            
            
            
               
            </div>
           
    
           
        </div>
</div>
    )
   
}
export default RegisterPage;*/