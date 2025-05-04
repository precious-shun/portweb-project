import React from "react";
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className=" text-base lg:text-lg">
              My name is Muhammad Sunan Alit, I graduated a bachelor degree of
              computer engineering from Diponegoro University. I have experience
              in data analytics and frontend engineering, especially in web
              development. I have a strong interest in data analysis. And I am
              always eager to learn new technologies and improve my skills. I am
              proficient in HTML, CSS, JavaScript, React, Node.js, and SQL. I am
              also familiar with NoSQL Database like Firebase and RDBMS like
              MySQL or PostgreSQL databases. I have some experience in
              Management in a furniture company called Manggala. I am a quick
              learner and a team player, and I am excited to contribute to
              innovative projects that make a difference.
            </p>
          </div>
        </div>
        <img
          className="mx-auto rounded-3xl py-8 md:py-0"
          src={aboutImg}
          alt="about"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default About;
