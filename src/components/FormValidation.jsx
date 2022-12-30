import React, { Component } from "react";
import { Formik, Form, Field,ErrorMessage } from "formik";
import * as yup from "yup";
class FormValidation extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    };
    validationSchema = yup.object().shape({
        name: yup.string().required("Please enter your name"),
        email: yup.string().required("Please enter your email").email("Please enter valid email"),
        password: yup.string().required("Please enter your password")

    })
    handleSubmit = (values) => {
        console.log("values", values);
    }

  render() {
    return (
      <div className="col-md-14 text-center mt-6">
        <h1>Form Validation with Formik and Yup Libarary</h1>
        <Formik
          initialValues={this.state}
          validationSchema={this.validationSchema}
          onSubmit={this.handleSubmit}
        >
          <Form>
            <div className="col-md-12 mt-4">
              {" "}
              <Field
                type="text"
                name="name"
                placeholder="Enter Your Name..."
                className="form-control"
              />
              <p className="text-danger">
                <ErrorMessage name="name" />
              </p>
            </div>
            <div className="col-md-12 mt-4">
              <Field
                type="text"
                name="email"
                placeholder="Enter Your email..."
                className="form-control"
              />
              <p className="text-danger">
                <ErrorMessage name="email" />
              </p>
            </div>
            <div className="col-md-12 mt-4">
              <Field
                type="text"
                name="password"
                placeholder="Enter Your password..."
                className="form-control"
              />
              <p className="text-danger">
                <ErrorMessage name="password" />
              </p>
            </div>
            <div className="col-md-12 mt-4">
              <Field
                Component="select"
                name="Gender"
                placeholder="Select Gender"
              >
                <option value="" disabled>
                  Please Select
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Field>
              <p className="text-danger">
                <ErrorMessage name="gender" />
              </p>
            </div>
            <button className="btn-btn-primary" type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    );
  }
}
export default FormValidation;
