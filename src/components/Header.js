import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex h-[70px] justify-end items-center bg-gray-100 w-full">
      <div className="flex justify-end w-full text-[12px] md:text-[15px]">
        <p className="w-full  whitespace-nowrap  flex lg:p-2 ml-7 lg:justify-center md:ml-[350px] font-bold ">
          مدیریت سهام ایرانیان
        </p>
        <p className="whitespace-nowrap mr-4 md:mr-7 lg:p-2 font-bold cursor-pointer hover:rounded-lg hover:bg-gray-300 border-gray-500 ">
          <Link to="/chart"> نمایش نمودار</Link>
        </p>
        <p className=" font-bold mr-2 hover:bg-gray-300 lg:p-2 hover:rounded-lg border-gray-500  lg:mr-[100px] md:mr-5 cursor-pointer">
          <Link to="/">خانه</Link>
        </p>
      </div>
      <img className=" h-full w-[100px]" src={require("../images/pic1.jpg")} />
    </div>
  );
};

export default Header;
