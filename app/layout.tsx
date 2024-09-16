import type { Metadata } from "next";
import localFont from "next/font/local";
import {} from 'next/font/local'
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


const barlow = localFont({
  src: "./fonts/Barlow-Regular.ttf",
  variable: "--font-barlow",
});
const sans = localFont({
  src:"./fonts/OpenSans-VariableFont_wdth,wght.ttf",
  variable:"--font-sans"
});
const tinos = localFont({
  src:"./fonts/Tinos-Regular.ttf",
  variable:"--font-tinos"
})
const playfair = localFont({
  src:"./fonts/PlayfairDisplay-VariableFont_wght.ttf",
  variable:"--font-playfairdisplay"
})

export const metadata: Metadata = {
  title: "Lifestyle",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${sans.variable} ${tinos.variable} ${playfair.variable} font-sans flex flex-col justify-between`}>
        <Header/>
        <div>{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
