import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [author, setauthor] = useState("Pri");
  const [isloading, setisloading] = useState(false);
  const history = useHistory();

  const handlesubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setisloading(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        console.log("new blog added");
        setisloading(false);
        // history.go(-1);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
    //redirect to home page
    // window.location.href = "/";
  };

  return (
    <div className="create">
      <h2>ADD A BLOG</h2>
      <form onSubmit={handlesubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          required
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <label>Blog Body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setbody(e.target.value)}
        ></textarea>
        <label>Author</label>
        <select value={author} onChange={(e) => setauthor(e.target.value)}>
          <option value="pri">Pri</option>
          <option value="ree">Ree</option>
        </select>
        {!isloading && <button>Add Blog</button>}
        {isloading && <button restricted>Adding Blog...</button>}
      </form>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
        <p>{author}</p>
      </div>
    </div>
  );
};

export default Create;
