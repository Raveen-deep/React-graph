import React from "react";
import "../../assets/css/style.css";
import LineGraph from "../../components/LineGraph";
import BarGraph from "../../components/BarGraph";
export default function Home() {
    const x_axis_data = [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const y_axis_data = [
        80, 85, 30, 150, 85, -40, 10.5, 32, 50, 60, 20, -25, -14,
    ];
    return (
        <>
            <div className="charts">
                <LineGraph
                    x_axis_data={x_axis_data}
                    y_axis_data={y_axis_data}
                    label={"Line Chart with Fill"}
                    fill={true}
                />
                <LineGraph
                    x_axis_data={x_axis_data}
                    y_axis_data={y_axis_data}
                    label={"Line Chart without Fill"}
                    fill={false}
                />
                <BarGraph
                    x_axis_data={x_axis_data}
                    y_axis_data={y_axis_data}
                    label={"Bar Graph"}
                />
            </div>
        </>
    );
}
