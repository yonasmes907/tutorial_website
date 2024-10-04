import Image from "next/image";
import React from "react";

export default function Testimonial() {
  const testimonials = [
    {
      name: "John Doe",
      title: "Software Engineer",
      testimonial:
        "This platform has transformed the way I learn. The tutors are very professional and have deep knowledge. Highly recommend!",
      imageUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Jane Smith",
      title: "Data Scientist",
      testimonial:
        "I was able to enhance my skills in Python and Data Science thanks to this tutoring service. The sessions are personalized and insightful.",
      imageUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Michael Brown",
      title: "Web Developer",
      testimonial:
        "The best tutoring experience I’ve ever had! My tutor was knowledgeable, friendly, and helped me succeed in building my first project.",
      imageUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-purple-500 via-pink-600 to-red-500 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-white mb-16">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-white rounded-3xl shadow-2xl p-8 text-center transform hover:scale-105 hover:rotate-1 hover:-translate-y-2 transition-all duration-500"
            >
              <Image
                src={testimonial.imageUrl}
                alt={testimonial.name}
                width={100}
                height={100}
                className="w-24 h-24 rounded-full mx-auto mb-6 shadow-lg border-4 border-pink-200"
              />
              <h3 className="text-2xl font-bold text-gray-900">
                {testimonial.name}
              </h3>
              <p className="text-gray-500 text-sm mb-6">{testimonial.title}</p>
              <p className="text-gray-700 italic">{`"${testimonial.testimonial}"`}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
