import React from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = ({ menuItem }) => {
  const { pathname } = useLocation();
  return (
    <div className="menu-items">
      {menuItem.map((item, index) => (
        <Link
          key={index}
          to={item?.url}
          className={`menu-item ${pathname == item?.url && "active"}`}
        >
          {item?.name}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
