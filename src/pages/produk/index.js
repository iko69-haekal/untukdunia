import Card from "../../components/cards";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { Skeleton, Empty } from "antd";
import Axios from "axios";
import React, { useEffect, useState } from "react";
const Produk = () => {
  const [produk, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    Axios.get("https://api.untukdunia.com/product")
      .then((res) => {
        const data = res.data.data;
        setProduct(data);
      })
      .catch((e) => console.log(e))
      .finally((e) => setLoading(false));
  }, []);
  return (
    <>
      <Navbar />
      <div className="container my-4">
        <div className="row">
          <Skeleton loading={loading} active={true} />
          {!produk ? (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          ) : (
            produk.map((data, i) => {
              return (
                <div className="col-md-4 col-12 ">
                  <Card
                    key={i}
                    src={data.image}
                    alt={data.image_title}
                    title={data.image_title}
                    heights={"200px"}
                    vit="cover"
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

export default Produk;
