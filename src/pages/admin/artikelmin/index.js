import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { message, Popconfirm, Empty, Skeleton } from "antd";
import Admin from "../../../components/admin";
import Card from "../../../components/cards";
const Artikelmin = () => {
  const history = useHistory();
  const [artikel, setArtikel] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  const getData = () => {
    Axios.get("http://api.untukdunia.com/article")
      .then((res) => {
        const data = res.data.data;
        setArtikel(data);
      })
      .catch((e) => console.log(e))
      .finally((e) => setLoading(false));
  };

  function hapus(id) {
    Axios.delete(`http://api.untukdunia.com/article/${id}`, {
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
        <div className="row pt-3 pb-5">
          <Skeleton loading={loading} active={true} />
          {!artikel ? (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          ) : (
            artikel.map((data, i) => {
              return (
                <div className="col-md-6 col-12 mb-5" key={i}>
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      history.push("/artikel/" + data.id);
                    }}
                  >
                    <Card
                      src={data.image}
                      alt={data.article_title}
                      title={data.article_title}
                      vit={"cover"}
                      heights="200px"
                    />
                  </span>
                  <Popconfirm
                    title="yakin ingin menghapus?"
                    onConfirm={() => hapus(data.id)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <button className="btn btn-danger mr-2">hapus</button>
                  </Popconfirm>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      history.push("/admin/artikel/ubah/" + data.id);
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

export default Artikelmin;
