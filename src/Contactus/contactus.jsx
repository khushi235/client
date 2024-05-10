import React, { useRef } from 'react';
import './contactus.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCompass, faBookmark, faLayerGroup, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
import newyorkImage from '../beach.jpg';

function Contactus() {
  const form = useRef();
  const location = useLocation();
  const sendEmail = (e) => {
    e.preventDefault();
  
    const formData = new FormData(form.current);
   
    const name = formData.get('name');
    const email = formData.get('email');
  
    const templateParams = {
      to_name: 'Recipient Name', // Update with the recipient's name if needed
      from_name: name,
      from_email: email,
      message: formData.get('message')
    };
  
    emailjs.send('service_70dbx4h', 'template_ca4st9u', templateParams, 'bNQYUTpmgoaeUhruR')
      .then((result) => {
        console.log(result.text);
        console.log("Message sent");
        alert('Message Sent');
      }, (error) => {
        console.log(error.text);
      });
  
    e.target.reset();
  };
  

  return (
    <div className="home-container" style={{ backgroundImage: `url(${newyorkImage})` }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container ">
          <Link to="/" className="navbar-brand ">
            <img src="../roamease.jpg" alt="Roamease" className="navbar-logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
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
                <Link to="/collection" className="nav-link">
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
              <li className={`nav-item ${location.pathname === '/contactus' ? 'active' : ''}`}>
          <Link to="/contactus" className="nav-link">
            <FontAwesomeIcon icon={faAddressCard} />
            <span className="nav-link-text">Contact</span>
          </Link>
        </li>
            </ul>
          </div>
        </div>
      </nav>

   

      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <h1 className="mb-4 contact">Contact Us</h1>
        </div>
      </div>

      <div className="container-fluid d-flex flex-column justify-content-center align-items-center h-100">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <form ref={form} onSubmit={sendEmail} className="w-100">
              <div className="card">
                <div className="card-body">
                  <div className="mb-3">
                    <input type="text" className="form-control form-control-lg" id="name" name="name" placeholder="Name" />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control form-control-lg" id="email" name="email" placeholder="Email" />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control form-control-lg" id="message" name="message" placeholder="Message" rows="5"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg btn1">Submit</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="card w-100">
              <div className="card-body">
                <h5 className="card-title">Founders:</h5>
                <p className="card-text">
                  Khushi Shukla<br />
                  Email: shuklakhushim2@gmail.com<br />
                  <a href="https://www.linkedin.com/in/khushi-shukla-ba2310212/" className="text-decoration-none">LinkedIn</a>
                </p>
                <p className="card-text">
                  Tanish Bansal<br />
                  Email: shuklakhushim2@gmail.com<br />
                  <a href="https://linkedin.com/in/example" className="text-decoration-none">LinkedIn</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
