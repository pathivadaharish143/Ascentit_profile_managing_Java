import './App.css'

import Header from './components/Header';
import Footer from './components/Footer';
import Submittion from './components/Submittion';
import{ BrowserRouter, Route, Routes } from "react-router-dom"
import Profiles from './components/Profiles';
import Login from './components/Employee/Login';
import View from './components/View';
import Edit from './components/Edit';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Requirements from './components/Requirements';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (

    <div className="App">
      
    <BrowserRouter>
       <Header />
    <Routes>
      {/* Default Route - Home Page (Public) */}
      <Route path='/' element={<Home />}/>
      
      {/* Public Routes */}
      <Route path='/home' element={<Home />}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/contact' element={<ContactUs />} />
      
      {/* Protected Routes - Require Authentication */}
      <Route path='/dashboard' element={
        <ProtectedRoute>
          <Dashboard/>
        </ProtectedRoute>
      }/> 
      <Route path='/submission' element={
        <ProtectedRoute>
          <Submittion/>
        </ProtectedRoute>
      } />
      <Route path='/requirements' element={
        <ProtectedRoute>
          <Requirements />
        </ProtectedRoute>
      } />
      <Route path='/profiles' element={
        <ProtectedRoute>
          <Profiles />
        </ProtectedRoute>
      }/>
      <Route path='/view/:id' element={
        <ProtectedRoute>
          <View/>
        </ProtectedRoute>
      }/>
      <Route path='/edit/:id' element={
        <ProtectedRoute>
          <Edit/>
        </ProtectedRoute>
      }/>
    </Routes>
    <Footer />
    </BrowserRouter>

 
    </div>
  );
}
export default App;
