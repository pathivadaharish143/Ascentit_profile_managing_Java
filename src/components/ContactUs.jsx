import React from 'react';
import './Dashboard.css';

const ContactUs = () => (
  <div className="contactus-bg">
    <div className="contactus-row">
      <div className="contactus-card">
        <h1>Contact Us</h1>
        <div className="contactus-info">
          <p><strong>Phone:</strong> <a href="tel:2294660709">229-466-0709</a></p>
          <p><strong>Email:</strong> <a href="mailto:hr@ascentitllc.com"><i className="fa fa-envelope" style={{marginRight:'6px'}}></i>hr@ascentitllc.com</a></p>
          <p><strong>Address:</strong> 410 Peachtree Parkway, Suite 4245<br />Cumming GA 30028</p>
          <p><strong>Available Daily:</strong> 9am - 5pm</p>
        </div>
      </div>
      <div className="contactus-card">
        <h2 style={{fontSize: '1.2rem', color: '#2563eb', marginBottom: '1rem'}}>IT Desk Support</h2>
        <div className="contactus-info">
          <p><strong>Name:</strong> Harish</p>
          <p><strong>Phone:</strong> <a href="tel:3348953769">334-8953769</a></p>
          <p><strong>Email:</strong> <a href="mailto:harishpathivada.it@gmail.com"><i className="fa fa-envelope" style={{marginRight:'6px'}}></i>harishpathivada.it@gmail.com</a></p>
        </div>
      </div>
    </div>
  </div>
);

export default ContactUs;
