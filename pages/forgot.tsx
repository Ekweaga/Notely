import React from 'react'
import Link from "next/link"

function Forgot() {
  return (
    <div className='w-full h-screen bg-[#EEEEEE] flex items-center justify-center relative overflow-hidden'>
            <form className='mt-[30px] flex flex-col  gap-[10px]'>
          

          <div>
              <label className='font-extrabold text-sm'>Enter Email Address</label>
              <div className='bg-white w-[280px] rounded-full  flex items-center px-2'><input type="email" placeholder="Enter registered email" className='bg-transparent p-2 focus:outline-none'/></div>
          </div>

          <div>
                    <button className='text-black bg-[#3FD088] w-[280px] p-2  text-1xl font-black rounded-md mt-[20px]'>Send</button>
                </div>
               

                <div className='text-[#3FD088] ml-[30px] flex items-center justify-center'>
                    <Link href="/">Go back Home</Link>
                </div>
          
          </form>
      
    </div>
  )
}

export default  Forgot
