import React from "react";
import "./sidemenu.style.scss";

import { useState } from "react";

const Sidemenu: React.FC = () => {
  const [toggle, setToggle] = useState<Boolean>(false);

  const menuToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidemenu__button" onClick={menuToggle}>
        <div className="sidemenu__button-line sidemenu__button-line1"></div>
        <div className="sidemenu__button-line sidemenu__button-line2"></div>
        <div className="sidemenu__button-line sidemenu__button-line3"></div>
      </div>
      {toggle ? (
        <div className="sidemenu__menuContainer">
          <ul className="sidemenu__menus">
            <li className="sidemenu__menu"></li>
            <li className="sidemenu__menu"></li>
            <li className="sidemenu__menu"></li>
          </ul>
        </div>
      ) : (
        <> </>
      )}
    </>
  );
};

export default Sidemenu;
