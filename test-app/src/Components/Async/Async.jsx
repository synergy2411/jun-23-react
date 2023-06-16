import React from "react";
import { useEffect, useState } from "react";
// import axios from "axios";

// const parallelCall = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then();
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then();
// }

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // 0.5s
  const data = await response.json();
  const responseTwo = await fetch(
    // 0.5s + 0.5   ==> 1s
    "https://jsonplaceholder.typicode.com/posts/" + data
  );
  return data;
};

export default function Async() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then((data) => {
      console.log("DATA : ", data);
      setPosts(data);
    });
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => setPosts(response.data));
  });

  return (
    <div>
      <ul>
        {posts.length > 0 &&
          posts.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
}
