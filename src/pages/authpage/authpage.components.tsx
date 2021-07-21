import React from "react";
import "./authpage.style.scss";

import { Auth } from "../../helper/auth/auth";

const Authpage: React.FC = () => {
  return (
    <div className="authpage">
      <form className="authpage__authform">
        <input type="email" className="authpage__authform-email" />
        <input type="password" className="authpage__authform-password" />
      </form>
    </div>
  );
};

export default Authpage;
