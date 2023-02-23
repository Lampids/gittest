import React from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import OBheader from "./Header.module.css";
import Logo from "../img/Logo.png";
import snsImg1 from "../img/face.png";
import snsImg2 from "../img/instar.png";
import snsImg3 from "../img/youtube.png";

class Header extends React.Component{
  componentDidMount()
  {

  }
  render()
  {
    return (
      <>
        <header className={OBheader.header}>
          <div className={OBheader.header_inner}>
            <div className={OBheader.header_top}>
              <ul className={OBheader.sns_link}>
                <li>
                  <Link to="#">
                    <img src={snsImg1} alt="sns 이미지"></img>
                    <span>페이스북</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src={snsImg2} alt="sns 이미지"></img>
                    <span>인스타그램</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src={snsImg3} alt="sns 이미지"></img>
                    <span>유튜브</span>
                  </Link>
                </li>
              </ul>
              <div className={OBheader.logo}>
                <img src={Logo} alt="로고">
                </img>
              </div>
              <ul className={OBheader.login_box}>
                <li>
                  <Link to="#">
                    맴버십
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    고객센터
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    로그인
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    회원가입
                  </Link>
                </li>
              </ul>
            </div>
            <nav className={OBheader.header_nav}>
              <ul className={OBheader.nav_list}>
                <li>
                  <Link to="#">예매</Link>
                </li>
                <li>
                  <Link to="#">영화</Link>
                </li>
                <li>
                  <Link to="#">장르별</Link>
                </li>
                <li>
                  <Link to="#">스토어</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
  }
}

export default Header;