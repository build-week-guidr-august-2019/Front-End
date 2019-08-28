import React from "react";

function Footer(props) {
  return (
    <div className="footer-bottom">
      <div className="copyright">Copyright 2019</div>
      <div className="bottom-nav">
        <ul>
          <li>
            <a href="/about">About Guidr</a>
          </li>
          <li>
            <a href="/careers">Work For Guidr</a>
          </li>
          <li>
            <a href="become-a-guide">Become A Guide</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
