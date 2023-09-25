import {createContext, useContext, useState } from "react";

export const AuthContext=createContext();
export const useAuth=()=>useContext(AuthContext);

export default function AuthProvider({children}){
    const[isAuthenicated,setAuthenicated]=useState(false)
    const[userName,setUserName]=useState(null);
    const[password,setPassword]=useState(null)
    function login(userName,password){
        if(userName==="durga" && password ==="1122"){
            setAuthenicated(true);
            setUserName(userName);
            setPassword(password);
            return true
        }else{
            setAuthenicated(false);

            setUserName(null)
            setPassword(null)
            window.alert("Invalid Credentials");
            return false
        }
       

    }
    function logout(){
        isAuthenicated(false);
        setUserName(null)
        setPassword(null)
    }
 
 return (
    <>
    <AuthContext.Provider value={{isAuthenicated,login,logout,userName,password}}>
        {children}

    </AuthContext.Provider>
    </>
 ) 
  }
