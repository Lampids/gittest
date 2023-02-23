import React from 'react';
import { Routes , Route } from "react-router-dom";
import Maincontents from "./Maincontents";
import Introduction from "./pages/Introduction";
import PortfolioList from "./pages/PortfolioList";
import Photoarea from './pages/Photoarea';
import Header from "./Header";
import Footer from "./Footer";
import $ from 'jquery';

class MainPage extends React.Component{
  componentDidMount()
  {

  }
  render()
  {
    return(
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Maincontents />} />
          <Route path="/Lsyintro" element={<Introduction />} />
          <Route path="/Lsyportfolio" element={<PortfolioList />} />
          <Route path="/Lsyintrophotoarea" element={<Photoarea />} />
        </Routes>
        <Footer />
      </>
    );
  }
}

export default MainPage;