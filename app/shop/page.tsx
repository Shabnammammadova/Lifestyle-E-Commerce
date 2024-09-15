import React from "react";
import { Button } from "@/components/ui/button"
import Image from "next/image";

const Shop = () => {
  return (
    <>
     <div className="max-w-3xl mx-auto py-40">
      <h1 className="mx-auto uppercase text-center max-w-3xl text-6xl font-sans">
        Lifestyle<p className="text-orange-500">Multipurpose</p> e-commerce shop{" "}
        <br />
        pages
      </h1>
      <p className="text-center mt-5 text-slate-400 font-sans">
        Discover the ultimate destination for your fashion cravings! Our Shop
        page is a curated gallery<br/>showcasing the latest trends and timeless
        classNameics. Indulge in a seamless shopping <br /> experience, where style
        meets convenience. Find your next wardrobe staple here!
      </p>
      <Button className="mx-auto flex mt-5 w-60 h-10">VIEW DEMO</Button>
    </div>
<section className="pt-16 pb-20 bg-orange-50 mb-2 px-48">
<div>
  <h1 className="font-sans text-center text-4xl">Quick
 <p className="text-6xl">Demo of Shop pages</p></h1>
<div className="grid grid-cols-2 my-16 gap-x-16 gap-y-11 max-w-screen-xl text-center">
  <div>
  <div className="border border-black rounded-lg h-96 overflow-hidden">
  <Image
    src="https://lifestyle-eta.vercel.app/images/shop-sunglasses-page.png"
    alt="image"
    width={535}
    height={380}
    className="cursor-pointer object-cover object-top transform transition-transform duration-500 ease-in-out hover:scale-105"
  />
</div>
<p className="font-sans text-2xl mt-5">Sunglasses Shop</p>
  </div>
<div>
<div className="border border-black rounded-lg h-96 overflow-hidden">
  <Image
    src="https://lifestyle-eta.vercel.app/images/shop-bag-page.jpg"
    alt="image"
    width={535}
    height={380}
    className="cursor-pointer object-cover object-top transform transition-transform duration-500 ease-in-out hover:scale-105"
  />
</div>
<p className="font-sans text-2xl mt-5">Bag Shop</p>
</div>
<div>
<div className="border border-black rounded-lg h-96 overflow-hidden">
  <Image
    src="https://lifestyle-eta.vercel.app/images/shop-blazer-page.jpg"
    alt="image"
    width={535}
    height={380}
    className="cursor-pointer object-cover object-top transform transition-transform duration-500 ease-in-out hover:scale-105"
  />
</div>
<p className="font-sans text-2xl mt-5">Blazer Shop</p>
</div>
<div>
<div className="border border-black rounded-lg h-96 overflow-hidden">
  <Image
    src="https://lifestyle-eta.vercel.app/images/shop-shoes-page.jpg"
    alt="image"
    width={535}
    height={380}
    className="cursor-pointer object-cover object-top transform transition-transform duration-500 ease-in-out hover:scale-105"
  />
</div>
<p className="font-sans text-2xl mt-5">Footware Shop</p>
</div>

</div>
</div>
</section>
    </>
   
  );
};

export default Shop;
