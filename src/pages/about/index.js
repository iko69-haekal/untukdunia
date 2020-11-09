import React from "react";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5 mb-4">
        <div className="row">
          <div className="col-md-5 mb-3">
            <p className="lead font-weight-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
              eius odit aliquam vitae rem. Dolores ut odit aspernatur ipsam et,
              eligendi amet repellendus aperiam aliquid magnam minus iure,
              commodi dignissimoss!
            </p>
          </div>
          <div className="col-md-7">
            <img
              src="https://bedabisa.com/media/service/smartabsen-99x2d52sk24xp3hpbrtz.png"
              alt="tentang untuk dunia"
              className="img-fluid"
              style={{ height: "300px", width: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="container mt-3 pt-3">
        <div className="row">
          <div className="col-12 mb-4">
            <h1>Visi</h1>
            <p className="font-weight-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis animi facilis labore, deleniti consequatur tempora
              sint ad minima impedit dolorem dolore ut quibusdam excepturi nam,
              eveniet itaque vel debitis corporis!Saepe odit amet sapiente et
              sunt laudantium dignissimos, quidem suscipit ad provident est
              corporis. Omnis qui tenetur impedit dolorum, molestiae, iure
              laboriosam, totam cupiditate debitis perferendis consequuntur id
              inventore facere!
            </p>
          </div>
          <div className="col-12">
            <h1>Misi</h1>
            <p className="font-weight-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis animi facilis labore, deleniti consequatur tempora
              sint ad minima impedit dolorem dolore ut quibusdam excepturi nam,
              eveniet itaque vel debitis corporis!Saepe odit amet sapiente et
              sunt laudantium dignissimos, quidem suscipit ad provident est
              corporis. Omnis qui tenetur impedit dolorum, molestiae, iure
              laboriosam, totam cupiditate debitis perferendis consequuntur id
              inventore facere!
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div style={{ backgroundColor: "#fffffe" }}>
        <div className="container mt-5 pt-3">
          <div className="row">
            <div className="col-md-6">
              <h2>Mengapa kami?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, recusandae, totam doloremque, at tempora eos velit
                aspernatur atque facere sunt ab. Esse laudantium blanditiis,
                incidunt expedita sit doloribus rem quae.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://bedabisa.com/media/service/smartabsen-99x2d52sk24xp3hpbrtz.png"
                alt="tentang untuk dunia"
                className="img-fluid"
                style={{ height: "200px", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default About;
