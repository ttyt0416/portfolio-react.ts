import React from "react";
import "./footer.style.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer__iconcontainer">
        <p className="footer__follow">FOLLOW</p>
        <div className="footer__icons">
          <ul className="footer__iconlist">
            <li>
              <FontAwesomeIcon icon={faTwitter} className="footer__icon" />
            </li>
            <li>
              <FontAwesomeIcon icon={faFacebook} className="footer__icon" />
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} className="footer__icon" />
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} className="footer__icon" />
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="footer__icon" />
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="footer__icon" />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__formcontainer">
        <p className="footer__title">GET IN TOUCH</p>
        <form className="footer__form">
          <input
            type="name"
            placeholder="Name"
            className="footer__form-input footer__form-name"
          />
          <input
            type="email"
            placeholder="Email"
            className="footer__form-input footer__form-email"
          />
          <textarea
            // type="text"
            placeholder="Message"
            className="footer__form-input footer__form-text"
          />
          <input type="submit" value="SEND" className="footer__form-submit" />
        </form>
        <p className="footer__subtitle">
          © Untitled. All rights reserved Design: HTML5 UP
        </p>
      </div>
    </div>
  );
};

export default Footer;
