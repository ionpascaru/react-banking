import React, { Component } from "react";
import { connect } from "react-redux";
import { getStats } from "api/stats";

import Loader from "components/UI/Loader";


class IncomeStats extends Component {
  state = {
    accDetails: {},
    chartData: [],
    loaded: false
  };

  componentDidMount() {
    getStats(this.props.firstAccount._id, 30)
      .then(({ accDetails, data }) => {
        this.setState({ accDetails, chartData: data, loaded: true });
      })
      .catch(err => this.setState({ loaded: false }));
  }

  render() {
    if (!this.state.loaded) {
      return <Loader />;
    } else {
      return (
        <section className="module stats-widget">
          <h3>You need to start saving</h3>
        </section>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    firstAccount: state.accounts.data[0]
  };
};

export default connect(mapStateToProps)(IncomeStats);
