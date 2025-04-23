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
        <nav className="absolute top-4 md:left-8 flex items-center justify-around md:space-x-16 text-amber-50 text-xl z-10">
            <Link href="/">
                <Image
                    src="/logo.png"
                    alt="Icon"
                    width={220}
                    height={48}
                    className="mb-0 cursor-pointer pl-4 md:pl-0"
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
                    <span>Services</span>
                    {servicesOpen && (
                        <ul className="absolute top-full left-0 bg-white text-black shadow-md rounded-md mt-2 space-y-4 p-4 w-56">
                            <li>
                                <Link href="/services/architecture" className="hover:underline">
                                    Architecture
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/interior-designing"
                                    className="hover:underline"
                                >
                                    Interior Designing
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/construction" className="hover:underline">
                                    Construction
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li
                    className="cursor-pointer relative"
                    onMouseEnter={() => setProjectsOpen(true)}
                    onMouseLeave={() => setProjectsOpen(false)}
                >
                    <span>Projects</span>
                    {projectsOpen && (
                        <ul className="absolute top-full left-0 bg-white text-black shadow-md rounded-md mt-2 space-y-4 p-4 w-56">
                            <li>
                                <Link
                                    href="/projects/residential"
                                    className="hover:underline"
                                >
                                    Residential Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects/commercial" className="hover:underline">
                                    Commercial Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/projects/institutional"
                                    className="hover:underline"
                                >
                                    Institutional Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects/religious" className="hover:underline">
                                    Religious Projects
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="cursor-pointer">
                    <Link href="/contact">Contact us</Link>
                </li>
            </ul>
            {/* Mobile Menu Button */}
            {/* Mobile Menu Button */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden fixed top-7 right-4 text-white text-3xl z-20"
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
                            <span>Services</span>
                            <span>{servicesOpen ? "-" : "+"}</span>
                        </div>
                        {servicesOpen && (
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
                        )}
                    </li>
                    <li className="cursor-pointer">
                        <div
                            onClick={() => setProjectsOpen(!projectsOpen)}
                            className="flex justify-between items-center"
                        >
                            <span>Projects</span>
                            <span>{projectsOpen ? "-" : "+"}</span>
                        </div>
                        {projectsOpen && (
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
                        )}
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