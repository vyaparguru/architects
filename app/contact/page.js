"use client";

import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-amber-50 text-black">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[60vh]" style={{ backgroundImage: "url('/hero.jpg')" }}>
        <div className="absolute inset-0 bg-amber-900 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold tracking-wide text-center">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Address */}
          <div className="bg-white p-8 shadow-lg flex flex-col items-center text-center">
            <FaMapMarkerAlt className="text-4xl text-amber-900 mb-4" />
            <h3 className="text-xl font-semibold text-amber-900">Address</h3>
            <p className="mt-4 text-black">
              SCF-9, LGF, Bhai Randhir Singh Nagar Market, F Block, Ludhiana, Punjab 141001
            </p>
          </div>

          {/* Working Hours */}
          <div className="bg-white p-8 shadow-lg flex flex-col items-center text-center">
            <FaClock className="text-4xl text-amber-900 mb-4" />
            <h3 className="text-xl font-semibold text-amber-900">Working Hours</h3>
            <p className="mt-4 text-black">10:00 AM - 6:30 PM</p>
          </div>

          {/* Phone Number */}
          <div className="bg-white p-8 shadow-lg flex flex-col items-center text-center">
            <FaPhoneAlt className="text-4xl text-amber-900 mb-4" />
            <h3 className="text-xl font-semibold text-amber-900">Phone</h3>
            <p className="mt-4 text-black">+91-97805-00608</p>
          </div>

          {/* Emails */}
          <div className="bg-white p-8 shadow-lg flex flex-col items-center text-center">
            <FaEnvelope className="text-4xl text-amber-900 mb-4" />
            <h3 className="text-xl font-semibold text-amber-900">Email</h3>
            <p className="mt-4 text-black">emphasis311@gmail.com</p>
            <p className="mt-2 text-black">info@emphasis.com</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-amber-50 text-black py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 md:text-center">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Let's Discuss Your Next Project
          </h2>
          <p className="mt-4 text-lg md:text-xl font-light leading-relaxed">
            Reach out to us for any inquiries or to start your journey with Emphasis Architects.
          </p>
          <Link
            href="https://wa.me/919780500608"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-6 px-7 text-lg md:text-md py-4 bg-black border-2 border-black hover:bg-amber-50 hover:text-black text-white rounded-full">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}