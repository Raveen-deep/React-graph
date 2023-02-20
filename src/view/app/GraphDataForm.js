import React from "react";
import { Formik, Form, FieldArray } from "formik";
import { TextField, Button } from "@mui/material";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";

export default function GraphDataForm({
  setPersonDetail,
  setXAxis,
  setYAxis,
  setSecondYAxis,
}) {
  const initialValues = {
    name: "",
    graphValues: [
      {
        label: "",
        value: null,
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
  return (
    <>
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
            <TextField
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
                formik.setFieldValue("first_person", e.target.value);
              }}
            />
            <TextField
              size="small"
              placeholder="Second Person"
              variant="outlined"
              className="text-field mx-2"
              onChange={(e) => {
                formik.setFieldValue("second_person", e.target.value);
              }}
            />
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
    </>
  );
}
