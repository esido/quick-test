import React from "react";
import "./Home.css";
import Hero from "../../components/hero/Hero";
import Popular from "../../components/popular/Popular";
import Featured from "../../components/featured/Featured";
import Subscribe from "../../components/subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Featured />
      <Subscribe />
    </div>
  );
};

export default Home;
