import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Sunglasses = () => {
  return (
    <>
      <section className="flex w-full justify-between">
        <div className="bg-orange-50 w-1/2">
          <p className="uppercase relative z-0 text-black top-2/4 font-serif text-5xl left-24">
            <span className="text-8xl">Comfort &</span>
            <br />
            Magic awaits.
          </p>
        </div>
        <div>
          <Image
            src="https://lifestyle-eta.vercel.app/images/hero-benner-1.png"
            alt="image"
            width={955}
            height={770}
          />
        </div>
      </section>
      <div className="flex gap-60 mt-20 mb-20 ">
        <div className="pl-10 pr-10 flex flex-col gap-5">
          <p className="text-2xl flex flex-col font-serif">
            Summer 2023
            <span className="uppercase relative z-0 text-black font-serif text-4xl">
              Collection
            </span>
          </p>
          <p>
            Sunglasses with Italian designs! Whatever the <br />
            occasion be, these unique luxury designs are <br /> going to stand
            out.
          </p>
          <Button
            className="1px divide-solid bg-transparent text-black pt-5 pb-5 pl-24 pr-24 max-w-[300px]"
            variant={"outline"}
          >
            Shop All
          </Button>
        </div>
        <div className="flex gap-60 overflow-x-scroll">
        <div className="max-w-sm ">
          <Image src="https://lifestyle-eta.vercel.app/images/gogals-product-2.png" alt="sunglasses" width={300} height={300}/>
<div className="text-center font-serif">
<a href="#">
            <h5 className="mb-2 text-2xl  tracking-tight text-gray-400 dark:text-white font-serif">
              Sunglasses1
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-2xl">
            Round Framed
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            $59,00
          </p>
          <Button
            className="1px divide-solid bg-transparent text-black pt-5 pb-5 pl-24 pr-24 max-w-[300px]"
            variant={"outline"}
          >
            Buy
          </Button>
</div>
        </div>
        <div className="max-w-sm ">
          <Image src="https://lifestyle-eta.vercel.app/images/gogals-product-2.png" alt="sunglasses" width={300} height={300}/>
<div className="text-center font-serif">
<a href="#">
            <h5 className="mb-2 text-2xl  tracking-tight text-gray-400 dark:text-white font-serif">
              Sunglasses1
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-2xl">
            Round Framed
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            $59,00
          </p>
          <Button
            className="1px divide-solid bg-transparent text-black pt-5 pb-5 pl-24 pr-24 max-w-[300px]"
            variant={"outline"}
          >
            Buy
          </Button>
</div>
        </div>
        <div className="max-w-sm ">
          <Image src="https://lifestyle-eta.vercel.app/images/gogals-product-2.png" alt="sunglasses" width={300} height={300}/>
<div className="text-center font-serif">
<a href="#">
            <h5 className="mb-2 text-2xl  tracking-tight text-gray-400 dark:text-white font-serif">
              Sunglasses1
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-2xl">
            Round Framed
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            $59,00
          </p>
          <Button
            className="1px divide-solid bg-transparent text-black pt-5 pb-5 pl-24 pr-24 max-w-[300px]"
            variant={"outline"}
          >
            Buy
          </Button>
</div>
        </div>
        </div>

      </div>
    </>
  );
};

export default Sunglasses;
