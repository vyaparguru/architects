import Image from "next/image";
import { FaPlus } from "react-icons/fa";

export default function Fourth() {
  return (
    <section className="relative h-[100vh] md:h-[80vh] w-full flex flex-col md:flex-row">
      {/* Left Content (Text Section) */}
      <div className="w-full md:w-2/5 h-3/5 md:h-full bg-white text-black flex flex-col gap-6 justify-center items-start px-4 py-4 md:px-10">
      <div>
        <h2 className="text-xl md:text-lg md:font-extralight tracking-widest uppercase">
          Working Hours
        </h2>
        <p className="mt-2 text-sm font-extralight leading-relaxed">
        Ked ai repspiciatic onpe umnis iste natus errorsit voluptatem uocusantium naius erpor sit vulup taton accus antium.
        </p>
        </div>
        <div>
        <h2 className="text-xl md:text-lg md:font-extralight tracking-widest uppercase">
          OUR TEAM
        </h2>
        <p className="mt-2 text-sm font-extralight leading-relaxed">
        Ked ai repspiciatic onpe umnis iste natus errorsit voluptatem uocusantium naius erpor sit vulup taton accus antium.
        </p>
        </div>
        <div>
        <h2 className="text-xl md:text-lg md:font-extralight tracking-widest uppercase">
          NEW Projects
        </h2>
        <p className="mt-2 text-sm font-extralight leading-relaxed">
        Ked ai repspiciatic onpe umnis iste natus errorsit voluptatem uocusantium naius erpor sit vulup taton accus antium.
        </p>
        </div>
      </div>

      {/* Right Content (Image Section) */}
      <div className="w-full md:w-4/5 h-2/5 md:h-full bg-cover bg-center relative">
        <Image
          src="/4.jpg" // Replace with your actual image path
          alt="Harmony of Shapes"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}