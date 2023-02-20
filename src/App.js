import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import LineGraph from "./components/LineGraph";
import * as React from "react";
import BarGraph from "./components/BarGraph";
import PieGraph from "./components/PieGraph";
import { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import DoughnutGraph from "./components/DoughnutGraph";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GraphDataForm from "./view/app/GraphDataForm";
import GraphDropDown from "./view/app/GraphDropDown";

function App() {
  const ResponsiveReactGridLayout = WidthProvider(Responsive);
  const [y_axis, setYAxis] = useState([]);
  const [x_axis, setXAxis] = useState([]);
  const [personDetail, setPersonDetail] = useState({
    first_person: "",
    second_person: "",
  });
  const [secondYAxis, setSecondYAxis] = useState([]);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#08082E",
      },
      secondary: {
        main: "#fc076fd9",
      },
    },
  });

  const [chartName, setChartName] = React.useState([]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ResponsiveReactGridLayout className="layout">
        <div
          key="a"
          data-grid={{ x: 0, y: 0, w: 3, h: 2 }}
          className="px-5 py-5 chart-div"
        >
          <GraphDropDown {...{ setChartName, chartName }} />
        </div>
        <div
          className="px-2 py-2 chart-div"
          key="b"
          data-grid={{ x: 3, y: 0, w: 9, h: 2 }}
        >
          <GraphDataForm
            {...{
              setPersonDetail,
              setXAxis,
              setYAxis,
              setSecondYAxis,
            }}
          />
        </div>
        {chartName.includes("Line Chart") && (
          <div
            className="chart-div"
            key="c"
            data-grid={{ x: 0, y: 6, w: 4, h: 2 }}
          >
            <LineGraph
              data={{
                x_axis_data: x_axis,
                y_axis_data: y_axis,
                second_y_axis_data: secondYAxis,
                personDetail: personDetail,
              }}
            />
          </div>
        )}
        {chartName.includes("Bar Chart") && (
          <div
            className="chart-div"
            key="d"
            data-grid={{ x: 4, y: 0, w: 4, h: 2 }}
          >
            <BarGraph
              data={{
                x_axis_data: x_axis,
                y_axis_data: y_axis,
                second_y_axis_data: secondYAxis,
                personDetail: personDetail,
              }}
            />
          </div>
        )}
        {chartName.includes("Pie Chart") && (
          <div
            className="chart-div"
            key="e"
            data-grid={{ x: 8, y: 0, w: 4, h: 2 }}
          >
            <PieGraph
              className="chart-div"
              style={{ width: "100%" }}
              data={{
                x_axis_data: x_axis,
                y_axis_data: y_axis,
                second_y_axis_data: secondYAxis,
                personDetail: personDetail,
              }}
            />
          </div>
        )}
        {chartName.includes("Doughnut Graph") && (
          <div
            className="chart-div py-5 px-5"
            key="f"
            data-grid={{ x: 0, y: 6, w: 4, h: 2 }}
          >
            <h5 className="doughnut-title pb-2">Doughnut Graph</h5>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <DoughnutGraph
                data={{
                  x_axis_data: x_axis,
                  y_axis_data: y_axis,
                  second_y_axis_data: secondYAxis,
                  personDetail: personDetail,
                }}
              />
              <div>
                <FiberManualRecordIcon
                  fontSize="small"
                  style={{ color: "#7618F9" }}
                />
                <h6 className="doughnut-title" style={{ marginTop: "-20px" }}>
                  First Data
                </h6>
              </div>
              <br />
              <div>
                <FiberManualRecordIcon
                  fontSize="small"
                  style={{ color: "#4DA9FC" }}
                />
                <h6 className="doughnut-title" style={{ marginTop: "-20px" }}>
                  Second Data
                </h6>
              </div>
            </div>
          </div>
        )}
      </ResponsiveReactGridLayout>
    </ThemeProvider>
  );
}

export default App;
