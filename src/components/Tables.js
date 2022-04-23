import React from "react";
import { data } from "../config/data";
import Select from "react-select";
import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";

const Tables = () => {
  const dataOstanName = data.ostani_data.nameFA;
  const arrayOstanName = Object.values(dataOstanName);
  const dataNamad = data.ostani_data.nemad;
  const arrayNamad = Object.values(dataNamad);
  const nav = data.ostani_data.nav;
  const arrayNav = Object.values(nav);
  const pNav = data.ostani_data.pnav;
  const arrayPnav = Object.values(pNav);
  const logTerm = data.ostani_data.longTermInvestment;
  const arrayLognTerm = Object.values(logTerm);
  const mc = data.ostani_data.mc;
  const arrayMc = Object.values(mc);
  const ni = data.ostani_data.NI;
  const arrayNi = Object.values(ni);
  console.log(data);
  const allOstan = arrayOstanName.map((state, i) => {
    return {
      ostanName: state,
      namad: arrayNamad[i],
      nav: arrayNav[i],
      pNav: arrayPnav[i],
      longTerm: arrayLognTerm[i],
      mc: arrayMc[i],
      ni: arrayNi[i],
    };
  });
  const [state, setState] = useState(allOstan);

  const options = [
    { value: "best-nav", label: "بیشترین ارزش خالص دارایی" },
    { value: "best-pNav", label: "بیشترین نسبت قیمت به ارزش خالص دارایی" },
    { value: "best-long", label: "بیشترین مقدار سرمایه گذاری بلند مدت" },
    { value: "best-mc", label: "بیشترین ارزش بازار" },
    { value: "best-ni", label: "بیشترین سود خالص" },
  ];

  const filtered = (status) => {
    switch (status) {
      case "best-nav":
        setState(state.slice(0).sort((a, b) => b.nav - a.nav));
        break;

      case "best-pNav":
        setState(state.slice(0).sort((a, b) => b.pNav - a.pNav));
        break;

      case "best-long":
        setState(state.slice(0).sort((a, b) => b.longTerm - a.longTerm));
        break;

      case "best-mc":
        setState(state.slice(0).sort((a, b) => b.mc - a.mc));
        break;

      case "best-ni":
        setState(state.slice(0).sort((a, b) => b.ni - a.ni));
        break;

      default:
        setState(allOstan);
        break;
    }
  };

  const onChange = (e) => {
    filtered(e.value);
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "black" : "black",
      padding: 20,
      backgroundColor: "#E4E4E7",
      "&:hover": {
        borderColor: "red",
        color: "black",
        backgroundColor: "#A1A1AA",
      },
    }),
    control: () => ({
      // width: 200,
      height: "30px",
      display: "flex",
      alignItems: "center",
      backgroundColor: "#E4E4E7",
      color: "white",
      borderRadius: "5px",
    }),
    placeholder: (base) => ({
      ...base,
      color: "black",
    }),

    // indicatorSeparator: () => ({ display: "none" }),

    // placeholder: () => ({ display: "none" }),

    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  console.log(allOstan);
  return (
    <div className="w-full flex flex-col items-center">
      <Select
        className="w-[250px] text-black"
        styles={customStyles}
        onChange={onChange}
        options={options}
        placeholder="ترتیب را انتخاب کنید"
      />
      <div class=" overflow-x-auto w-full shadow-md sm:rounded-lg flex lg:justify-center md:p-5 lg:p-0">
        <table class=" text-sm rounded-lg text-gray-500 bg-[#171717] ">
          <thead class="text-xs rounded-lg text-gray-700 uppercase bg-gray-50 ">
            <tr className="rounded-lg bg-[#FAFAF9]">
              <th scope="col" class="px-6  text-[13px]  py-3 text-center">
                استانها
              </th>
              <th scope="col" class="px-6 py-3 text-[13px]">
                نام نماد
              </th>
              <th scope="col" class="px-6 py-3 text-[13px]">
                ارزش خالص دارایی
              </th>
              <th scope="col" class="px-6 py-3 text-[13px]">
                نسبت قیمت به ارزش خالص دارایی
              </th>
              <th scope="col" class="px-6 py-3 text-[13px]">
                مقدار سرمایه گذاری بلند مدت
              </th>
              <th scope="col" class="px-6 py-3 text-center text-[13px]">
                ارزش بازار
              </th>
              <th scope="col" class="px-6 py-3 text-center text-[13px]">
                سود خالص
              </th>
            </tr>
          </thead>
          <tbody>
            {state?.map((state) => (
              <tr className="border-b text-gray-400">
                <th className="p-2 text-center">{state.ostanName}</th>
                <th className="text-center p-2">{state.namad}</th>
                <th className="text-center">{state.nav}</th>
                <th className="text-center">{state.pNav}</th>
                <th className="text-center">{state.longTerm}</th>
                <th className="p-2 text-center">{state.mc}</th>
                <th className="p-2 text-center">{state.ni}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tables;
