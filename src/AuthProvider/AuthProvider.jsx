import { createContext, useEffect, useState } from "react";
import auth from './../Firebase/FirebaseConfig';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
 const [user,setUser]=useState(null);
 const createUser=(email,password)=>{
  return  createUserWithEmailAndPassword(auth, email, password)
  
  }
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        // User is signed out
        // ...
      }
    });
    
  }
  ,[]);
  const signInUser=(email,password)=>{
 return signInWithEmailAndPassword(auth, email, password)
  }
 
    return (
       <AuthContext.Provider value={{createUser,signInUser}}>
        {
            children
        }
       </AuthContext.Provider>
    );
};

export default AuthProvider;