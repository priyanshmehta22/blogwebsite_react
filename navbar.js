import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1
        style={{
          color: "red",
        }}
      >
        MINI BLOG
      </h1>
      <Link
        to="/"
        style={{
          color: "black",

          borderRadius: "5px",
          padding: "10px",
        }}
      >
        HOME
      </Link>
      <Link
        to="/about"
        style={{
          color: "black",

          borderRadius: "5px",
          padding: "10px",
        }}
      >
        ABOUT
      </Link>
      <Link
        to="/create"
        style={{
          color: "black",

          borderRadius: "5px",
          padding: "10px",
        }}
      >
        NEW BLOG
      </Link>
    </nav>
  );
};

export default Navbar;
