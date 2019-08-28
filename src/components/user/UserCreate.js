import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import UserAuthFormik from "./UserAuthForm";

const UserCreate = () => {
  return (
    <Grid centered columns={3} verticalAlign="middle" className="login">
      <Grid.Column>
        <Segment>
          <h2>Register</h2>
          <UserAuthFormik endpoint="register" buttonText="Register" />
          <Link to="/login">Log In</Link>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default UserCreate;
