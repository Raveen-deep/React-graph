import React from "react";
import LineGraph from "../../components/LineGraph";
import BarGraph from "../../components/BarGraph";
import PieGraph from "../../components/PieGraph";
import { useState,useEffect } from "react";
// import Container from "react-bootstrap/Container";
// import { Row, Col } from "react-bootstrap";
// import Col from "react-bootstrap/Col";
export default function Home() {

    const [chart, setChart] = useState("addform");

    useEffect(() => {
      setChart(localStorage.getItem("chartName"));
    },[]);
    

    const getChart = () => {
        switch(chart){
            case "lineChart":
                return <LineGraph/>;
            case "barChart":
                return <BarGraph />;
            case "pieChart":
                return <PieGraph/>
            default:
                return <div>Didn't find the selected graph</div>
        }
    }
    return (
        <>
        {getChart()}
        </>
    );
}
