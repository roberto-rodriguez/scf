import * as authActionsCreator from "../../../actions/auth.actions_creator";
import * as postActionsCreator from "../../../actions/post.actions_creator";
import * as viewActionsCreator from "../../../actions/view.actions_creator";
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

      cookie.remove(TOKEN_COOKIE);
      cookie.save(TOKEN_COOKIE, token);

      if (data.departureCities) {
        cookie.save("departureCities", data.departureCities);
      } else {
        data.departureCities = cookie.load("departureCities");
      }

      dispatch(authActionsCreator.setAuthAction(data));

      var showWelcome = cookie.load("showWelcome");

      if (!data.plan && !showWelcome) {
        dispatch(viewActionsCreator.setViewStateAction("showWelcome", true));
        cookie.save("showWelcome", true);
      }
    });

    configActions.loadConfig()(dispatch, getState);
  };
}

export function login(email, password, callback) {
  return function(dispatch) {
    dispatch(postActionsCreator.cleanPostListAction());

    Proxy.post(
      "auth/login",
      { email, password },
      (data, status, statusMessage) => {
        if (data.departureCities) {
          cookie.save("departureCities", data.departureCities);
        }

        dispatch(authActionsCreator.setAuthAction(data));

        callback(status, statusMessage);
      }
    );
  };
}

export function register(data, callback) {
  return function(dispatch) {
    dispatch(postActionsCreator.cleanPostListAction());

    Proxy.post("auth/register", data, (data, status, statusMessage) => {
      if (!status) {
        if (data.departureCities) {
          cookie.save("departureCities", data.departureCities);
        }

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
      dispatch(authActionsCreator.logoutAction(response));

      callback();
    });
  };
}
