"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const Header = () => {
  const pathname = usePathname();

  return (
    <div className="fixed z-50 w-full bg-[#F3E6DA]">
      <div className="flex items-center justify-between px-4 lg:px-10 py-6">
        {/*Navigation Links */}
        <div className="hidden xl:flex gap-6 items-center font-serif text-lg">
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

        {/*Logo */}
        <div className="flex justify-center w-full xl:w-auto">
          <Image
            width={50}
            height={50}
            src="https://lifestyle-eta.vercel.app/new-image/sticky-logo.svg"
            alt="logo"
            className="mx-auto"
          />
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden xl:block">
            <UserButton />
          </div>
          <FavoriteBorderIcon className="hidden xl:block cursor-pointer" />
          {/* <Link href="/basket"><ShoppingBasketOutlinedIcon/></Link> */}
<Dialog>
  <DialogTrigger asChild>
    <ShoppingBasketOutlinedIcon className="cursor-pointer"/>
  </DialogTrigger>
  <div className="flex">
  <DialogContent className="sm:max-w-[400px] min-h-screen bg-[#F3E6DA] fixed left-[87%]">
    <DialogHeader>
      <DialogTitle className="text-3xl">Cart</DialogTitle>
    </DialogHeader>
    <DialogDescription>
      incl. 20% VAT. excl. Shipping costs11.80€
      </DialogDescription>
      <hr />
  <div className="flex justify-between">
    <p>Subtotal</p>
    <p>70.80€</p>
  </div>
      <div className="flex flex-col gap-3 justify-center">
      <Button type="submit">View cart</Button>
      <Button type="submit">Checkout</Button>
      </div>
 
  </DialogContent>
</div>
</Dialog>
</div>
          <MenuIcon className="xl:hidden cursor-pointer" />
        </div>
      </div>
  );
};

export default Header;
