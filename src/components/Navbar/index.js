import React from "react";
import {Link} from "react-router-dom";
import {Button, Navbar} from "@blueprintjs/core";
import {Alignment} from "@blueprintjs/core/lib/cjs/common/alignment";
import "./style.css";
import Logo from "../Icons/Logo";

class NavbarCustom extends React.Component {
  render() {
    return (
      <Navbar fixedToTop>
        <div className="nav-wrapper">
          <Navbar.Group>
            <Logo />
          </Navbar.Group>

          <Navbar.Group align={Alignment.RIGHT}>
            <Link to="/"><Button className="bp3-minimal" text="Главная" /></Link>
            <Link to="/visas"><Button className="bp3-minimal" text="Визы" /></Link>
            <Link to="/plane-tickets"><Button className="bp3-minimal" text="Авиабилеты" /></Link>
            <Link to="/agencies"><Button className="bp3-minimal" text="Агенствам" /></Link>
            <Link to="/about"><Button className="bp3-minimal" text="О нас" /></Link>
            <Link to="/contact"><Button text="Контакты" intent="primary" /></Link>
          </Navbar.Group>
        </div>
      </Navbar>
    );
  }
}

export default NavbarCustom;