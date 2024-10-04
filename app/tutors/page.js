"use client";

import Image from "next/image";
import { useState } from "react";

const tutors = [
  {
    id: "john-doe",
    name: "John Doe",
    experience: 5,
    location: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "jane-smith",
    name: "Jane Smith",
    experience: 8,
    location: "San Francisco, USA",
    image:
      "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhc3Nwb3J0JTIwc2l6ZSUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "alice-johnson",
    name: "Alice Johnson",
    experience: 3,
    location: "Austin, USA",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "michael-brown",
    name: "Michael Brown",
    experience: 4,
    location: "Seattle, USA",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "sarah-davis",
    name: "Sarah Davis",
    experience: 6,
    location: "Miami, USA",
    image:
      "https://img.freepik.com/premium-photo/teachers-day-happy-male-professor-teaching-school-with-camera-portrait_691577-11705.jpg",
  },
];

export default function Tutors() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTutors = tutors.filter((tutor) =>
    tutor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="container mx-auto px-6 my-10 pt-20">
      <h2 className="text-3xl font-bold text-center mb-6">Our Tutors</h2>

      <div className="mb-6 text-center">
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search for a tutor..."
            className="border border-gray-300 rounded-l-lg p-2 w-1/2"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-indigo-600 text-white rounded-r-lg px-4 py-2 hover:bg-indigo-700 transition-colors duration-300">
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredTutors.map((tutor, index) => (
          <a
            key={index}
            href={`/tutors/${tutor.id}`}
            className="relative group border rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <div className="mb-4 relative h-64">
              <Image
                src={tutor.image}
                alt={tutor.name}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-indigo-600">
                {tutor.name}
              </h3>
              <p className="text-gray-600 mt-2">
                {tutor.experience} years of experience
              </p>
              <p className="text-gray-600">{tutor.location}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-500 opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          </a>
        ))}
      </div>

      <div className="mt-10 text-center">
        <h3 className="text-2xl font-semibold mb-4">Why Choose Our Tutors?</h3>
        <p className="text-gray-700 mb-4">
          Our tutors are experienced professionals dedicated to helping students
          achieve their academic goals. Whether you need help with Math,
          Science, or any other subject, our tutors are here to provide
          personalized guidance and support.
        </p>
        <p className="text-gray-700 mb-4">
          We offer flexible tutoring options to fit your schedule, including
          online and in-person sessions. Let us help you find the right tutor
          for your learning needs!
        </p>
        <a
          href="/signup"
          className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors duration-300"
        >
          Sign Up for Tutoring
        </a>
      </div>
    </section>
  );
}
