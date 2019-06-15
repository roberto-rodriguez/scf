import React, { Component } from "react";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import { connect, Provider } from "react-redux";
import App from "./App";
import * as authActions from "./pages/auth/actions/AuthActions";
class Root extends Component {
  componentDidMount() {
    this.props.init();
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

const mapStateToProps = ({ authReducer }) => ({
  appStarted: authReducer.appStarted
});

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  init: PropTypes.func,
  appStarted: PropTypes.bool
};

export default connect(
  mapStateToProps,
  authActions
)(Root);
