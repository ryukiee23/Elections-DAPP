import React from "react";

const Navbar = ({ currAccount }) => {
  return (
    <nav className="navbar navbar-dark bg-dark shadow mb-5">
      <p className="navbar-brand my-auto">Election DAPP</p>
      <ul className="navbar-nav">
        <li className="nav-item text-white">{currAccount}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
