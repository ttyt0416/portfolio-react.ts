import React, { useState, useEffect } from "react";
import "./detailpage.style.scss";

import { useHistory } from "react-router";
import axios from "axios";

import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface userInfo {
  uid: string;
}

const Detailpage: React.FC<userInfo> = (uid) => {
  let history = useHistory();
  let pathname = history.location.pathname.replace("/community/", "");
  const [title, setTitle] = useState<string>("");
  const [detail, setDetail] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [edit, setEdit] = useState<boolean>(false);
  const [editTitle, setEditTitle] = useState<string>(title);
  const [editDetail, setEditDetail] = useState<string>(detail);

  const GetData = async () => {
    const response = await axios.get(
      `https://reactts1-26838-default-rtdb.firebaseio.com/posts.json?orderBy="title"&equalTo="${pathname}"`
    );
    const responseObject: any = Object.values(response.data)[0];
    setTitle(responseObject.title);
    setDetail(responseObject.text);
    setUserId(responseObject.uid);
    return responseObject;
  };

  const DeleteData = async () => {
    const response = await axios.get(
      `https://reactts1-26838-default-rtdb.firebaseio.com/posts.json?orderBy="title"&equalTo="${pathname}"`
    );

    const requestUrl = `https://reactts1-26838-default-rtdb.firebaseio.com/posts/${
      Object.keys(response.data)[0]
    }.json`;

    const request = await axios.delete(requestUrl);

    history.push("/community");
  };

  const EditData = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await axios.get(
      `https://reactts1-26838-default-rtdb.firebaseio.com/posts.json?orderBy="title"&equalTo="${pathname}"`
    );

    const requestUrl = `https://reactts1-26838-default-rtdb.firebaseio.com/posts/${
      Object.keys(response.data)[0]
    }.json`;

    const body: {} = {
      title: editTitle,
      text: editDetail,
      uid: uid.uid,
    };

    const request = await axios.patch(requestUrl, body);

    history.push("/community");
  };

  const toggleEdit = () => {
    setEdit(!edit);
  };

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { name, value },
    } = event;
    if (name === "editTitle") {
      setEditTitle(value);
    } else if (name === "editDetail") {
      setEditDetail(value);
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className="detailpage">
      <div className="detailpage__container">
        {uid.uid === userId ? (
          <div className="detailpage__buttons">
            {edit ? null : (
              <button className="detailpage__button" onClick={DeleteData}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            )}
            <button className="detailpage__button" onClick={toggleEdit}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </div>
        ) : null}
        {edit ? (
          <>
            <form className="detailpage__edit-form" onSubmit={EditData}>
              <input
                className="detailpage__edit-title"
                type="text"
                name="editTitle"
                value={editTitle}
                onChange={onChange}
              />
              <textarea
                className="detailpage__edit-detail"
                name="editDetail"
                value={editDetail}
                rows={12}
                onChange={onChange}
              />
              <input
                type="submit"
                value="submit"
                className="detailpage__edit-submit"
              />
            </form>
          </>
        ) : (
          <>
            <div className="detailpage__title">{title}</div>
            <div className="detailpage__detail">{detail}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Detailpage;
