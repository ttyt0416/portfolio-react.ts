import React from "react";
import "./sidemenu.style.scss";

import { useState } from "react";

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
      >
        <ul className="sidemenu__menus">
          <li className="sidemenu__menu">Home</li>
          <li className="sidemenu__menu">Sample1</li>
          <li className="sidemenu__menu">Sample2</li>
        </ul>
      </div>
    </>
  );
};

export default Sidemenu;
