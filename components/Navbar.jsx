"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [projectsOpen, setProjectsOpen] = useState(false);
    const pathname = usePathname();

    const closeDrawer = () => {
        setMenuOpen(false);
    };

    const isActive = (href) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white flex items-center text-black text-xl shadow-lg justify-between md:justify-center md:gap-96 px-4 md:px-10 py-1 md:py-1.5 z-[9999]">
            <div className="md:flex-shrink-0 md:mr-40">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Icon"
                        width={220}
                        height={48}
                        className="mb-0 cursor-pointer "
                    />
                </Link>
            </div>
            <ul className="hidden lg:flex space-x-6 ">
                <li className={`cursor-pointer ${isActive("/") ? "border-b-4 border-black" : ""}`}>
                    <Link href="/">Home</Link>
                </li>
                <li className={`cursor-pointer ${isActive("/about") ? "border-b-4 border-black" : ""}`}>
                    <Link href="/about">About us</Link>
                </li>
                <li
                    className={`cursor-pointer relative ${isActive("/services") ? "border-b-4 border-black" : ""}`}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                >
                    <Link href="/services">Services</Link>
                </li>
                <li
                    className={`cursor-pointer relative ${isActive("/projects") ? "border-b-4 border-black" : ""}`}
                    onMouseEnter={() => setProjectsOpen(true)}
                    onMouseLeave={() => setProjectsOpen(false)}
                >
                    <Link href="/projects">Projects</Link>
                </li>
                <li className="cursor-pointer">
                    <Link
                        href="/contact"
                        className={`px-4 py-3 rounded-full border-2 border-black bg-black text-white transition hover:bg-white hover:text-black hover:border-black ${isActive("/contact") ? "border-b-4 border-black" : ""}`}
                    >
                        Contact us
                    </Link>
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
                className={`fixed lg:hidden top-0 left-0 h-full w-3/4 bg-white text-black transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
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
                    <li className={`cursor-pointer ${isActive("/") ? "border-b-4 border-black" : ""}`}>
                        <Link href="/" onClick={closeDrawer}>
                            Home
                        </Link>
                    </li>
                    <li className={`cursor-pointer ${isActive("/about") ? "border-b-4 border-black" : ""}`}>
                        <Link href="/about" onClick={closeDrawer}>
                            About us
                        </Link>
                    </li>
                    <li className={`cursor-pointer ${isActive("/services") ? "border-b-4 border-black" : ""}`}>
                        <div
                            onClick={() => setServicesOpen(!servicesOpen)}
                            className="flex justify-between items-center"
                        >
                            <Link href="/services" onClick={closeDrawer}>
                                Services
                            </Link>
                        </div>
                    </li>
                    <li className={`cursor-pointer ${isActive("/projects") ? "border-b-4 border-black" : ""}`}>
                        <div
                            onClick={() => setProjectsOpen(!projectsOpen)}
                            className="flex justify-between items-center"
                        >
                            <Link href="/projects" onClick={closeDrawer}>
                                Projects
                            </Link>
                        </div>
                    </li>
                    <li className="cursor-pointer mt-20">
                        <Link
                            href="/contact"
                            onClick={closeDrawer}
                            className="px-4 py-3 rounded-full border-2 border-black bg-black text-white transition hover:bg-white hover:text-black hover:border-black"
                        >
                            Contact us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}