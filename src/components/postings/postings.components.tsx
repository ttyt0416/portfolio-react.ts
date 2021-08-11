import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./postings.style.scss";

import axios from "axios";

interface Search {
  search: string;
}

const Postings: React.FC<Search> = (search) => {
  let [titleArr, setTitleArr] = useState<any>([]);
  let titles: any = [];

  const GetData = async () => {
    console.log(search);
    const response = await axios.get(
      "https://reactts1-26838-default-rtdb.firebaseio.com/posts.json"
    );

    const titleResponse = Object.keys(response.data);

    for (let i = 0; i < Object.values(response.data).length; i++) {
      // if (search === null) {
      //   const test = await axios.get(
      //     `https://reactts1-26838-default-rtdb.firebaseio.com/posts/${titleResponse[i]}/title.json`
      //   );
      // } else {
      //   const test = await axios.get(
      //     `https://reactts1-26838-default-rtdb.firebaseio.com/posts/${titleResponse[i]}/title.json?orderBy="$value"&equalTo=${search}`
      //   );
      // }
      const titleSearch = await axios.get(
        `https://reactts1-26838-default-rtdb.firebaseio.com/posts/${titleResponse[i]}/title.json` +
          (Object.values(search)[0] !== ""
            ? `?orderBy="$value"&equalTo=${search}`
            : "")
      );
      const titleData = titleSearch.data;
      titles.push(titleData);
    }
    setTitleArr((titleArr = titles));
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
