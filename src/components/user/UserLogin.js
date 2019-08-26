import React from "react";
import { Form as SemForm, Button } from "semantic-ui-react";
import { Form, Field, withFormik } from "formik";
import Axios from "axios";
import * as Yup from "yup";

// Form for logging in.

const UserLoginForm = () => {
  return (
    <SemForm as={Form}>
      <SemForm.Field as={Field} type="text" name="email" placeholder="Email" />
      <SemForm.Field
        as={Field}
        type="text"
        name="password"
        placeholder="Password"
      />
      <Button type="submit" />
    </SemForm>
  );
};

const FormikForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email Address.")
      .required(),
    password: Yup.string()
      .min(6, "Password is too short.")
      .required()
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    Axios.post("https://reqres.in/api/users", values).then(response => {
      setStatus(response.data);
      resetForm();
    });
  }
});

export default UserLoginForm;
