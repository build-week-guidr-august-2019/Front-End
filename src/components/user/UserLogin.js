import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import UserAuthFormik from "./UserAuthForm";

const UserLogin = props => {
  return (
    <Grid centered columns={3} verticalAlign="middle">
      <Grid.Column>
        <Segment className="loginSegment">
          <h2>Log In</h2>
          <UserAuthFormik endpoint="login" buttonText="Log In" {...props} />
          <Link to="/register">Register</Link>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default UserLogin;
