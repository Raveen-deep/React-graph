import React from "react";
import { Line } from "react-chartjs-2";
// import { useState, useEffect } from "react";
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
export default function LineGraph() {
    const line_graph_one = {
        labels: JSON.parse(localStorage.getItem("x_axis_data")),
        datasets: [
            {
                label: localStorage.getItem("label"),
                data: JSON.parse(localStorage.getItem("y_axis_data")),
                backgroundColor: "#E3F3BB",
                borderColor: "gray",
                tension: 0.2,
                fill:false,
                pointBackgroundColor: "red",
                borderWidth: 2,
            },
        ],
    };
    return (
        <>
            <Line data={line_graph_one} />
        </>
    );
}
