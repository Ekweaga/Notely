import {collection,doc,getDoc,getDocs,orderBy,query} from "firebase/firestore"



export const UserNotes = async (firebaseDb,emailId)=>{
    const feeds =    await getDocs(query
        (collection(firestoreDb,"videos",emailId),orderBy('id','desc')));

        return feeds.docs.map(doc=>doc.data())
}



export const CreateNote = async (email,title,note)=>{
let data = {
    title:title.toUpperCase(),
    note:note
}
if(title == "" || note==""){
    setError("Empty fields")
    setLoading(false)
}

else{
  try{
    await updateDoc(doc(projectfirestore,"singleUser",`${email}`),{
      saveShows:arrayUnion({
         data
      })
    }).then(()=>{
      setLoading(false)
    })
  }

  catch{

  }
  }

}


