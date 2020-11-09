import React from "react";
import { NavLink } from "react-router-dom";
import Admin from "../../../components/admin";
import Card from "../../../components/cards";
const Artikelmin = () => {
  return (
    <>
      <Admin>
        <div className="row">
          <div className="col-md-6 col-12 mb-5">
            <Card
              src="https://bedabisa.com/media/service/i-guest-c67cyrwfhfz7q7xnswww.png"
              alt="artikel 1"
              heights="250px"
              vit="cover"
              desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ipsa
              dolores, dolorum consectetur, ab ipsum eius veritatis iusto sequi
              sit enim."
            />
            <button className="btn btn-danger mr-4">hapus</button>
            <NavLink to="/admin/artikel" className="btn btn-info text-white">
              ubah
            </NavLink>
          </div>
          <div className="col-md-6 col-12 mb-5">
            <Card
              src="https://bedabisa.com/media/service/i-guest-c67cyrwfhfz7q7xnswww.png"
              alt="artikel 1"
              heights="250px"
              vit="cover"
              desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ipsa
              dolores, dolorum consectetur, ab ipsum eius veritatis iusto sequi
              sit enim."
            />
            <button className="btn btn-danger mr-4">hapus</button>
            <NavLink to="/admin/artikel" className="btn btn-info text-white">
              ubah
            </NavLink>
          </div>
          <div className="col-md-6 col-12 mb-5">
            <Card
              src="https://bedabisa.com/media/service/i-guest-c67cyrwfhfz7q7xnswww.png"
              alt="artikel 1"
              heights="250px"
              vit="cover"
              desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ipsa
              dolores, dolorum consectetur, ab ipsum eius veritatis iusto sequi
              sit enim."
            />
            <button className="btn btn-danger mr-4">hapus</button>
            <NavLink to="/admin/artikel" className="btn btn-info text-white">
              ubah
            </NavLink>
          </div>
        </div>
      </Admin>
    </>
  );
};

export default Artikelmin;
