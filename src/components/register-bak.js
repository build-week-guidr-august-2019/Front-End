import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const RegistrationForm = ({ errors, touched, values, status }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  return (
    <div className="login-form">
      <Form>
        <Field
          component="input"
          type="text"
          name="username"
          placeholder="Username"
        />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
        <Field
          component="input"
          type="password"
          name="password"
          placeholder="password"
        />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <button>Register</button>
      </Form>
    </div>
  );
};

const loginSubmitFormController = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter a username"),
    password: Yup.string().required("Please enter a password")
  }),
  handleSubmit(values, event, { setData, resetForm }) {
    event.preventDefault();
    axios
      .post("/auth/register", {
        username: values.username,
        password: values.password
      })
      .then(res => {
        console.log(res);
        setData(res);
        resetForm();
      })
      .catch(error => {
        console.log(error);
      });
  }
});

const RegisterFormWithFormik = loginSubmitFormController(RegistrationForm);

export default RegisterFormWithFormik;
