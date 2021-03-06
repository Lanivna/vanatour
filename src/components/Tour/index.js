import React, {Fragment} from "react";
import _ from 'lodash';
import {Button, Card, H1, H5, Icon, Overlay} from "@blueprintjs/core";
import {Elevation} from "@blueprintjs/core/lib/cjs/common/elevation";
import {Link} from "react-router-dom";

import "./style.scss";

class Tour extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggleOverlay = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const {isOpen} = this.state;
    const {tour} = this.props;

    const places = _.get(tour, "place", []);
    const placesCountryString = places.map(p => [p["place_name"], p["country"]["country_name"]].join(", ")).join(" | ");

    const days = tour["days_count"];
    const departure_date = tour["departure_date"];

    return (
      <Fragment>
        <a onClick={this.toggleOverlay}>
          <Card className="tour-small-card" interactive>
            <img src="https://dummyimage.com/555x555" alt="placeholder"/>
            <div className="small-card-content">
              <H5>{tour["tour_name"]}</H5>
              <p>Education costs money. But then so does ignorance</p>
              <Button className="card-price-button">₴{tour["price"]}</Button>
            </div>
          </Card>
        </a>
        <Overlay isOpen={isOpen} onClose={this.toggleOverlay}>
          <Card className="tour-card" elevation={Elevation.FOUR}>
            <Icon icon="cross" color="#707070" className="close-icon" onClick={this.toggleOverlay} />
            <div className="tour-card-wrapper">
              <div className="left">
                <div className="headers">
                  <H1>{tour["tour_name"]}</H1>
                  <H5>₴{tour["price"]}</H5>
                </div>
                <p>{tour["description"]}</p>
                <div>
                  <p className="text-separated">Дата: {departure_date}</p>
                  <p className="text-separated">Количество дней: {days}</p>
                  { places.length > 0 &&
                    <p className="text-separated">Город / Страна: {placesCountryString}</p>
                  }
                </div>
                <Link onClick={this.toggleOverlay} to="/contact">
                  <Button intent="primary">СВЯЗАТЬСЯ С НАМИ</Button>
                </Link>
              </div>
              <div className="right">
                <div className="right-wrapper">
                  <div className="main-picture">
                    <img src="https://dummyimage.com/555x555" alt="placeholder"/>
                  </div>
                  <div className="additional-pictures">
                    <img src="https://dummyimage.com/165x165" alt="placeholder" />
                    <img src="https://dummyimage.com/165x165" alt="placeholder" />
                    <img src="https://dummyimage.com/165x165" alt="placeholder" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Overlay>
      </Fragment>
    );
  }
}

export default Tour;
