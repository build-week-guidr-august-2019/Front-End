import React from "react";
import { NavLink } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer-container">
      <div className="footer-bottom">
        <div className="bottom-nav">
          <ul>
            <li>
              <NavLink to="/about">About Guidr</NavLink>
            </li>
            <li>
              <NavLink to="/careers">Work For Guidr</NavLink>
            </li>
            <li>
              <NavLink to="become-a-guide">Become A Guide</NavLink>
            </li>
          </ul>
        </div>
        <div className="bottom-logo">
          <p>Guidr</p>
        </div>
      </div>
      <div className="copyright">Copyright 2019</div>
    </div>
  );
}

export default Footer;
