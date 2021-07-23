import React from "react";
import "./sidemenu.style.scss";

import { useState } from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

const Sidemenu: React.FC = () => {
  const [toggle, setToggle] = useState<Boolean>(false);

  const menuToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="sidemenu__button" onClick={menuToggle}>
        {toggle ? (
          <FontAwesomeIcon className="sidemenu__close" icon={faTimes} />
        ) : (
          <FontAwesomeIcon className="sidemenu__open" icon={faBars} />
        )}
      </div>
      <div
        className={
          toggle
            ? "sidemenu__menuContainer"
            : "sidemenu__menuContainer-disappear"
        }
        onClick={menuToggle}
      >
        <ul className="sidemenu__menus">
          <li className="sidemenu__menu">
            <Link to="/">Home</Link>
          </li>
          <li className="sidemenu__menu">
            <Link to="/">Sample1</Link>
          </li>
          <li className="sidemenu__menu">
            <Link to="/">Sample2</Link>
          </li>
          <li className="sidemenu__menu">
            <Link to="/community">Community</Link>
          </li>
          <li className="sidemenu__menu">
            <Link to="/auth">Sign in</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidemenu;
