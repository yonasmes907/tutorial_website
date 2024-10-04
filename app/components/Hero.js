export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white py-20 md:py-28"
    >
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
          Unlock Your Learning Potential
        </h1>
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg">
          Master new skills with our expert-led tutorials and transform your
          career.
        </p>
        <a
          href="/tutorials"
          className="mt-6 sm:mt-8 inline-block bg-white text-indigo-600 px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
        >
          Start Learning
        </a>
      </div>
    </section>
  );
}
