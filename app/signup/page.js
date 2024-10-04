export default function Signup() {
  return (
    <div className="max-w-md mx-auto px-4 py-32">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">
        Sign Up
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
          <label className="block text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 p-3 rounded-lg"
            placeholder="Your Password"
            required
          />
        </div>
        <button className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition duration-300">
          Sign Up
        </button>
      </form>
    </div>
  );
}
