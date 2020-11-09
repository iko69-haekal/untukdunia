import React from "react";

import Card from "../../components/cards";
import Carousel from "../../components/carousel";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import "./style.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="container-fluid mt-5 mb-5">
        <h4 className="text-center">OUR PRODUCT</h4>
        <div className="row mt-5">
          <div className="col-md-4">
            <Card
              src="https://bedabisa.com/media/service/gas-smoke-vs3f7d96ddgbrtcfg99c.png"
              alt="produk 1"
              desc="WHAT IS"
              heights="350px"
            />
          </div>
          <div className="col-md-4">
            <Card
              src="https://bedabisa.com/media/service/gas-smoke-vs3f7d96ddgbrtcfg99c.png"
              alt="produk 1"
              desc="WHAT IS"
              heights="350px"
            />
          </div>
          <div className="col-md-4">
            <Card
              src="https://bedabisa.com/media/service/gas-smoke-vs3f7d96ddgbrtcfg99c.png"
              alt="produk 1"
              desc="WHAT IS"
              heights="350px"
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="my-4">
        <h3 className="text-center">Galery</h3>
        <div className="row no-gutters mt-4">
          <div className="col-lg-3 col-md-4 col-6">
            <div className="item">
              <img
                src="https://bedabisa.com/template/assets/images/gallery/3.JPG"
                alt="galery"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <div className="item">
              <img
                src="https://bedabisa.com/template/assets/images/gallery/3.JPG"
                alt="galery"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <div className="item">
              <img
                src="https://bedabisa.com/template/assets/images/gallery/3.JPG"
                alt="galery"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <div className="item">
              <img
                src="https://bedabisa.com/template/assets/images/gallery/3.JPG"
                alt="galery"
                className="img-fluid"
              />
            </div>
          </div>
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
