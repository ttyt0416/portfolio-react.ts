import React from "react";
import "./authmodal.style.scss";

const Authmodal: React.FC = () => {
  return (
    <div className="authModal">
      <div className="authModal__container">
        <form className="authModal__form">
          <input type="email" className="authModal__form-email" />
          <input type="password" className="authModal__form-password" />
          <input type="submit" className="authModal__form-submit" />
        </form>
      </div>
    </div>
  );
};

export default Authmodal;
