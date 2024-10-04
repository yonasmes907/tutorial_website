"use client";

import Image from "next/image";
import Link from "next/link";

export default function Tutorials() {
  const tutorials = [
    {
      title: "Maths",
      description: "Learn the fundamentals of mathematics.",
      link: "/tutorials/maths",
      image:
        "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Use your own images
    },
    {
      title: "Biology",
      description: "Explore the wonders of biology and life sciences.",
      link: "/tutorials/biology",
      image:
        "https://images.unsplash.com/photo-1530213786676-41ad9f7736f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlvbG9neXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Physics",
      description: "Understand the laws of physics and the universe.",
      link: "/tutorials/physics",
      image:
        "https://images.unsplash.com/photo-1633493702341-4d04841df53b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGh5c2ljc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Chemistry",
      description: "Dive into the world of chemical reactions and compounds.",
      link: "/tutorials/chemistry",
      image:
        "https://images.unsplash.com/photo-1651197122040-3ea0656161ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlbWlzdHJ5fGVufDB8fDB8fHww",
    },
    {
      title: "Amharic",
      description: "Learn the Amharic language and its rich culture.",
      link: "/tutorials/amharic",
      image:
        "https://media.licdn.com/dms/image/C4D12AQHA0zfFvpqJgw/article-cover_image-shrink_600_2000/0/1520131459892?e=2147483647&v=beta&t=Wcc71yGAR_-ZMHjP2wzrZe4iFqgpFSedMeVmZsrOAMc",
    },
    {
      title: "Civics",
      description: "Understand your rights and responsibilities as a citizen.",
      link: "/tutorials/civics",
      image:
        "https://www.shutterstock.com/image-vector/advocate-word-cloud-on-white-260nw-1911054619.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-10 pt-24">
      <h1 className="text-3xl font-bold text-center mb-8">Our Tutorials</h1>
      <p className="text-center mb-8 text-gray-700">
        Choose from a variety of subjects to expand your knowledge.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((tutorial) => (
          <div
            key={tutorial.title}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <Link href={tutorial.link}>
              <Image
                src={tutorial.image}
                alt={tutorial.title}
                width={200}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{tutorial.title}</h2>
                <p className="text-gray-600">{tutorial.description}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                  View Tutorial
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-center mb-6">
          Featured Tutorials
        </h2>
        <p className="text-center mb-8 text-gray-700">
          Check out our recommended tutorials to get started.
        </p>
      </section>
    </div>
  );
}
