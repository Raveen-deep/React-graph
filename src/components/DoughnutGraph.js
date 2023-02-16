import React from "react";
import { Doughnut } from "react-chartjs-2";
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

function DoughnutGraph() {
    const data = {
        labels: ["First Data", "Second Data", "Third Data"],
        datasets: [
            {
                label: "My First Dataset",
                data: [100, 75, 75],
                backgroundColor: ["#D822FE", "#4DA9FC", "#7618F9"],
                // spacing:1,
                cutout: "50",
                // hoverOffset: 4
            },
        ],
    };
    const options = {
      plugins: {
        legend: false // Hide legend
    },
    };
    return (
        <div>
            <Doughnut
                data={data}
                options={options}
                style={{ maxWidth: "180px", maxHeight: "150px" }}
            />
        </div>
    );
}

export default DoughnutGraph;
