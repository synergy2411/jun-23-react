import React, { useState, useRef, useContext } from "react";
import AuthContext from "../../context/auth-context";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/Auth/auth-slice";
import ThemeContext from "../../context/theme-context";

export default function Login() {
  const dispatch = useDispatch();

  const { token, isLoading, errorMessage } = useSelector(
    (store) => store.authReducer
  );

  const [enteredUsername, setEnteredUsername] = useState("");

  const passwordInputRef = useRef();

  const context = useContext(AuthContext);
  const themeContext = useContext(ThemeContext);

  const usernameChangeHandler = (event) =>
    setEnteredUsername(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("USERNAME : ", enteredUsername);
    // console.log("PASSWORD : ", window.password.value);  // DIRECT ACCESS OF DOM, NOT A GOOD PRACTICE
    console.log("PASSWORD WITH REF : ", passwordInputRef.current.value);

    // if (
    //   enteredUsername === "john@test" &&
    //   passwordInputRef.current.value === "john123"
    // ) {
    //   context.setIsLoggedIn(true);
    // }

    axios
      .get(
        `http://localhost:3030/users?username=${enteredUsername}&password=${passwordInputRef.current.value}`
      )
      .then((result) => {
        if (result.data.length > 0) {
          context.setIsLoggedIn(true);
        }
      })
      .catch(console.error);
  };

  const registerHandler = () => {
    dispatch(
      registerUser({
        email: enteredUsername,
        password: passwordInputRef.current.value,
      })
    );
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div
      style={{
        backgroundColor:
          themeContext.favTheme === "dark" ? "darkgrey" : "lightgrey",
        fontSize: `${themeContext.fontSize}px`,
      }}
    >
      {errorMessage !== "" && <h1>{errorMessage}</h1>}
      <h2>User is {context.isLoggedIn ? "" : " NOT "} logged in.</h2>
      <form onSubmit={submitHandler}>
        {/* username - Controlled */}
        <label htmlFor="username">Username :</label>
        <input
          type="text"
          name="username"
          placeholder="enter username"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <br />
        {/* password - Uncontrolled */}
        <label htmlFor="password">Password :</label>
        <input
          type="password"
          name="password"
          id="password"
          ref={passwordInputRef}
        />
        <br />

        <button type="submit">Login</button>

        <button
          type="button"
          className="btn btn-success btn-sm"
          onClick={registerHandler}
        >
          Register
        </button>

        <button type="button" onClick={() => context.setIsLoggedIn(false)}>
          Logout
        </button>
      </form>
    </div>
    // <AuthContext.Consumer>
    //   {(context) => (
    //     <div>
    //       <h2>User is {context.isLoggedIn ? "" : " NOT "} logged in.</h2>
    //       <form onSubmit={submitHandler}>
    //         {/* username - Controlled */}
    //         <label htmlFor="username">Username :</label>
    //         <input
    //           type="text"
    //           name="username"
    //           placeholder="enter username"
    //           value={enteredUsername}
    //           onChange={usernameChangeHandler}
    //         />
    //         <br />
    //         {/* password - Uncontrolled */}
    //         <label htmlFor="password">Password :</label>
    //         <input
    //           type="password"
    //           name="password"
    //           id="password"
    //           ref={passwordInputRef}
    //         />
    //         <br />

    //         <button type="submit">Submit</button>
    //       </form>
    //     </div>
    //   )}
    // </AuthContext.Consumer>
  );
}
