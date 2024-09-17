"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { UserButton } from "@clerk/nextjs";


const Header = () => {
  const pathname = usePathname();

  return (
    <div className=" flex items-center justify-between fixed z-50 w-full">
      <div className="w-full pl-2 pr-2 2xl:pl-10 lg:pr-10 pt-6 pb-6 bg-[#F3E6DA] flex items-center justify-between">

        <div className="hidden xl:flex gap-3 items-center font-serif text-xl cursor-pointer ">
          <Link
            href="/shop"
            className={pathname === "/shop" ? "underline" : "text-black"} 
          >
            Shop
          </Link>
          <Link
            href="/sunglasses"
            className={pathname === "/sunglasses" ? "underline" : "text-black"}
          >
            Sunglasses
          </Link>
          <Link
            href="/bag"
            className={pathname === "/bag" ? "underline" : "text-black"}
          >
            Bag
          </Link>
          <Link
            href="/blazer"
            className={pathname === "/blazer" ? "underline" : "text-black"}
          >
            Blazer
          </Link>
          <Link
            href="/shoes"
            className={pathname === "/shoes" ? "underline" : "text-black"}
          >
            Shoes
          </Link>
        </div>
        <MenuIcon className="xl:hidden" />
        <div className="flex justify-center items-center w-full 2xl:mr-48 xl:mr-48 left-0 right-0 mx-auto">
          <Image
            width={50}
            height={50}
            src="https://lifestyle-eta.vercel.app/new-image/sticky-logo.svg"
            alt="logo"
          />
        </div>
        <div className="flex gap-5 items-center">
          {/* <PersonOutlineIcon className="hidden xl:block cursor-pointer" /> */}
          <div className="hidden xl:block cursor-pointer">
          <UserButton/>
          </div>
          <FavoriteBorderIcon className=" hidden xl:block cursor-pointer" />
          <ShoppingBasketOutlinedIcon className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
