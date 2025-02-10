"use client"

import Image from "next/image";
import { FaSearch } from 'react-icons/fa';
import { CiCirclePlus } from "react-icons/ci";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-[60%] flex justify-between items-center p-6 bg-white shadow-md z-10">
      <Image
          src="/logo.png" 
          alt="Scenic View"
          // layout="fill"
          objectFit="cover"
          width={200}
          height={10}
          className="z-0"
        />
        <ul className="hidden md:flex space-x-6 font-normal text-sm text-gray-700 uppercase">
          <li>Home</li>
          <li>Pages</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Shop</li>
          <li>Elements</li>
        </ul>
        <button className="p-2"><FaSearch color="gray"/></button>
      </nav>

      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <Image
          src="/balcony.webp" 
          alt="Scenic View"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />

        {/* Text Box */}
        <div className="absolute bottom-0 left-0 bg-white p-6 px-9 pr-20 text-gray-700 shadow-lg">
          <h2 className="text-2xl font-normal">A SYMBIOTIC <br/>DESIGN</h2>
          {/* <span className="relative p-2 bg-black text-white rounded-full"> */}
            <CiCirclePlus size={30} color="white" className="bg-black rounded-full"/>
            {/* </span> */}
        </div>
      </div>
    </div>
  );
}
