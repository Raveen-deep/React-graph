import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import LineGraph from "./components/LineGraph";
import Checkbox from '@mui/material/Checkbox';
import * as React from 'react';
import BarGraph from "./components/BarGraph";
import { Formik, Form, FieldArray } from "formik";
// import PieGraph from "./components/PieGraph";
import ListItemText from '@mui/material/ListItemText';
import { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { TextField, Button } from "@mui/material";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent }  from "@mui/material/Select";
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
const names = [
   'Line Graph',
   'Pie Graph',
   'Chart Graph',
  ];
function App() {
    const ResponsiveReactGridLayout = WidthProvider(Responsive);
    const [value, setValue] = useState("lineChart");
    const [y_axis, setYAxis] = useState([]);
    const [x_axis, setXAxis] = useState([]);
    // let label = [];
    // let data = [];
    const initialValues = {
        name: "",
        graphValues: [
            {
                label: "",
                value: 0,
            },
        ],
    };

    const addMore = (push) => {
        push({
            label: "",
            value: 0,
        });
    };

    const handleChange_single = (e) => {
        setValue(e.target.value);
    };

    const onSubmit = (v) => {
        console.log(v);
        let data=[]
        let label=[]
        v.graphValues.map((ele) => {
            label.push(ele.value)
            data.push(parseInt(ele.value));
            return ele;
        });
        setXAxis(label);
        setYAxis(data);
    };
   
  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event: SelectChangeEvent) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

    return (
        <ResponsiveReactGridLayout className="layout" layouts={[]}>
            <div
                style={{ border: "solid 1px gray",backgroundColor:'#f1f8e9' }}
                key="a"
                data-grid={{ x: 0, y: 0, w: 3, h: 2 }}
                className="px-5 py-5"
            >
                <FormControl size="small">
                    <InputLabel >Select Chart</InputLabel>
                    <Select
                       style={{color:'#111414'}}
                        label="Select Chart" onChange={handleChange_single} value={value} 
                    >
                        <MenuItem value="lineChart">Line Chart</MenuItem>
                        <MenuItem value="barChart">Bar Chart</MenuItem>
                        <MenuItem value="pieChart">Pie Chart</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ mt: 1, width: 200 }} size="small">
                    <InputLabel id="demo-multiple-checkbox-label">Select Graph</InputLabel>
                    <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Select Graph" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
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
                className="px-2 py-2"
                style={{ border: "solid 1px gray", background: "#71639E" }}
                key="b"
                data-grid={{ x: 3, y: 0, w: 9, h: 2 }}
            >
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    enableReinitialize={true}
                >
                    {(formik) => (
                        <Form>
                            {/* <TextField
                                size="small"
                                placeholder="Name"
                                variant="outlined"
                                style={{ backgroundColor: "white" }}
                                onChange={(e) => {
                                    formik.setFieldValue(
                                        "name",
                                        e.target.value
                                    );
                                }}
                            /> */}

                            <FieldArray name={`graphValues`}>
                                {({ remove, push }) => (
                                    <>
                                        {formik.values.graphValues.length > 0 &&
                                            formik.values.graphValues.map(
                                                (graphValues, index) => (
                                                    <div key={index}>
                                                        <TextField
                                                            className="mt-2"
                                                            size="small"
                                                            placeholder="Label"
                                                            variant="outlined"
                                                            style={{
                                                                backgroundColor:
                                                                    "white",
                                                            }}
                                                            onChange={(e) => {
                                                                formik.setFieldValue(
                                                                    `graphValues.${index}.label`,
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                        <TextField
                                                            className="mt-2 mx-2"
                                                            size="small"
                                                            placeholder="Value"
                                                            type="number"
                                                            variant="outlined"
                                                            style={{
                                                                backgroundColor:
                                                                    "white",
                                                            }}
                                                            onChange={(e) => {
                                                                formik.setFieldValue(
                                                                    `graphValues.${index}.value`,
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                        />

                                                        {index > 0 ? (
                                                            <DeleteOutlined
                                                                onClick={() =>
                                                                    remove(
                                                                        index
                                                                    )
                                                                }
                                                                className="mt-1"
                                                                fontSize="small"
                                                                variant="outlined"
                                                                style={{
                                                                    color: "white",
                                                                }}
                                                            />
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </div>
                                                )
                                            )}
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
                                    </>
                                )}
                            </FieldArray>
                        </Form>
                    )}
                </Formik>
            </div>
            <div
                style={{ border: "solid 1px gray", background: "#eeeeee" }}
                key="c"
                data-grid={{ x: 0, y: 6, w: 4, h: 2 }}
            >
                <LineGraph
                    data={{
                        x_axis_data: x_axis,
                        y_axis_data: y_axis,
                        label: 'Line Chart',
                    }}
                />
            </div>
            <div
                style={{ border: "solid 1px gray", background: "#d2f7d2" }}
                key="d"
                data-grid={{ x: 4, y: 0, w: 4, h: 2 }}
            >
                {/* {data && label && data.length !== 0 && label.length !== 0 && ( */}
                    <BarGraph
                        data={{
                            x_axis_data: x_axis,
                            y_axis_data: y_axis,
                            label: 'Bar Chart',
                        }}
                    />
                {/* )} */}
            </div>
            <div
                style={{ border: "solid 1px gray", background: "#643F0D" }}
                key="e"
                data-grid={{ x: 8, y: 0, w: 4, h: 2 }}
            >
                {/* {data && label && data.length !== 0 && label.length !== 0 && (
                     <PieGraph
                        data={{
                            x_axis_data: label,
                            y_axis_data: data,
                            label: value,
                        }}
                    /> 
                 )}  */}
                <div className="text-center mt-5"  style={{color:'white'}}>
                <h1>97</h1>
                <h5>Tile (Layout5)</h5>
                <p style={{fontSize:'14px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>
            </div>
        </ResponsiveReactGridLayout>
    );
}

export default App;
