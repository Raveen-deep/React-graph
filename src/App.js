import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import LineGraph from "./components/LineGraph";
import Checkbox from "@mui/material/Checkbox";
import * as React from "react";
import BarGraph from "./components/BarGraph";
import PieGraph from "./components/PieGraph";
import { Formik, Form, FieldArray } from "formik";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { TextField, Button } from "@mui/material";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import DoughnutGraph from "./components/DoughnutGraph";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Select from "@mui/material/Select";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = ["Line Chart", "Bar Chart", "Pie Chart"];
function App() {
  const ResponsiveReactGridLayout = WidthProvider(Responsive);
  const [y_axis, setYAxis] = useState(["20", "50", "49", "05", "88"]);
  const [x_axis, setXAxis] = useState(["Jan", "Feb", "March", "April", "May"]);
  const [personDetail, setPersonDetail] = useState({
    first_person: "",
    second_person: "",
  });
  // const [theme, setTheme] = useState("light");
  const [secondYAxis, setSecondYAxis] = useState([
    "88",
    "41",
    "-45",
    "51",
    "87",
  ]);

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

  const initialValues = {
    first_person: "",
    second_person: "",
    graphValues: [
      {
        x_axis_labels: "",
        y_axis_fist_val: 0,
        y_axis_second_val: 0,
      },
    ],
  };
  const addMore = (push) => {
    push({
      x_axis_labels: "",
      y_axis_fist_val: 0,
      y_axis_second_val: 0,
    });
  };
  const onSubmit = (v) => {
    console.log(v);
    let first_y_axis = [];
    let second_y_axis = [];
    let x_axis = [];
    v.graphValues.map((ele) => {
      x_axis.push(ele.x_axis_labels);
      first_y_axis.push(parseInt(ele.y_axis_fist_val));
      second_y_axis.push(parseInt(ele.y_axis_second_val));
      return ele;
    });
    setPersonDetail({
      first_person: v.first_person,
      second_person: v.second_person,
    });
    setXAxis(x_axis);
    setYAxis(first_y_axis);
    setSecondYAxis(second_y_axis);
  };

  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    console.log("here=>", personName);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ResponsiveReactGridLayout className="layout">
        <div
          key="a"
          data-grid={{ x: 0, y: 0, w: 3, h: 2 }}
          className="px-5 py-5 chart-div"
        >
          <FormControl
            sx={{ mt: 1, width: 200 }}
            size="small"
            style={{ width: "-webkit-fill-available" }}
          >
            <InputLabel id="demo-multiple-checkbox-label">
              Select Graph
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Select Graph" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
              style={{ background: "white" }}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div
          className="px-2 py-2 chart-div"
          key="b"
          data-grid={{ x: 0, y: 0, w: 9, h: 2 }}
        >
          <h5 className="mx-1" style={{ color: "white" }}>
            Add Data's
          </h5>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            enableReinitialize={true}
          >
            {(formik) => (
              <Form>
                {/* <span className="text-field">Month</span> */}
                {/* <TextField
                                    size="small"
                                    placeholder="Chart Label"
                                    variant="outlined"
                                    value="Month's"
                                    className="text-field"
                                    inputProps={{ readOnly: true }}
                                />
                                <TextField
                                    size="small"
                                    placeholder="First Person"
                                    variant="outlined"
                                    className="text-field mx-2"
                                    onChange={(e) => {
                                        formik.setFieldValue(
                                            "first_person",
                                            e.target.value
                                        );
                                    }}
                                />
                                <TextField
                                    size="small"
                                    placeholder="Second Person"
                                    variant="outlined"
                                    className="text-field mx-2"
                                    onChange={(e) => {
                                        formik.setFieldValue(
                                            "second_person",
                                            e.target.value
                                        );
                                    }}
                                /> */}
                <FieldArray name={`graphValues`}>
                  {({ remove, push }) => (
                    <>
                      {formik.values.graphValues.length > 0 &&
                        formik.values.graphValues.map((graphValues, index) => (
                          <div key={index}>
                            <TextField
                              className="mt-1 text-field"
                              size="small"
                              placeholder="X-axis"
                              variant="outlined"
                              onChange={(e) => {
                                formik.setFieldValue(
                                  `graphValues.${index}.x_axis_labels`,
                                  e.target.value
                                );
                              }}
                            />
                            <TextField
                              className="mx-2 mt-1 text-field"
                              size="small"
                              placeholder="Y-axis (First Value)"
                              type="number"
                              variant="outlined"
                              onChange={(e) => {
                                formik.setFieldValue(
                                  `graphValues.${index}.y_axis_fist_val`,
                                  e.target.value
                                );
                              }}
                            />
                            <TextField
                              className="mx-2 mt-1 text-field"
                              size="small"
                              placeholder="Y-axis (Second Value)"
                              type="number"
                              variant="outlined"
                              onChange={(e) => {
                                formik.setFieldValue(
                                  `graphValues.${index}.y_axis_second_val`,
                                  e.target.value
                                );
                              }}
                            />

                            {index > 0 ? (
                              <DeleteOutlined
                                onClick={() => remove(index)}
                                style={{
                                  color: "white",
                                  cursor: "pointer",
                                }}
                                className="mt-3"
                                fontSize="small"
                                variant="outlined"
                              />
                            ) : (
                              <></>
                            )}
                          </div>
                        ))}
                      {/* <span className="m-2"> */}
                      <br />
                      <Button
                        variant="contained"
                        color="success"
                        size="small"
                        onClick={() => addMore(push)}
                      >
                        {" "}
                        + Add More
                      </Button>

                      <Button
                        variant="contained"
                        className="mx-2"
                        size="small"
                        color="success"
                        type="submit"
                      >
                        Submit
                      </Button>
                      {/* </span> */}
                    </>
                  )}
                </FieldArray>
              </Form>
            )}
          </Formik>
        </div>
        {/* {personName.includes("Line Chart") && ( */}
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
        {/* )} */}
        {/* {personName.includes("Bar Chart") && ( */}
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
        {/* )} */}
        {/* {personName.includes("Pie Chart") && ( */}
        <div
          className="chart-div"
          key="e"
          data-grid={{ x: 9, y: 0, w: 3, h: 2 }}
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
        {/* )} */}
        <div
          className="chart-div py-5 px-5"
          key="f"
          data-grid={{ x: 9, y: 4, w: 4, h: 2 }}
        >
          <h5 className="doughnut-title pb-2">Doughnut Graph</h5>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <DoughnutGraph />
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
      </ResponsiveReactGridLayout>
    </ThemeProvider>
  );
}

export default App;
