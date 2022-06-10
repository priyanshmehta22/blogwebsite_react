import { Link } from "react-router-dom";
import React from "react";

const Notfound = () => {
  return (
    <div className="notfound">
      <h2>Sorry </h2>
      <h2>Page not found</h2>
      <Link to="/">Back to Home?</Link>
    </div>
  );
};

export default Notfound;
