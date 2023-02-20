import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarGraph(props) {
  const bar_graph_data = {
    labels: props.data.x_axis_data,
    datasets: [
      {
        label: props.data.personDetail?.first_person,
        data: props.data.y_axis_data,
        backgroundColor: "#FC076F",
        // borderColor: "gray",
        // pointBackgroundColor: "red",
        borderWidth: 2,
      },
      {
        label: props.data.personDetail?.second_person,
        data: props.data.second_y_axis_data,
        backgroundColor: "#F48517",
        // borderColor: "gray",
        borderWidth: 2,
      },
    ],
  };
  const option = {
    responsive: true,
    maintainAspectRatio: false,
    // plugins: {
    //   legend: false, // Hide legend
    // },
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
      <Bar data={bar_graph_data} options={option} />
    </>
  );
}
