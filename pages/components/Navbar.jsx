import React,{useState} from 'react'
import Image from "next/image"
import Link from "next/link"

function Navbar({user}) {
  const [open,setOpen] = useState(false)
  return (
    <>
    <nav className='flex md:justify-around p-4 h-[100px] items-center justify-between px-4 '>
        <div className='flex gap-[10px]'>
           <div>
           <Image src="/Logomark.png" width={30} height={30} alt="icon"/>
            </div> 
            <h2 className="text-2xl font-bold">Notely</h2>
        </div>

        <div className='md:flex justify-around items-center gap-[30px] hidden'>

            <ul className='flex gap-[30px]'>
                <li>About</li>
                <li>Features</li>
                <li>About</li>
            </ul>
            <button className='text-white bg-black p-2 rounded-md w-[120px]'>{user?(<span>Logout</span>):<span>Login</span>}</button>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className={`z-[99999px]  ${
            open ? "text-gray-900" : ""
          } text-3xl md:hidden `}
        >
          <Image src={open ? "/icon-close.svg" :"/icon-hamburger.svg"} alt="icon" width={20} height={15}></Image>
        </div>

        <div
          className={`md:hidden text-black absolute w-2/3 h-screen z-[99999px]
      px-7 py-2 font-medium bg-[#EEEE]  top-0 duration-300 ${
        open ? "left-0 block" : "left-0 hidden"
      }`}
        >
          <ul className="flex flex-col justify-center h-[300px] gap-10 py-2 text-lg mt-[100px]">
          <li  onClick={() => setOpen(!open)}><Link href="/">Home</Link></li>
          <li className="cursor-pointer" >
                About Us
            </li>
                
                <li  onClick={() => setOpen(!open)}>Features</li>
                <li  onClick={() => setOpen(!open)}></li>
               
                <li>  <button className='text-white bg-black p-2 rounded-md w-[120px]'><Link href="signup">Login</Link></button></li>
          </ul>
        </div>


    </nav>
      
    </>
  )
}

export default Navbar
