import {collection,doc,getDoc,getDocs,orderBy,query} from "firebase/firestore"



export const UserNote = async (firebaseDb,emailId)=>{
    const feeds =    await getDocs(query
        (collection(firestoreDb,"videos",emailId),orderBy('id','desc')));

        return feeds.docs.map(doc=>doc.data())
}



export const CreateNote = async (email,data)=>{
return data

}


