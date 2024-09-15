"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
const Header = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-between fixed w-full">
      <div className="w-full p-6 bg-orange-50 flex  items-center justify-between">
        <div className="flex gap-3 items-center font-sans text-xl">
          <Link
            href="/shop"
            className={pathname === "/" ? "text-red" : "text-black"}
          >
            Shop
          </Link>
          <Link
            href="/sunglasses"
            className={pathname === "/sunglasses" ? "text-red" : "text-black"}
          >
            Sunglasses
          </Link>
          <Link
            href="/bag"
            className={pathname === "/bag" ? "text-red" : "text-black"}
          >
            Bag
          </Link>
          <Link
            href="/blazer"
            className={pathname === "/blazer" ? "text-red" : "text-black"}
          >
            Blazer
          </Link>
          <Link
            href="/shoes"
            className={pathname === "/shoes" ? "text-red" : "text-black"}
          >
            Shoes
          </Link>
        </div>

        <div>
          <Image
            width={50}
            height={50}
            src="https://lifestyle-eta.vercel.app/new-image/sticky-logo.svg"
            alt="logo"
          />
        </div>
        <div className="flex gap-5 items-center">
          <PersonOutlineIcon />
          <FavoriteBorderIcon />
          <ShoppingBasketOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;