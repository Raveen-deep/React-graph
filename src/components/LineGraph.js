import React from "react";
import { Line } from "react-chartjs-2";
import { useState,useEffect } from "react";
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
    const [xdata, setXData] = useState([]);
    const [ydata, setYData] = useState([]);
    const [label, setLabel] = useState([]);
    const [fill, setFill] = useState(false);
    
    useEffect(() => {
        try{
            setXData(localStorage.getItem("x_axis_data"));
            setYData(localStorage.getItem("y_axis_data"));
            setLabel(localStorage.getItem("label"));
            setFill(localStorage.getItem("fill"));
            console.log(xdata,ydata);
        }catch(e){
          console.log(e)
        }
    })
    


    const line_graph_one = {
        labels: xdata,
        datasets: [
            {
                label: label,
                data: ydata,
                backgroundColor: "#E3F3BB",
                borderColor: "gray",
                tension: 0.2,
                fill: fill,
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
