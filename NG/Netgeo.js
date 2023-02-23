import React from 'react';
import { Routes , Route } from "react-router-dom";
import $ from 'jquery';
import ToMain from '../parts/ToMain';
import Header from "./parts/Header";
import NgHome from './pages/NgHome';
import NgBrand from './pages/NgBrand';
import NgChannel from './pages/NgChannel';
import NgLogin from "./pages/NgLogin";
import Footer from "./parts/Footer";
import Netgeost from "./Netgeo.module.css";

class Netgeo extends React.Component{
  componentDidMount()
  {

  }
  render()
  {
    return(
      <>
      <div className={Netgeost.ng_wrap}>
      <Header />
        <Routes>
          <Route path="/" element={<NgHome />} />
          <Route path="/Brand" element={<NgBrand />} />
          <Route path="/Channel" element={<NgChannel />} />
          <Route path="/News" element={<NgHome />} />
          <Route path="/Store" element={<NgHome />} />
          <Route path="/Login" element={<NgLogin />} /> 
        </Routes>
        <Footer />
        <ToMain />
      </div>
      </>
    );
  }
}

export default Netgeo;