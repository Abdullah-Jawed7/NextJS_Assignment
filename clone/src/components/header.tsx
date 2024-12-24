"use client"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    //#b73439
    //#013777
    return(
        <>
        <div className="flex px-7 md:px-12 flex-col h-16 sm:h-28  bg-gradient-to-b from-[#000409] to-[#011c3a]">
            <div className="hidden sm:flex justify-between h-8 align-middle items-center">
                <div>
                    <h3  className="text-sm text-white">

                    Download App via SMS
                    </h3>
                    </div>
                <div className="flex ">
                    <button className="font-medium  transition-all duration-500 hover:text-[#b73439] text-sm text-white mr-3">Sign Up</button>
                    <button className="font-medium  transition-all duration-500 hover:text-[#b73439] text-sm text-white">Sign In</button>

                </div>
            </div>
            <div className="hidden sm:flex h-[2px] bg-[#302f2e]"></div> 
            <div className="flex justify-between  pt-4">
            <Image
          className=""
          src="https://wsa1.pakwheels.com/assets/new-pw-logo-white-c4cd16ae34613cc1fa16d7840f34a71e.svg"
          alt="logo"
          width={150}
          height={38}
          priority
        />
        <div>
            <ul className="hidden md:flex  justify-evenly md:gap-1 lg:gap-5 xl:gap-10 h-full items-center">

                <li className="text-white text-md font-medium  transition-all duration-500 hover:text-[#b73439]">UsedCars</li>
                <li className="text-white text-md font-medium  transition-all duration-500 hover:text-[#b73439]">NewCars</li>
                <li className="text-white text-md font-medium  transition-all duration-500 hover:text-[#b73439]">Bikes</li>
                <li className="text-white text-md font-medium  transition-all duration-500 hover:text-[#b73439]">AutoStore</li>
                <li className="text-white text-md font-medium  transition-all duration-500 hover:text-[#b73439]">Video</li>
                <li className="text-white text-md font-medium  transition-all duration-500 hover:text-[#b73439]">Forum</li>
                <li className="text-white text-md font-medium  transition-all duration-500 hover:text-[#b73439]">Blog</li>
                <Link href={"/customer"}>

                <li className="text-white text-lg font-medium  transition-all duration-500 hover:text-[#b73439]">Customers</li>
                </Link>
                <li><button className="w-32 h-10 bg-[#b73439] rounded-md text-white text-md">Post an Ad</button></li>
            </ul>
        </div>

        <button onClick={()=>setIsMenuOpen(!isMenuOpen)} className="md:hidden">
        <svg
         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white size-8 ">
  <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
</svg>

        </button>

        </div>
            </div>
            {isMenuOpen && (
         <div className="z-10 w-full bg-gradient-to-b from-[#011c3a] to-[#013777]">
         <ul className="flex flex-col items-start md:hidden pl-4 pt-4 gap-4  h-full ">

             <li onClick={()=>setIsMenuOpen(!isMenuOpen)}  className="text-white text-md font-medium  transition-all duration-500 hover:text-[#b73439]">UsedCars</li>
             <li onClick={()=>setIsMenuOpen(!isMenuOpen)}  className="text-white text-md font-medium  transition-all duration-500 hover:text-[#b73439]">NewCars</li>
             <li onClick={()=>setIsMenuOpen(!isMenuOpen)}  className="text-white text-md font-medium  transition-all duration-500 hover:text-[#b73439]">Bikes</li>
             <li onClick={()=>setIsMenuOpen(!isMenuOpen)}  className="text-white text-md font-medium  transition-all duration-500 hover:text-[#b73439]">AutoStore</li>
             <li onClick={()=>setIsMenuOpen(!isMenuOpen)}  className="text-white text-md font-medium  transition-all duration-500 hover:text-[#b73439]">Video</li>
             <li onClick={()=>setIsMenuOpen(!isMenuOpen)}  className="text-white text-md font-medium  transition-all duration-500 hover:text-[#b73439]">Forum</li>
             <li onClick={()=>setIsMenuOpen(!isMenuOpen)}  className="text-white text-md font-medium  transition-all duration-500 hover:text-[#b73439]">Blog</li>
             <li onClick={()=>setIsMenuOpen(!isMenuOpen)}  className="text-white text-md font-medium  transition-all duration-500 hover:text-[#b73439]">More</li>
             <li onClick={()=>setIsMenuOpen(!isMenuOpen)} ><button className="w-32 h-10 bg-[#b73439] rounded-md text-white text-md">Post an Ad</button></li>
         </ul>
     </div>

    )}
      
      
        </>
    )
}