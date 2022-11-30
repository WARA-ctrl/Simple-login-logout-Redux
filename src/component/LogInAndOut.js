import React from "react";
import { LOGIN, LOGOUT } from "../action";
import { connect } from "react-redux";
import { useState } from "react";

const LogInAndOut = ({ loggedin, dispatch }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if (loggedin === false) {
    return (
      <div className="login">
        <form className="login__form">
          <h1>Log In</h1>

          <input
            type="name"
            placeholder="User Name"
            // value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            // value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            // value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="submit__btn"
            onClick={() => {
              if (username !== "" && email !== "" && password !== "") {
                return dispatch({ type: LOGIN });
              }
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
  return (
    <div className="logout">
      <h1>Welcome, {username}!</h1>
      <button
        type="submit"
        className="submit__btn"
        onClick={() => dispatch({ type: LOGOUT })}
      >
        Logout
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { loggedin: state.loggedin, username: state.username };
};
export default connect(mapStateToProps)(LogInAndOut);

// function mapSt teToProps(store) {
//   const { logo t, info } = store;
//   return { log ut, info };
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   const { logout, info } = ownProps;
//   return {
//     loggedin: () => dispatch({ type: LOGIN, payload: { logout, info } }),
//     loggedout: () => dispatch({ type: LOGOUT, payload: { logout, info } }),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(LogInAndOut);
