import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='flex items-center pt-20 bg-orange-50 flex-col'>
      <Image src="https://lifestyle-eta.vercel.app/new-image/logo.svg" alt='image-logo' width={155} height={40} className='mx-auto'/>
    
    <div className='flex mt-20 w-full mx-auto justify-evenly font-sans text-black text-xl'>
<ul>
  <p className='mb-8'>Social</p>
  <li className='hover:underline'>Instagram</li>
  <li className='hover:underline'>Facebook</li>
  <li className='hover:underline'>Twitter</li>
  <li className='hover:underline'>Linkedin</li>
</ul>
<ul>
  <p className='mb-8'>Lifestyle Fashion</p>
  <li className='hover:underline'>Shop</li>
  <li className='hover:underline'>Contact</li>
</ul>
<ul>
  <p className='mb-8'>Legal</p>
  <li className='hover:underline'>Terms & Conditions</li>
  <li className='hover:underline'>Privacy Policy</li>
  <li className='hover:underline'>Contact</li>
</ul>
<ul>
  <p className='mb-8'>Region</p>
  <li className='hover:underline'>Finland|UK|</li>
</ul>
    </div>
    <div className='flex items-center pt-12 pb-9 w-full mx-auto justify-evenly font-sans'>
      <p>Copyright 2023 Lifestyle Fashion</p>
      <p>All rights reserved.</p>
    </div>
    </div>
    </div>
  )
}

export default Footer