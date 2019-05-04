import React, { Component } from "react";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import { connect, Provider } from "react-redux";
import App from "./App";
import * as configActions from "./actions/ConfigActions"; 
class Root extends Component {
  componentDidMount() {
    var { loadConfigs } = this.props;

    loadConfigs();
  }

  render() {
    const { store, history, appStarted } = this.props;

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
           {appStarted ? <App /> : null} 
        </ConnectedRouter>
      </Provider>
    );
  }
}

const mapStateToProps = ({ authReducer }) => ({
  appStarted: authReducer.appStarted
});

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  loadConfigs: PropTypes.func,
  appStarted: PropTypes.bool
};

export default connect(
  mapStateToProps,
  configActions
)(Root);
