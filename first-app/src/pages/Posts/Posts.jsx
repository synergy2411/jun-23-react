import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../store/Post/post-slice";

export default function Posts() {
  const dispatch = useDispatch();
  const { posts, isLoading, errorMessage } = useSelector(
    (store) => store.postReducer
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (errorMessage.trim() !== "") {
    return <p>{errorMessage}</p>;
  }

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => dispatch(fetchPosts())}
      >
        Get Posts
      </button>
      <hr />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
