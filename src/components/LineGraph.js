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
        labels: props.x_axis_data,
        datasets: [
            {
                label: props.label,
                data: props.y_axis_data,
                backgroundColor: "#E3F3BB",
                borderColor: "gray",
                tension: 0.2,
                fill: props.fill,
                // pointStyle: "rect",
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
