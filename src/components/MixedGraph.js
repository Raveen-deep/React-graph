import React from "react";
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
  } from 'chart.js';
  import { Chart } from 'react-chartjs-2';
//   import faker from 'faker';
  
  ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
  );

function MixedGraph(props) {
    const data = {
        labels:props.data.x_axis_data,
        datasets: [
            {
                label: props.data.personDetail?.first_person,
                type: 'line',
                data: props.data.y_axis_data,
                backgroundColor: "#FC076F",
                borderColor: "#FC076F",
                // pointBackgroundColor: "red",
                borderWidth: 2,
              },
              {
                 type: 'bar',
                label: props.data.personDetail?.second_person,
                data: props.data.second_y_axis_data,
                backgroundColor: "#F48517",
                // borderColor: "gray",
                borderWidth: 2,
              },
            //   {
            //     type: 'bar',
            //     label: 'Bar Dataset',
            //     data: [10,90,-45,78,-65,50],
            //     backgroundColor: "#ebd267",
            //     borderColor: "#FC076F",
            // }, {
            //     type: 'line',
            //     label: 'Line Dataset',
            //     data: [10,90,-45,78,-65,50],
            //     backgroundColor: "#F48517",
            //     borderColor: "#F48517",
            // }
        ],
    }
    const option = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
          },
        },}
    return (
        <>
           <Chart type='bar' data={data}  options={option}/>
        </>
    );
}

export default MixedGraph;
