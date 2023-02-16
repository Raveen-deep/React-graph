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
                label: props.data.personDetail?.first_person,
                data: props.data.y_axis_data,
                borderColor: "gray",
                borderWidth: 1,
                backgroundColor: helper.getNRandomColor(
                    props.data.y_axis_data.length
                ),
            },
            {
                label: props.data.personDetail?.second_person,
                data: props.data.second_y_axis_data,
                borderColor: "gray",
                borderWidth: 1,
                backgroundColor: helper.getNRandomColor(
                    props.data.second_y_axis_data.length
                ),
            },
        ],
        
    };
    // const option = {
    //     plugins: {
    //         legend: false // Hide legend
    //     },

    // };
    return (
        <>
            <Pie data={line_graph_one}  style={{margin:"auto"}} />
        </>
    );
}
