import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';
import { HashRouter , Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Dashboard from "./view/app/Dashboard";
import GraphDataForm from "./view/app/GraphDataForm";
import Chart from "./view/app/Chart";
import LineGraph from "./components/LineGraph";
import BarGraph from "./components/BarGraph";
import { Formik, Form, FieldArray } from "formik";
import PieGraph from "./components/PieGraph";
import { useState,useEffect } from "react";
import ReactGridLayout, {Responsive, WidthProvider} from "react-grid-layout";

function App() {
    const ResponsiveReactGridLayout = WidthProvider(Responsive);
    const [value, setValue] = useState("lineChart");
    const [layout, setLayout] = useState([
        {i: 'a', x: 0, y: 0, w: 4, h: 1},
        {i: 'b', x: 1, y: 1, w: 10, h: 10},
        {i: 'c', x: 50, y: 50, w: 10, h: 10},
        {i: 'd', x: 7, y: 7, w: 10, h: 10},
        {i: 'e', x: 9, y: 9, w: 4, h: 1.5}
      ]);
    let label = [];
    let data = [];
    const initialValues = {
        name: "",
        graphValues: [
            {
                label: "",
                value: 0,
            },
        ],
    };
    // useEffect(() => {
    // }, [label,layout])
    

    const addMore = (push) =>{
    //     setLayout(layout.map(e=>{
    //         if(e.i == "b"){
    //             e.w+=0.5;
    //         }
    //         return e;
    //     }))
        push({
            label:"",
            value:0
        })
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const onSubmit = (v) => {
        console.log(v);
        v.graphValues.map((ele) => {
            label.push(ele.label);
            data.push(parseInt(ele.value));
            return ele;
        });
    };

    return (
        <ResponsiveReactGridLayout layout={layout} breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
            {/* <HashRouter>
                <Container>
                    <Routes >
                        <Route path="/Chart" exact element={<Chart />} />
                        <Route path="/DataForm" exact element={<GraphDataForm />} />
                        <Route path="*" exact element={<Dashboard />} />
                    </Routes>
                </Container>
            </HashRouter> */}
            <div style={{border:"solid 2px black"}} key="a">
                <div>Dashboard</div>
                <select value={value} onChange={handleChange}>
                    <option value="lineChart">Line Chart</option>
                    <option value="barChart">Bar Chart</option>
                    <option value="pieChart">Pie Chart</option>
                </select>
            </div>
            <div style={{border:"solid 2px black"}} key="b">
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    enableReinitialize={true}
                >
                    {(formik) => (
                        <Form>
                            <input
                                placeholder="Name"
                                type="text"
                                onChange={(e) => {
                                    formik.setFieldValue("name", e.target.value);
                                }}
                            ></input>
                        

                            <FieldArray name={`graphValues`}>
                                {({ remove, push }) => (
                                    <>
                                        {formik.values.graphValues.length > 0 &&
                                            formik.values.graphValues.map(
                                                (graphValues, index) => (
                                                    <div key={index}>
                                                        <input
                                                            placeholder="Label"
                                                            type="text"
                                                            onChange={(e) => {
                                                                formik.setFieldValue(
                                                                    `graphValues.${index}.label`,
                                                                    e.target.value
                                                                );
                                                            }}
                                                        ></input>
                                                        <input
                                                            placeholder="Value"
                                                            type="tel"
                                                            onChange={(e) => {
                                                                formik.setFieldValue(
                                                                    `graphValues.${index}.value`,
                                                                    e.target.value
                                                                );
                                                            }}
                                                        ></input>
                                                        {index > 0 ? (
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    remove(index)
                                                                }
                                                            >
                                                                Remove
                                                            </button>
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </div>
                                                )
                                            )}
                                        <br />
                                        <button
                                            type="button"
                                            className="textblue font-bold text-[14px]  w-[130px] mb-5"
                                            onClick={()=>addMore(push)}
                                        >
                                            + Add More
                                        </button>
                                        <button
                                            type="submit"
                                            className="textblue font-bold text-[14px]  w-[130px] mb-5"
                                        >
                                            Submit
                                        </button>
                                    </>
                                )}
                            </FieldArray>
                        </Form>
                    )}
                </Formik>
            </div>
            <div style={{border:"solid 2px black"}} key="c">
                 <LineGraph data={{x_axis_data:label, y_axis_data:data,label:value}} />
            </div>
            <div style={{border:"solid 2px black"}} key="d">
                { data && label && data.length !== 0 && label.length !== 0 && <BarGraph data={{x_axis_data:label, y_axis_data:data,label:value}} />}
            </div>
            <div style={{border:"solid 2px black"}} key="e">
                { data && label && data.length !== 0 && label.length !== 0 && <PieGraph data={{x_axis_data:label, y_axis_data:data,label:value}} />}
            </div>
        </ResponsiveReactGridLayout>
    );
}

export default App;
