import React from "react";
import { Grid } from "semantic-ui-react";
import UserAuthFormik from "./UserAuthForm";

const UserLogin = () => {
  return (
    <Grid>
      <Grid.Column>
        <UserAuthFormik endpoint="login" />
      </Grid.Column>
    </Grid>
  );
};

export default UserLogin;
