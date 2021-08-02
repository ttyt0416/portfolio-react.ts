import React from "react";
import "./communitypage.style.scss";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPen } from "@fortawesome/free-solid-svg-icons";

import Postings from "../../components/postings/postings.components";

const Communitypage: React.FC = () => {
  return (
    <div className="community">
      <div className="community__titleContainer">
        <h1 className="community__title">Community Page</h1>
        <div className="community__buttons">
          <input type="text" className="community__searchBox" />
          <button type="submit" className="community__searchButton">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <Link className="community__post" to="/post">
            <FontAwesomeIcon icon={faPen} />
          </Link>
        </div>
      </div>
      <div className="community__postContiner">
        <Postings />
      </div>
    </div>
  );
};

export default Communitypage;
