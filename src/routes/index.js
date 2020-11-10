import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../pages/about";
import Artikelmin from "../pages/admin/artikelmin";
import Dashboard from "../pages/admin/dashboard";
import Gallerymin from "../pages/admin/gallerymin";
import TambahGalery from "../pages/admin/gallerymin/tambahGalery";
import UbahGalery from "../pages/admin/gallerymin/ubahGalery";
import Produkmin from "../pages/admin/produkmin";
import TambahProduk from "../pages/admin/produkmin/tambahProduk";
import UbahProduk from "../pages/admin/produkmin/ubah";
import Tambah from "../pages/admin/tambah";
import Ubah from "../pages/admin/ubah";
import Artikel from "../pages/artikel";
import Detail from "../pages/artikel/detail";
import Galery from "../pages/galery";
import Home from "../pages/home";
import Login from "../pages/login";
import Produk from "../pages/produk";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tentang" component={About} />
        <Route exact path="/artikel" component={Artikel} />
        <Route path="/artikel/:id" component={Detail} />
        <Route path="/produk" component={Produk} />
        <Route path="/galery" component={Galery} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/admin" component={Dashboard} />
        <Route exact path="/admin/artikel" component={Artikelmin} />
        <Route path="/admin/artikel/tambah" component={Tambah} />
        <Route path="/admin/artikel/ubah/:id" component={Ubah} />
        <Route exact path="/admin/produk" component={Produkmin} />
        <Route path="/admin/produk/tambah" component={TambahProduk} />
        <Route path="/admin/produk/ubah/:id" component={UbahProduk} />
        <Route exact path="/admin/galery" component={Gallerymin} />
        <Route path="/admin/galery/tambah" component={TambahGalery} />
        <Route path="/admin/galery/ubah/:id" component={UbahGalery} />
      </Switch>
    </Router>
  );
};

export default Routes;
