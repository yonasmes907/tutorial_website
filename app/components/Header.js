"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const heroBottom = heroSection?.getBoundingClientRect().bottom || 0;

      if (heroBottom <= 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scroll
          ? "bg-gradient-to-r from-blue-800 to-gray-800 h-16 shadow-lg"
          : "bg-transparent h-20"
      }`}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center h-full">
        <Link href="/" className="font-bold text-2xl text-white">
          Tutorial Agency
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-4 relative">
          <div className="group relative">
            <Link
              href="/tutorials"
              className="text-white px-4 py-2 rounded-md transition-transform duration-300 ease-in-out hover:scale-105"
            >
              Tutorials
            </Link>
            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-2 w-48 bg-white text-blue-800 rounded-md shadow-lg hidden group-hover:block z-10">
              <Link
                href="/tutorials/math"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Math
              </Link>
              <Link
                href="/tutorials/science"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Science
              </Link>
              <Link
                href="/tutorials/languages"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Languages
              </Link>
              <Link
                href="/tutorials/arts"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Arts
              </Link>
              <Link
                href="/tutorials/history"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                History
              </Link>
              <Link
                href="/tutorials/computer-science"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Computer Science
              </Link>
              <Link
                href="/tutorials/music"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Music
              </Link>
              <Link
                href="/tutorials/literature"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Literature
              </Link>
            </div>
          </div>
          <Link
            href="/about"
            className="text-white px-4 py-2 rounded-md transition-transform duration-300 ease-in-out hover:scale-105"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-white px-4 py-2 rounded-md transition-transform duration-300 ease-in-out hover:scale-105"
          >
            Contact
          </Link>
          <Link
            href="/login"
            className="bg-white text-blue-800 px-5 py-2 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
          >
            Sign Up
          </Link>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="absolute top-full left-0 w-full bg-gradient-to-r from-blue-800 to-gray-800 p-6 md:hidden">
            <Link
              href="/tutorials"
              className="block text-white px-4 py-2 rounded-md hover:bg-gray-700"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              Tutorials
            </Link>
            <Link
              href="/about"
              className="block text-white px-4 py-2 rounded-md hover:bg-gray-700"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block text-white px-4 py-2 rounded-md hover:bg-gray-700"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              Contact
            </Link>
            <Link
              href="/login"
              className="block text-white px-4 py-2 rounded-md hover:bg-gray-700"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="block text-white px-4 py-2 rounded-md hover:bg-gray-700"
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              Sign Up
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
