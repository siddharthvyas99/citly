import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ iconClass, name, path }) => {
  return (
    <Link
      to={path}
      className="inline-flex items-center px-1 pt-1 mr-3
      font-semibold text-2xl leading-5
      text-bb-purple-500 hover:text-purple-500"
    >
      {iconClass && <i className={`${iconClass} text-bb-purple`}></i>}
      {name}
    </Link>
  );
};

export default NavItem;
