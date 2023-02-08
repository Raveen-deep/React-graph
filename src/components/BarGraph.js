import React from "react";
import { Bar } from "react-chartjs-2";
import { useState,useEffect } from "react";
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

export default function BarGraph() {
    const [xdata, setXData] = useState([]);
    const [ydata, setYData] = useState([]);
    const [label, setLabel] = useState([]);
    const [fill, setFill] = useState(false);
    
    useEffect(() => {
      try{
          setXData(JSON.parse(localStorage.getItem("x_axis_data")));
          setYData(JSON.parse(localStorage.getItem("y_axis_data")));
          setLabel(localStorage.getItem("label"));
          setFill(localStorage.getItem("fill"));
      }catch(e){
        console.log(e)
      }
    })
    const bar_graph_data = {
        labels: xdata,
        datasets: [
            {
                label: label,
                data: ydata,
                backgroundColor: "#E3F3BB",
                borderColor: "gray",
                tension: 0.2,
                fill: fill,
                pointBackgroundColor: "red",
                borderWidth: 2,
            },
        ],
    };
    return (
        <>
            <Bar data={bar_graph_data} />
        </>
    );
}
