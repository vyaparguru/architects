"use client";
// import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import { FaBars, FaTimes } from "react-icons/fa";
// import Navbar from "./Navbar";

export default function Hero() {
  // const [menuOpen, setMenuOpen] = useState(false);
  // const [servicesOpen, setServicesOpen] = useState(false);
  // const [projectsOpen, setProjectsOpen] = useState(false);

  // const closeDrawer = () => {
  //   setMenuOpen(false);
  // };

  return (
    <div className="relative h-[90vh] md:h-[100vh] w-full flex flex-col md:flex-row mt-16">
      {/* Background Image */}
      <div
        className="w-full md:w-4/5 h-4/6 md:h-full bg-cover bg-center relative"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        
      </div>

      {/* Right Side Content */}
      <div className="w-full md:w-2/5 md:h-full bg-white text-black flex flex-col justify-center items-center py-16 px-6 md:p-12 md:px-20">
        <div className="text-center">
          <Image
            src="/logo2.png"
            alt="Icon"
            width={100}
            height={100}
            className="mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-5xl md:font-bold tracking-widest">
            HOUSE OF THE FUTURE
          </h1>
          <p className="mt-4 text-md md:text-lg">
            Apply now! Contemporary Architecture solutions for stylish, Urban
            residences.
          </p>
          <Link href="/services">
            <button className="mt-6 px-10 p-4 border-black cursor-pointer border-2 text-md font-bold tracking-widest bg-black text-white rounded-full hover:bg-white hover:text-black">
              VIEW MORE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}