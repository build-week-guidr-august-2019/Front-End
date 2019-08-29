import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Header = props => {
  const logout = () => {
    window.localStorage.setItem("token", "");
    props.history.push("/login");
  };

  return (
    <Menu>
      <Menu.Item as={NavLink} name="Dashboard" to="/dashboard" exact />
      <Menu.Item as={NavLink} name="add trip" to="/trips/add" icon="plus" />
      <Menu.Item
        onClick={() => {
          logout();
        }}
        name="logout"
        position="right"
      />
    </Menu>
  );
};

export default Header;
