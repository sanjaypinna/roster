import { useRouter } from "next/router";
import React, { useState } from "react";

const Home = () => {
  const router = useRouter();
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🔄 In a real scenario, we'd call an API here to parse the portfolio URL
    // POST /api/portfolio/submit
    // {
    //   "success": true,
    //   "username": "sanjay",
    //   "message": "Data extraction started/successful"
    // }

    const username = "sanjay";
    router.push(`/profile/${username}`);
  };

  return (
    <main>
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto mt-16 p-6 rounded">
          <h1 className="text-2xl font-semibold text-center mb-1">
            Submit Your Portfolio
          </h1>
          <p className="text-center text-sm text-gray-500 mb-6">
            Make sure your portfolio is updated to highlight your top creator
            collaborations
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center mb-4 gap-6"
          >
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://yourportfolio.com"
              required
              className="w-full border p-2 rounded"
            />
            <button
              type="submit"
              className="bg-black font-semibold text-white px-8 py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Home;
