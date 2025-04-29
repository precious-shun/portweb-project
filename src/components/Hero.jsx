import React from "react";
import heroimage from "../assets/profilepic7.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto py-8 bg-black">
      <div className="col-span-1 mx-auto w-[300px] h-auto lg:w-[400px]">
        <img src={heroimage} alt="hero image" />
      </div>

      <div className="col-span-2 grid grid-rows-1 sm:grid-rows-3 px-5 my-auto">
        <div className="row-span-2">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
            <span className="primary-color">I'm a</span> <br />
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1000,
                "Software Engineer",
                1000,
                "SQL Developer",
                1000,
                "Data Analyst",
                1000,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
            />
          </h1>
        </div>
        <div className="row-span-1">
          <p className="text-white sm:text-lg my-6 lg:text-xl">
            My name is Muhammad Sunan Alit, and I have 3+ years experience in
            several IT field.
          </p>

          <div className="my-8">
            <a
              href="/"
              className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
