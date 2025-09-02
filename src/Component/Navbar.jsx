import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="logo">
        <h1>Dragon News</h1>
      </div>

      <div className="nav-links">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
