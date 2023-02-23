import React from 'react';
import { Routes , Route } from "react-router-dom";
import $ from 'jquery';
import OrangeSt from "./Orangebox.module.css";
import Header from './parts/Header';
import OrangeMain from './pages/OrangeMain';

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
        </Routes>
      </div>
      </>
    );
  }
}

export default Orangebox;