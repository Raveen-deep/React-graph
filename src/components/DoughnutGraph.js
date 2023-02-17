import React from "react";
import { Doughnut } from "react-chartjs-2";
import helper from "../helper/helper";
import {
  Chart as ChartJs,
  // Title,
  Tooltip,
  ArcElement,
  Legend,
  // PointElement,
  // Filler,
} from "chart.js";

ChartJs.register(Tooltip, ArcElement, Legend);

function DoughnutGraph(props) {
  const data = {
    labels: props.data.x_axis_data,
    datasets: [
      {
        label: props.data.personDetail?.first_person,
        data: props.data.y_axis_data,
        backgroundColor: helper.getNRandomColor(props.data.y_axis_data.length),
        // spacing:1,
        // cutout: "50",
        // hoverOffset: 4
      },
      {
        label:props.data.personDetail?.second_person,
        data: props.data.second_y_axis_data,
        backgroundColor: helper.getNRandomColor(props.data.second_y_axis_data.length),
        // spacing:1,
        // cutout: "50",
        // hoverOffset: 4
      },
    ],
  };
  // const options = {
  //   // plugins: {
  //   //   legend: false, // Hide legend
  //   // },
  // };
  return (
    <div>
      <Doughnut
        data={data}
        // options={options}
        style={{ maxWidth: "180px", maxHeight: "150px" }}
      />
    </div>
  );
}

export default DoughnutGraph;
