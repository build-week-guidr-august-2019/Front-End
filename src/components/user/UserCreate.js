import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import UserAuthFormik from "./UserAuthForm";

const UserCreate = props => {
  return (
    <Grid centered columns={3} verticalAlign="middle" className="login">
      <Grid.Column>
        <Segment>
          <h1>Hello Guide!</h1>
          <p>Let's get you started!</p>
          <UserAuthFormik
            endpoint="register"
            buttonText="Register"
            {...props}
          />
          <p>
            Already have an account? <Link to="/login">Log In!</Link>
          </p>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default UserCreate;
