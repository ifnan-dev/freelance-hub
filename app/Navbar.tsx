"use client"
import { defaultHead } from "next/head";
import { useState } from "react";


const Navbar = () => {

    const [isregistered, setRegistered]=useState(false)

    const handleRegister=()=>{
        setRegistered(true)
    }
    
  return (
    <nav className=" bg-white flex justify-around flex-row text-blue-500 h-10 items-center py-10">
      <a href="/">

      <h1 className="text-lg font-bold">Freelance HUb</h1>
      </a>

      <div className="flex flex-row gap-5">

        {
            isregistered?<></>:<a href="/register">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg" onClick={handleRegister}>
            Register
        </button>
        </a>
        }
        <a href="/login">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Login
        </button>
        </a>
        
      </div>
    </nav>
  );
};

export default Navbar;
