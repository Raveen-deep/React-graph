import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import LineGraph from "./components/LineGraph";
import BarGraph from "./components/BarGraph";
import { Formik, Form, FieldArray } from "formik";
import PieGraph from "./components/PieGraph";
import { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

function App() {
  const ResponsiveReactGridLayout = WidthProvider(Responsive);
  const [value, setValue] = useState("lineChart");
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

  const addMore = (push) => {
    push({
      label: "",
      value: 0,
    });
  };

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
    <ResponsiveReactGridLayout className="layout" layouts={[]}>
      <div
        style={{ border: "solid 2px black" }}
        key="a"
        data-grid={{ x: 0, y: 0, w: 2, h: 2 }}
      >
        <div>Dashboard</div>
        <select value={value} onChange={handleChange}>
          <option value="lineChart">Line Chart</option>
          <option value="barChart">Bar Chart</option>
          <option value="pieChart">Pie Chart</option>
        </select>
      </div>
      <div
        style={{ border: "solid 2px black", overflow: "hidden" }}
        key="b"
        data-grid={{ x: 1, y: 0, w: 3, h: 3 }}
      >
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
                      formik.values.graphValues.map((graphValues, index) => (
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
                            <button type="button" onClick={() => remove(index)}>
                              Remove
                            </button>
                          ) : (
                            <></>
                          )}
                        </div>
                      ))}
                    <br />
                    <button
                      type="button"
                      className="textblue font-bold text-[14px]  w-[130px] mb-5"
                      onClick={() => addMore(push)}
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
      <div
        style={{ border: "solid 2px black" }}
        key="c"
        data-grid={{ x: 3, y: 0, w: 3, h: 2 }}
      >
        <LineGraph
          data={{ x_axis_data: label, y_axis_data: data, label: value }}
        />
      </div>
      <div
        style={{ border: "solid 2px black" }}
        key="d"
        data-grid={{ x: 4, y: 0, w: 3, h: 2 }}
      >
        {data && label && data.length !== 0 && label.length !== 0 && (
          <BarGraph
            data={{ x_axis_data: label, y_axis_data: data, label: value }}
          />
        )}
      </div>
      <div
        style={{ border: "solid 2px black" }}
        key="e"
        data-grid={{ x: 5, y: 0, w: 3, h: 2 }}
      >
        {data && label && data.length !== 0 && label.length !== 0 && (
          <PieGraph
            data={{ x_axis_data: label, y_axis_data: data, label: value }}
          />
        )}
      </div>
    </ResponsiveReactGridLayout>
  );
}

export default App;
