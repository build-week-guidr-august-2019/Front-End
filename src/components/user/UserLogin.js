import React from "react";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import UserAuthFormik from "./UserAuthForm";

const UserLogin = () => {
  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <h2>Log In</h2>
        <UserAuthFormik endpoint="login" buttonText="Log In" />
        <Link to="/register">Register</Link>
      </Grid.Column>
    </Grid>
  );
};

export default UserLogin;
