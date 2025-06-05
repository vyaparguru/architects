"use client"
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
export default function Third() {
  return (
    <section className="relative h-[80vh] md:h-[85vh] w-full flex flex-col md:flex-row ">
        {/* L Content (Image Section) */}
      <div className="w-full md:w-4/5 h-2/5 md:h-full bg-cover bg-center relative">
        <Image
          src="/3.jpg" 
          alt="Harmony of Shapes"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      {/* R Content (Text Section) */}
      <div className="w-full md:w-2/5 h-3/5 md:h-full bg-white text-black flex flex-col justify-center items-start p-6 md:p-12 md:px-10">
        <h2 className="text-4xl md:font-light tracking-widest">
          CRAFTED TO LAST
        </h2>
        <p className="mt-4 text-lg md:text-xl font-light leading-relaxed">
        Where vision meets structure — our construction service is the backbone of every great design. With precision engineering and timeless craftsmanship, we transform blueprints into reality, brick by brick, beam by beam.
        </p>

        {/* Button */}
        <button className="mt-6 flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white hover:bg-amber-50 hover:text-black border-black border-2 transition">
          <FaPlus size={16} />
        </button>
      </div>

    </section>
  );
}