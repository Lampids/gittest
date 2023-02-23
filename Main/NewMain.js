import React from 'react';
import { Routes , Route } from "react-router-dom";
import $ from 'jquery';
import NewMainSt from "./NewMain.module.css";
import Header from "./parts/Header";
import Mainsection from './pages/Mainsection';
import PortfolioPage from './pages/PortfolioPage';
import Intropage from './pages/Intropage';
import Siteinfo from "./pages/SiteinfoPage";

class NewMain extends React.Component{
  componentDidMount()
  {

  }
  render()
  {
    return(
      <>
      <div className={NewMainSt.wrap}>
      <Header />
        <div className={NewMainSt.wrap_inner}>
          <Routes>
            <Route path="/" element={<Mainsection />} />
            <Route path="/Portfolio" element={<PortfolioPage />} /> 
            <Route path="/Intropage" element={<Intropage />} /> 
            <Route path="/InfoPage" element={<Siteinfo />} /> 
          </Routes>
        </div>
      </div>
      </>
    );
  }
}

export default NewMain;