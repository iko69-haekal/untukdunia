import { Skeleton, Popconfirm, message, Empty } from "antd";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Admin from "../../../components/admin";

const Galery = () => {
  const history = useHistory();
  const [galery, setGalery] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  function getData() {
    Axios.get("https://api.untukdunia.com/gallery")
      .then((res) => {
        const data = res.data.data;
        setGalery(data);
      })
      .catch((e) => console.log(e))
      .finally((e) => setLoading(false));
  }

  function hapus(id) {
    Axios.delete(`http://api.untukdunia.com/gallery/${id}`, {
      headers: {
        api_token: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        message.success("data berhasil dihapus");
        getData();
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <Admin>
        <div className="row">
          <Skeleton loading={loading} active={true} />

          {!galery ? (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          ) : (
            galery.map((data) => {
              return (
                <div className="col-lg-4 col-md-6">
                  <img
                    style={{ width: "100%", height: "35vh" }}
                    src={data.image}
                    alt={data.image_title}
                    className="mb-3 img-fluid"
                  />
                  <Popconfirm
                    title="yakin ingin menghapus?"
                    onConfirm={() => {
                      hapus(data.id);
                    }}
                    okText="Yes"
                    cancelText="No"
                  >
                    <button className="btn btn-danger mr-2">hapus</button>
                  </Popconfirm>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      history.push("/admin/galery/ubah/" + data.id);
                    }}
                    className="btn btn-primary"
                  >
                    ubah
                  </button>
                </div>
              );
            })
          )}
        </div>
      </Admin>
    </>
  );
};

export default Galery;
