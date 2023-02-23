import React from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import IntroSt from "./Intropage.module.css";
import titleImg_port from "../imgs/intro_text.png";
import PortImg from "../imgs/intro_icon_c.png";
import myImg from "../imgs/myimg.jpg";
import HTMLimg from "../imgs/HTML.png";
import CSSimg from "../imgs/CSS.png";
import JQSimg from "../imgs/JQ.png";
import PSimg from "../imgs/PS.png";
import REACTimg from "../imgs/REACT.png";
import JAVAimg from "../imgs/javascript.png";

class Intropage extends React.Component{
  componentDidMount()
  {
    let section_title = $("."+IntroSt.section_title);
    let my_info = $("."+IntroSt.my_info);
    let ability_list_box = $("."+IntroSt.ability_list_box);
    let my_info_box = $("."+IntroSt.my_img_box);
    let my_img_anime = $('.'+IntroSt.my_info_animate);
    let intro_area = $('.'+IntroSt.intro_area);

    let ability_list = $("."+IntroSt.ability_list).children("li");
    let ability_list_li = $('.'+IntroSt.ability_list);
    let htmlbar = $('.'+IntroSt.html_bar);
    let cssbar = $('.'+IntroSt.css_bar);
    let jqbar = $('.'+IntroSt.jq_bar);
    let phbar = $('.'+IntroSt.ph_bar);
    let reactbar = $('.'+IntroSt.react_bar);
    let javabar = $('.'+IntroSt.java_bar);

    setTimeout(function()
    {
      section_title.animate({"top":"0px"});
      my_info.animate({"opacity":"1"});
      ability_list_box.delay(200).animate({"opacity":"1"});
      ability_list.eq(0).delay(500).fadeIn(300);
      htmlbar.delay(500).animate({"right":"0"},1000);
      ability_list.eq(1).delay(600).fadeIn(300);
      cssbar.delay(600).animate({"right":"0"},1000);
      ability_list.eq(2).delay(700).fadeIn(300);
      jqbar.delay(700).animate({"right":"0"},1000);
      ability_list.eq(3).delay(800).fadeIn(300);
      phbar.delay(800).animate({"right":"0"},1000);
      ability_list.eq(4).delay(900).fadeIn(300);
      reactbar.delay(900).animate({"right":"0"},1000);
      ability_list.eq(5).delay(1000).fadeIn(300);
      javabar.delay(1000).animate({"right":"0"},1000);
    });
  }
  render()
  {
    return(
      <>
      <section className={IntroSt.intro_section}>
        <span className={IntroSt.section_title}>
          <img src={PortImg} alt="타이틀 아이콘"></img>
          <img src={titleImg_port} alt="타이틀"></img>
        </span>
        <div className={IntroSt.intro_area}>
          <div className={IntroSt.my_info}>
            <div className={IntroSt.my_img_box}>
              <span className={IntroSt.my_info_animate} />
              <div className={IntroSt.my_img}>
                <img src={myImg} alt="내 이미지"></img>
                <span>
                  <p>언제나 배우는 자세로</p>
                  <p>시련이 닥쳐도 항상 이기는 자세로</p>
                  <p>이상윤 입니다.</p>
                </span>
              </div>
            </div>
            <div className={IntroSt.exper_box}>
              <span>개인이력</span>
              <ul className={IntroSt.exper_list}>
                <li>
                  <p>2016.03 ~ 2021.02</p>
                  <p>계명문화대학교 컴퓨터학부 졸업</p>
                </li>
                <li>
                  <p>2021.01 ~ 2021.07</p>
                  <p>UIUX 웹퍼블리셔 양성 과정이수</p>
                </li>
                <li>
                  <p>웹디자인 기능사 자격 취득</p>
                </li>
              </ul>
              <span>연락처</span>
              <ul className={IntroSt.exper_list}>
                <li>
                  <p>tkddbs2009@naver.com</p>
                </li>
                <li>
                  <p>010-2882-5473</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={IntroSt.ability_list_box}>
            <span>
              사용할 수 있는 프로그램 및 툴
            </span>
            <ul className={IntroSt.ability_list}>
              <li>
                <div className={IntroSt.ability_img}>
                  <img src={HTMLimg} alt="툴 이미지"></img>
                </div>
                <div className={IntroSt.ability_info}>
                  <span>
                    HTML을 이용하여 웹페이지를 마크업 할 수 있습니다.
                  </span>
                  <span className={IntroSt.ability_bar}>
                    <div className={IntroSt.html_bar}>숙련도 80%</div>
                  </span>
                </div>
              </li>
              <li>
                <div className={IntroSt.ability_img}>
                  <img src={CSSimg} alt="툴 이미지"></img>
                </div>
                <div className={IntroSt.ability_info}>
                  <span>
                    CSS를 이용하여 웹페이지의 디자인이 가능합니다.
                  </span>
                  <span className={IntroSt.ability_bar}>
                    <div className={IntroSt.css_bar}>숙련도 80%</div>
                  </span>
                </div>
              </li>
              <li>
                <div className={IntroSt.ability_img}>
                  <img src={JQSimg} alt="툴 이미지"></img>
                </div>
                <div className={IntroSt.ability_info}>
                  <span>
                    애니메이션,기능등의 동작을 가능하게 할 수 있습니다.
                  </span>
                  <span className={IntroSt.ability_bar}>
                    <div className={IntroSt.jq_bar}>숙련도 70%</div>
                  </span>
                </div>
              </li>
              <li>
                <div className={IntroSt.ability_img}>
                  <img src={PSimg} alt="툴 이미지"></img>
                </div>
                <div className={IntroSt.ability_info}>
                  <span>
                    웹페이지 디자인,로고등을 만들 수 있습니다.
                  </span>
                  <span className={IntroSt.ability_bar}>
                    <div className={IntroSt.ph_bar}>숙련도 65%</div>
                  </span>
                </div>
              </li>
              <li>
                <div className={IntroSt.ability_img}>
                  <img src={REACTimg} alt="툴 이미지"></img>
                </div>
                <div className={IntroSt.ability_info}>
                  <span>
                    리액트를 이용한 웹개발을 할 수 있습니다.
                  </span>
                  <span className={IntroSt.ability_bar}>
                    <div className={IntroSt.react_bar}>숙련도 40%</div>
                  </span>
                </div>
              </li>
              <li>
                <div className={IntroSt.ability_img}>
                  <img src={JAVAimg} alt="툴 이미지"></img>
                </div>
                <div className={IntroSt.ability_info}>
                  <span>
                    기본적인 자바스크립트언어를 사용할 수 있습니다.
                  </span>
                  <span className={IntroSt.ability_bar}>
                    <div className={IntroSt.java_bar}>숙련도 55%</div>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      </>
    );
  }
}

export default Intropage;