import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./postings.style.scss";

import axios from "axios";

// interface Search {
//   search: string;
// }

interface Title {
  titleArr: [];
}

const Postings: React.FC<Title> = ({ titleArr }) => {
  // let [titleArr, setTitleArr] = useState<any>([]);
  // let titles: any = [];
  // // const searchObject = Object.values(search)[0];

  // const GetData = async () => {
  //   const response = await axios.get(
  //     "https://reactts1-26838-default-rtdb.firebaseio.com/posts.json"
  //   );

  //   const titleResponse = Object.keys(response.data);

  //   // for (let i = 0; i < Object.values(response.data).length; i++) {
  //   //   const titleSearch = await axios.get(
  //   //     `https://reactts1-26838-default-rtdb.firebaseio.com/posts` +
  //   //       (searchObject !== ""
  //   //         ? `.json?orderBy="title"&startAt="${searchObject}"&endAt="${searchObject}\uf8ff"&print=pretty`
  //   //         : `/${titleResponse[i]}/title.json?print=pretty`)
  //   //   );
  //   //   const titleData = titleSearch.data;
  //   //   titles.push(titleData);
  //   // }

  //   for (let i = 0; i < Object.values(response.data).length; i++) {
  //     const titleSearch = await axios.get(
  //       `https://reactts1-26838-default-rtdb.firebaseio.com/posts/${titleResponse[i]}/title.json?print=pretty`
  //     );
  //     const titleData = titleSearch.data;
  //     titles.push(titleData);
  //   }

  //   setTitleArr((titleArr = titles));
  // };

  // useEffect(() => {
  //   GetData();
  // }, []);

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
