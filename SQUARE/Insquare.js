import React from 'react';
import { Routes , Route } from "react-router-dom";
import $ from 'jquery';
import InsquareSt from "./Insquare.module.css";
import Header from './parts/Header';
import Footer from './parts/Footer';
import Main from './pages/Main';
import Login from './pages/Login';
import ToMain from '../parts/ToMain';

class Insquare extends React.Component{
  componentDidMount()
  {

  }
  render()
  {
    return(
      <>
      <div className={InsquareSt.square_wrap}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <ToMain />
        <Footer />
      </div>
      </>
    );
  }
}

export default Insquare;