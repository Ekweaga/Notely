import { firebaseapp } from "../../pages/components/firebase";
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
            doc(firebasedb, "specificusers",email), {
              savedNotes:[]
            });
    })
  
   }
   catch(err){
      console.log(err.message)
   }
  
    }

     static login = async (email,password) =>{
        await signInWithEmailAndPassword(auth,email,password)
    }

    static logout = async()=>{
                await signOut(auth)
    }
}