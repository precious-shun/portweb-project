import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import mysql from "../assets/mysql.png";
import github from "../assets/github.png";
import firebase from "../assets/firebase.png";

const Skills = () => {
  return (
    <div className="bg-black text-gray-400 max-w-[1200px] mx-auto p-4">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 place-items-center">
        <h2 className="text-gray-700 text-2xl md:text-4xl font-bold m-4 flex-col">
          My <br /> Tech <br /> Skills
        </h2>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={github} alt="GitHub" width={100} height={100} />
          <p className="mt-2">GitHub</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={html} alt="HTML" />
          <p className="mt-2">HTML</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={css} alt="CSS" width={100} height={100} />
          <p className="mt-2">CSS</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={javascript} alt="JavaScript" width={100} height={100} />
          <p className="mt-2">JavaScript</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={node} alt="Node.js" width={100} height={100} />
          <p className="mt-2">Node.js</p>
        </div>
        <div className="hidden md:flex md:flex-col md:w-[100px]"></div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={react} alt="React" width={100} height={100} />
          <p className="mt-2">React</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={tailwind} alt="Tailwind CSS" width={100} height={100} />
          <p className="mt-2">Tailwind CSS</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={mysql} alt="MySQL" width={100} height={100} />
          <p className="mt-2">MySQL</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
          <img src={firebase} alt="Firebase" width={100} height={100} />
          <p className="mt-2">Firebase</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
