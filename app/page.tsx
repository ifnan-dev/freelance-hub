"use client"
import Image from "next/image";
import Navbar from "./Navbar";
import JobCard from "./JobCard";
import Jobs from "./Jobs";
export default function Home() {
  return (
    <>
      
      <main className="min-h-full bg-white flex  justify-center p-24">
        <div className="text-center">
          
          <h1 className="text-5xl font-bold text-blue-600 mb-4">
            Freelance Hub MVp
          </h1>

          <p className="text-gray-700 text-lg mb-6">
            Mini upwork clone built with Next.js,
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">Get Started</button>
        <Jobs/>
        </div>
      </main>
    </>
  );
}
