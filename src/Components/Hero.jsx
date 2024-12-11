import React from "react";
import img from "./assets/img.png"; // Importing the image
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="flex items-center justify-center w-screen h-screen bg-cover bg-center bg-gradient-to-t from-black via-transparent to-black"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="flex justify-center items-end w-[50vh] h-[70vh]">
        <Link to="/get-started">
          <button className="text-white border border-white px-6 py-3 rounded-lg backdrop-blur-sm bg-white/30 hover:bg-white/50 transition-all duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
