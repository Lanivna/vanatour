import React, {Fragment} from "react";
import Footer from "../../components/Footer";
import {getTours} from "../../actions/Tour";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import {Callout, NonIdealState, Spinner} from "@blueprintjs/core";
import {Intent} from "@blueprintjs/core/lib/cjs/common/intent";
import Tour from "../../components/Tour";

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
              <Tour key={tour["tour_name"]} tour={tour}/>
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
