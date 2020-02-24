import React from "react";
import { Form, Field, withFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import SingleModuleButton from "components/UI/Buttons/SingleModuleButton";

const InnerForm = props => {
  const { errors, touched } = props;

  return (
    <Form className="register-form">
      <div>
        <div className="form-group">
          <Field
            type="email"
            className="form-control login-input"
            name="email"
            placeholder="Your email..."
          />
          {touched.email && errors.email && (
            <p className="field-invalid">{errors.email}</p>
          )}
        </div>

        <div className="form-group">
          <Field
            type="password"
            className="form-control password-input"
            name="password"
            placeholder="Your password..."
          />
          {touched.password && errors.password && (
            <p className="field-invalid">{errors.password}</p>
          )}
        </div>

        <p>
          <Link to="/login">Already have an account?</Link>
        </p>
      </div>

      <SingleModuleButton text="Create your account" type="submit" />
    </Form>
  );
};

// Wrap our form with the using withFormik HoC
const RegisterForm = withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({ email: "", password: "" }),

  // Add a custom validation 
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("This is not a valid email"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Your password has to be at least 6 characters")
  }),

  // Submission handler
  handleSubmit: (values, { props, setStatus }) => {
    props.onRegisterSubmit(values.email, values.password);
  }
})(InnerForm);

export default RegisterForm;
