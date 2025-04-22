"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative h-[100vh] md:h-[85vh] w-full flex flex-col md:flex-row">
      {/* Background Image */}
      <div
        className="w-full md:w-4/5 h-4/5 md:h-full bg-cover bg-center relative"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        {/* Navbar */}
        <nav className="absolute top-4 left-4 flex items-center space-x-4 md:space-x-8 text-amber-50 text-2xl z-10 ">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Icon"
              width={240}
              height={48}
              className="mb-0 cursor-pointer"
            />
          </Link>
          <ul className="hidden md:flex space-x-6">
            <li className="cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/about">About</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/services">Services</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-4 right-4 bg-black bg-opacity-80 p-4 rounded-md text-white md:hidden">
            <ul className="space-y-4">
              <li className="cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/about">About</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/services">Services</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/projects">Projects</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Right Side Content */}
      <div className="w-full md:w-2/5 md:h-full bg-black text-amber-50 flex flex-col justify-center items-center py-16 px-6 md:p-12 md:px-20">
        <div className="text-left">
          <Image
            src="/logo2.png"
            alt="Icon"
            width={58}
            height={60}
            className="mb-4"
          />
          <h1 className="text-4xl md:text-5xl md:font-light tracking-widest">
            HOUSE OF THE FUTURE
          </h1>
          <p className="mt-4 text-md md:text-lg">
            Apply now! Contemporary architecture solutions for stylish, urban
            residences.
          </p>
          <button className="mt-6 px-10 py-4 md:px-9 md:py-4 border-white border-2 text-md font-normal tracking-widest bg-white text-black rounded-full hover:bg-black hover:text-white">
            VIEW MORE
          </button>
        </div>
      </div>
    </div>
  );
}