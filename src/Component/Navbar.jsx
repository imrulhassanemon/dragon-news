import React from "react";

import user from '../assets/user.png'

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div>
      </div>

      <div className="nav-links flex gap-3 items-center">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="logo flex gap-3">
        <img src={user} alt="" />
        <div className="btn btn-neutral rounded-none">Login</div>
      </div>
    </div>
  );
};

export default Navbar;
