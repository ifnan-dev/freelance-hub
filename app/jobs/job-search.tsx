"use client";

import { useState } from "react";

export default function JobSearch() {
  const [query, setQuery] = useState("");

  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search jobs..."
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
        className="border rounded-lg p-3 w-full"
      />

      <p className="mt-4">
        Searching for: {query}
      </p>
    </div>
  );
}