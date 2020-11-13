import { Layout } from "antd";
import React from "react";
import { tokopedia, bukalapak, shopee, logo } from "../../asset/image";

const Footer = () => {
  return (
    <>
      <Layout>
        <Layout.Footer style={{ backgroundColor: "black" }}>
          <div className=" pt-3">
            <div className="row justify-content-center">
              <div className="col-md-4 mb-2">
                <img src={logo} alt="footer logo" width="150" />
                <br />
                <br />
                <p className="text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                  consequuntur praesentium tempore libero necessitatibus eos
                  similique officia, obcaecati molestiae temporibus? Nobis
                  eveniet sed, est odio eius in ipsa consequatur quod!
                </p>
              </div>
              <div className="col-md-4 mb-4">
                <h3 className="text-white">Contact us</h3>

                <h6 className="text-white">
                  <span>
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-telephone-inbound-fill"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0z"
                      />
                    </svg>
                    {`    `}
                  </span>
                  085715904647
                </h6>
                <h6 className="text-white">
                  <span>
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-envelope"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                      />
                    </svg>
                    {`  `}
                  </span>
                  wirabuanaqot@gmail.com
                </h6>
                <h6 className="text-white">
                  <span>
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-house-door"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                      />
                    </svg>
                    {` `}
                  </span>
                  kp bojong geder
                </h6>
                <div className="input-group mt-3" style={{ width: "90%" }}>
                  <input
                    type="text"
                    style={{ border: "none", width: "50%" }}
                    className="form-control"
                    placeholder="Email"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-envelope"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-2">
                <h3 className="text-white">Market place</h3>
                <div className="row mt-4">
                  <div className="col-2">
                    <div>
                      <a className="d-inline" href="https://tokopedia.com">
                        <img
                          style={{ width: "46px" }}
                          src={tokopedia}
                          className="hover"
                          alt="tokopedia untukdunia"
                        />
                      </a>
                    </div>
                  </div>
                  {/*  */}
                  <div className="col-2">
                    <div>
                      <a className="d-inline" href="https://shopee.com">
                        <img
                          style={{ width: "46px" }}
                          src={shopee}
                          className="hover"
                          alt="shopee untukdunia"
                        />
                      </a>
                    </div>
                  </div>
                  {/*  */}
                  <div className="col-1">
                    <div>
                      <a className="d-inline" href="https://bukalapak.com">
                        <img
                          style={{ width: "46px" }}
                          src={bukalapak}
                          className="hover"
                          alt="bukalapak untukdunia"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout.Footer>
      </Layout>
    </>
  );
};

export default Footer;
