import * as authActionsCreator from "../../../actions/auth.actions_creator";
import * as postActionsCreator from "../../../actions/post.actions_creator";
import * as configActions from "../../../actions/ConfigActions";
import { TOKEN_COOKIE, BROWSER_ID } from "../../../constants/Constants";
import * as string from "../../../utils/string";
import cookie from "react-cookies";
import * as Proxy from "../../../actions/Proxy";

export function init() {
  return function(dispatch, getState) {
    var browserId = cookie.load(BROWSER_ID);

    if (!browserId) {
      browserId = string.buildBrowserId();
      cookie.save(BROWSER_ID, browserId);
    }

    var request = { [BROWSER_ID]: browserId };

    Proxy.post("auth/init", request, data => {
      data.appStarted = true;

      var token = string.buildToken(data[TOKEN_COOKIE]);

      data[TOKEN_COOKIE] = token;

      cookie.save(TOKEN_COOKIE, token);

      dispatch(authActionsCreator.setAuthAction(data));

      setTimeout(() => configActions.loadConfig()(dispatch, getState), 3000);
    });
  };
}

export function login(email, password, callback) {
  return function(dispatch, getState) {
    dispatch(postActionsCreator.cleanPostListAction());

    Proxy.post(
      "auth/login",
      { email, password },
      (data, status, statusMessage) => {
        dispatch(authActionsCreator.setAuthAction(data));

        callback(status, statusMessage);
      }
    );
  };
}

export function register(data, callback) {
  return function(dispatch, getState) {
    dispatch(postActionsCreator.cleanPostListAction());

    Proxy.post("auth/register", data, (data, status, statusMessage) => {
      if (!status) {
        dispatch(authActionsCreator.setAuthAction(data));
      }

      callback(status, statusMessage);
    });
  };
}

export function logout(callback) {
  return function(dispatch) {
    Proxy.get("auth/logout", response => {
      dispatch(postActionsCreator.cleanPostListAction());

      cookie.save(TOKEN_COOKIE, response.token);
      dispatch(authActionsCreator.setAuthAction(response));

      callback();
    });
  };
}
