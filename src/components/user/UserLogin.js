import React from "react";
import { Form as SemForm, Button, Grid } from "semantic-ui-react";
import { Form, withFormik } from "formik";
import Axios from "axios";
import * as Yup from "yup";

// Form for logging in.

const UserLoginForm = () => {
  return (
    <Grid centered columns={3}>
      <Grid.Column>
        <SemForm as={Form}>
          <SemForm.Field>
            <label>Email:</label>
            <input type="text" name="email" placeholder="Jane Doe" />
          </SemForm.Field>
          <SemForm.Field>
            <label>Password:</label>
            <input type="text" name="email" placeholder="********" />
          </SemForm.Field>
          <Button type="submit">Log In</Button>
        </SemForm>
      </Grid.Column>
    </Grid>
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
})(UserLoginForm);

export default FormikForm;
