"use client";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-amber-50 text-black">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[60vh]" style={{ backgroundImage: "url('/hero.jpg')" }}>
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold tracking-wide text-center">
            About Us
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="md:text-center">
          <h2 className="text-4xl md:text-6xl text-black">
            Welcome to Emphasis Architects
          </h2>
          <p className="mt-4 text-lg m:text-xl text-black font-light leading-relaxed">
            At Emphasis Architects, we believe that architecture is more than just building structures — it's about shaping experiences, creating spaces that inspire, and designing environments that tell meaningful stories.
          </p>
        </div>

        {/* About Content */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:items-center">
          <div>
            <h3 className="text-4xl font-semibold text-black">
              Our Story
            </h3>
            <p className="mt-4 text-lg text-black font-light leading-relaxed">
              Founded as an extension of Aakar Associates — a firm with over 25 years of experience — Emphasis Architects is led by a passionate brother-sister duo. While our founder, Ar. Mayank Verma, brings visionary architectural expertise, our interiors are thoughtfully crafted under the creative direction of Ms. Mehak Verma, ensuring that every space we design is both structurally sound and emotionally resonant.
            </p>
          </div>
          <div>
            <Image
              src="/hero.jpg"
              alt="Our Story"
              width={600}
              height={400}
              className="shadow-lg"
            />
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-black">🔹 Our Mission</h3>
            <p className="mt-4 text-md md:text-lg text-black font-light leading-relaxed">
              To craft unique, responsive, and elegant designs that go beyond the standard building experience, creating environments that reflect individuality, purpose, and growth.
            </p>
          </div>
          <div className="bg-white p-8 shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-black">🔹 Our Vision</h3>
            <p className="mt-4 text-md md:text-lg text-black font-light leading-relaxed">
              To be a respected architectural firm known for honesty, integrity, high-quality service, and timeless design — shaping the future while honoring tradition.
            </p>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="mt-16">
          <h3 className="text-4xl font-semibold text-black md:text-center">
            What Sets Us Apart
          </h3>
          <ul className="mt-8 space-y-4 text-lg text-black font-light leading-relaxed">
            <li>✔ Over two decades of collective experience across diverse project types</li>
            <li>✔ A collaborative design approach between architecture and interiors</li>
            <li>✔ Focus on client relationships, ensuring every project is a shared journey</li>
            <li>✔ Passion for innovation without losing sight of elegance and simplicity</li>
            <li>✔ Commitment to creating spaces that sustain, nurture, and inspire</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-16 md:text-center">
          <h3 className="text-4xl font-semibold text-black">
            Let's create timeless spaces together
          </h3>
          <p className="mt-4 text-black">
            At Emphasis Architects, every project is a blend of creativity, craftsmanship, and heart. Whether you’re building your dream home, reimagining a commercial space, or creating a legacy project, we are here to turn your vision into reality.
          </p>
          <Link href="/contact">
          <button className="mt-6 px-7 p-3 bg-black text-lg md:text-md hover:border-black border-2 hover:border-2 hover:bg-amber-50 hover:text-black text-white rounded-full ">
            Contact Us
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}