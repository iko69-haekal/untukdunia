import { Button, message, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Admin from "../../../../components/admin";

const UbahProduk = () => {
  const { id } = useParams("id");
  useEffect(() => {
    Axios.get("https://api.untukdunia.com/product/" + id).then((res) => {
      const data = res.data.data;
      setTitle(data.image_title);
      setImage(data.image);
    });
  }, [id]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const history = useHistory();

  const submit = () => {
    setLoading(true);
    const form = new FormData();
    form.append("image_title", title);
    form.append("image", image);
    form.append("old_pict", image);

    Axios.post("https://api.untukdunia.com/product/" + id, form, {
      headers: {
        "content-type":
          "multipart/form-data; boundary=---011000010111000001101001",
        api_token: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        history.push("/admin/produk");
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
        <div className="row justify-content-center mt-5 pt-5">
          <div className="col-md-6">
            <div className="form-group">
              <label>Nama produk</label>
              <input
                value={title}
                type="text"
                className="form-control"
                placeholder="masukan nama produk"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Gambar Produk: </label>
              <br />
              <Upload
                beforeUpload={(file) => {
                  setImage(file);
                  return false;
                }}
              >
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </div>
            <Button loading={loading} onClick={submit} type="primary" block>
              Tambah
            </Button>
          </div>
        </div>
      </Admin>
    </>
  );
};

export default UbahProduk;
