import * as React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Link to="/">
        <button>home</button>
      </Link>
      <Link to="/lobby">
        <button>lobby</button>
      </Link>
      <Link to="/code">
        <button>code</button>
      </Link>
      <Link to="/contact">
        <button>contact</button>
      </Link>
      <Link to="/info">
        <button>info</button>
      </Link>
    </div>
  );
};

export default Menu;
