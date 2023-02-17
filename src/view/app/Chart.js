import React from "react";
import LineGraph from "../../components/LineGraph";
import BarGraph from "../../components/BarGraph";
import PieGraph from "../../components/PieGraph";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

export default function Chart() {
  const [chart, setChart] = useState("");

  useEffect(() => {
    setChart(localStorage.getItem("chartName"));
  }, []);

  const getChart = () => {
    switch (chart) {
      case "lineChart":
        return <LineGraph />;
      case "barChart":
        return <BarGraph />;
      case "pieChart":
        return <PieGraph />;
      default:
        return <div>Didn't find the selected graph</div>;
    }
  };
  return <Card style={{ height: "500px" }}>{getChart()}</Card>;
}
