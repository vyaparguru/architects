"use client"
import Image from "next/image";

export default function Fourth() {
  return (
    <section className="relative h-[100vh] md:h-[85vh] w-full flex flex-col md:flex-row">
      {/* Left Content (Text Section) */}
      <div className="w-full md:w-2/5 h-3/5 md:h-full bg-amber-50 text-black flex flex-col gap-6 justify-center items-start px-6 py-4 md:px-10">
      <div>
        <h2 className="text-3xl md:text-4xl md:font-extralight tracking-widest uppercase">
          Working Hours
        </h2>
        <p className="mt-2 text-lg md:text-xl font-extralight leading-relaxed">
        10:00 AM - 6:30 PM
        </p>
        </div>
        <div>
        <h2 className="text-3xl md:text-4xl md:font-extralight tracking-widest uppercase">
          OUR TEAM
        </h2>
        <p className="mt-2 text-lg md:text-xl font-extralight leading-relaxed">
        Our team is a passionate group of individuals dedicated to driving meaningful change. With diverse backgrounds and a shared commitment to our mission, we work together to create a lasting impact in the communities we serve.
        </p>
        </div>
        {/* <div>
        <h2 className="text-3xl md:text-4xl md:font-extralight tracking-widest uppercase">
          NEW Projects
        </h2>
        <p className="mt-2 text-lg md:text-xl font-extralight leading-relaxed">
        Ked ai repspiciatic onpe umnis iste natus errorsit voluptatem uocusantium naius erpor sit vulup taton accus antium.
        </p>
        </div> */}
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