import React from "react";
import Header from "../components/Header";
import { Doughnut } from "react-chartjs-2";
// import { Chart, registerables } from "chart.js";
import { data } from "../config/data";
import Chart from "react-apexcharts";

// Chart.register(...registerables);
const ChartPage = () => {
  const name = data.pie_chart1.name;
  const arrayName = Object.values(name);
  const percent = data.pie_chart1.value;
  const arrayPercent = Object.values(percent);

  //   const options = {
  //     plugins: {
  //       legend: { position: "right", display: true },
  //       datalebels: arrayPercent,
  //     },
  //   };

  const series = arrayPercent;
  const options = {
    series: arrayPercent,
    labels: arrayName,
  };

  return (
    <div>
      <Header />
      <div className="w-[100%] h-[400px] flex flex-col items-center">
        <h1 className="my-8">نمودار توضیع وزن سرمایه گذاری در هر سهم</h1>
        <Chart
          options={options}
          series={series}
          type="donut"
          width={450}
          height={450}
        />
      </div>
    </div>
  );
};

export default ChartPage;
