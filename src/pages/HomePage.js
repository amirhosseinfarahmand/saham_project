import React from "react";
import Header from "../components/Header";
import Efficiency from "../components/Efficiency";
import Tables from "../components/Tables";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center  items-center">
      <Header />
      <Efficiency />
      <Tables />
    </div>
  );
};

export default HomePage;
