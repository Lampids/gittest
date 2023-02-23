import React from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import InfoSt from "./SiteinfoPage.module.css";
import titleImg_info from "../imgs/Infopage_text.png";
import InfoImg from "../imgs/siteinfo_icon_c.png";
import logoImg from "../imgs/my_logo.png";
import HTMLimg from "../imgs/HTML.png";
import CSSimg from "../imgs/CSS.png";
import JQSimg from "../imgs/JQ.png";
import PSimg from "../imgs/PS.png";
import REACTimg from "../imgs/REACT.png";
import JAVAimg from "../imgs/javascript.png";


class PortfolioPage extends React.Component{
  componentDidMount()
  {
    let section_title = $("."+InfoSt.section_title);
    setTimeout(function()
    {
      section_title.animate({"top":"0px"});
    });
  }
  render()
  {
    return(
      <>
      <section className={InfoSt.siteinfo_section}>
        <span className={InfoSt.section_title}>
          <img src={InfoImg} alt="타이틀 아이콘"></img>
          <img src={titleImg_info} alt="타이틀"></img>
        </span>
        <div className={InfoSt.siteinfo_area}>
          <span>
            사이트 바로가기 
          </span>
          <ul className={InfoSt.site_path}>
            <li>
              <span>네셔널지오그래픽</span>
              <ul className={InfoSt.site_link}>
                <li>
                  <Link to="/Netgeo" target="_blank">메인</Link>
                </li>
                <li>
                  <Link to="/Netgeo/Brand" target="_blank">브랜드</Link>
                </li>
                <li>
                  <Link to="/Netgeo/Channel" target="_blank">채널</Link>
                </li>
                <li>
                  <Link to="/Netgeo/Login" target="_blank">로그인</Link>
                </li>
              </ul>
            </li>
            <li>
              <span>원신</span>
              <ul className={InfoSt.site_link}>
                <li>
                  <Link to="/Genshin" target="_blank">이벤트페이지</Link>
                </li>
                <li>
                  <Link to="/Genshin/main" target="_blank">메인</Link>
                </li>
                <li>
                  <Link to="/Genshin/main/character" target="_blank">캐릭터 소개</Link>
                </li>
                <li>
                  <Link to="/Genshin/main/login" target="_blank">로그인</Link>
                </li>
              </ul>
            </li>
            <li>
              <span>인스퀘어</span>
              <ul className={InfoSt.site_link}>
                <li>
                  <Link to="/InSquare" target="_blank">메인</Link>
                </li>
                <li>
                  <Link to="/InSquare/login" target="_blank">로그인</Link>
                </li>
              </ul>
            </li>
          </ul>
          <span>
            개인 연락처  
          </span>
          <ul className={InfoSt.contact_list}>
            <li>
              핸드폰 : 010-2882-5473
            </li>
            <li>
              메일 : tkddbs2009@naver.com
            </li>
            <li>
              코드 : https://github.com/Lampids/myprojectIndex
            </li>
            <li>
              주소 : https://lampids.github.io/myproject/
            </li>
          </ul>
          <span className={InfoSt.another_design}>
            <Link to ="/Oldlsy">
              또 다른 포트폴리오 보기
            </Link>
          </span>
          <div className={InfoSt.site_logo_box}>
            <img src={logoImg} alt="사이트 로고"></img>
          </div>
        </div>
      </section>
      </>
    );
  }
}

export default PortfolioPage;