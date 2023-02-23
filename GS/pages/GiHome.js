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
                <img src={slideImg1} alt="슬라이드 이미지"></img>
              </li>
              <li>
                <img src={slideImg2} alt="슬라이드 이미지"></img>
              </li>
              <li>
                <img src={slideImg3} alt="슬라이드 이미지"></img>
              </li>
              <li>
                <img src={slideImg4} alt="슬라이드 이미지"></img>
              </li>
              <li>
                <img src={slideImg5} alt="슬라이드 이미지"></img>
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
                  <img src={paimonImg} alt="페이몬"></img>
                </span>
                <span>
                  <p>게임이 실행되지 않나요?</p>
                  <p>여기서 도움을 드릴께요!</p>
                </span>
              </div>
              <div className={GiHomeSt.game_start_inner}>
                <button className={GiHomeSt.start_button}>
                GAME START
              </button>
              <button className={GiHomeSt.donwload}>
                클라이언트 다운로드
              </button>
              </div>
              <div className={GiHomeSt.login_inner}>
                <ul className={GiHomeSt.login_link}>
                  <li>
                    <Link to="/Genshin/main/login">호요버스 ID 로그인</Link>
                  </li>
                  <li>
                    <Link to="/Genshin/main/login">원신 ID 로그인</Link>
                  </li>
                </ul>
                <ul className={GiHomeSt.login_another}>
                  <li>
                    <Link to="#">
                      <img src={facebookImg} alt="페이스북 로그인 이미지"></img>
                    </Link>
                  </li>
                  <li>
                    <Link to ="#">
                      <img src={epicgamesImg} alt="에픽게임즈 로그인 이미지"></img>
                    </Link>
                  </li>
                  <li>

                  </li>
                  <span>다른 계정 로그인</span>
                </ul>
              </div>
            </div>
          </section>
          <section className={GiHomeSt.info_area}>
            <div className={GiHomeSt.info_area_inner}>
              <div className={GiHomeSt.notice_box}>
                <span>공지사항</span>
                <ul className={GiHomeSt.notice_list}>
                  <li>
                    <span>『무상의 교향시』이벤트 Tip - 회선곡.수풀이 우거진 울타리</span>
                    <span>2022.11.30</span>
                  </li>
                  <li>
                    <span>플랫폼 가격 정책 조정 관련 공지</span>
                    <span>2022.11.25</span>
                  </li>
                  <li>
                    <span>첫 충전 2배 보너스 초기화 안내</span>
                    <span>2022.10.28</span>
                  </li>
                  <li>
                    <span>NEW 콘텐츠 크리에이터 모집</span>
                    <span>2022.10.11</span>
                  </li>
                  <li>
                    <span>원신 운영정책 2.2 안내</span>
                    <span>2022.10.01</span>
                  </li>
                  <li>
                    <span>3.2버전 발견한 오류 & 업데이트 공자</span>
                    <span>2022.09.20</span>
                  </li>
                </ul>
              </div>
              <div className={GiHomeSt.guide_box}>
                <span>
                  <img src={guildImg} alt="가이드 이미지"></img>
                  <p>원소 반응 가이드</p>
                </span>
                <span>
                  <img src={guildImg2} alt="가이드 이미지"></img>
                  <p>원신 200% 즐기는 방법!</p>
                </span>
              </div>
            </div>
          </section>
          <section className={GiHomeSt.news_area}>
            <span className={GiHomeSt.news_title}>
              새 소식
            </span>
            <div className={GiHomeSt.news_box}>
              <ul className={GiHomeSt.news_slide}>
                <li>
                  <img src={mslideImg1} alt="뉴스 슬라이드 이미지"></img>
                </li>
                <li>
                  <img src={mslideImg2} alt="뉴스 슬라이드 이미지"></img>
                </li>
                <li>
                  <img src={mslideImg3} alt="뉴스 슬라이드 이미지"></img>
                </li>
                <li>
                  <img src={mslideImg4} alt="뉴스 슬라이드 이미지"></img>
                </li>
                <li>
                  <img src={mslideImg5} alt="뉴스 슬라이드 이미지"></img>
                </li>
              </ul>
              <div className={GiHomeSt.news_list_box}>
                <span>
                  최신
                </span>
                <ul className={GiHomeSt.news_list}>
                  <li>
                    <span>
                      신규 콘텐츠 예고 「일곱 성인의 소환」함정카드 발동!
                    </span>
                    <span>
                      2022.12.01
                    </span>
                  </li>
                  <li>
                    <span>
                      3.3버전 PV:「투명한 여섯 감각,무로 돌아간 만상」
                    </span>
                    <span>
                      2022.11.30
                    </span>
                  </li>
                  <li>
                    <span>
                    원신 - 미식 탐방 여행「리월 요리:황금 새우볼」
                    </span>
                    <span>
                      2022.11.15
                    </span>
                  </li>
                  <li>
                    <span>
                    원신 - 데인여담 「레일라: 깊이 잠든 은하수」
                    </span>
                    <span>
                      2022.11.01
                    </span>
                  </li>
                  <li>
                    <span>
                    「고대 국가의 수호자」유적 드레이크 출현!
                    </span>
                    <span>
                      2022.10.28
                    </span>
                  </li>
                </ul>
                <span>
                  +더보기
                </span>
              </div>
            </div>
          </section>
          <section className={GiHomeSt.archive_area}>
            <span className={GiHomeSt.archive_title}>
              원신 아카이브
            </span>
            <ul className={GiHomeSt.board_list}>
              <li>
                <img src={boradImg1} alt="게시판 이미지"></img>
                <span>자유 게시판</span>
              </li>
              <li>
                <img src={boradImg2} alt="게시판 이미지"></img>
                <span>토론장</span>
              </li>
              <li>
                <img src={boradImg3} alt="게시판 이미지"></img>
                <span>연월비경 게시판</span>
              </li>
            </ul>
          </section>
          <div className={GiHomeSt.to_hoyolab}>
            <span>
              <a href='https://www.hoyolab.com/circles'>
                <img src={hoyolabImg} alt="호요랩 이미지"></img>
              </a>
            </span>
          </div>
          <section className={GiHomeSt.family_site}>
            <ul className={GiHomeSt.family_site_list}>
              <li>
                <a href='#'>
                  <img src={femsiteImg1} alt="패밀리사이트1"></img>
                  <span>네이버카페</span>
                </a>
              </li>
              <li>
              <a href='#'>
                  <img src={femsiteImg2} alt="패밀리사이트1"></img>
                  <span>페이스북</span>
                </a>
              </li>
              <li>
              <a href='#'>
                  <img src={femsiteImg3} alt="패밀리사이트1"></img>
                  <span>트위터</span>
                </a>
              </li>
              <li>
              <a href='#'>
                  <img src={femsiteImg4} alt="패밀리사이트1"></img>
                  <span>유튜브</span>
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