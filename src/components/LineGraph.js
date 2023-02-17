import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";

ChartJs.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);
export default function LineGraph(props) {
  const line_graph_one = {
    labels: props.data.x_axis_data,
    datasets: [
      {
        label: props.data.personDetail?.first_person,
        data: props.data.y_axis_data,
        backgroundColor: "#ebd267",
        borderColor: "#FC076F",
        // tension: 0.2,
        fill: false,
        pointBackgroundColor: "#F48517",
        borderWidth: 2,
      },
      {
        label: props.data.personDetail?.second_person,
        data: props.data.second_y_axis_data,
        backgroundColor: "#F48517",
        borderColor: "#F48517",
        // tension: ,
        fill: false,
        pointBackgroundColor: "#ebd267",
        borderWidth: 2,
      },
    ],
  };
  const option = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: false, // Hide legend
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <>
      <Line data={line_graph_one} options={option} />
    </>
  );
}
