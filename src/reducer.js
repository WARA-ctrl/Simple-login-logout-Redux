import { LOGIN, LOGOUT } from "./action";
// const initialStore = {
//   logout: false,
//   info: { username: "", email: "", password: "" },
// };

// function reducer(state = initialStore, action) {
//   //   if (action.type === LOGIN) {
//   //     console.log("log in");
//   //     return state;
//   //   }
//   //   return state;
//   console.log({ state, action });
//   return { ...state, logout: true };
// }
// export default reducer;

function reducer(state, action) {
  console.log({ state, action });
  if (action.type === LOGIN) {
    // console.log("we got a log in!!");
    return {
      ...state,
      loggedin: true,
      //   username: "wara",
      //   email: "oooo11@gmail.com",
      //   password: "12345",
    };
  }
  if (action.type === LOGOUT) {
    // console.log("we got a log in!!");
    return { ...state, loggedin: false, username: "", email: "", password: "" };
  }
  return state;
}

export default reducer;
