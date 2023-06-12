import React, { useState, useRef, useContext } from "react";
import AuthContext from "../../context/auth-context";

export default function Login() {
  const [enteredUsername, setEnteredUsername] = useState("");

  const passwordInputRef = useRef();

  const context = useContext(AuthContext);

  const usernameChangeHandler = (event) =>
    setEnteredUsername(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("USERNAME : ", enteredUsername);
    // console.log("PASSWORD : ", window.password.value);  // DIRECT ACCESS OF DOM, NOT A GOOD PRACTICE
    console.log("PASSWORD WITH REF : ", passwordInputRef.current.value);
  };
  return (
    <div>
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

        <button type="submit">Submit</button>
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
