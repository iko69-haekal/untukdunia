import React, { useState } from "react";
import Admin from "../../../components/admin";
import JoditEditor from "jodit-react";
import Axios from "axios";
import { UploadOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { message, Button, Upload } from "antd";
const Ubah = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [sub, setSub] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    Axios.get("https://api.untukdunia.com/article/" + id)
      .then((res) => {
        const data = res.data.data;
        setContent(data.article_content);
        setTitle(data.article_title);
        setSub(data.article_sub_content);
        setThumbnail(data.image);
      })
      .catch((e) => {
        console.log(e);
        document.location.href = "/admin/artikel";
      });
  }, [id]);
  const submit = () => {
    setLoading(true);
    const form = new FormData();
    form.append("article_title", title);
    form.append("article_content", content);
    form.append("article_sub_content", sub);
    form.append("image", thumbnail);
    form.append("category", "education");
    form.append("old_pict", thumbnail);

    Axios.post("https://api.untukdunia.com/article/" + id, form, {
      headers: {
        "content-type":
          "multipart/form-data; boundary=---011000010111000001101001",
        api_token: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        document.location.href = "/admin/artikel";
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
          <div className="form-group">
            <label>subcontent</label>
            <textarea
              maxLength={25}
              className="form-control"
              value={sub}
              onChange={(e) => {
                setSub(e.target.value);
              }}
            ></textarea>
          </div>
          <label>deskripsi</label>
          <JoditEditor
            value={content}
            tabIndex={1}
            onChange={(newContent) => setContent(newContent)}
          />
          <br />
          <div className="form-group">
            <label>thumbnail</label>
            <br />
            <Upload
              beforeUpload={(file) => {
                setThumbnail(file);
                return false;
              }}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </div>

          <Button onClick={submit} type="primary" block loading={loading}>
            Ubah
          </Button>
        </div>
      </Admin>
    </>
  );
};

export default Ubah;
