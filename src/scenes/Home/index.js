import React, {Fragment} from "react";
import Footer from "../../components/Footer";
import {getTours} from "../../actions/Tour";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import {Callout, NonIdealState, Spinner} from "@blueprintjs/core";
import {Intent} from "@blueprintjs/core/lib/cjs/common/intent";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getTours();
  }

  render() {
    const {error, loading, tours} = this.props;
    console.log(tours);

    return (
      <Fragment>
        <div className="content-wrapper">
          { error &&
            <Callout intent={Intent.DANGER}>
              Возникла ошибка ({error})
            </Callout>
          }
          { loading &&
            <Spinner />
          }
          { !loading && tours.length > 0 &&
            tours.map(tour => (
              <div key={tour["tour_name"]}>
                <h4>Tour name: {tour["tour_name"]}</h4>
                <p>Price: {tour["price"]}</p>
                <p>Place: {tour["place"]}</p>
                <p>Departure date: {tour["departure_date"]}</p>
                <p>Departure place: {tour["departure_place"]}</p>
                <p>Hotel name: {tour["hotel"][0]["hotel_name"]}</p>
                <p>Country: {tour["country"][0]["country_name"]}</p>
              </div>
            ))
          }
          { !loading && tours.length === 0 &&
            <NonIdealState
              className="empty-list"
              icon="warning-sign"
              title="Нет доступных туров"
            />
          }
        </div>
        <Footer />
      </Fragment>
    )
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
