import { firebaseapp } from "../../Firebase/firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider} from 'firebase/auth'
import {getAuth,signOut} from  "firebase/auth";
import { RESPONSE_LIMIT_DEFAULT } from "next/dist/server/api-utils";
import {collection,doc,setDoc,getDocs,orderBy,query} from "firebase/firestore"



const auth = getAuth(firebaseapp)


 export class AuthUser{

 static register = async (email,password,firebasedb)=>{
   try{
      await createUserWithEmailAndPassword(auth,email,password).then((response)=>{
         setDoc(
            doc(firebasedb, "User",email), {
              savedNotes:[]
            });
    })
  
   }
   catch(err){
      console.log(err.message)
   }
  
    }

     static login = async (email,password) =>{

      try{
         await signInWithEmailAndPassword(auth,email,password)
      }

      catch{
         
      }
      
    }

    static logout = async()=>{
                await signOut(auth)
    }
}