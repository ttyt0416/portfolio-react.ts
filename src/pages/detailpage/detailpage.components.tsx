import React, { useState, useEffect } from "react";
import "./detailpage.style.scss";

import { useHistory } from "react-router";
import axios from "axios";

const Detailpage: React.FC = () => {
  let history = useHistory();
  let pathname = history.location.pathname.replace("/community/", "");
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<any>();
  const [detail, setDetail] = useState<string>("");

  const GetData = async () => {
    const response = await axios.get(
      `https://reactts1-26838-default-rtdb.firebaseio.com/posts.json?orderBy="title"&equalTo="${pathname}"`
    );
    const responseObject = Object.values(response.data)[0];
    console.log(responseObject);
    for (let i = 0; i < 4; i++) {
      responseObject[i];
    }
    return responseObject;
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className="detailpage">
      <div className="detailpage__container">
        <div className="detailpage__title"></div>
        <div className="detailpage__image"></div>
        <div className="detailpage__detail"></div>
      </div>
    </div>
  );
};

export default Detailpage;
