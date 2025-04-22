import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-amber-50 text-black py-2">
      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-28 grid md:grid-cols-3 gap-16">
        {/* Logo & About */}
        <div>
          <Image src="/logo.png" alt="logo" width={150} height={50} />
          <p className="mt-4 text-sm">
            We are a leading organization dedicated to providing excellent services in various fields.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-6">
            <Link href="#" className="p-3 bg-gray-800 rounded-full hover:bg-blue-500">
              <FaFacebookF className="text-amber-50 text-lg" />
            </Link>
            <Link href="#" className="p-3 bg-gray-800 rounded-full hover:bg-blue-400">
              <FaTwitter className="text-amber-50 text-lg" />
            </Link>
            <Link href="#" className="p-3 bg-gray-800 rounded-full hover:bg-pink-500">
              <FaInstagram className="text-amber-50 text-lg" />
            </Link>
            <Link href="#" className="p-3 bg-gray-800 rounded-full hover:bg-blue-600">
              <FaLinkedinIn className="text-amber-50 text-lg" />
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-black">Contact Us</h3>
          <p className="mt-2 text-black">
            SCO-14 First Floor, Improvement Trust Market, Kapurthala Chowk, Jalandhar
          </p>
          <p className="mt-2 text-gray-800 flex items-center">
            <FaPhoneAlt className="mr-2" /> +91-97805-00608
          </p>
          <p className="text-gray-800 flex items-center">
            <FaEnvelope className="mr-2" /> abc@gmail.com
          </p>
          <p className="text-gray-800 flex items-center">
            <FaEnvelope className="mr-2" /> info@emphasis.co.in
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-black">Useful Links</h3>
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
      <div className="mt-8 pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        <p>
          Developed by{" "}
          <Link
            href="https://vyaparguru.com"
            className="text-black"
            target="_blank"
          >
            Vyapar Guru Infotech Pvt. Ltd.
          </Link>
        </p>
      </div>
    </footer>
  );
}
