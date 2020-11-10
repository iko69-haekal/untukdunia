import { Skeleton } from "antd";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "../../components/cards";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

function Artikel() {
  const history = useHistory();
  const [artikel, setArtikel] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    Axios.get("http://api.untukdunia.com/article")
      .then((res) => {
        const data = res.data.data;
        setArtikel(data);
      })
      .catch((e) => console.log(e))
      .finally((e) => setLoading(false));
  }, []);
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1>Artikel</h1>
        <div className="row mt-4">
          <Skeleton loading={loading} active={true} />

          {!artikel ? (
            <p></p>
          ) : (
            artikel.map((data) => {
              return (
                <div className="col-md-6 col-12 ">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      history.push("/artikel/" + data.id);
                    }}
                  >
                    <Card
                      src={data.image}
                      alt={data.article_title}
                      title={data.article_title}
                      heights="250px"
                      vit="cover"
                      desc={data.article_sub_content}
                    />
                  </a>
                </div>
              );
            })
          )}
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default Artikel;
