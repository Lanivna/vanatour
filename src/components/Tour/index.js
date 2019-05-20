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
        <a onClick={this.toggleOverlay}>{tour["id"]}. {tour["tour_name"]}</a>
        <Overlay isOpen={isOpen} onClose={this.toggleOverlay}>
          <Card className="tour-card" elevation={Elevation.FOUR}>
            <Icon icon="cross" color="#707070" className="close-icon" onClick={this.toggleOverlay} />
            <div className="tour-card-wrapper">
              <div className="left">
                <div className="headers">
                  <H1>{tour["tour_name"]}</H1>
                  <H5>₴{tour["price"]}</H5>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi debitis, distinctio, et mollitia possimus qui, quia reiciendis sapiente sequi sunt ut voluptas voluptatum. Consequuntur deleniti earum est laudantium molestiae repellat, sed sequi velit. Aliquid assumenda cupiditate deleniti dolor dolore exercitationem illo, ipsa iusto laboriosam minus nihil perspiciatis porro, possimus quos recusandae, sequi ut velit vero voluptatem voluptates. Consequatur eum facilis ipsam itaque laborum nam neque, nisi nulla provident quae quibusdam quis reiciendis similique? Animi asperiores blanditiis consequatur culpa eaque earum, fugiat minus numquam quaerat vero. Consequuntur cumque dolore, et illum magnam nesciunt nihil nulla officiis quas reiciendis, repellat soluta!</p>
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
