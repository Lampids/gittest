import React from 'react';
import { Routes , Route , Link } from "react-router-dom";
import $ from 'jquery';
import NewHeaderSt from "./Header.module.css";
import homeImg from "../imgs/home_icon.png";
import portImg from "../imgs/port_icon.png";
import profileImg from "../imgs/profile_icon.png";
import pohtoImg from "../imgs/phto_icon.png";
import infoImg from "../imgs/siteinfo_icon.png";

class NewMainHeader extends React.Component{
  componentDidMount()
  {
    let header = $("."+NewHeaderSt.header);
    let header_css = header.children("."+NewHeaderSt.header_css);
    let nav_list = $("."+NewHeaderSt.nav_list).children("li");
    let nav_list_span = $("."+NewHeaderSt.nav_list).children("li").children("span");


    setTimeout(function()
    {
      header.animate({"left":"25px"});
      nav_list.delay(700).eq(0).animate({"opacity":"1"});
      nav_list.delay(100).eq(1).animate({"opacity":"1"});
      nav_list.delay(100).eq(2).animate({"opacity":"1"});
      nav_list.delay(100).eq(3).animate({"opacity":"1"});
    });
    nav_list.hover(function()
    {
      let nav_list_index = $(this).index();
      nav_list.eq(nav_list_index).children("a").css({"background-color":"#191919"});
    },
    function()
    {
      nav_list.children("a").css({"background-color":"#6da3a0"});
    }
    );
    header.on("mouseenter",function()
    {
      header.css({"width":"175px"});
      nav_list_span.fadeIn(300);
      header_css.fadeIn(300);
    });
    header.on("mouseleave",function()
    {
      header.css({"width":"100px"});
      nav_list_span.hide();
      header_css.fadeOut(300);
    });

  }
  render()
  {
    return(
      <>
        <header className={NewHeaderSt.header}>
          <div className={NewHeaderSt.header_css} />
          <ul className={NewHeaderSt.nav_list}>
            <li>
              <Link to="/">
                <img src={homeImg} alt="홈이미지"></img>
              </Link>
              <span>홈</span>
            </li>
            <li>
              <Link to="/Portfolio">
                <img src={portImg} alt="홈이미지"></img>
              </Link>
              <span>프로젝트</span>
            </li>
            <li>
              <Link to="/Intropage">
                <img src={profileImg} alt="홈이미지"></img>
              </Link>
              <span>소개</span>
            </li>
            <li>
              <Link to="/InfoPage">
                <img src={infoImg} alt="홈이미지"></img>
              </Link>
              <span>요약</span>
            </li>
          </ul>
        </header>
        <header className={NewHeaderSt.mobile_header}>
          <ul className={NewHeaderSt.mobile_nav_list}>
            <li>
              <Link to="/">
                <img src={homeImg} alt="홈이미지"></img>
              </Link>
            </li>
            <li>
              <Link to="/Portfolio">
                <img src={portImg} alt="홈이미지"></img>
              </Link>
            </li>
            <li>
              <Link to="/Intropage">
                <img src={profileImg} alt="홈이미지"></img>
              </Link>
            </li>
            <li>
              <Link to="/InfoPage">
                <img src={infoImg} alt="홈이미지"></img>
              </Link>
            </li>
          </ul>
        </header>
      </>
    );
  }
}

export default NewMainHeader;