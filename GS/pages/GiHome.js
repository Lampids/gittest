import React from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import GiHomeSt from "./GiHome.module.css";
import slideImg1 from "../img/hoem_slide1.jpg";
import slideImg2 from "../img/hoem_slide2.jpg";
import slideImg3 from "../img/hoem_slide3.jpg";
import slideImg4 from "../img/hoem_slide4.jpg";
import slideImg5 from "../img/hoem_slide5.jpg";
import paimonImg from "../img/paismug.png";
import facebookImg from "../img/facebook_login.png";
import epicgamesImg from "../img/epicgames.png";
import guildImg from "../img/guide_img.jpg";
import guildImg2 from "../img/guide_img2.jpg";
import goldbarImg from "../img/gold_bar.png";
import mslideImg1 from "../img/home_mslide1.jpg";
import mslideImg2 from "../img/home_mslide2.jpg";
import mslideImg3 from "../img/home_mslide3.jpg";
import mslideImg4 from "../img/home_mslide4.jpg";
import mslideImg5 from "../img/home_mslide5.jpg";
import boradImg1 from "../img/board_free.jpg";
import boradImg2 from "../img/board_info.jpg";
import boradImg3 from "../img/board_talk.jpg";
import hoyolabImg from "../img/hoyolab_bg.jpg";
import femsiteImg1 from "../img/cafe.png";
import femsiteImg2 from "../img/facebook.png";
import femsiteImg3 from "../img/tw.png";
import femsiteImg4 from "../img/youtube.png";

