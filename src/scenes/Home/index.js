import React, {Fragment} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Footer from "../../components/Footer";
import ContactFooter from "../../components/ContactFooter";
import MainBackground from "./components/MainBackground";
import {H1, Spinner} from "@blueprintjs/core";
import Select from "react-select";
import {getAvailableCountries, } from "../../actions/Tour";

import "./style.scss";


class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {selectedOption: ""}
  }

  componentDidMount() {
    this.props.getAvailableCountries();
  }

  render() {
    const {selectedOption} = this.state;
    const {loading, availableCountries} = this.props;

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
                  {loading
                    ? <Spinner />
                    : <Select
                      options={availableCountries.map(c => ({value: c, label: c}))}
                      placeholder="Страна направления"
                      value={selectedOption}
                      onChange={(selectedOption) => {
                        this.setState({selectedOption});
                        this.props.history.push({
                          pathname: "tours/",
                          state: {country: selectedOption}
                        });
                      }}
                    />
                  }
                </div>
              </div>
              <div className="right">
                Logo will be here.
                {/*<img src={logo} alt="Logo" />*/}
              </div>
            </div>
          </div>
          <div className="services-section" />
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
  availableCountries: state.tourReducer.availableCountries,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getAvailableCountries
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
