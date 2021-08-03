import React, { useState } from "react";
import "./postpage.style.scss";

const Postpage: React.FC = () => {
  return (
    <div className="postpage">
      <div className="postpage__container">
        <form className="postpage__form">
          <input className="postpage__form-title" type="text" name="title" />
          <input
            className="postpage__form-file"
            type="file"
            multiple
            name="file"
          />
          <textarea className="postpage__form-text" name="text" />
        </form>
      </div>
    </div>
  );
};

export default Postpage;
