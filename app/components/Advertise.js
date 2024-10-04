// app/page.js

import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      <section className="bg-gradient-to-r from-blue-800 to-gray-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to Tutorial Agency
          </h1>
          <p className="text-lg mb-6">
            Your success is our mission. Join us for personalized tutoring.
          </p>
          <Link
            href="/signup"
            className="bg-pink-500 px-6 py-2 rounded-md text-white hover:bg-pink-600 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
