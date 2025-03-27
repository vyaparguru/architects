import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative h-[100vh] md:h-[80vh] w-full flex flex-col md:flex-row">
      {/* Background Image */}
      <div
        className="w-full md:w-4/5 h-2/5 md:h-full bg-cover bg-center relative"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        {/* Navbar */}
        <nav className="absolute top-4 left-4 flex items-center space-x-4 md:space-x-8 text-white z-10 ">
        <Image
            src="/logo.png" 
            alt="Icon"
            width={150} // 12 * 4 (Tailwind's w-12)
            height={48} // 12 * 4 (Tailwind's h-12)
            className="mb-4"
          />
          <ul className="hidden md:flex space-x-6">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Projects</li>
            <li className="cursor-pointer">Contact</li>
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
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Services</li>
              <li className="cursor-pointer">Projects</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>
        )}
      </div>

      {/* Right Side Content */}
      <div className="w-full md:w-2/5 h-3/5 md:h-full bg-black text-white flex flex-col justify-center items-center p-6 md:p-12 md:px-20">
        <div
          className="text-left"
        >
          <Image
            src="/logo2.png" 
            alt="Icon"
            width={52} // 12 * 4 (Tailwind's w-12)
            height={60} // 12 * 4 (Tailwind's h-12)
            className="mb-4"
          />
          <h1 className="text-4xl md:text-4xl md:font-light tracking-widest">HOUSE OF THE FUTURE</h1>
          <p className="mt-4 text-md md:text-base">
            Apply now! Contemporary architecture solutions for stylish, urban residences.
          </p>
          <button className="mt-6 px-10 py-4 md:px-9 md:py-4 border-white border-2 text-xs font-normal tracking-widest bg-white text-black rounded-full hover:bg-black hover:text-white">
            VIEW MORE
          </button>
        </div>
      </div>
    </div>
  );
}