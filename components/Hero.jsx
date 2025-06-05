"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Navbar from "./Navbar";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const closeDrawer = () => {
    setMenuOpen(false);
  };

  return (
    <div className="relative h-[90vh] md:h-[85vh] w-full flex flex-col md:flex-row mt-20 md:mt-20">
      {/* Background Image */}
      <div
        className="w-full md:w-4/5 h-4/5 md:h-full bg-cover bg-center relative"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        
      </div>

      {/* Right Side Content */}
      <div className="w-full md:w-2/5 md:h-full bg-black text-white flex flex-col justify-center items-center py-16 px-6 md:p-12 md:px-20">
        <div className="text-left">
          <Image
            src="/logo2.png"
            alt="Icon"
            width={58}
            height={60}
            className="mx-auto"
          />
          <h1 className="text-4xl md:text-5xl md:font-bold tracking-widest">
            HOUSE OF THE FUTURE
          </h1>
          <p className="mt-4 text-md md:text-lg">
            Apply now! Contemporary architecture solutions for stylish, urban
            residences.
          </p>
          <Link href="/services">
            <button className="mt-6 px-10 p-3 border-white cursor-pointer border-2 text-md font-bold tracking-widest bg-white text-black rounded-full hover:bg-black hover:text-white">
              VIEW MORE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}