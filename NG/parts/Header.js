import React from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import Ngheader from "./Header.module.css";
import MobileLogo from "../img/NGlogo_small.png";

class Header extends React.Component{
  componentDidMount()
  {
    let scrollindex =0;
    $(window).scroll(function()
    {
      scrollindex = $(window).scrollTop();
      if(scrollindex > 10)
      {
        $('.'+Ngheader.header).css({"background-color":"rgba(15, 15, 15,0.7)"});
      }
      else if(scrollindex < 10)
      {
        $('.'+Ngheader.header).css({"background":"none"});
      }

    });
    $('.'+Ngheader.mobile_logo).on("click",function()
    {
      $('.'+Ngheader.nav_mobile).animate({"top":"0px"});
    });

    $('.'+Ngheader.mobile_close).on("click",function()
    {
      $('.'+Ngheader.nav_mobile).animate({"top":"-350px"});
    });

    $('.'+Ngheader.nav_mobile).children('li').children('a').on("click",function()
    {
      $('.'+Ngheader.nav_mobile).css({"top":"-350px"});
    });
  }
  render()
  {
    return (
      <>
        <header className={Ngheader.header}>
          <div className={Ngheader.header_inner}>
          <div className={Ngheader.header_nav}>
            <div className={Ngheader.mobile_logo}>
              <img src={MobileLogo} alt="모바일 로고"></img>
            </div>
            <div className={Ngheader.logo}>
              <Link to="/Netgeo" />
            </div>
            <ul className={Ngheader.nav}>
              <li>
                <Link to="/Netgeo">HOME</Link>
              </li>
              <li>
                <Link to="/Netgeo/Brand">BRAND</Link>
              </li>
              <li>
                <Link to="/Netgeo/Channel">CHANNEL</Link>
              </li>
              <li>
                <Link to="/Netgeo/News">NEWS</Link>
              </li>
              <li>
                <Link to="/Netgeo/Store">STORE</Link>
              </li>
            </ul>
          </div>
          <div className={Ngheader.login}>
            <Link to="/Netgeo/Login"></Link>
          </div>
          </div>
          <ul className={Ngheader.nav_mobile}>
            <li>
              <Link to="/Netgeo">HOME</Link>
            </li>
            <li>
              <Link to="/Netgeo/Brand">BRAND</Link>
            </li>
            <li>
              <Link to="/Netgeo/Channel">CHANNEL</Link>
            </li>
            <li>
              <Link to="/Netgeo/News">NEWS</Link>
            </li>
            <li>
              <Link to="/Netgeo/Store">STORE</Link>
            </li>
            <li>
              <Link to="/Netgeo/Login">LOGIN</Link>
            </li>
            <button className={Ngheader.mobile_close}>

            </button>
          </ul>
        </header>
      </>
    );
  }
}

export default Header;