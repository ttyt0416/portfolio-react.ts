import React, { useState } from "react";
import "./communitypage.style.scss";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPen } from "@fortawesome/free-solid-svg-icons";

import Postings from "../../components/postings/postings.components";

const Communitypage: React.FC = () => {
  const [searching, setSearching] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setSearching(value);
  };

  const onClick = (event: React.MouseEvent<SVGSVGElement>) => {
    setSearch(searching);
    return;
  };

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
          <button type="submit" className="community__searchButton">
            <FontAwesomeIcon icon={faSearch} onClick={onClick} />
          </button>
          <Link className="community__post" to="/post">
            <FontAwesomeIcon icon={faPen} />
          </Link>
        </div>
        <div className="community__postContiner">
          <Postings search={search} />
        </div>
      </div>
    </div>
  );
};

export default Communitypage;
