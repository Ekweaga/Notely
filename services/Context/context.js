import { onAuthStateChanged ,getAuth} from "firebase/auth";
import { createContext, useContext, useState,useEffect } from "react";
import { FirebaseApp } from "firebase/app";
import { firebaseapp } from "../../Firebase/firebase";

export const AuthContext = createContext();


export const AuthProvider = ({children})=>{
    const [user,setUser] = useState({})
    const[mode,setMode] = useState(false)

    const auths = getAuth(firebaseapp)

    useEffect(()=>{
        onAuthStateChanged(auths,(user)=>{
               setUser(user)
               
           })
       },[auths])
    return(
        <AuthContext.Provider value={{user,mode,setMode}}>
            {children}
        </AuthContext.Provider>
    )
}