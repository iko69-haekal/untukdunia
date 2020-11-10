import Card from "../../../components/cards";
import { Skeleton, Popconfirm, message } from "antd";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import Admin from "../../../components/admin";
import { useHistory } from "react-router-dom";
const Produkmin = () => {
  const history = useHistory();
  const [produk, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getData();
  }, []);
  function getData() {
    Axios.get("http://api.untukdunia.com/product")
      .then((res) => {
        const data = res.data.data;
        setProduct(data);
      })
      .catch((e) => console.log(e))
      .finally((e) => setLoading(false));
  }
  function hapus(id) {
    Axios.delete(`http://api.untukdunia.com/product/${id}`, {
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
          {!produk ? (
            <p></p>
          ) : (
            produk.map((data, i) => {
              return (
                <div className="col-md-4 col-12 mb-5">
                  <Card
                    key={i}
                    heights="200px"
                    src={data.image}
                    alt={data.image_title}
                    title={data.image_title}
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
                      history.push("/admin/produk/ubah/" + data.id);
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

export default Produkmin;
