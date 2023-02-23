import React from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import GifooterSt from "./Footer.module.css";
import hoyologoImg from "../img/hoyoverse_logo.png";

class Footer extends React.Component{
  componentDidMount()
  {

  }
  render()
  {
    return (
      <>
      <footer className={GifooterSt.footer}>
        <div className={GifooterSt.footer_inner}>
          <div className={GifooterSt.footer_left}>
            <nav className={GifooterSt.footer_nav}>
              <ul className={GifooterSt.footer_nav_list}>
                <li>
                  회사소개
                </li>
                <li>
                  채용안내
                </li>
                <li>
                  게임이용등급
                </li>
                <li>
                  개인정보처리방침
                </li>
                <li>
                  청소년보호정책
                </li>
                <li>
                  운영정책
                </li>
              </ul>
            </nav>
            <span>
              <p>미호요 창립자 :류웨이 / 중화인민공화국 상하이시 쉬후이구 이산루700호 C4동 5층</p>
              <p>E-mail:contact-us@somekind.of 사업자등록번호:111-11-11111호</p>
              <p>miHoYo Network Technology Co. Ltd.</p>
            </span>
          </div>
          <div className={GifooterSt.footer_right}>
            <img src={hoyologoImg} alt="호요버스로고"></img>
          </div>
        </div>
      </footer>
      </>
    );
  }
}

export default Footer;