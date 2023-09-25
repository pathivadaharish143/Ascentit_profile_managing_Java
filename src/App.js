import logo from './logo.svg';
import './App.css'

import Header from './components/Header';
import Footer from './components/Footer';
import Submittion from './components/Submittion';
import{ BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Profiles from './components/Profiles';
import Login from './components/Employee/Login';
import Adminlogin from './components/Admin/Adminlogin';
import View from './components/View';
import Edit from './components/Edit';
import Dashboard from './components/Dashboard';


// function AuthenticatedRoute({children}){
//   const authContext=useAuth();
//   if(authContext.isAuthenicated){
//     return children
//   }
//   return 

//   <Navigate to={"/login"}/>
// }

function App() {
  return (

    <div className="App">
      
    <BrowserRouter>
       <Header />
    <Routes>
    
   
    <Route path='/login' element={<Login/>}/>
      <Route path='/submission' element={<Submittion/>} />
      <Route path='/' element={<Profiles/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/> 
      <Route path='/login' element={<Login />} />
      <Route path='/adminlogin' element={<Adminlogin/>}/>
      <Route path='/view/:id' element={<View/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
      <Route path='/profiles' element={<Profiles />}/>
      
    </Routes>
    <Footer />
    </BrowserRouter>
 
    </div>
  );
}
export default App;
