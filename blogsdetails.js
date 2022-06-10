import { useParams, useHistory } from "react-router-dom";
import React from "react";
import useFetch from "./usefetch";

const Blogdetails = () => {
  const { id } = useParams();
  const { data: blog, isloading, error } = useFetch(
    "http://localhost:8000/blogs/" + id
  );

  const homeafterdelete = useHistory();
  const handleclick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => homeafterdelete.push("/"));
  };

  return (
    <div className="blog-details">
      {isloading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {blog && (
        <article>
          <h1>{blog.title}</h1>
          <p>{blog.body}</p>
          <p>Written by {blog.author}</p>
          <button onClick={handleclick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default Blogdetails;
