import React from 'react'

function Footer() {
  return (
    <>
    <footer className='flex p-[40px] flex-col md:w-[80%] mx-auto '>
      <div className='grid grid-cols-2 md:grid-cols-6 gap-[30px] '>

        <div>
          <h3 className='mb-[20px]'>Product</h3>
          <ul className='flex flex-col gap-[15px] text-sm'>
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions</li>
            <li>Tutorials</li>
            <li>Pricing</li>
            <li>Release</li>
          </ul>

        </div>
        <div>
        <h3 className='mb-[20px]'>Company</h3>
          <ul className='flex flex-col gap-[15px] text-sm'>
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Medal list</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
        <h3 className='mb-[20px]'>Resources</h3>
          <ul className='flex flex-col gap-[15px] text-sm'>
            <li>Blog</li>
            <li>NewsLetter</li>
            <li>Events</li>
            <li>Help center</li>
            <li>Pricing</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
        <h3 className='mb-[20px]'>Use cases</h3>
          <ul className='flex flex-col gap-[15px] text-sm'>
            <li>Startups</li>
            <li>Enterprise</li>
            <li>Goverment</li>
            <li>SaaS</li>
            <li>Market place</li>
            <li>Ecommerce</li>
          </ul>
        </div>
        <div>
        <h3 className='mb-[20px] font-bold'>Legal</h3>
          <ul className='flex flex-col gap-[15px] text-sm'>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Settings</li>
            <li>Pricing</li>
            <li>Release</li>
          </ul>
        </div>
         <div>
         <h3 className='mb-[20px]'>Product</h3>
          <ul className='flex flex-col gap-[15px] text-sm'>
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions</li>
            <li>Tutorials</li>
            <li>Pricing</li>
            <li>Release</li>
          </ul>
         </div>


      </div>


      <div className='mt-[40px] flex justify-between items-center'>
      <h2 className="text-2xl font-bold">Notely</h2>

      <span className='text-sm'>@ 2022 All rights reserved</span>

      </div>
    </footer>
    </>
  )
}

export default Footer