import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Skeleton } from "antd";
import Navbar from "../../../components/navbar";
import Axios from "axios";
const Detail = () => {
  const { id } = useParams();
  const [artikel, setArtikel] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    Axios.get("https://api.untukdunia.com/article/" + id)
      .then((res) => {
        const data = res.data.data;
        setArtikel(data);
      })
      .catch((e) => console.log(e))
      .finally((e) => setLoading(false));
  }, [id]);
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row">
          <Skeleton loading={loading} active={true} />

          <div className="col-md-12">
            <div
              style={{
                width: "100%",
                height: "70vh",
                position: "relative",
                borderRadius: "2px",
              }}
              className="thumbs"
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "25px",
                }}
                src={artikel.image}
                alt={artikel.article_title}
              />
            </div>
            <br />
            <br />
            <h1>{artikel.article_title}</h1>
            <p
              dangerouslySetInnerHTML={{ __html: artikel.article_content }}
            ></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
