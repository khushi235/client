import React, { useState } from 'react';
import './Register.css';
import newyorkImage from '../back.jpg';

function RegisterPage() {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        bdate: '',
        email: '',
        password: '',
        confirmPassword: '' // Added confirmPassword field
    });

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const backgroundImageStyle = {
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url(${newyorkImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw', // Use viewport width to cover the entire screen width
        height: '100vh',
        margin: 0, // Remove any margin
        padding: 0, // Remove any padding
        overflowX: 'hidden',
      };
      
      

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate password and confirmPassword
        if (formData.password !== formData.confirmPassword) {
            setPasswordError('Passwords do not match');
            return; // Exit function if passwords don't match
        } else {
            setPasswordError('');
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setEmailError('Invalid email format');
            return;
        } else {
            setEmailError('');
        }

        // Validate password format
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if (!passwordRegex.test(formData.password)) {
            setPasswordError('Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one digit.');
            return;
        } else {
            setPasswordError('');
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
            } else {
                console.log('User data saved successfully');
                window.location.href = '/';
                // Handle success response 
            }
        })
        .catch(error => {
            console.error('Error saving user data:', error.message);
            // Handle error (e.g., show error message)
        });
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
                    {emailError && <small className="error" style={{ color: 'red' }}>{emailError}</small>}
                    {passwordError && <small className="error" style={{ color: 'red' }}>{passwordError}</small>}
                </div>
            </div>
        </div>
        </div>
    );
}

export default RegisterPage;
