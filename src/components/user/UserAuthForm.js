import React from "react";
import { Button } from "semantic-ui-react";
import { Form, Field, withFormik } from "formik";
import Axios from "axios";
import * as Yup from "yup";

const UserAuthForm = props => {
  const { errors, touched, buttonText } = props;

  return (
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
      <Button type="submit" className="ui primary button">
        {buttonText}
      </Button>
    </Form>
  );
};

const UserAuthFormik = withFormik({
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

  handleSubmit(values, { props }) {
    Axios.post(`/auth/${props.endpoint}`, values)
      .then(response => {
        if (response.data.token) {
          props.history.push("/dashboard");
        }
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
})(UserAuthForm);

export default UserAuthFormik;
