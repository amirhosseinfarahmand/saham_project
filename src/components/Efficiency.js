import React from "react";
import { data } from "../config/data";

const Efficiency = () => {
  console.log(data);

  return (
    <div className="flex flex-col md:flex-row my-10 ">
      <div className="box1 flex-col bg-[#A3A3A3]  shadow-2xl shadow-black p-5 rounded-lg">
        <div className="flex w-full justify-around ">
          <p className="mr-5">{data.edalat5.last_value.toLocaleString()}</p>
          <p>{data.edalat5.name}</p>
        </div>
        <div className="flex w-full justify-around  ">
          <p className="mr-5">
            %بازدهی هفته: {(data.edalat5.last7Return * 100).toFixed(2)}
          </p>
          <p>%بازدهی ماه: {(data.edalat5.last30Return * 100).toFixed(2)}</p>
        </div>
      </div>
      <div className="box2 lg:ml-5 mt-2 md:mt-0 bg-[#A3A3A3] shadow-2xl shadow-black flex flex-col items-center p-5 rounded-md">
        <div className="flex justify-around w-full">
          <p className="mr-5">{data.edalat1.last_value.toLocaleString()}</p>
          <p>{data.edalat1.name}</p>
        </div>
        <div className="flex justify-around w-full">
          <p className="mr-5">
            %بازدهی هفته: {(data.edalat1.last7Return * 100).toFixed(2)}
          </p>
          <p>%بازدهی ماه: {(data.edalat1.last30Return * 100).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Efficiency;
