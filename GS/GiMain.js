import React from 'react';
import { Routes , Route  } from "react-router-dom";
import $ from 'jquery';
import GiMainSt from "./GiMain.module.css";
import ToMain from '../parts/ToMain';
import Header from "./parts/Header";
import GiHome from './pages/GiHome';
import GiLogin from "./pages/GiLogin";
import GiCharacter from "./pages/GiCharacter";
import Footer from "./parts/Footer";

class GiMain extends React.Component{
  componentDidMount()
  {

  }
  render()
  {
    return(
      <>
      <div className={GiMainSt.main_section}>
        <Header />
        <Routes>
          <Route path ="/" element={<GiHome />} />
          <Route path ="/login" element={<GiLogin />} />
          <Route path ="/character" element={<GiCharacter />} />
        </Routes>
        <Footer />
      </div>
      </>
    );
  }
}

export default GiMain;