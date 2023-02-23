import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';
import footerLogo from "./imgs/mylogo_footer.png";

function Footer() {
  return (
      <footer className='footer'>
        <div className="footer_inner">
          <h3>Contact</h3>
          <ul className='contact_info'>
            <li>
              <p>이메일</p>
              <p>tkddbs2009@naver.com</p>
            </li>
            <li>
              <p>연락처</p>
              <p>010-2882-5473</p>
            </li>
          </ul>
          <h3>사이트 바로가기</h3>
          <div className='site_summary'>
            <ul>
              <span>네셔널지오그래픽</span>
              <li>
                <Link to="/Netgeo">메인</Link>
              </li>
              <li>
                <Link to="/Netgeo/brand">브랜드</Link>
              </li>
              <li>
                <Link to="/Netgeo/Channel">채널</Link>
              </li>
              <li>
                <Link to="/Netgeo/Login">로그인</Link>
              </li>
            </ul>
            <ul>
              <span>원신</span>
              <li>
                <Link to="/Genshin">쇼케이스</Link>
              </li>
              <li>
                <Link to="/Genshin/main">메인</Link>
              </li>
              <li>
                <Link to="/Genshin/main/character">캐릭터소개</Link>
              </li>
              <li>
                <Link to="/Genshin/main/login">로그인</Link>
              </li>
            </ul>
            <ul>
              <span>인스퀘어</span>
              <li>
                <Link to="/Insquare">메인</Link>
              </li>
            </ul>
          </div>
          <div className='footer_logo'>
            <img src={footerLogo} alt="풋터로고"></img>
          </div>
        </div>
      </footer>
    );
  }
export default Footer;