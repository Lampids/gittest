import React from 'react';
import { Link } from "react-router-dom";
import ToMainst from './ToMain.module.css';
import MainImg from "../imgs/mylogo.png";

function ToMain() {
  return (
    <div className={ToMainst.link_box}>
      <Link to ="/">
        <img src={MainImg} alt="포폴로고"></img>
      </Link>
    </div>
    );
  }
export default ToMain;