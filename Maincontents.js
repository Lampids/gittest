import React from 'react';
import { Routes , Route , Link } from "react-router-dom";
import Circle from "./parts/Opening";
import Circles from "./parts/Openings";
import $ from 'jquery';
import "./Maincontents.css";
import mylogo from "./imgs/mylogo.png"; 
import download from "./imgs/download.png"

class Maincontents extends React.Component{
  componentDidMount()
  {

    setTimeout(function()
    {
      $(".showcase").css({"width":"70%","box-shadow":"0 0 30px 30px rgba(185, 180, 255,0.5)"})
    },1000);
    setTimeout(function()
    {
      $(".showcase_text").animate({"opacity":"1"});
    },1500);

    $(window).resize(function()
    {
      if(window.innerWidth < 766)
      {
        let showcaseW = $(".showcase").width();
        $(".showcase").css({"height":showcaseW});
      }
      else
      {
        $('.showcase').css({"height":"300px"});
      }
    });
  }
  render()
  {
    return(
        <section className="contents">
          <Circle />
          <Circles />
          <div className="showcase">
            <div className='showcase_img_box'>
              <span className='showcase_circle'></span>
              <img src={mylogo}></img>
            </div>
            <div className='showcase_text'>
              <span>
                안녕하세요
              </span>
              <span>
                더 높은 곳을 꿈꾸는 웹퍼블리셔
              </span>
              <span>
                이상윤 입니다.
              </span>
              <span>
                방문해주셔서 감사합니다.
              </span>
              <ul className='showcase_navi'>
                <li>
                  <Link to = "/Oldlsy/Lsyintro">소개</Link>
                </li>
                <li>
                  <Link to = "/Oldlsy/Lsyportfolio">포트폴리오</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
    );
  }
}

export default Maincontents;