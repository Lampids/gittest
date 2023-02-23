import React from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import HeaderSt from "./Header.module.css";
import insquareLogoS from "../img/insquare_logo_s.png";
import insquareLogo from "../img/insquare_logo.png";
import insquareLogoW from "../img/insquare_logo_w.png";

class Main extends React.Component{
  componentDidMount()
  {
    $('.'+HeaderSt.mobile_nav_call).on("click",function()
    {
      $('.'+HeaderSt.mobile_nav).animate({"left":"0px"});
    });
    $('.'+HeaderSt.mobile_nav_close).on("click",function()
    {
      $('.'+HeaderSt.mobile_nav).animate({"left":"-100%"});
    });
    $('.'+HeaderSt.mobile_nav_list).children("li").on("click",function()
    {
      $('.'+HeaderSt.mobile_nav).css({"left":"-100%"});
    });

  }
  render()
  {
    return(
      <>
      <header className={HeaderSt.header}>
        <div className={HeaderSt.header_inner}>
          <nav className={HeaderSt.nav}>
            <button className={HeaderSt.mobile_nav_call}></button>
            <div className={HeaderSt.logo}>
              <img src={insquareLogo} alt="인스퀘어로고" className={HeaderSt.big_logo}></img>
              <img src={insquareLogoS} alt="인스퀘어로고_작음" className={HeaderSt.small_logo}></img>
            </div>
            <ul className={HeaderSt.nav_list}>
              <li>
                상점
              </li>
              <li>
                소개
              </li>
              <li>
                커뮤니티
              </li>
              <li>
                문의
              </li>
            </ul>
          </nav>
          <nav className={HeaderSt.mobile_nav}>
            <button className={HeaderSt.mobile_nav_close} />
            <ul className={HeaderSt.mobile_nav_list}>
              <li>
                <Link to="/Insquare">메인</Link>
              </li>
              <li>
                <Link to="/Insquare/login">로그인</Link>
              </li>
              <li>
                상점
              </li>
              <li>
                소개
              </li>
              <li>
                커뮤니티
              </li>
              <li>
                문의
              </li>
            </ul>
            <div className={HeaderSt.copylight_box}>
              <span className={HeaderSt.copylight_logo}>
                <img src={insquareLogoW} alt="인스퀘어 로고"></img>
              </span>
              <span>
              © 2022 INSQUARE. All rights reserved. All trademarks are property of their respective owners in the KOREA and other countries.
              VAT included in all prices where applicable.   Privacy Policy 
              </span>
            </div>
          </nav>
          <div className={HeaderSt.login_box}>
            <span>
              <Link to="/Insquare/login">로그인</Link>
            </span>
            <span>
              <Link to="#">INSQUARE 설치</Link>
            </span>
          </div>
        </div>
      </header>
      </>
    );
  }
}

export default Main;