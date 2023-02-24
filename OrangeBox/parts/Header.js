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
    let header_css =
      {"backgorund-color":"-moz-linear-gradient(top,  rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%)",
       "backgorund-color":"-webkit-linear-gradient(top,  rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%)",
       "backgorund-color":"linear-gradient(to bottom,  rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%)"};
    $(window).scroll(function()
    {
      let scrollvelue = $(window).scrollTop();
      if (scrollvelue > 100)
      {
        $('.'+OBheader.header).css({"background-color":"rgb(25, 25, 25,0.7)"});
      }
      else
      {
        $('.'+OBheader.header).css(header_css);
      }
    });
    let nav_list = $('.'+OBheader.nav_list).children("li");
    let nav_hover_menu = $("."+OBheader.nav_hover_menu);
    nav_list.hover(function()
    {
      let nav_list_idx = $(this).index();
      nav_list.eq(nav_list_idx).find("ul").fadeIn(100);
    },
    function()
    {
      nav_list.find("ul").hide();
    });
  }
  render()
  {
    return (
      <>
        <header className={[OBheader.header , OBheader.header_bg].join(' ')}>
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
                  <ul className={OBheader.nav_hover_menu}>
                    <li>
                      <Link to="#">예매하기</Link>
                    </li>
                    <li>
                      <Link to="#">상영시간표</Link>
                    </li>
                    <li>
                      <Link to="#">할인안내</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">영화</Link>
                  <ul className={OBheader.nav_hover_menu}>
                    <li>
                      <Link to="#">홈</Link>
                    </li>
                    <li>
                      <Link to="#">현재상영작</Link>
                    </li>
                    <li>
                      <Link to="#">상영예정작</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">장르별</Link>
                  <ul className={OBheader.nav_hover_menu}>
                    <li>
                      <Link to="#">액션</Link>
                    </li>
                    <li>
                      <Link to="#">SF</Link>
                    </li>
                    <li>
                      <Link to="#">코미디</Link>
                    </li>
                    <li>
                      <Link to="#">판타지</Link>
                    </li>
                    <li>
                      <Link to="#">기타장르</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">스토어</Link>
                  <ul className={OBheader.nav_hover_menu}>
                    <li>
                      <Link to="#">VIP 등록안내</Link>
                    </li>
                    <li>
                      <Link to="#">환불안내</Link>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* <div className={OBheader.nav_hover_menu}>
                <ul className={OBheader.nav_hover_menu_list}>
                  <li>
                    <Link to ="#">예매하기</Link>
                  </li>
                  <li>
                    <Link to ="#">상영시간표</Link>
                  </li>
                  <li>
                    <Link to ="#">할인안내</Link>
                  </li>
                </ul>
                <ul className={OBheader.nav_hover_menu_list}>
                  <li>
                    <Link to ="#">홈</Link>
                  </li>
                  <li>
                    <Link to ="#">현재상영작</Link>
                  </li>
                  <li>
                    <Link to ="#">상영예정작</Link>
                  </li>
                </ul>
                <ul className={OBheader.nav_hover_menu_list}>
                  <li>
                    <Link to ="#">액션</Link>
                  </li>
                  <li>
                    <Link to ="#">SF</Link>
                  </li>
                  <li>
                    <Link to ="#">코미디</Link>
                  </li>
                  <li>
                    <Link to ="#">판타지</Link>
                  </li>
                  <li>
                    <Link to ="#">멜로</Link>
                  </li>
                  <li>
                    <Link to ="#">로맨스</Link>
                  </li>
                  <li>
                    <Link to ="#">스릴러</Link>
                  </li>
                  <li>
                    <Link to ="#">전쟁</Link>
                  </li>
                  <li>
                    <Link to ="#">공포</Link>
                  </li>
                  <li>
                    <Link to ="#">기타장르</Link>
                  </li>
                </ul>
              </div> */}
            </nav>
          </div>
        </header>
      </>
    );
  }
}

export default Header;