import Image from 'next/image'
import React from 'react'

const Wishlist = () => {
  return (
    <div className='flex items-center flex-col gap-4 justify-center mt-40 mb-40 mx-auto'>
        <Image src="https://lifestyle-eta.vercel.app/images/Frame.svg" alt='basket' width={70} height={70}/>
        <p className='font-serif text-2xl'>Your shopping wishList is empty</p>
        <p>Looks like you have not added anything to your wishList. Go ahead & explore top categories.</p>
    </div>
  )
}

export default Wishlist
