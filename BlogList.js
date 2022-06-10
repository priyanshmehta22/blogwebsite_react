// const BlogList = (props) => {
//   const blogs = props.blogs;
//   const title = props.title;
import { Link } from "react-router-dom";
import React from "react";

const BlogList = ({ blogs, title }) => {
  //Destructuring from the props
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blogpreview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
            <p>Written by {blog.author}</p>
          </Link>

          {/* <button onClick={() => handledelete(blog.id)}>Delete blog</button> */}
        </div>
      ))}
    </div>
  );
};
//npx json-server --watch src/db.json --port 8000

export default BlogList;
