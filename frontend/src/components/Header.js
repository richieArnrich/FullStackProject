import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link to="/">Sign Up</Link>
      <Link to="/viewdata">View Data</Link>
    </nav>
  );
}

export default Header;
