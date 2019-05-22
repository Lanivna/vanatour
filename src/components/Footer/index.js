import React from "react";
import { FaFacebookF, FaTwitter, FaVk, FaInstagram, FaGoogle } from 'react-icons/fa';

import "./style.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="left">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaGoogle /></a>
        </div>
        <div className="center">
          <span>© 2016 - 2018 | All rights reserved</span>
        </div>
        <div className="right" />
      </footer>
    );
  }
}

export default Footer;