import Image from "next/image";

export default function BlogSection() {
  const articles = [
    {
      title: "5 Tips to Find the Right Tutor for You",
      description:
        "Choosing the right tutor can make all the difference in your learning journey. Here are five essential tips.",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URLs
      link: "/blog/find-tutor",
    },
    {
      title: "Effective Study Techniques",
      description:
        "Discover study techniques that can help you retain information better and ace your exams.",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URLs
      link: "/blog/study-techniques",
    },
    {
      title: "How to Stay Motivated While Learning Online",
      description:
        "Online learning can be challenging. Here are some strategies to keep your motivation high.",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URLs
      link: "/blog/stay-motivated",
    },
  ];

  return (
    <section className="container mx-auto px-6 my-10">
      <h2 className="text-3xl font-bold text-center mb-6">Latest Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <Image
              src={article.image}
              alt={article.title}
              width={200}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{article.title}</h3>
              <p className="text-gray-600 mt-2">{article.description}</p>
              <a
                href={article.link}
                className="mt-4 inline-block text-indigo-600 font-semibold hover:text-indigo-800"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
