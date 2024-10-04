// components/Footer.js
import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">Our Company</h2>
            <p className="text-gray-400">
              We are dedicated to providing top-notch tutoring services, helping
              students achieve their academic goals.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">Useful Links</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors duration-200"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-white">
                <FaFacebook className="text-3xl hover:scale-110 transition-transform duration-300" />
              </Link>
              <Link href="https://twitter.com" className="hover:text-white">
                <FaTwitter className="text-3xl hover:scale-110 transition-transform duration-300" />
              </Link>
              <Link href="https://instagram.com" className="hover:text-white">
                <FaInstagram className="text-3xl hover:scale-110 transition-transform duration-300" />
              </Link>
              <Link href="https://linkedin.com" className="hover:text-white">
                <FaLinkedin className="text-3xl hover:scale-110 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-400 mb-4">
              Get the latest updates and offers in your inbox.
            </p>
            <form className="flex">
              <input
                type="email"
                className="w-full px-4 py-2 rounded-l-lg bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Your email"
              />
              <button className="px-4 py-2 bg-pink-500 text-white rounded-r-lg hover:bg-pink-600 transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 text-center border-t border-gray-700 pt-6">
          <p className="text-gray-400">
            &copy; 2024 Tutoring Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
