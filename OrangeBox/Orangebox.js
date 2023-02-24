import React from 'react';
import { Routes , Route } from "react-router-dom";
import $ from 'jquery';
import OrangeSt from "./Orangebox.module.css";
import Header from './parts/Header';
import Footer from "./parts/Footer";
import OrangeMain from './pages/OrangeMain';
import OrangeLogin from "./pages/OrangeLogin";

class Orangebox extends React.Component{
  componentDidMount()
  {

  }
  render()
  {
    return(
      <>
      <div className={OrangeSt.orange_warp}>
        <Header />
        <Routes>
          <Route path="/" element={<OrangeMain />}></Route>
          <Route path="OrangeLogin/" element={<OrangeLogin />}></Route>
        </Routes>
        <Footer />
      </div>
      </>
    );
  }
}

export default Orangebox;