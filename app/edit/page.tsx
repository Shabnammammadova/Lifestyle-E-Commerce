import React from 'react'

import { Input } from "@/components/ui/input";

const EditProduct = () => {
  return (

        <div className="bg-white  border-4 rounded-lg shadow relative  text-center m-40 font-serif text-3xl ">

<div className="flex items-start justify-between p-5 border-b rounded-t">
    <h3 className="text-xl font-semibold m-auto">
        Edit product
    </h3>
</div>

<div className="p-6 space-y-6">
    <form action="#">
        <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">Product Name</label>
                <Input type="text" name="product-name" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="" required/>
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">Price</label>
                <Input type="number" name="price" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="" required/>
            </div>
            <div className='col-span-6 sm:col-span-3'>
            <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">Category</label>
            <select name="select" id="" className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5'>
                <option value="">Blazer</option>
                <option value="">Shoes</option>
                <option value="">Bag</option>
                <option value="">Sunglasses</option>
            </select>
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">Image</label>
                <Input type="text" name="image" id="image" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="" required/>
            </div>
        </div>
    </form>
</div>

<div className="p-6 border-t border-gray-200 rounded-b">
    <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Updated</button>
</div>

</div>
  )
}

export default EditProduct


