import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

class Login extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{
          title: "",
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          role: "",
          gender: "",
          dob: "",
          acceptTerms: false,
        }}
        validationSchema={Yup.object().shape({
          title: Yup.string().required("Title is required"),
          gender: Yup.string().required("Gender is required select any"),
          firstName: Yup.string().required("First Name is required"),
          lastName: Yup.string().required("Last Name is required"),
          email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),

          password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .max(20, "Password must be less than 20 Character")
            .required("Password is required"),
          role: Yup.string()
            .min(6, "Role must be entered here")
            .required("Role is Required"),
          dob: Yup.string()
            .min(6, "Date of Birth must be entered here")
            .required("Date Of Birth is Required"),

          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
          acceptTerms: Yup.bool().oneOf([true], "Accept Ts & Cs is required"),
        })}
        onSubmit={(fields) => {
          alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
        }}
      >
        {({ errors, status, touched }) => (
          <Form>
            <div className="form-row">
              <div>
                <label>Title</label>
                <Field
                  name="title"
                  as="select"
                  className={
                    "form-control" +
                    (errors.title && touched.title ? " is-invalid" : "")
                  }
                >
                  <option value=""></option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Ms">Ms</option>
                </Field>
                <ErrorMessage
                  name="title"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div>
                <label htmlFor="firstName">First Name</label>
                <Field
                  name="firstName"
                  type="text"
                  className={
                    "form-control" +
                    (errors.firstName && touched.firstName ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <Field
                  name="lastName"
                  type="text"
                  className={
                    "form-control" +
                    (errors.lastName && touched.lastName ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div>
                <label htmlFor="firstName">Date of Birth</label>
                <Field
                  name="dob"
                  type="date"
                  className={
                    "form-control" +
                    (errors.dob && touched.dob ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="dob"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div>
                <label htmlFor="role">Role</label>
                <Field
                  name="role"
                  type="text"
                  className={
                    "form-control" +
                    (errors.role && touched.role ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="role"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div class="form-group col">
                <label>Gender</label>
                <Field
                  name="gender"
                  as="select"
                  className={
                    "form-control" +
                    (errors.gender && touched.title ? " is-invalid" : "")
                  }
                >
                  <option value=""></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="others">Others</option>
                  <option value="not">Prefer Not to Say</option>
                </Field>
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                type="text"
                className={
                  "form-control" +
                  (errors.email && touched.email ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="password">Password</label>
                <Field
                  name="password"
                  type="password"
                  className={
                    "form-control" +
                    (errors.password && touched.password ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group col">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field
                  name="confirmPassword"
                  type="password"
                  className={
                    "form-control" +
                    (errors.confirmPassword && touched.confirmPassword
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>
            <div className="form-group form-check">
              <Field
                type="checkbox"
                name="acceptTerms"
                className={
                  "form-check-input " +
                  (errors.acceptTerms && touched.acceptTerms
                    ? " is-invalid"
                    : "")
                }
              />
              <label htmlFor="acceptTerms" className="form-check-label">
                Accept Terms & Conditions
              </label>
              <ErrorMessage
                name="acceptTerms"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary mr-2">
                Save
              </button>
              <button type="reset" className="btn btn-secondary">
                Reset Value
              </button>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}

export { Login };
