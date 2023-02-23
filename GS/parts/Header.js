import React from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import GiheaderSt from "./Header.module.css";
import hoyologoImg from "../img/hoyoverse_logo.png";

class Header extends React.Component{
  componentDidMount()
  {
    $('.'+GiheaderSt.navi_menu).on("mouseenter",function()
    {
      $('.'+GiheaderSt.header_bg).fadeIn(300);
      $('.'+GiheaderSt.navi_menu).children('li').children('ul').fadeIn(300);
    });
    $('.'+GiheaderSt.navi_menu).on("mouseleave",function()
    {
      $('.'+GiheaderSt.header_bg).fadeOut(300);
      $('.'+GiheaderSt.navi_menu).children('li').children('ul').fadeOut(300);
    });
  }
  render()
  {
    return (
      <>
        <header className={GiheaderSt.header}>
          <div className={GiheaderSt.header_bg}></div>
          <div className={GiheaderSt.header_logo}>
            <Link to="/Genshin/main">
            </Link>
          </div>
          <nav className={GiheaderSt.header_menu}>
            <ul className={GiheaderSt.navi_menu}>
              <li>
                새소식
                <ul className={GiheaderSt.navi_list}>
                  <li>공지사항</li>
                  <li>개발자노트</li>
                  <li>이벤트</li>
                </ul>
              </li>
              <li>
                게임 소개
                <ul className={GiheaderSt.navi_list}>
                  <li>게임 특징</li>
                  <li>원소 전투 가이드</li>
                  <li><Link to="/Genshin/main/character">캐릭터 소개</Link></li>
                  <li>배경 소개</li>
                </ul>
              </li>
              <li>
                커뮤니티
                <ul className={GiheaderSt.navi_list}>
                  <li>자유 게시판</li>
                  <li>연월비경 게시판</li>
                  <li>피드팩</li>
                </ul>
              </li>
              <li>
                상점
                <ul className={GiheaderSt.navi_list}>
                  <li>원석 샵</li>
                  <li>공월축복</li>
                  <li>기타 구매</li>
                </ul>
              </li>
              <li>
                자료실
                <ul className={GiheaderSt.navi_list}>
                  <li>멀티미디어</li>
                  <li>갤러리</li>
                  <li>다운로드</li>
                </ul>
              </li>
              <li>
                고객지원
                <ul className={GiheaderSt.navi_list}>
                  <li>고객센터</li>
                  <li>보안 설정</li>
                  <li>서비스 정책</li>
                </ul>
              </li>
            </ul>
            <div className={GiheaderSt.logo}>
              <img src={hoyologoImg} alt="호요버스 로고"></img>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;