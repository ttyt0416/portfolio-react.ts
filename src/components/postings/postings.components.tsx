import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./postings.style.scss";

import axios from "axios";

const Postings: React.FC = () => {
  let [titleArr, setTitleArr] = useState<any>([]);
  let titles: any = [];

  const GetData = async () => {
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

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className="postings">
      <div className="postings__titles">
        {titleArr.map((title: any, i: any) => (
          <Link className="postings__title" key={i} to={`/community/${title}`}>
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Postings;
