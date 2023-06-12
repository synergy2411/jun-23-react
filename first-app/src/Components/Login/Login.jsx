import React, { useState, useRef } from "react";

export default function Login() {
  const [enteredUsername, setEnteredUsername] = useState("");

  const passwordInputRef = useRef();

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
  );
}
