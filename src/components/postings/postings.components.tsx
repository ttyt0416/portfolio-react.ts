import React, { useState } from "react";
import "./postings.style.scss";

import axios from "axios";

const Postings: React.FC = () => {
  let [titleArr, setTitleArr] = useState<any>([]);
  let titles: any = [];
  const getData = async () => {
    const response = await axios.get(
      "https://reactts1-26838-default-rtdb.firebaseio.com/posts.json"
    );

    const titleResponse = Object.keys(response.data);

    for (let i = 0; i < Object.values(response.data).length; i++) {
      const test = await axios.get(
        `https://reactts1-26838-default-rtdb.firebaseio.com/posts/${titleResponse[i]}/title.json`
      );
      const titleData = test.data;
      titles.push(titleData);
    }
    setTitleArr((titleArr = titles));
    console.log(titleArr);
  };

  return (
    <div className="postings" onClick={getData}>
      {titleArr.map((title: any) => (
        <div className="postings__title">{title}</div>
      ))}
    </div>
  );
};

export default Postings;
