import React, { useState } from "react";
import "./authpage.style.scss";

import { Auth } from "../../helper/auth/auth";

const Authpage: React.FC = () => {
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === "signinEmail") {
      setSigninEmail(value);
    } else if (name === "signinPassword") {
      setSigninPassword(value);
    } else if (name === "signupEmail") {
      setSignupEmail(value);
    } else if (name === "signupPassword") {
      setSignupPassword(value);
    }
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const {
        target: { name },
      } = event;
      if (name === "signin") {
        Auth.login(signinEmail, signinPassword);
      } else if (name === "signup") {
        Auth.signup(signupEmail, signupPassword);
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="authpage">
      <div className="authpage__container">
        <div className="authpage__signin">
          <h1 className="authpage__signin-title">Sign In</h1>
          <form
            className="authpage__signin-form"
            name="signin"
            onSubmit={onSubmit}
          >
            <input
              required
              className="authpage__signin-email"
              type="email"
              placeholder="Email"
              name="signinEmail"
              value={signinEmail}
              onChange={onChange}
            />
            <input
              required
              className="authpage__signin-password"
              type="password"
              placeholder="Password"
              name="signinPassword"
              value={signinPassword}
              onChange={onChange}
            />
            <input
              className="authpage__signin-submit"
              type="submit"
              value="Sign In"
            />
          </form>
        </div>
        <div className="authpage__signup">
          <h1 className="authpage__signup-title">Sign Up</h1>
          <form
            className="authpage__signup-form"
            name="signup"
            onSubmit={onSubmit}
          >
            <input
              required
              className="authpage__signup-email"
              type="email"
              placeholder="Email"
              name="signupEmail"
              value={signupEmail}
              onChange={onChange}
            />
            <input
              required
              className="authpage__signup-password"
              type="password"
              placeholder="Password"
              name="signupPassword"
              value={signupPassword}
              onChange={onChange}
            />
            <input
              className="authpage__signup-submit"
              type="submit"
              value="Sign Up"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Authpage;
