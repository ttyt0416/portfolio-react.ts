import React, { useState, useEffect } from "react";
import "./communitypage.style.scss";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPen } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import Postings from "../../components/postings/postings.component";

const Communitypage: React.FC = () => {
  const [searching, setSearching] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  let [titleArr, setTitleArr] = useState<[]>([]);
  const [page, setPage] = useState<number>(1);
  let titles: any = [];
  const classSelected = "community__pagination-selected";
  const classPagination = document.querySelectorAll(".community__pagination");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setSearching(value);
  };

  // const onClick = (event: React.MouseEvent<SVGSVGElement>) => {
  //   setSearch(searching);
  // };

  const onButtonClick = () => {
    setSearch(searching);
  };

  const GetData = async () => {
    const response = await axios.get(
      "https://reactts1-26838-default-rtdb.firebaseio.com/posts.json"
    );

    const titleResponse = Object.keys(response.data);

    if (search !== "") {
      for (let i = 0; i < Object.values(response.data).length; i++) {
        const titleSearch = await axios.get(
          `https://reactts1-26838-default-rtdb.firebaseio.com/posts.json?orderBy="title"&startAt="${search}"&endAt="${search}\uf8ff"&print=pretty`
        );

        const titleObject: any = Object.values(titleSearch.data)[i];
        const titleData = titleObject === undefined ? null : titleObject.title;
        titles.push(titleData);
      }
    } else if (search === "") {
      for (
        let i = page * 10 - 10;
        i < page * 10 - 1 && i < Object.values(response.data).length;
        i++
      ) {
        const titleSearch = await axios.get(
          `https://reactts1-26838-default-rtdb.firebaseio.com/posts/${titleResponse[i]}/title.json?print=pretty`
        );
        const titleData = titleSearch.data;
        titles.push(titleData);
      }
    }

    setTitleArr(titles);
  };

  const Buttons = (number: number) => {
    const pagination = [];
    for (let i = 1; i <= number; i++) {
      pagination.push(
        <input
          type="button"
          key={i}
          value={i}
          className={
            page === i
              ? "community__pagination community__pagination-selected"
              : "community__pagination"
          }
          onClick={onClick}
        />
      );
    }
    return pagination;
  };

  const onClick = (event: any) => {
    const {
      target: { value },
    } = event;
    for (let i = 0; i < classPagination.length; i++) {
      classPagination[i].classList.remove(classSelected);
    }
    event.target.classList.add(classSelected);
    setPage(value);
  };

  useEffect(() => {
    GetData();
  }, [search]);

  return (
    <div className="community">
      <div className="community__titleContainer">
        <h1 className="community__title">Community Page</h1>
        <div className="community__buttons">
          <input
            type="text"
            className="community__searchBox"
            onChange={onChange}
          />
          <button
            type="submit"
            className="community__searchButton"
            onClick={onButtonClick}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <Link className="community__post" to="/post">
            <FontAwesomeIcon icon={faPen} />
          </Link>
        </div>
        <div className="community__postContiner">
          <Postings titleArr={titleArr} />
        </div>
      </div>
      <div className="community__paginations">
        {Buttons(parseInt(`${titleArr.length / 10}`) + 1)}
      </div>
    </div>
  );
};

export default Communitypage;
