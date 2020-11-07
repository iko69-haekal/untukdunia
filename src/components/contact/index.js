import React from "react";
import { facebook, instagram, whatsapp, gmail } from "../../asset/image";
const Contact = () => {
  return (
    <>
      <div className="container my-5 pt-3">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6 mb-2">
            <img className="icon" src={facebook} alt="kontak kami" />{" "}
            <span
              className="content text-white"
              style={{ backgroundColor: "#3A589B" }}
            >
              untukdunia
            </span>
          </div>
          {/*  */}
          <div className="col-lg-3 col-md-6 mb-2">
            <img className="icon" src={whatsapp} alt="kontak kami" />{" "}
            <span
              className="content text-white"
              style={{ backgroundColor: "#67C15E" }}
            >
              085715904647
            </span>
          </div>
          {/*  */}
          <div className="col-lg-3 col-md-6 mb-2">
            <img className="icon" src={instagram} alt="kontak kami" />{" "}
            <span
              className="content text-white"
              style={{ backgroundColor: "#4F7BA4" }}
            >
              untukdunia
            </span>
          </div>
          {/*  */}
          <div className="col-lg-3 col-md-6 mb-2">
            <img className="icon" src={gmail} alt="kontak kami" />{" "}
            <span
              className="content text-white"
              style={{ backgroundColor: "#D04F47" }}
            >
              wirabuanaiot@gmail.com
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
