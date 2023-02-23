import React from 'react';
import { Routes , Route } from "react-router-dom";
import $ from 'jquery';
import Genshinst from './Genshin.module.css';
import ToMain from '../parts/ToMain';
import Gishowcase from './Gishowcase';
import GiMain from './GiMain';

class Genshin extends React.Component{
  componentDidMount()
  {

  }
  render()
  {
    return(
      <>
      <div className={Genshinst.gi_wrap}>
        <Routes>
          <Route path="/" element={<Gishowcase />} />
          <Route path="main/*" element={<GiMain />} />
        </Routes>
        <ToMain />
      </div>
      </>
    );
  }
}

export default Genshin;