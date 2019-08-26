import React from "react";
import { Grid } from "semantic-ui-react";
import UserAuthFormik from "./UserAuthForm";

const UserLogin = () => {
  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <h2>Log In</h2>
        <UserAuthFormik endpoint="login" />
      </Grid.Column>
    </Grid>
  );
};

export default UserLogin;
