import React from "react";

const Intro = () => {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white">Hi, My name is </h1>
      <h1 className="text-7xl text-secondary font-semibold">Abhishek Singh</h1>
      <h1 className="text-6xl text-white font-semibold">
        I build things for Web.
      </h1>
      <p className="text-white w-2/3">
        I am Fullstack Developer with tech stack HTML5, CSS3, JAVASCRIPT,REACT
        JS , NODE JS, EXPRESS, MONGODB
      </p>

      <button className="text-tertiary border-2 border-tertiary px-10 py-3 rounded">Hire me</button>
    </div>
  );
};

export default Intro;
