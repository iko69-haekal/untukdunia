import React, { useState, useRef } from "react";
import Admin from "../../../components/admin";
import JoditEditor from "jodit-react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { message, Button } from "antd";
const Tambah = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [sub, setSub] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const submit = () => {
    setLoading(true);
    const form = new FormData();
    form.append("article_title", title);
    form.append("article_content", content);
    form.append("article_sub_content", sub);
    form.append("image", thumbnail);
    form.append("category", "education");

    Axios.post("http://api.untukdunia.com/article", form, {
      headers: {
        "content-type":
          "multipart/form-data; boundary=---011000010111000001101001",
        api_token: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        history.push("/admin/artikel");
      })
      .catch((err) => {
        console.log("Error" + err);
        message.error("pastikan semua input terisi");
      })
      .finally((e) => setLoading(false));
  };
  return (
    <>
      <Admin>
        <div className="container pb-5">
          <div class="form-group">
            <label>title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>subcontent</label>
            <textarea
              maxLength={25}
              type="text"
              className="form-control"
              value={sub}
              onChange={(e) => {
                setSub(e.target.value);
              }}
            ></textarea>
          </div>
          <label>deskripsi</label>
          <JoditEditor
            ref={editor}
            value={content}
            tabIndex={1}
            onChange={(newContent) => setContent(newContent)}
          />
          <br />
          <div class="form-group">
            <label>thumbnail</label>
            <input
              onChange={(e) => setThumbnail(e.target.files[0])}
              type="file"
              className="form-control-file"
            />
          </div>
          {/* <button onClick={submit} className="btn btn-primary mt-3">
            submit
          </button> */}
          <Button onClick={submit} loading={loading} type="primary" block>
            Tambah
          </Button>
        </div>
      </Admin>
    </>
  );
};

export default Tambah;
