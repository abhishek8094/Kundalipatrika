import React from "react";
import Header from "../../components/header/Header";
import Intro from "../../components/intro/Intro";
import About from "../../components/about/About";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="bg-primary px-40">
        <Intro />
        <About/>
      </div>
    </div>
  );
};

export default Home;
