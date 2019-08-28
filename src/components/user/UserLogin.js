import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import UserAuthFormik from "./UserAuthForm";

const UserLogin = props => {
  return (
    <Grid centered columns={3} verticalAlign="middle" className="login">
      <Grid.Column>
        <Segment>
          <h1>Hello Guide!</h1>
          <UserAuthFormik endpoint="login" buttonText="Log In" {...props} />
          <p>
            Don't have an account? <Link to="/register">Sign Up!</Link>
          </p>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default UserLogin;
