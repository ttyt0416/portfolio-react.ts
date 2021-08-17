import React from "react";
import "./homepage.style.scss";

import { useHistory } from "react-router-dom";

const Homepage: React.FC = () => {
  let history = useHistory();

  const fromHome = () => {
    history.push("/example");
  };

  return (
    <div className="homepage">
      <div className="homepage__container">
        <div
          className="homepage__element homepage__element-1"
          onClick={fromHome}
        ></div>
        <div
          className="homepage__element homepage__element-2"
          onClick={fromHome}
        ></div>
        <div
          className="homepage__element homepage__element-3"
          onClick={fromHome}
        ></div>
        <div
          className="homepage__element homepage__element-4"
          onClick={fromHome}
        ></div>
        <div
          className="homepage__element homepage__element-5"
          onClick={fromHome}
        ></div>
        <div
          className="homepage__element homepage__element-6"
          onClick={fromHome}
        ></div>
        <div
          className="homepage__element homepage__element-7"
          onClick={fromHome}
        ></div>
        <div
          className="homepage__element homepage__element-8"
          onClick={fromHome}
        ></div>
        <div
          className="homepage__element homepage__element-9"
          onClick={fromHome}
        ></div>
        <div
          className="homepage__element homepage__element-10"
          onClick={fromHome}
        ></div>
        <div
          className="homepage__element homepage__element-11"
          onClick={fromHome}
        ></div>
        <div
          className="homepage__element homepage__element-12"
          onClick={fromHome}
        ></div>
      </div>
    </div>
  );
};

export default Homepage;
