"use client";

import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(query);
  };

  return (
    <form className="flex justify-center my-10" onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search tutorials..."
        className="w-1/2 px-4 py-2 border rounded-l-md"
      />
      <button
        type="submit"
        className="bg-indigo-500 text-white px-6 py-2 rounded-r-md"
      >
        Search
      </button>
    </form>
  );
}
