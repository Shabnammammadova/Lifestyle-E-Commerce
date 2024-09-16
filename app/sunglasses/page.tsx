import Image from 'next/image'
import React from 'react'

const Sunglasses = () => {
  return (
    <>
    <section className='flex w-full justify-between'>
      <div className='bg-orange-50 w-1/2'><p className='uppercase relative z-0 text-black top-2/4 font-serif text-5xl left-24'><span className='text-8xl'>Comfort &</span><br />
      Magic awaits.</p></div>
      <div><Image src="https://lifestyle-eta.vercel.app/images/hero-benner-1.png" alt='image' width={955} height={770}/></div>
    </section>
    </>
  )
}

export default Sunglasses