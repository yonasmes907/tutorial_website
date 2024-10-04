export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-32">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">
        Contact Us
      </h1>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 p-3 rounded-lg"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 p-3 rounded-lg"
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full border border-gray-300 p-3 rounded-lg"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
}
