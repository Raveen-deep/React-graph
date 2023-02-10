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
                label: props.data.label,
                data: props.data.y_axis_data,
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
