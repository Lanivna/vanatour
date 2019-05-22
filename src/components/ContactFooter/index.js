import React from "react";

import "./style.scss";
import {Icon} from "@blueprintjs/core";

class ContactFooter extends React.Component {
  render() {
    return (
      <div className="contact-footer">
        <div className="address-block">
          <Icon icon="map-marker" color="#595959" />
          <span className="block-header">Адрес</span>
          <span className="block-content">г. Черкассы, ул. Верхняя Горовая, 25</span>
        </div>
        <div className="phone-block">
          <Icon icon="phone" color="#595959" />
          <span className="block-header">Телефон</span>
          <div className="block-content">
            <a href="tel:+380472502992">+380 47 250-29-92</a>
            <br/>
            <a href="tel:+380950081004">+380 95 008-10-04</a>
            <br/>
            <a href="tel:+380960081004">+380 96 008-10-04</a>
          </div>
        </div>
        <div className="email-block">
          <Icon icon="envelope" color="#595959" />
          <span className="block-header">Email</span>
          <div className="block-content">
            <a href="mailto:office@vanatour.com.ua">office@vanatour.com.ua</a>
            <br/>
            <a href="mailto:booking@vanatour.com.ua">booking@vanatour.com.ua</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactFooter;