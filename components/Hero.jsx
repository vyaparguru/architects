"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeDrawer = () => {
    setMenuOpen(false);
  };

  return (
    <div className="relative h-[100vh] md:h-[85vh] w-full flex flex-col md:flex-row">
      {/* Background Image */}
      <div
        className="w-full md:w-4/5 h-4/5 md:h-full bg-cover bg-center relative"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        {/* Navbar */}
        <nav className="absolute top-4 md:left-8 flex items-center space-x-4 md:space-x-8 bg- text-amber-50 text-xl z-10">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Icon"
              width={220}
              height={48}
              className="mb-0 cursor-pointer pl-4 md:pl-0"
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
            className="md:hidden absolute top-4 left-80 text-white text-3xl z-20"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {/* Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-10"
            onClick={closeDrawer}
          ></div>
        )}

        {/* Mobile Drawer Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-3/4 bg-amber-50 text-black transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-20`}
        >
          <div className="flex">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Icon"
                width={240}
                height={48}
                className="p-4 mb-0 cursor-pointer"
              />
            </Link>
          </div>
          <ul className="mt-6 space-y-6 px-6 text-2xl">
            <li className="cursor-pointer">
              <Link href="/" onClick={closeDrawer}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/about" onClick={closeDrawer}>
                About
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/services" onClick={closeDrawer}>
                Services
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/projects" onClick={closeDrawer}>
                Projects
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/contact" onClick={closeDrawer}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
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