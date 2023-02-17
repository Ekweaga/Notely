import React,{useContext, useState} from 'react'
import Image from 'next/image'
import Head from "next/head"
import Link from "next/link"
import {firebaseapp} from "./components/firebase"
import {getFirestore} from "firebase/firestore"
import {getAuth} from  "firebase/auth";
import {setDoc,doc} from "firebase/firestore"
import { updateDoc,arrayUnion, onSnapshot } from "firebase/firestore"; 
import { AuthContext, AuthProvider } from '../services/Context/context'

function Create() {
  const [title,setTitle] = useState('')
  const [notes,setNotes] = useState('')
  const [error,setError] = useState('')
  const [loading,setLoading] = useState(false);
  const projectfirestore = getFirestore(firebaseapp)
  const {user} = useContext(AuthContext)

  const create = async ()=>{
    setLoading(true)
      if(title == "" || notes==""){
          setError("Empty fields")
          setLoading(false)
      }

      else{
        try{
          await updateDoc(doc(projectfirestore,"singleUser",`${user?.email}`),{
            saveShows:arrayUnion({
                title:title.toUpperCase(),
                note:notes
            })
          }).then(()=>{
            setLoading(false)
          })
        }

        catch{

        }
        }
      
  }
  return (
   <>
   <Head>
    <title>
      Create a note
    </title>
   </Head>
<AuthProvider>
   <div className='flex items-center justify-center p-3 '>
    <div className='flex flex-col items-center justify-center'>
      <div className='flex items-center justify-between w-[100%] gap-[250px] p-3 '>
        <div><Link href="/notes"><Image src="/Frame 14.png" width={80} height={50} alt="notesvAack"/></Link></div>
        <div><Image src="/Group 3.png" width={20} height={50} alt="notesvAack"/></div>
      </div>
<br/>
<div><input type="text" placeholder='Title' className='bg-[#D9D9D9] p-2 w-[350px] h-[50px] rounded-lg text-black focus:outline-none focus:border:none' onChange={(e)=>setTitle(e.target.value)}/></div>
      <div>
        <textarea rows={10} cols={43} className="focus:outline-none focus:border:none p-4" placeholder="Write your notes" onChange={(e)=>setNotes(e.target.value)}/>
      </div>

      <div>
                    <button className='text-black bg-[#3FD088] w-[350px] h-[50px] p-2  text-1xl font-black rounded-md mt-[20px]' onClick={create}>Save note</button>
                </div>
    </div>
    
   </div>
   </AuthProvider>
   </>
  )
}

export default Create
