import Image from "next/image";
import Navbar from "./Navbar";
import JobCard from "./JobCard";
import Jobs from "./Jobs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-300 flex  justify-center p-24">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-orange-600 mb-4">
            Freelance MVp
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Mini upwork clone built with Next.js,
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">Get Started</button>
        </div>
        <Jobs/>
      </main>
    </>
  );
}
