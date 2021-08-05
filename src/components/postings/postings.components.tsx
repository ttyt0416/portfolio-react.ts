import React, { useState } from "react";
import "./postings.style.scss";

import axios from "axios";

const Postings: React.FC = () => {
  const getData = async () => {
    const response = await axios.get(
      "https://reactts1-26838-default-rtdb.firebaseio.com/posts.json"
    );
    const data = Object.values(response.data);
    for (let i = 0; i < data.length; i++) {
      console.log(Object.values(data));
    }
    // console.log(data.length);
  };

  return (
    <div className="postings" onClick={getData}>
      get Data
    </div>
  );
};

export default Postings;
