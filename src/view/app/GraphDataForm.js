import React from "react";
import { Formik, Form, FieldArray } from "formik";
import { useNavigate } from "react-router";

export default function GraphDataForm() {
    const navigate = useNavigate();
    let label = [];
    let value = [];
    const initialValues = {
        name: "",
        graphValues: [
            {
                label: "",
                value: null,
            },
        ],
    };
    const onSubmit = (v) => {
        console.log(v);
        v.graphValues.map((ele) => {
            label.push(ele.label);
            value.push(parseInt(ele.value));
            return ele;
        });
        localStorage.setItem("x_axis_data",JSON.stringify(label))
        localStorage.setItem("y_axis_data",JSON.stringify(value))
        localStorage.setItem("label",v.name)
        navigate("/home");
    };
    return (
        <div>
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
                                        onClick={() =>
                                            push({
                                                label: "",
                                                value: 0,
                                            })
                                        }
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
    );
    // validationSchema={validationSchema}
}
