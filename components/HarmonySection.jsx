import Image from "next/image";
import { FaPlus } from "react-icons/fa";

export default function HarmonySection() {
  return (
    <section className="relative h-[100vh] md:h-[80vh] w-full flex flex-col md:flex-row">
      {/* Left Content (Text Section) */}
      <div className="w-full md:w-2/5 h-3/5 md:h-full bg-white text-black flex flex-col justify-center items-start p-6 md:p-12 md:px-10">
        <h2 className="text-3xl md:text-3xl md:font-light tracking-widest">
          HARMONY OF SHAPES
        </h2>
        <p className="mt-4 text-md font-light leading-relaxed">
          At Emphasis, we believe that interior design is an art of balance,
          where shapes, forms, and proportions come together to create a
          seamless and functional space. Our approach focuses on harmonizing
          geometric and organic elements to enhance aesthetics while ensuring
          practicality.
        </p>

        {/* Button */}
        <button className="mt-6 flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white hover:bg-white hover:text-black border-black border-2 transition">
          <FaPlus size={16} />
        </button>
      </div>

      {/* Right Content (Image Section) */}
      <div className="w-full md:w-4/5 h-2/5 md:h-full bg-cover bg-center relative">
        <Image
          src="/hos.jpg" // Replace with your actual image path
          alt="Harmony of Shapes"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}