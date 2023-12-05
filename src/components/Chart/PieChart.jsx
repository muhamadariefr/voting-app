import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Anies", "Prabowo", "Ganjar"],
  datasets: [
    {
      label: "Total Votes",
      data: [1535, 2572, 1289],
      backgroundColor: [
        "rgba(255, 206, 86, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 99, 132, 0.2)",       
      ],
      borderColor: [
        "rgba(255, 206, 86, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 99, 132, 1)",       
      ],
      borderWidth: 1,
    },
  ],
};
function PieChart() {
  return <Pie data={data} />;
}

export default PieChart;
