import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UseEffectDemo() {
  const [show, setShow] = useState(false);
  const [counter, setCounter] = useState(false);
  const [repos, setRepos] = useState([]);

  const [enteredSearch, setEnteredSearch] = useState("");

  //   useEffect(() => {
  //     console.log("useEffect works!");
  //     return () => console.log("Clean Up!");
  //   }, [counter]);

  //   console.log("Outside effect");

  useEffect(() => {
    let timer = null;
    if (enteredSearch.trim() !== "") {
      timer = setTimeout(() => {
        axios
          .get(`https://api.github.com/users/${enteredSearch}/repos`)
          .then((result) => {
            console.log("RESULT : ", result);
            setRepos(result.data);
          })
          .catch(console.error);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [enteredSearch]);

  return (
    <div>
      <h1>Use Effect Demo</h1>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        Toggle Show
      </button>
      <button className="btn btn-dark" onClick={() => setCounter(counter + 1)}>
        Counter Increase
      </button>
      {show && <p>Dynamic paragraph</p>}
      <hr />
      <input
        type="text"
        name="serach"
        value={enteredSearch}
        onChange={(e) => setEnteredSearch(e.target.value)}
      />
      <br />
      <ul>
        {repos.length > 0 &&
          repos.map((repo) => <li key={repo.id}>{repo.name}</li>)}
      </ul>
    </div>
  );
}

// Outside effect
// useEffect works!
// Outside effect
// Clean Up!
// useEffect works!
