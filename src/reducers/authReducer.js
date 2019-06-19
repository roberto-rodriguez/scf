import initialState from "./initialState";

// {
//   principal:{
//     id: 1,
//     plan: 0-visitor, 1-free, 2-trial, 3-premium,
//     firstName: '',
//     lastName: ''
//   }
// }

export default function authReducer(state = initialState.auth, action) {
  var { type, data } = action;

  switch (type) {
    case "SET_AUTH":
      return {
        ...state,
        ...data
      };
    case "LOG_OUT":
      return {
        appStarted: true,
        token: data,
        plan: 0,
        departureCities: null
      };

    default:
      return state;
  }
}
