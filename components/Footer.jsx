"use client"

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaYoutube, FaClock } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-amber-50 pt-16 pb-2">
      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-28 grid md:grid-cols-3 gap-16">
        {/* Logo & About */}
        <div>
          <Image src="/logo.png" alt="logo" width={200} height={50} />
          <p className="mt-4 text-md font-light leading-relaxed">
            We are a leading organization dedicated to providing excellent services in various fields.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-6">
            <Link
              href="https://www.facebook.com/EmphasisArchitect"
              target="_blank"
              className="p-3 bg-amber-50 rounded-full hover:bg-blue-500"
            >
              <FaFacebookF className="text-gray-800 text-lg" />
            </Link>
            <Link
              href="https://www.youtube.com/@EmphasisArchitect"
              target="_blank"
              className="p-3 bg-amber-50 rounded-full hover:bg-red-500"
            >
              <FaYoutube className="text-gray-800 text-lg" />
            </Link>
            <Link
              href="https://www.instagram.com/emphasis.architect/"
              target="_blank"
              className="p-3 bg-amber-50 rounded-full hover:bg-pink-500"
            >
              <FaInstagram className="text-gray-800 text-lg" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/emphasisarchitect/"
              target="_blank"
              className="p-3 bg-amber-50 rounded-full hover:bg-blue-600"
            >
              <FaLinkedinIn className="text-gray-800 text-lg" />
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-amber-50">Contact Us</h3>
          <p className="mt-2 text-amber-50">
            SCF-9, LGF, Bhai Randhir Singh Nagar Market, F Block, Ludhiana, Punjab 141001
          </p>
          <p className="mt-2 text-amber-50 flex items-center">
            <FaClock className="mr-2" /> Working Hours: 10:00 AM - 6:30 PM
          </p>
          <p className="mt-2 text-amber-50 flex items-center">
            <FaPhoneAlt className="mr-2" /> +91-97805-00608
          </p>
          <p className="text-amber-50 flex items-center">
            <FaEnvelope className="mr-2" /> emphasis311@gmail.com
          </p>
          <p className="text-amber-50 flex items-center">
            <FaEnvelope className="mr-2" /> info@emphasis.com
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-amber-50">Useful Links</h3>
          <ul className="mt-4 space-y-2">
            {["Home", "About", "Services", "Projects", "Contact"].map((link) => (
              <li key={link}>
                <Link href={`/${link.toLowerCase()}`} className="hover:text-black">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 pt-6 text-center text-sm text-amber-50">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        <p>
          Developed by{" "}
          <Link
            href="https://vyaparguru.com"
            target="_blank"
          >
            Vyapar Guru Infotech Pvt. Ltd.
          </Link>
        </p>
      </div>
    </footer>
  );
}
