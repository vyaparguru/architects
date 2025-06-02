"use client";
import Image from "next/image";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";
// import Philosophy from "./Philosophy";
import OurProcess from "@/components/OurProcess";
import FeaturedProjects from "@/components/FeaturedProjects";
import HeroSection from "@/components/ServiceHero";
import OurServices from "@/components/OurServices";

export default function ServicePage() {
    const galleryImages = [
        "/archi/1.jpg",
        "/archi/2.jpg",
        "/archi/4.jpg",
        "/archi/5.jpg",
        "/archi/6.jpg",
        "/archi/7.jpg",]
    return (
        <div className="bg-amber-50 text-black">
            <div className="relative bg-cover bg-center h-[60vh]" style={{ backgroundImage: "url('/archi/5.jpg')" }}>
                <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl text-white font-bold tracking-wide text-center">
                        Services
                    </h1>
                </div>
            </div>
            <HeroSection />
            <OurServices/>
            <OurProcess />
            <FeaturedProjects />
            <h2 className="text-4xl md:text-6xl font-bold py-10 px-6 md:text-center">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-6xl mx-auto px-6 md:px-0">
                {galleryImages.map((src, idx) => (
                    <div key={idx} className="overflow-hidden ">
                        <Image src={src} alt={`gallery-${idx}`} width={400} height={400} className="w-full h-auto object-cover" />
                    </div>
                ))}
            </div>
            <Testimonials />
            <div className=" md:text-center py-10 px-6 md:px-0">
                <h3 className="text-4xl font-semibold text-black">
                    Ready to Build Your Vision?
                </h3>
                <p className="mt-4 text-black">
                    Let’s discuss your project today.
                </p>
                <Link href="/contact">
                    <button className="mt-6 px-7 p-3 bg-black text-lg md:text-md hover:border-black border-2 hover:border-2 hover:bg-amber-50 hover:text-black text-white rounded-full ">
                        Start Your Project
                    </button>
                </Link>
            </div>
        </div>

    );
}