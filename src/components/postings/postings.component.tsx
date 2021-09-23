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
  return (
    <div className="postings">
      <div className="postings__titles">
        {Object.values(titleArr)[0] === null ? (
          <div>Don't have Search Result</div>
        ) : (
          titleArr.map((title: any, i: any) => (
            <Link
              className="postings__title"
              key={i}
              to={`/community/${title}`}
            >
              {title}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Postings;
