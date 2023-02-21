import {collection,doc,getDoc,getDocs,orderBy,query,onSnapshot} from "firebase/firestore"



export const UserNotes =  (firebaseDb,emailId)=>{
onSnapshot(doc(firebaseDb, "User", emailId), (doc) => {
    
     
    return(doc.data()?.savedNotes)
  
});
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


