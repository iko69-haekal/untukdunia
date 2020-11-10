import { Button, message } from "antd";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Admin from "../../../../components/admin";

const UbahGalery = () => {
  const { id } = useParams();
  useEffect(() => {
    Axios.get("http://api.untukdunia.com/gallery/" + id).then((res) => {
      const data = res.data.data;
      setTitle(data.image_title);
      setImage(data.image);
      setLink(data.article_link);
    });
  }, []);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const submit = () => {
    setLoading(true);
    const form = new FormData();
    form.append("image_title", title);
    form.append("image", image);
    form.append("old_pict", image);
    form.append("article_link", link);

    Axios.post("http://api.untukdunia.com/gallery/" + id, form, {
      headers: {
        "content-type":
          "multipart/form-data; boundary=---011000010111000001101001",
        api_token: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        document.location.href = "/admin/galery";
      })
      .catch((err) => {
        console.log("Error" + err);
        message.error("pastikan semua input terisi dengan benar");
      })
      .finally((e) => setLoading(false));
  };
  return (
    <>
      <Admin>
        <div className="row justify-content-center mt-5 pt-5">
          <div className="col-md-6">
            <div class="form-group">
              <label>Nama gambar</label>
              <input
                value={title}
                type="text"
                className="form-control"
                placeholder="masukan nama gambar"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label>link tujuan</label>
              <input
                value={link}
                type="text"
                className="form-control"
                placeholder="masukan link tujuan"
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label>Gambar Produk: </label>
              <br />
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <Button loading={loading} onClick={submit} type="primary" block>
              Ubah
            </Button>
          </div>
        </div>
      </Admin>
    </>
  );
};

export default UbahGalery;