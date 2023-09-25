import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../Security/AuthContext';

const Adminlogin = () => {
  const navigate=useNavigate();
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // if(authContext.login(username,password)){
    //   navigate("/")
    //   return;
    // }
    

    // try {
    //   const response = await axios.get(`http://localhost:8080/ascentitllc/login/${username}/${password}`);

    
    // } catch (error) {
    //   console.error('Login failed:', error);
    //   // Handle login failure (show error message, etc.)
    // }
  };

  return (
    <div className="wrapper">
      <div className="logo">
        <img src="ADMINLOGO.jpeg" alt="" />
      </div>
      <div className="text-center mt-4 name">Admin login</div>
      <form className="p-3 mt-3">
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn mt-3" onClick={handleLogin}>
          Login
        </button>
      </form>
      <div className="text-center fs-6">
        <a href="#">Forget password?</a> or <a href="#">Sign up</a>
      </div>
    </div>
  );
};

export default Adminlogin;
