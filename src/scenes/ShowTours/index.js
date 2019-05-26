import React, {Fragment} from "react";
import Footer from "../../components/Footer";
import Tours from "../../components/Tours";
import ContactFooter from "../../components/ContactFooter";
import "./style.scss";

class ShowTours extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="content-wrapper show-tours-wrapper">
          <Tours />
        </div>
        <ContactFooter />
        <Footer />
      </Fragment>
    )
  }
}

export default ShowTours;
