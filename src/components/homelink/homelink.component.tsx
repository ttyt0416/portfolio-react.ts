import React from "react";
import "./homelink.style.scss";

import { Link } from "react-router-dom";

const Homelink: React.FC = () => {
  return (
    <div className="homelink">
      <Link className="homelink__link" to="/">
        portfolio
      </Link>
    </div>
  );
};

export default Homelink;
