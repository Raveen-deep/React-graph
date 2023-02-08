import React from "react";
import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJs,
    Title,
    Tooltip,
    // LineElement,
    ArcElement,
    Legend,
    PointElement,
    Filler,
} from "chart.js";

ChartJs.register(
    Title,
    Tooltip,
    ArcElement,
    Legend,
    PointElement,
    Filler
);

export default function PieGraph() {
    const line_graph_one = {
        labels: JSON.parse(localStorage.getItem("x_axis_data")),
        datasets: [
            {
                label: localStorage.getItem("label"),
                data: JSON.parse(localStorage.getItem("y_axis_data")),
                borderColor: "gray",
                borderWidth: 1,
                backgroundColor: [
                    'rgb(255, 99, 132)'
                  ],
            },
        ],
    };
    return (
        <>
            <Pie data={line_graph_one} />
        </>
    );
}
