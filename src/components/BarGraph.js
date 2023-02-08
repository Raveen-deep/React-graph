import React from "react";
import { Bar } from "react-chartjs-2";
// import { useState,useEffect } from "react";
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
    
    const bar_graph_data = {
        labels: JSON.parse(localStorage.getItem("x_axis_data")),
        datasets: [
            {
                label: localStorage.getItem("label"),
                data: JSON.parse(localStorage.getItem("y_axis_data")),
                backgroundColor: "#E3F3BB",
                borderColor: "gray",
                tension: 0.2,
                fill: true,
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
