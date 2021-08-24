import React, { useState } from "react";
import { useHistory } from "react-router";
import "./postpage.style.scss";

import axios from "axios";

interface userInfo {
  uid: string | null;
}

const Postpage: React.FC<userInfo> = (uid) => {
  let history = useHistory();
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { name, value },
    } = event;
    if (name === "title") {
      setTitle(value);
    } else if (name === "text") {
      setText(value);
    }
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const body: {} = {
      title: title,
      text: text,
      uid: Object.values(uid)[0],
    };
    const response = await axios.post(
      "https://reactts1-26838-default-rtdb.firebaseio.com/posts.json",
      body
    );
    history.push("/community");
  };

  return (
    <div className="postpage">
      <div className="postpage__container">
        <form className="postpage__form" onSubmit={onSubmit}>
          <input
            required
            className="postpage__form-title"
            type="text"
            maxLength={50}
            name="title"
            onChange={onChange}
          />
          {/* <label>
            {file === null
              ? "Select Photo"
              : file.replace("C:\\fakepath\\", "")}
            <input
              required
              className="postpage__form-file"
              type="file"
              name="file"
              accept="image/*"
              onChange={onChange}
            />
          </label> */}
          <textarea
            required
            className="postpage__form-text"
            name="text"
            rows={5}
            cols={50}
            onChange={onChange}
          />
          <input
            type="submit"
            className="postpage__form-submit"
            name="submit"
            value="POST"
          />
        </form>
      </div>
    </div>
  );
};

export default Postpage;
