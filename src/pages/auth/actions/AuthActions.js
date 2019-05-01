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

//--------- Provissional API ----------

function loginAPI(username, password) {
  if (username && password) {
    return {
      resultCode: 0,
      resultMessage: "Success",
      data: {
        id: 1,
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
