import React, { useState } from "react";
import "./authpage.style.scss";

import { authService, firebaseInstance } from "../../firebase/firebase";

const Authpage: React.FC = () => {
  const [signinEmail, setSigninEmail] = useState<string>("");
  const [signinPassword, setSigninPassword] = useState<string>("");
  const [signupEmail, setSignupEmail] = useState<string>("");
  const [signupPassword, setSignupPassword] = useState<string>("");

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
      let data;
      const {
        target: { name },
      } = event;
      if (name === "signin") {
        data = await authService.signInWithEmailAndPassword(
          signinEmail,
          signinPassword
        );
      } else if (name === "signup") {
        data = await authService.createUserWithEmailAndPassword(
          signupEmail,
          signupPassword
        );
      }
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("Cannot find corresponding user");
          break;
        case "auth/wrong-password":
          alert("Invalide password");
          break;
        case "auth/email-already-in-use":
          alert("Email is already in use");
          break;
      }
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
