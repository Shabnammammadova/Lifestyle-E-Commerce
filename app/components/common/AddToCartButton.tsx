'use client';

import { addToCart } from '@/app/actions/cart';
import { toast } from 'sonner';


export const AddToCartButton = ({ productId }: { productId: string }) => {
  const handleAddToCart = () => {
    const resultPromise = addToCart({ productId, quantity: 1 });

    toast.promise(resultPromise, {
      loading: 'Adding to cart...',
      success: 'Added to cart!',
      error: 'Error adding to cart',
    });
  };
  return (
 <div className='flex'>
     <div className="w-1/2 px-2">
         <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
           Add to Favorite
          </button>
       </div>
     <div className="w-1/2 px-2">
         <button onClick={handleAddToCart} className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
           Add to Basket
          </button>
       </div>
 </div>


  );
};