import * as authActionsCreator from "../../../actions/auth.actions_creator";
import * as postActionsCreator from "../../../actions/post.actions_creator";

export function login(username, password, callback) {
  return function(dispatch, getState) {
    var result = loginAPI(username, password);

    if (result.resultCode == 0) {
      dispatch(postActionsCreator.cleanPostListAction());

      dispatch(authActionsCreator.setAuthAction(result.data));
    }

    callback(result && result.resultCode);
  };
}

export function register(data, callback) {
  return function(dispatch, getState) {
    // var result = loginAPI(username, password);

    dispatch(postActionsCreator.cleanPostListAction());

    data.plan = 2; //trial

    dispatch(authActionsCreator.setAuthAction(data));

    callback( );
  };
}

//--------- Provissional API ----------

function loginAPI(username, password) {
  if (username && password) {
    return {
      resultCode: 0,
      resultMessage: "Success",
      data: {
        id: 1,
        plan: 2, //trial  ->  0-visitor, 1-free, 2-trial, 3-premium,
        firstName: "Tito",
        lastName: "Robe"
      }
    };
  } else {
    return {
      resultCode: 403,
      resultMessage: "Invalid Login Credentials"
    };
  }
}
