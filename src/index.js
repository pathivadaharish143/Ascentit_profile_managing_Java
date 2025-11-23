import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/js/bootstrap.min.js'; 
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'font-awesome/css/font-awesome.min.css'; // Font Awesome CSS
import { ToastContainer } from 'react-toastify';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
   
   
  
    <ToastContainer />

  </>
);

reportWebVitals();