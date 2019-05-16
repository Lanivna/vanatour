import React, {Fragment} from "react";
import {Button, Card, FormGroup, InputGroup, TextArea} from "@blueprintjs/core";
import "./style.scss";
import {Intent} from "@blueprintjs/core/lib/cjs/common/intent";
import Background from "./components/Background";
import Footer from "../../components/Footer";

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
                  label="Full Name"
                  labelFor="full-name"
                  labelInfo="(required)"
                >
                  <InputGroup id="full-name" type="text" required />
                </FormGroup>
                <FormGroup
                    label="E-mail"
                    labelFor="email"
                    labelInfo="(required)"
                  >
                    <InputGroup id="email" type="email" required />
                </FormGroup>
                <FormGroup
                    label="Message"
                    labelFor="message"
                    labelInfo="(required)"
                  >
                    <TextArea
                      required
                      growVertically={false}
                    />
                </FormGroup>
                <div style={{textAlign: "center"}}>
                  <Button icon="envelope" intent={Intent.PRIMARY} type="submit">
                    Send
                  </Button>
                </div>
              </form>
            </Card>
            <Card className="custom-card" elevation="3">

            </Card>
          </div>
        </div>
        <Footer />
      </Fragment>
    );


  }
}

export default Contact;
