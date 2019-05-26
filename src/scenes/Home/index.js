import React, {Fragment} from "react";
import {getTours} from "../../actions/Tour";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Tours from "../../components/Tours";
import Footer from "../../components/Footer";
import ContactFooter from "../../components/ContactFooter";
import MainBackground from "./components/MainBackground";
import {H1} from "@blueprintjs/core";
import Select from "react-select";

import logo from "./media/cocos-test.png";
import "./style.scss";
import ServicesBackground from "./components/ServicesBackground";

const options = [
  { value: 'ukraine', label: 'Украина' },
  { value: 'armenia', label: 'Армения' },
  { value: 'hungary', label: 'Венгрия' }
];

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="content-wrapper home-page">
          <div className="main-section">
            <MainBackground />
            <div className="main-content">
              <div className="left">
                <div className="left-wrapper">
                  <H1>Найдите свой<br/>идеальный тур</H1>
                  <p>Great things in business are never done by one person. They're done by a team of people.</p>
                  <Select
                    options={options}
                    placeholder="Страна направления"
                  />
                </div>
              </div>
              <div className="right">
                Logo will be here.
                {/*<img src={logo} alt="Logo" />*/}
              </div>
            </div>
          </div>
          <div className="services-section">
            <Tours />
          </div>

        </div>
        <ContactFooter />
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.tourReducer.loading,
  error: state.tourReducer.error,
  tours: state.tourReducer.tours,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getTours
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
