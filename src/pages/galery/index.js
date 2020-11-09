import { Skeleton } from "antd";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

const Galery = () => {
  const [galery, setGalery] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    Axios.get("http://api.untukdunia.com/article")
      .then((res) => {
        const data = res.data.data;
        setGalery(data);
      })
      .catch((e) => console.log(e))
      .finally((e) => setLoading(false));
  }, []);
  return (
    <>
      <Navbar />
      <div className="container mt-4 mb-5 pb-5">
        <h2 className="mb-4">Galery</h2>
        <div className="row">
          <Skeleton loading={loading} active={true} />

          {loading ? (
            <p></p>
          ) : (
            galery.map((data) => {
              return (
                <div className="col-lg-4 col-md-6">
                  <img
                    style={{ width: "100%" }}
                    src={data.image}
                    alt={data.image_title}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Galery;
