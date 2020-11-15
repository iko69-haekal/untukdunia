import React, { useEffect, useState } from "react";

import Card from "../../components/cards";
import Carousel from "../../components/carousel";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { Skeleton, Empty } from "antd";
import Axios from "axios";
import "./style.css";
import { Helmet } from "react-helmet";
const Home = () => {
  const [produk, setProduct] = useState([]);
  const [galery, setGalery] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    Axios.get("https://api.untukdunia.com/product", {
      params: {
        _limit: 3,
      },
    })
      .then((res) => {
        const data = res.data.data;
        setProduct(data);
      })
      .catch((e) => console.log(e))
      .finally((e) => setLoading(false));

    Axios.get("https://api.untukdunia.com/gallery", {
      params: {
        _limit: 8,
      },
    })
      .then((res) => {
        const data2 = res.data.data;
        setGalery(data2);
      })
      .catch((e) => console.log(e));
  }, []);

  if (produk.length > 3) {
    setProduct(produk.slice(0, 3));
  }

  if (galery.length > 4) {
    setProduct(produk.slice(0, 4));
  }
  return (
    <>
      <Helmet>
        <title>
          untuk dunia | website iot kumpulan hasil karya siswa siswi smk
          wirabuana
        </title>
        <meta
          name="description"
          content="Regulasi di bidang IoT perlu diperkuat, sementara impor bahan baku perlu dipermudah. Pemain mulai mampu memonetisasi layanan"
        />
        <meta
          name="keywords"
          content="untukdunia,untuk dunia,iot,iot indonesia,internet of things,robotika,untukdunia.com,smk,SMK,karya smk"
        />
      </Helmet>
      <Navbar />
      <Carousel />
      <div className="container-fluid mt-5 mb-5">
        <h4 className="text-center">OUR PRODUCT</h4>
        <div className="row mt-5 justify-content-center">
          <Skeleton loading={loading} active={true} />
          {!produk ? (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          ) : (
            produk.map((data, i) => {
              return (
                <div className="col-md-4 col-12 " key={i}>
                  <Card
                    src={data.image}
                    alt={data.image_title}
                    title={data.image_title}
                    heights="200px"
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
      {/*  */}
      <div className="my-4">
        <h3 className="text-center">Galery</h3>
        <div className="row mt-4 no-gutters justify-content-center">
          <Skeleton loading={loading} active={true} />
          {!galery ? (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          ) : (
            galery.map((data, i) => {
              return (
                <div className="col-lg-3 col-md-4 col-6" key={i}>
                  <div className="item">
                    <img
                      src={data.image}
                      alt={data.image_title}
                      className="img-fluid"
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      {/*  */}
      <Contact />
      {/*  */}
      <Footer />
    </>
  );
};

export default Home;
