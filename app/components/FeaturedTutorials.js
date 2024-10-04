import Image from "next/image";

export default function FeaturedTutorials() {
  const tutorials = [
    {
      title: "Learn Maths",
      description: "A complete guide to Mathematics.",
      link: "/tutorials/maths",
      image:
        "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Learn Chemistry",
      description: "A complete guide to Chemistry.",
      link: "/tutorials/chemistry",
      image:
        "https://images.unsplash.com/photo-1651197122040-3ea0656161ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlbW1pc3RyeWV8ZW58MHx8fHwxNjA2OTg0NTM2&auto=format&fit=crop&q=60",
    },
    {
      title: "Learn Physics",
      description: "A complete guide to Physics.",
      link: "/tutorials/physics",
      image:
        "https://images.unsplash.com/photo-1633493702341-4d04841df53b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGh5c2ljc3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <section className="container mx-auto px-6 my-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        Featured Tutorials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {tutorials.map((tutorial, index) => (
          <a
            key={index}
            href={tutorial.link}
            className="relative group border rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <div className="mb-4 relative h-64">
              {" "}
              <Image
                src={tutorial.image}
                alt={tutorial.title}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-indigo-600">
                {tutorial.title}
              </h3>
              <p className="text-gray-600 mt-2">{tutorial.description}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-500 opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          </a>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="/tutorials"
          className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors duration-300"
        >
          See More Tutorials
        </a>
      </div>
    </section>
  );
}
