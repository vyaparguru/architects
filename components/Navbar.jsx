"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [projectsOpen, setProjectsOpen] = useState(false);

    const closeDrawer = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white flex items-center text-black text-xl shadow-lg justify-between px-4 md:px-10 py-3 z-[9999]">
            <Link href="/">
                <Image
                    src="/logo.png"
                    alt="Icon"
                    width={220}
                    height={48}
                    className="mb-0 cursor-pointer "
                />
            </Link>
            <ul className="hidden lg:flex space-x-6">
                <li className="cursor-pointer">
                    <Link href="/">Home</Link>
                </li>
                <li className="cursor-pointer">
                    <Link href="/about">About us</Link>
                </li>
                <li
                    className="cursor-pointer relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                >
                    <Link href="/services">Services</Link>
                    {/* {servicesOpen && (
                        <ul className="absolute top-full left-0 bg-white text-black shadow-md rounded-md mt-0 space-y-4 p-4 w-56">
                            <li>
                                <Link href="/services/architecture" className="hover:underline">
                                    Architecture
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="hover:underline"
                                >
                                    Interior Designing
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">
                                    Construction
                                </Link>
                            </li>
                        </ul>
                    )} */}
                </li>
                <li
                    className="cursor-pointer relative"
                    onMouseEnter={() => setProjectsOpen(true)}
                    onMouseLeave={() => setProjectsOpen(false)}
                >
                    <Link href="/projects">Projects</Link>
                    {/* {projectsOpen && (
                        <ul className="absolute top-full left-0 bg-white text-black shadow-md rounded-md mt-0 space-y-4 p-4 w-56">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:underline"
                                >
                                    Residential Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">
                                    Commercial Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="hover:underline"
                                >
                                    Institutional Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:underline">
                                    Religious Projects
                                </Link>
                            </li>
                        </ul>
                    )} */}
                </li>
                <li className="cursor-pointer">
                    <Link href="/contact">Contact us</Link>
                </li>
            </ul>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-black text-3xl z-20"
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 z-10"
                    onClick={closeDrawer}
                ></div>
            )}

            {/* Mobile Drawer Menu */}
            <div
                className={`fixed lg:hidden top-0 left-0 h-full w-3/4 bg-amber-50 text-black transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
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
                            About us
                        </Link>
                    </li>
                    <li className="cursor-pointer">
                        <div
                            onClick={() => setServicesOpen(!servicesOpen)}
                            className="flex justify-between items-center"
                        >
                            <Link href="/services" onClick={closeDrawer}>
                                Services
                            </Link>
                            {/* <span>{servicesOpen ? "-" : "+"}</span> */}
                        </div>
                        {/* {servicesOpen && (
                            <ul className="mt-2 space-y-2 pl-4 text-lg">
                                <li>
                                    <Link
                                        href="/services/architecture"
                                        onClick={closeDrawer}
                                    >
                                        Architecture
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/interior-designing"
                                        onClick={closeDrawer}
                                    >
                                        Interior Designing
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/construction"
                                        onClick={closeDrawer}
                                    >
                                        Construction
                                    </Link>
                                </li>
                            </ul>
                        )} */}
                    </li>
                    <li className="cursor-pointer">
                        <div
                            onClick={() => setProjectsOpen(!projectsOpen)}
                            className="flex justify-between items-center"
                        >
                            <Link href="/projects" onClick={closeDrawer}>
                                Projects
                            </Link>
                            {/* <span>{projectsOpen ? "-" : "+"}</span> */}
                        </div>
                        {/* {projectsOpen && (
                            <ul className="mt-2 space-y-2 pl-4 text-lg">
                                <li>
                                    <Link
                                        href="/projects/residential"
                                        onClick={closeDrawer}
                                    >
                                        Residential Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/projects/commercial"
                                        onClick={closeDrawer}
                                    >
                                        Commercial Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/projects/institutional"
                                        onClick={closeDrawer}
                                    >
                                        Institutional Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/projects/religious"
                                        onClick={closeDrawer}
                                    >
                                        Religious Projects
                                    </Link>
                                </li>
                            </ul>
                        )} */}
                    </li>
                    <li className="cursor-pointer">
                        <Link href="/contact" onClick={closeDrawer}>
                            Contact us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}