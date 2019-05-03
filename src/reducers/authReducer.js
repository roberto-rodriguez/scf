import initialState from "./initialState";

// {
//   principal:{
//     id: 1,
//     plan: 0-visitor, 1-free, 2-trial, 3-premium,
//     firstName: '',
//     lastName: ''
//   }
// }

export default function postReducer(state = initialState.auth, action) {
  var { type, data } = action;

  switch (type) {
    case "SET_AUTH":
      var { auth } = data;
      return {
        ...state,
        ...auth
      };

    default:
      return state;
  }
}
