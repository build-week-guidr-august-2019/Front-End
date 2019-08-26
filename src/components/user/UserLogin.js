import React from "react";
import { Button, Grid } from "semantic-ui-react";
import { Form, Field, withFormik } from "formik";
import Axios from "axios";
import * as Yup from "yup";

// Form for logging in.

const UserLoginForm = props => {
  const { errors, touched, status, values } = props;

  return (
    <Grid centered columns={3}>
      <Grid.Column>
        <Form className="ui form">
          <div className="field">
            <label>Username</label>
            {touched.username && errors.username && (
              <p className="error">{errors.username}</p>
            )}
            <Field type="text" name="username" placeholder="LewisClark1" />
          </div>
          <div className="field">
            <label>Password</label>
            {touched.password && errors.password && (
              <p className="error">{errors.password}</p>
            )}
            <Field type="text" name="password" placeholder="******" />
          </div>
          <Button type="submit">Log In</Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

const FormikForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required."),
    password: Yup.string().required("Password is required.")
  }),

  handleSubmit(values) {
    Axios.post(
      "https://lambda-guidr.herokuapp.com/api/auth/login",
      values
    ).then(response => {
      console.log(response);
    });
  }
})(UserLoginForm);

export default FormikForm;
