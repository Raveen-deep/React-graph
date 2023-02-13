import React from "react";
import { Pie } from "react-chartjs-2";
import helper from "../helper/helper";
import {
    Chart as ChartJs,
    Title,
    Tooltip,
    ArcElement,
    Legend,
    PointElement,
    Filler,
} from "chart.js";

ChartJs.register(Title, Tooltip, ArcElement, Legend, PointElement, Filler);

export default function PieGraph(props) {
    const line_graph_one = {
        labels: props.data.x_axis_data,
        datasets: [
            {
                label: props.data.label,
                data: props.data.y_axis_data,
                borderColor: "gray",
                borderWidth: 1,
                backgroundColor: helper.getNRandomColor(
                    props.data.x_axis_data
                ),
            },
        ],
    };
    return (
        <>
            <Pie data={line_graph_one} />
        </>
    );
}
