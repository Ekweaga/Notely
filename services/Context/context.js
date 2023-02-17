import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useState,useEffect } from "react";

export const AuthContext = createContext();


export const AuthProvider = ({children})=>{
    const [user,setUser] = useState({})
    const[mode,setMode] = useState(false)



    useEffect(()=>{
         
    },[])
    return(
        <AuthContext.Provider value={{user,mode,setMode}}>
            {children}
        </AuthContext.Provider>
    )
}