import React from 'react';
import { Routes , Route } from "react-router-dom";
import $ from 'jquery';
import MainsectionSt from "./Mainsection.module.css";
import titleImg from "../imgs/mainpage_text.png";
import homeImg from "../imgs/home_icon_c.png";
import logoImg from "../imgs/my_logo.png";
import thumbnailImgs1 from "../imgs/thumbnailImg1.jpg";
import thumbnailImgs2 from "../imgs/thumbnailImg2.jpg";
import thumbnailImgs3 from "../imgs/thumbnailImg3.jpg";
import thumbnailImgs4 from "../imgs/thumbnailImg4.jpg";

class Mainsection extends React.Component{
  componentDidMount()
  {
    let windowSize = $(window.innerWidth);
    let section_title = $("."+MainsectionSt.section_title);
    let intro_text = $("."+MainsectionSt.intro_box).children("span");
    let logoimg = $('.'+MainsectionSt.logo_box).children("img");
    let logoBg = $('.'+MainsectionSt.logo_box).children("span");
    let thumbImg = $("."+MainsectionSt.thumbnail_list).children("li");
    setTimeout(function()
    {
      section_title.animate({"top":"0px"});
    });
    $(window).resize(function()
    {
      $(window.innerWidth > 767)
      {
        setTimeout(function()
        {
          intro_text.eq(0).children("p").animate({"left":"0px"},1000);
          intro_text.eq(1).children("p").animate({"left":"0px"},1100);
          intro_text.eq(2).children("p").animate({"left":"0px"},1200);
        });
      }
    });
    setTimeout(function()
    {
      intro_text.eq(0).children("p").animate({"left":"0px"},1000);
      intro_text.eq(1).children("p").animate({"left":"0px"},1100);
      intro_text.eq(2).children("p").animate({"left":"0px"},1200);
      logoimg.delay(1000).fadeIn(300);
      logoBg.delay(1100).animate({"left":"0px"});
      thumbImg.eq(0).delay(1000).animate({"opacity":"1"},500);
      thumbImg.eq(1).delay(1100).animate({"opacity":"1"},500);
      thumbImg.eq(2).delay(1200).animate({"opacity":"1"},500);
      thumbImg.eq(3).delay(1300).animate({"opacity":"1"},500);
    },500);
  }
  render()
  {
    return(
      <>
      <section className={MainsectionSt.main_section}>
        <span className={MainsectionSt.section_title}>
          <img src={homeImg} alt="타이틀 아이콘"></img>
          <img src={titleImg} alt="타이틀"></img>
        </span>
        <div className={MainsectionSt.main_intro_area}>
          <div className={MainsectionSt.intro_box}>
            <span>
              <p>방문해 주셔서 감사합니다.</p>
            </span>
            <span>
              <p>더 높은 곳을 꿈꾸는 웹퍼블리셔</p>
            </span>
            <span>
              <p>이상윤 입니다.</p>
            </span>
            <div className={MainsectionSt.logo_box}>
              <img src={logoImg} alt="로고이미지"></img>
              <span></span>
            </div>
          </div>
          <div className={MainsectionSt.thumbnail_imgs}>
            <ul className={MainsectionSt.thumbnail_list}>
              <li>
                <img src={thumbnailImgs1} alt="썸넬이미지"></img>
              </li>
              <li>
                <img src={thumbnailImgs2} alt="썸넬이미지"></img>
              </li>
              <li>
                <img src={thumbnailImgs3} alt="썸넬이미지"></img>
              </li>
              <li>
                <img src={thumbnailImgs4} alt="썸넬이미지"></img>
              </li>

            </ul>
          </div>
        </div>
      </section>
      </>
    );
  }
}

export default Mainsection;