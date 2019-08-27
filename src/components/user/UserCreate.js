import React from "react";
import { Grid } from "semantic-ui-react";
import UserAuthFormik from "./UserAuthForm";

const UserCreate = () => {
  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <h2>Register</h2>
        <UserAuthFormik endpoint="register" buttonText="Register" />
      </Grid.Column>
    </Grid>
  );
};

export default UserCreate;
