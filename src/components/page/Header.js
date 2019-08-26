import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Header = () => {
  return (
    <Menu>
      <Menu.Item as={NavLink} name="home" to="/" exact />
      <Menu.Item as={NavLink} name="add trip" to="/trips/add" icon="plus" />
      <Menu.Item as={NavLink} name="logout" to="/logout" position="right" />
    </Menu>
  );
};

export default Header;