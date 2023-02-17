import React from 'react'
import Image from "next/image"
import Link from "next/link"
import {AuthUser} from "../services/AuthServices/auth_service"
import Head from 'next/head'

function login() {
  return (
    <>

<Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Logomark.png" />
      </Head>
    <div className='w-full h-screen bg-[#EEEEEE] flex items-center justify-center relative overflow-hidden'>

        <div className='absolute -top-[80px] left-0 '>
        <Image src="/shape.svg" width={300} height={100} alt="icon"/>
        </div>
        <div className='absolute -bottom-[100px] right-0 rotate-180  '>
        <Image src="/shape.svg" width={300} height={100} alt="icon"/>
        </div>

        <div className='flex flex-col items-center justify-center p-4 -mt-[30px]' style={{zIndex:3}}>
            <h1 className='font-bold text-2xl mb-[20px] text-center'>Welcome Back!</h1>
            <Image src="/undraw_access_account_re_8spm 1.svg" width={150} height={100} alt="icon"/>
            <form className='mt-[30px] flex flex-col  gap-[10px]'>
          

                <div>
                    <label className='font-extrabold text-sm'>Email</label>
                    <div className='bg-white w-[350px] rounded-full  flex items-center px-2'><input type="email" placeholder="info@gmail.com" className='h-[50px] bg-transparent p-2 focus:outline-none'/></div>
                </div>

                <div>
                    <label className='font-extrabold text-sm'>Password</label>
                    <div className='bg-white w-[350px] rounded-full flex items-center px-2 '><input type="email" placeholder="xxxxxxxxxxx" className=' h-[50px] bg-transparent p-2 focus:outline-none'/></div>
                </div>

               

                <div>
                    <p className='font-extrabold text-sm text-[#3FD088] float-right cursor-pointer'><Link href="forgot">Forgot Password?</Link></p>
                </div>

                <div>
                    <button className='text-black bg-[#3FD088] w-[350px] h-[50px] p-2  text-1xl font-black rounded-md mt-[20px]'>Login</button>
                </div>
                <div>
                    <p className='font-extrabold mt-[15px] ml-[40px]'>Dont have an account? <span className='text-[#3FD088] cursor-pointer text-sm'><Link href="signup">Sign up</Link></span></p>
                </div>

                <div className='text-[#3FD088] ml-[40px] flex items-center justify-center'>
                    <Link href="/">Go back Home</Link>
                </div>
            </form>
        </div>

    </div>
      
    </>
  )
}

export default login
