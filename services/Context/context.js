import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useState,useEffect } from "react";

const AuthContext = createContext();


export const AuthProvider = ({children})=>{
    const [user,setUser] = useState({})



    useEffect(()=>{
         
    },[])
    return(
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}