class GiHome extends React.Component{
  componentDidMount()
  {
    let slide_index = 0;
    let slide_list = $('.'+GiHomeSt.slide_list).children('li');
    let slide_select = $('.'+GiHomeSt.slide_select_list).children('li');
    let news_list = $('.'+GiHomeSt.news_list).children('li');
    let news_slide = $('.'+GiHomeSt.news_slide).children('li'); 
    let bgout = {"background-color":"rgba(25, 25, 25,0.3)"};
    let bgin = {"background-color":"rgba(255,255,255"};
    slide_list.fadeOut(300).eq(0).fadeIn(300);
    slide_select.css(bgout).eq(0).css(bgin);
    let auto_slide = setInterval(slide,7000);
    function slide()
    {
      if(slide_index===4)
      {
        slide_list.fadeOut().eq(0).fadeIn(300);
        slide_select.css(bgout).eq(0).css(bgin);
        slide_index=0;
      }
      else
      {
        slide_list.fadeOut().eq(slide_index+1).fadeIn(600);
        slide_select.css(bgout).eq(slide_index+1).css(bgin);
        slide_index++;
      }
    }
    slide_select.on("click",function()
    {
      clearInterval(auto_slide);
      let select_index = $(this).index();
      slide_list.fadeOut().eq(select_index).fadeIn(300);
      slide_select.css(bgout).eq(select_index).css(bgin);
    });
    news_list.on("click",function()
    {
      let news_index = $(this).index();
      news_slide.fadeOut().eq(news_index).fadeIn(300);
    });
  }
  render()
  {
    return (
      <>
        <div className={GiHomeSt.home_section}>
          <section className={GiHomeSt.slide_area}>
            <ul className={GiHomeSt.slide_list}>
              <li>
                <img src={slideImg1} alt="???????????? ?????????"></img>
              </li>
              <li>
                <img src={slideImg2} alt="???????????? ?????????"></img>
              </li>
              <li>
                <img src={slideImg3} alt="???????????? ?????????"></img>
              </li>
              <li>
                <img src={slideImg4} alt="???????????? ?????????"></img>
              </li>
              <li>
                <img src={slideImg5} alt="???????????? ?????????"></img>
              </li>
            </ul>
            <div className={GiHomeSt.slide_select_box}>
              <ul className={GiHomeSt.slide_select_list}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </section>
          <section className={GiHomeSt.game_function}>
            <div className={GiHomeSt.game_start_box}>
              <div className={GiHomeSt.game_error}>
                <span>
                  <img src={paimonImg} alt="?????????"></img>
                </span>
                <span>
                  <p>????????? ???????????? ??????????</p>
                  <p>????????? ????????? ????????????!</p>
                </span>
              </div>
              <div className={GiHomeSt.game_start_inner}>
                <button className={GiHomeSt.start_button}>
                GAME START
              </button>
              <button className={GiHomeSt.donwload}>
                ??????????????? ????????????
              </button>
              </div>
              <div className={GiHomeSt.login_inner}>
                <ul className={GiHomeSt.login_link}>
                  <li>
                    <Link to="/Genshin/main/login">???????????? ID ?????????</Link>
                  </li>
                  <li>
                    <Link to="/Genshin/main/login">?????? ID ?????????</Link>
                  </li>
                </ul>
                <ul className={GiHomeSt.login_another}>
                  <li>
                    <Link to="#">
                      <img src={facebookImg} alt="???????????? ????????? ?????????"></img>
                    </Link>
                  </li>
                  <li>
                    <Link to ="#">
                      <img src={epicgamesImg} alt="??????????????? ????????? ?????????"></img>
                    </Link>
                  </li>
                  <li>

                  </li>
                  <span>?????? ?????? ?????????</span>
                </ul>
              </div>
            </div>
          </section>
          <section className={GiHomeSt.info_area}>
            <div className={GiHomeSt.info_area_inner}>
              <div className={GiHomeSt.notice_box}>
                <span>????????????</span>
                <ul className={GiHomeSt.notice_list}>
                  <li>
                    <span>???????????? ????????????????????? Tip - ?????????.????????? ????????? ?????????</span>
                    <span>2022.11.30</span>
                  </li>
                  <li>
                    <span>????????? ?????? ?????? ?????? ?????? ??????</span>
                    <span>2022.11.25</span>
                  </li>
                  <li>
                    <span>??? ?????? 2??? ????????? ????????? ??????</span>
                    <span>2022.10.28</span>
                  </li>
                  <li>
                    <span>NEW ????????? ??????????????? ??????</span>
                    <span>2022.10.11</span>
                  </li>
                  <li>
                    <span>?????? ???????????? 2.2 ??????</span>
                    <span>2022.10.01</span>
                  </li>
                  <li>
                    <span>3.2?????? ????????? ?????? & ???????????? ??????</span>
                    <span>2022.09.20</span>
                  </li>
                </ul>
              </div>
              <div className={GiHomeSt.guide_box}>
                <span>
                  <img src={guildImg} alt="????????? ?????????"></img>
                  <p>?????? ?????? ?????????</p>
                </span>
                <span>
                  <img src={guildImg2} alt="????????? ?????????"></img>
                  <p>?????? 200% ????????? ??????!</p>
                </span>
              </div>
            </div>
          </section>
          <section className={GiHomeSt.news_area}>
            <span className={GiHomeSt.news_title}>
              ??? ??????
            </span>
            <div className={GiHomeSt.news_box}>
              <ul className={GiHomeSt.news_slide}>
                <li>
                  <img src={mslideImg1} alt="?????? ???????????? ?????????"></img>
                </li>
                <li>
                  <img src={mslideImg2} alt="?????? ???????????? ?????????"></img>
                </li>
                <li>
                  <img src={mslideImg3} alt="?????? ???????????? ?????????"></img>
                </li>
                <li>
                  <img src={mslideImg4} alt="?????? ???????????? ?????????"></img>
                </li>
                <li>
                  <img src={mslideImg5} alt="?????? ???????????? ?????????"></img>
                </li>
              </ul>
              <div className={GiHomeSt.news_list_box}>
                <span>
                  ??????
                </span>
                <ul className={GiHomeSt.news_list}>
                  <li>
                    <span>
                      ?????? ????????? ?????? ????????? ????????? ????????????????????? ??????!
                    </span>
                    <span>
                      2022.12.01
                    </span>
                  </li>
                  <li>
                    <span>
                      3.3?????? PV:???????????? ?????? ??????,?????? ????????? ?????????
                    </span>
                    <span>
                      2022.11.30
                    </span>
                  </li>
                  <li>
                    <span>
                    ?????? - ?????? ?????? ??????????????? ??????:?????? ????????????
                    </span>
                    <span>
                      2022.11.15
                    </span>
                  </li>
                  <li>
                    <span>
                    ?????? - ???????????? ????????????: ?????? ?????? ????????????
                    </span>
                    <span>
                      2022.11.01
                    </span>
                  </li>
                  <li>
                    <span>
                    ????????? ????????? ?????????????????? ???????????? ??????!
                    </span>
                    <span>
                      2022.10.28
                    </span>
                  </li>
                </ul>
                <span>
                  +?????????
                </span>
              </div>
            </div>
          </section>
          <section className={GiHomeSt.archive_area}>
            <span className={GiHomeSt.archive_title}>
              ?????? ????????????
            </span>
            <ul className={GiHomeSt.board_list}>
              <li>
                <img src={boradImg1} alt="????????? ?????????"></img>
                <span>?????? ?????????</span>
              </li>
              <li>
                <img src={boradImg2} alt="????????? ?????????"></img>
                <span>?????????</span>
              </li>
              <li>
                <img src={boradImg3} alt="????????? ?????????"></img>
                <span>???????????? ?????????</span>
              </li>
            </ul>
          </section>
          <div className={GiHomeSt.to_hoyolab}>
            <span>
              <a href='https://www.hoyolab.com/circles'>
                <img src={hoyolabImg} alt="????????? ?????????"></img>
              </a>
            </span>
          </div>
          <section className={GiHomeSt.family_site}>
            <ul className={GiHomeSt.family_site_list}>
              <li>
                <a href='#'>
                  <img src={femsiteImg1} alt="??????????????????1"></img>
                  <span>???????????????</span>
                </a>
              </li>
              <li>
              <a href='#'>
                  <img src={femsiteImg2} alt="??????????????????1"></img>
                  <span>????????????</span>
                </a>
              </li>
              <li>
              <a href='#'>
                  <img src={femsiteImg3} alt="??????????????????1"></img>
                  <span>?????????</span>
                </a>
              </li>
              <li>
              <a href='#'>
                  <img src={femsiteImg4} alt="??????????????????1"></img>
                  <span>?????????</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </>
    );
  }
}

export default GiHome;