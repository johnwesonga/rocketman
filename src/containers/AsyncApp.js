// @flow
import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { fetchPastLaunchesRequest } from "../actions/launches";
import { LaunchList } from "../components/launches/LaunchList";
import { Picker } from "../components/Picker";

type Props = {
  fetchPastLaunchesRequest: (launch_year: string) => Function,
  launches: Array<Object>,
  hasErrored: boolean,
  isLoading: boolean
};

class AsyncApp extends React.Component<Props, void> {
  componentDidMount() {
    let launch_year = "";
    this.props.fetchPastLaunchesRequest(launch_year);
  }

  handleOnChange = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
    this.props.fetchPastLaunchesRequest(e.currentTarget.value);
  };

  render() {
    const { launches, isLoading } = this.props;
    let launchYears = _.range(2005, 2019);
    return (
      <div id="launches">
        <Picker options={launchYears} onChange={this.handleOnChange} />
        {isLoading && launches.length === 0 && <h2>Loading...</h2>}
        {launches.length > 0 ? <LaunchList launches={launches} /> : <div />}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: *) => {
  return {
    fetchPastLaunchesRequest: launch_year =>
      dispatch(fetchPastLaunchesRequest(launch_year))
  };
};

const mapStateToProps = state => {
  return {
    launches: state.launches.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AsyncApp);
