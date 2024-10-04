"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Tutors() {
  const tutors = [
    {
      name: "John Doe",
      experience: 5,
      location: "New York, USA",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/tutors/john-doe",
    },
    {
      name: "Jane Smith",
      experience: 8,
      location: "San Francisco, USA",
      image:
        "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhc3Nwb3J0JTIgc2l6ZSUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
      link: "/tutors/jane-smith",
    },
    {
      name: "Alice Johnson",
      experience: 3,
      location: "Austin, USA",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/tutors/alice-johnson",
    },
    {
      name: "Michael Brown",
      experience: 4,
      location: "Seattle, USA",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/tutors/michael-brown",
    },
    {
      name: "Sarah Davis",
      experience: 6,
      location: "Miami, USA",
      image:
        "https://img.freepik.com/premium-photo/teachers-day-happy-male-professor-teaching-school-with-camera-portrait_691577-11705.jpg",
      link: "/tutors/sarah-davis",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;

  const nextPage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tutors.length);
  };

  const prevPage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + tutors.length) % tutors.length
    );
  };

  const displayedTutors = [];
  for (let i = 0; i < cardsPerPage; i++) {
    displayedTutors.push(tutors[(currentIndex + i) % tutors.length]);
  }

  return (
    <section className="container mx-auto px-6 my-10">
      <h2 className="text-3xl font-bold text-center mb-6">Meet Our Tutors</h2>

      <div className="relative flex items-center justify-center">
        <button
          onClick={prevPage}
          className="absolute left-2 sm:left-0 text-white bg-indigo-600 p-3 rounded-full hover:bg-indigo-700 transition-transform duration-300 ease-in-out z-10"
        >
          &lt;
        </button>

        <div className="flex justify-center items-center space-x-6 overflow-hidden transition-transform duration-700 ease-in-out">
          {displayedTutors.map((tutor, index) => (
            <a
              key={index}
              href={tutor.link}
              className="relative border rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 flex-shrink-0 w-full sm:w-1/3 mx-2"
            >
              <div className="flex flex-col items-center p-6 bg-white">
                <div className="relative mb-4 w-32 h-32 sm:w-40 sm:h-40">
                  <Image
                    src={tutor.image}
                    alt={tutor.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center">
                  {tutor.name}
                </h3>
                <p className="text-gray-600 mt-1">
                  {tutor.experience} years of experience
                </p>
                <p className="text-gray-600 text-center">{tutor.location}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-500 opacity-30 hover:opacity-50 transition-opacity duration-300"></div>
            </a>
          ))}
        </div>

        <button
          onClick={nextPage}
          className="absolute right-2 sm:right-0 text-white bg-indigo-600 p-3 rounded-full hover:bg-indigo-700 transition-transform duration-300 ease-in-out z-10"
        >
          &gt;
        </button>
      </div>

      <div className="text-center mt-10">
        <Link
          href="/tutors"
          className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors duration-300"
        >
          See All Tutors
        </Link>
      </div>
    </section>
  );
}
