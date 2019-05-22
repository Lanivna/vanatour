import React, {Fragment} from "react";
import {Button, Card, FormGroup, Icon, InputGroup, TextArea} from "@blueprintjs/core";
import "./style.scss";
import {Intent} from "@blueprintjs/core/lib/cjs/common/intent";
import Background from "./components/Background";
import Footer from "../../components/Footer";
import Map from "./components/Map";

class Contact extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="content-wrapper">
          <Background />
          <h1 className="bp3-heading">Контакты</h1>
          <div className="cards">
            <Card className="custom-card" elevation="3">
              <form>
                <FormGroup
                  label="Полное имя"
                  labelFor="full-name"
                  labelInfo="(обязательно)"
                >
                  <InputGroup id="full-name" type="text" required />
                </FormGroup>
                <FormGroup
                    label="E-mail"
                    labelFor="email"
                    labelInfo="(обязательно)"
                  >
                    <InputGroup id="email" type="email" required />
                </FormGroup>
                <FormGroup
                    label="Сообщение"
                    labelFor="message"
                    labelInfo="(обязательно)"
                  >
                    <TextArea
                      required
                      growVertically={false}
                    />
                </FormGroup>
                <div style={{textAlign: "center"}}>
                  <Button icon="envelope" intent={Intent.PRIMARY} type="submit">
                    Отправить
                  </Button>
                </div>
              </form>
            </Card>
            <Card className="custom-card" style={{padding: "0"}} elevation="3">
              <Map />
              <div className="contact-info">
                <span className="left">
                  <Icon icon="map-marker" color="#595959" />
                  г. Черкассы, ул. Верхняя Горовая, 25
                </span>
                <span className="right">
                  <Icon icon="phone" color="#595959" />
                  <div>
                    <a href="tel:+380472502992">+380 47 250-29-92</a>
                    <br/>
                    <a href="tel:+380950081004">+380 95 008-10-04</a>
                    <br/>
                    <a href="tel:+380960081004">+380 96 008-10-04</a>
                  </div>
                </span>
              </div>
            </Card>
          </div>
        </div>
        <Footer />
      </Fragment>
    );


  }
}

export default Contact;
