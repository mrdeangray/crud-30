import React from "react";

const Header = ({ className }) => {
  return (
    <nav className={className}>
      <h1>
        CRUD-30 <span>App</span>
      </h1>
      <ul>
        <li><a href="www.google.com">Link</a></li>
        <li><a href="www.google.com">Link</a></li>
        <li><a href="www.google.com">Link</a></li>
      </ul>
      <button>Sign In</button>
    </nav>
  );
};

export default Header;
