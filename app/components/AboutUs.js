import Link from "next/link";

const About = () => {
  return (
    <div>
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">About Our Agency</h2>
          <p className="mb-4">
            We are dedicated to providing top-notch tutoring services, helping
            students achieve their academic goals. Our experienced tutors are
            passionate about teaching and committed to your success.
          </p>
          <Link
            href="/about"
            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300"
          >
            Learn More About Us
          </Link>
        </div>
      </section>
    </div>
  );
};
export default About;
