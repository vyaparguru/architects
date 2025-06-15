"use client"

import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

export default function HarmonySection() {
  return (
    <section className="relative h-[100vh] md:h-[100vh] w-full flex flex-col md:flex-row">
      {/* Right Content (Image Section) */}
      <div className=" md:w-4/5 md:h-full bg-cover bg-center relative aspect-[3/2] md:aspect-auto md:order-1">
        <Image
          src="/hos.jpg"
          alt="Harmony of Shapes"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Left Content (Text Section) */}
      <div className="w-full md:w-2/5 h-3/5 md:h-full bg-white text-black flex flex-col justify-center items-start px-6 md:py-12 md:px-10 text-center">
        <h2 className="text-4xl md:font-light tracking-widest">
          HARMONY OF SHAPES
        </h2>
        <p className="mt-4 text-lg md:text-xl font-light leading-relaxed">
          At Emphasis, we believe that interior design is an art of balance,
          where shapes, forms, and proportions come together to create a
          seamless and functional space. Our approach focuses on harmonizing
          geometric and organic elements to enhance aesthetics while ensuring
          practicality.
        </p>

        {/* Button */}
        <Link href="/services" className="mt-6 mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white hover:bg-white hover:text-black border-black border-2 transition">
          <FaPlus size={16} />
        </Link>
        </div>

    </section>
  );
}