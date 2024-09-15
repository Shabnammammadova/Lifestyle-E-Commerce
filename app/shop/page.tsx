import React from "react";
import { Button } from "@/components/ui/button"

const Shop = () => {
  return (
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
  );
};

export default Shop;
