import React, { Component } from "react";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import App from "./App";
import * as configActions from "./actions/ConfigActions";
import { connect } from "react-redux";
class Root extends Component {
  componentDidMount() {
    var { loadConfigs } = this.props;

    loadConfigs();
  }

  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  loadConfigs: PropTypes.func
};

export default connect(
  null,
  configActions
)(Root);
