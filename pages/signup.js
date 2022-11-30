import React from 'react'
import Image from "next/image"
import Link from "next/link"

function Signup() {
  return (
    <div className='w-full h-screen bg-[#EEEEEE] flex items-center justify-center relative overflow-hidden'>

<div className='absolute -top-[80px] left-0  '>
        <Image src="/shape.svg" width={500} height={100} alt="icon"/>
        </div>
        <div className='absolute -bottom-[150px] right-0 rotate-180  '>
        <Image src="/shape.svg" width={500} height={100} alt="icon"/>
        </div>


    <div className='flex flex-col items-center justify-center p-4 -mt-[30px]'>
        <h1 className='font-bold text-2xl mb-[10px] text-center'>Welcome Onboard!</h1>
        <p>Lets hep you in your note taking journey</p>
        <Image src="/undraw_mobile_ux_re_59hr 1.svg" width={150} height={100} alt="icon"/>
        <form className='mt-[10px] flex flex-col  gap-[5px]'>

        <div>
                    <label className='font-extrabold text-sm'>Full name</label>
                    <div className='bg-white w-[280px] rounded-full flex items-center px-2 '><input type="text" placeholder="Mary Elliot" className='bg-transparent p-2 focus:outline-none'/></div>
                </div>


            <div>
                <label className='font-extrabold text-sm'>Email</label>
                <div className='bg-white w-[280px] rounded-full  flex items-center px-2'><input type="email" placeholder="info@gmail.com" className='bg-transparent p-2 focus:outline-none'/></div>
            </div>

            <div>
                <label className='font-extrabold text-sm'>Password</label>
                <div className='bg-white w-[280px] rounded-full flex items-center px-2 '><input type="email" placeholder="xxxxxxxxxxx" className='bg-transparent p-2 focus:outline-none'/></div>
            </div>

            <div>
                    <label className='font-extrabold text-sm'>Confirm Password</label>
                    <div className='bg-white w-[280px] rounded-full flex items-center px-2 '><input type="email" placeholder="xxxxxxxxxxx" className='bg-transparent p-2 focus:outline-none'/></div>
                </div>

           

            <div>
                <button className='text-black bg-[#3FD088] w-[280px] p-2  text-1xl font-black rounded-md mt-[20px]'>Register</button>
            </div>
            <div>
                <p className='font-extrabold mt-[15px] ml-[40px]'>Already have an account? <span className='text-[#3FD088] cursor-pointer'><Link href="login">Sign in</Link></span></p>
            </div>
            <div className='text-[#3FD088] ml-[40px] flex items-center justify-center'>
                    <Link href="/">Go back Home</Link>
                </div>
        </form>
    </div>

</div>
  )
}

export default Signup