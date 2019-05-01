import initialState from "./initialState";

// {
//   principal:{
//     id: 1,
//     plan: 0-free, 1-trial, 2-premium,
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
