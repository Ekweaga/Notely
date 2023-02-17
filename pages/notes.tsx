import React from 'react'
import Image from 'next/image'
import Head from "next/head"
import Link from "next/link"

function Notes() {
  return (
   <>
    <Head>
    <title>Saved notes</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/Logomark.png" />
  </Head>
   <div className='h-[100vh] relative'>
    <div className='flex items-center justify-center p-3 '>
    <div className='flex flex-col items-center justify-center'>
      <div className='flex items-center justify-between w-[100%] gap-[250px] p-3 '>
        <div><Link href="/"><h1 className='font-bold text-2xl'>Notely</h1></Link></div>
        <div><Image src="/Group 3.png" width={40} height={50} alt="notesvAack"/></div>
      </div>
<br/>
<div><input type="text" placeholder='Search' className='bg-[#D9D9D9] p-2 w-[350px] h-[40px] rounded-lg text-black focus:outline-none focus:border:none'/></div>
      <br/><br/>
<div className='grid-cols-2 grid gap-[20px]'>
  <div className='bg-[#A692F9] text-white p-2 rounded-2xl'>
    <h1>What is a logo?</h1>
    <p>
      This question probably conjures up vivid images of
       a famous swoosh or an apple with a bite taken out of it. After all, we all know what a logo is.
</p>
    </div>
  <div className='bg-[#A692F9] text-white p-2 rounded-2xl'>
  <h1>What is a logo?</h1>
    <p>
      This question probably conjures up vivid images of
       a famous swoosh or an apple with a bite taken out of it. After all, we all know what a logo is.
</p>
  </div>
  <div className='bg-[#A692F9] text-white p-2 rounded-2xl'>
  <h1>What is a logo?</h1>
    <p>
      This question probably conjures up vivid images of
       a famous swoosh or an apple with a bite taken out of it. After all, we all know what a logo is.
</p>
  </div>
  <div className='bg-[#A692F9] text-white p-2 rounded-2xl'> <h1>What is a logo?</h1>
    <p>
      This question probably conjures up vivid images of
       a famous swoosh or an apple with a bite taken out of it. After all, we all know what a logo is.
</p></div>
  <div className='bg-[#A692F9] text-white p-2 rounded-2xl'> <h1>What is a logo?</h1>
    <p>
      This question probably conjures up vivid images of
       a famous swoosh or an apple with a bite taken out of it. After all, we all know what a logo is.
</p></div>

<div className='bg-[#A692F9] text-white p-2 rounded-2xl'> <h1>What is a logo?</h1>
    <p>
      This question probably conjures up vivid images of
       a famous swoosh or an apple with a bite taken out of it. After all, we all know what a logo is.
</p></div>


</div>
     
    </div>
    
   </div>
<div className="absolute bottom-0 md:left-[600px] left-[150px] flex items-center justify-center">
 <Link href="/create"> <Image src="/Group 1.png" width={100} height={50} alt="notesvAack"/></Link>
</div>
   </div>
   </>
  )
}

export default Notes