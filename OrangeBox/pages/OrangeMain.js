import React from 'react';
import { Routes, Route,Link } from "react-router-dom";
import { useState } from 'react';
import $ from 'jquery';
import OrangeMainSt from "./OrangeMain.module.css";
import small_star from "../img/small_star.png";
import movieImg1 from "../img/movieImg1.jpg";
import movieImg2 from "../img/movieImg2.jpg";
import movieImg3 from "../img/movieImg3.jpg";
import movieImg4 from "../img/movieImg4.jpg";
import thumbnail1 from "../img/thumbnail1.jpg";
import thumbnail2 from "../img/thumbnail2.jpg";
import thumbnail3 from "../img/thumbnail3.jpg";
import thumbnail4 from "../img/thumbnail4.jpg";
import thumbnail5 from "../img/thumbnail5.jpg";
import thumbnail6 from "../img/thumbnail6.jpg";
import thumbnail7 from "../img/thumbnail7.jpg";
import thumbnail8 from "../img/thumbnail8.jpg";
import thumbnail9 from "../img/thumbnail9.jpg";
import thumbnail10 from "../img/thumbnail10.jpg";
import thumbnail11 from "../img/thumbnail11.jpg";
import thumbnail12 from "../img/thumbnail12.jpg";
import scheduledImg1 from "../img/scheduled_img1.jpg";
import scheduledImg2 from "../img/scheduled_img2.jpg";
import scheduledImg3 from "../img/scheduled_img3.jpg";
import scheduledImg4 from "../img/scheduled_img4.jpg";
import scheduledImg5 from "../img/scheduled_img5.jpg";
import scheduledImg6 from "../img/scheduled_img6.jpg";
import midiconImg1 from "../img/sale-icon.png";
import midiconImg2 from "../img/point-icon.png";
import midiconImg3 from "../img/membar-icon.png";
import midiconImg4 from "../img/rocation.png";
import bottomadImg from "../img/genshin_ad.png";
class OrangeMain extends React.Component {

  componentDidMount() {
    let slide_index = 0;
    let slide_list = $('.' + OrangeMainSt.main_movie_slide).children('li')
    let slide_select = $('.' + OrangeMainSt.main_movie_select).children('li');
    let auto_slide = setInterval(slide, 7000);
    function slide() {
      if (slide_index === 3) {
        slide_select.css({ "background-color": "rgba(212, 212, 212, 0.5)" }).eq(0).css({ "background-color": "rgba(255, 255, 255)" });
        slide_list.fadeOut().eq(0).fadeIn(300);
        slide_index = 0;
      }
      else {
        slide_select.css({ "background-color": "rgba(212, 212, 212, 0.5)" }).eq(slide_index + 1).css({ "background-color": "rgba(255, 255, 255)" });
        slide_list.fadeOut().eq(slide_index + 1).fadeIn(600);
        slide_index++;
      }
    }

    /*썸네일 슬라이드 구현*/
    let thumbnail_wrapper = $('.'+OrangeMainSt.popular_list_inner),
        thumbnail_slide =  thumbnail_wrapper.find("ul"),
        currentIdx =0,
        pop_left_btn = $('.'+OrangeMainSt.pop_left_btn),
        pop_right_btn  = $('.'+OrangeMainSt.pop_right_btn);
        thumbnail_slide.each(function(idx)
        {
          $(this).css({"left":idx*100+"%" });
        });

        pop_right_btn.on("click",function()
        {
          currentIdx++;
          if(currentIdx>0 && currentIdx<3)
          {
            thumbnail_slide.animate({"left":"-=100%"},400);
            console.log(currentIdx);
            thumbnail_slide.eq(currentIdx-1).animate({"opacity":"0.5"},200);
            pop_left_btn.show();
          }
          if(currentIdx==2)
          {
            pop_right_btn.hide();
          }
        });
        pop_left_btn.on("click",function()
        {
          if(currentIdx>0 && currentIdx<3)
          {
            currentIdx--;
            thumbnail_slide.animate({"left":"+=100%"},400);
            console.log(currentIdx);
            thumbnail_slide.eq(currentIdx).animate({"opacity":"1"},200);
            pop_right_btn.show();
          }
          if(currentIdx==0)
          {
            pop_left_btn.hide();
          }
        });
        /*썸네일 슬라이드 구현*/

        /*썸네일 호버 */
        let thumbnail_slide_li = thumbnail_slide.find("li");
        thumbnail_slide_li.hover(function()
        {
          let tsl_idx = $(this).index();
          thumbnail_slide.eq(currentIdx).find("li").eq(tsl_idx).find("a").fadeIn(300);
          thumbnail_slide.eq(currentIdx).find("li").eq(tsl_idx).find("img").css({"opacity":"0.7"});
        },
        function()
        {
          thumbnail_slide_li.find("a").hide();
          thumbnail_slide_li.find("img").css({"opacity":"1"});
        });
  }
  render() {
    return (
      <>
        <div className={OrangeMainSt.orange_main}>
          <section className={OrangeMainSt.main_movie}>
            <ul className={OrangeMainSt.main_movie_slide}>
              <li>
                <img src={movieImg1} alt="무비 이미지1"></img>
              </li>
              <li>
                <img src={movieImg2} alt="무비 이미지2"></img>
              </li>
              <li>
                <img src={movieImg3} alt="무비 이미지3"></img>
              </li>
              <li>
                <img src={movieImg4} alt="무비 이미지4"></img>
              </li>
            </ul>
            <ul className={OrangeMainSt.main_movie_select}>
              <li />
              <li />
              <li />
              <li />
            </ul>
          </section>
          <section className={OrangeMainSt.popular_movie}>
            <div className={OrangeMainSt.popular_list}>
              <button className={OrangeMainSt.pop_left_btn}></button>
              <div className={OrangeMainSt.popular_list_inner}>
                <ul className={OrangeMainSt.popular_list_thumbnail}>
                  <li>
                    <img src={thumbnail1} alt="썸네일 이미지"></img>
                    <span className={OrangeMainSt.pop_movie_name}>
                      조커
                    </span>
                    <span className={OrangeMainSt.pop_movie_info}>
                      <p>예매율:80%</p>
                      <p>
                        <img src={small_star} alt="별 이미지"></img>
                        8.5
                      </p>
                    </span>
                    <Link to="#">
                      영화정보/예매하기
                    </Link>
                  </li>
                  <li>
                    <img src={thumbnail2} alt="썸네일 이미지"></img>
                    <span className={OrangeMainSt.pop_movie_name}>
                      데스 스트랜딩 : 라스트 포터
                    </span>
                    <span className={OrangeMainSt.pop_movie_info}>
                      <p>예매율:72%</p>
                      <p>
                        <img src={small_star} alt="별 이미지"></img>
                        7.1
                      </p>
                    </span>
                    <Link to="#">
                      영화정보/예매하기
                    </Link>
                  </li>
                  <li>
                    <img src={thumbnail3} alt="썸네일 이미지"></img>
                    <span className={OrangeMainSt.pop_movie_name}>
                      터미네이터2 : 심판의 날
                    </span>
                    <span className={OrangeMainSt.pop_movie_info}>
                      <p>예매율:63%</p>
                      <p>
                        <img src={small_star} alt="별 이미지"></img>
                        7.3
                      </p>
                    </span>
                    <Link to="#">
                      영화정보/예매하기
                    </Link>
                  </li>
                  <li>
                    <img src={thumbnail4} alt="썸네일 이미지"></img>
                    <span className={OrangeMainSt.pop_movie_name}>
                      인터스텔라
                    </span>
                    <span className={OrangeMainSt.pop_movie_info}>
                      <p>예매율:42%</p>
                      <p>
                        <img src={small_star} alt="별 이미지"></img>
                        5.5
                      </p>
                    </span>
                    <Link to="#">
                      영화정보/예매하기
                    </Link>
                  </li>
                </ul>
                <ul className={OrangeMainSt.popular_list_thumbnail}>
                  <li>
                    <img src={thumbnail5} alt="썸네일 이미지"></img>
                    <span className={OrangeMainSt.pop_movie_name}>
                      원피스 : 필름레드
                    </span>
                    <span className={OrangeMainSt.pop_movie_info}>
                      <p>예매율:62%</p>
                      <p>
                        <img src={small_star} alt="별 이미지"></img>
                        7.6
                      </p>
                    </span>
                    <Link to="#">
                      영화정보/예매하기
                    </Link>
                  </li>
                  <li>
                    <img src={thumbnail6} alt="썸네일 이미지"></img>
                    <span className={OrangeMainSt.pop_movie_name}>
                      위플래쉬
                    </span>
                    <span className={OrangeMainSt.pop_movie_info}>
                      <p>예매율:72%</p>
                      <p>
                        <img src={small_star} alt="별 이미지"></img>
                        7.1
                      </p>
                    </span>
                    <Link to="#">
                      영화정보/예매하기
                    </Link>
                  </li>
                  <li>
                    <img src={thumbnail7} alt="썸네일 이미지"></img>
                    <span className={OrangeMainSt.pop_movie_name}>
                      매드맥스 : 분노의 도로
                    </span>
                    <span className={OrangeMainSt.pop_movie_info}>
                      <p>예매율:91%</p>
                      <p>
                        <img src={small_star} alt="별 이미지"></img>
                        9.1
                      </p>
                    </span>
                    <Link to="#">
                      영화정보/예매하기
                    </Link>
                  </li>
                  <li>
                    <img src={thumbnail8} alt="썸네일 이미지"></img>
                    <span className={OrangeMainSt.pop_movie_name}>
                      007 : 카지노로얄
                    </span>
                    <span className={OrangeMainSt.pop_movie_info}>
                      <p>예매율:75%</p>
                      <p>
                        <img src={small_star} alt="별 이미지"></img>
                        6.8
                      </p>
                    </span>
                    <Link to="#">
                      영화정보/예매하기
                    </Link>
                  </li>
                </ul>
                <ul className={OrangeMainSt.popular_list_thumbnail}>
                  <li>
                    <img src={thumbnail9} alt="썸네일 이미지"></img>
                    <span className={OrangeMainSt.pop_movie_name}>
                      모가디슈
                    </span>
                    <span className={OrangeMainSt.pop_movie_info}>
                      <p>예매율:65%</p>
                      <p>
                        <img src={small_star} alt="별 이미지"></img>
                        6.5
                      </p>
                    </span>
                    <Link to="#">
                      영화정보/예매하기
                    </Link>
                  </li>
                  <li>
                    <img src={thumbnail10} alt="썸네일 이미지"></img>
                    <span className={OrangeMainSt.pop_movie_name}>
                      조작된 도시
                    </span>
                    <span className={OrangeMainSt.pop_movie_info}>
                      <p>예매율:72%</p>
                      <p>
                        <img src={small_star} alt="별 이미지"></img>
                        7.1
                      </p>
                    </span>
                    <Link to="#">
                      영화정보/예매하기
                    </Link>
                  </li>
                  <li>
                    <img src={thumbnail11} alt="썸네일 이미지"></img>
                    <span className={OrangeMainSt.pop_movie_name}>
                      용과 주근깨 공주
                    </span>
                    <span className={OrangeMainSt.pop_movie_info}>
                      <p>예매율:63%</p>
                      <p>
                        <img src={small_star} alt="별 이미지"></img>
                        7.3
                      </p>
                    </span>
                    <Link to="#">
                      영화정보/예매하기
                    </Link>
                  </li>
                  <li>
                    <img src={thumbnail12} alt="썸네일 이미지"></img>
                    <span className={OrangeMainSt.pop_movie_name}>
                      라라랜드
                    </span>
                    <span className={OrangeMainSt.pop_movie_info}>
                      <p>예매율:95%</p>
                      <p>
                        <img src={small_star} alt="별 이미지"></img>
                        9.5
                      </p>
                    </span>
                    <Link to="#">
                      영화정보/예매하기
                    </Link>
                  </li>
                </ul>
              </div>
              <button className={OrangeMainSt.pop_right_btn}></button>
            </div>
          </section>
          <section className={OrangeMainSt.scheduled_wrap}>
            <span className={OrangeMainSt.scheduled_title}>
              극장 상영예정작
            </span>
            <ul className={OrangeMainSt.scheduled_list}>
              <li>
                <img src={scheduledImg1} alt="예정작 이미지"></img>
                <div className={OrangeMainSt.scheduled_info_box}>
                  <span className={OrangeMainSt.scheduled_movie_title}>
                    <p>더 위쳐 : 왕들의 암살자</p>
                    <p>The Witcher : Assassins of Kings</p>
                  </span>
                  <ul className={OrangeMainSt.scheduled_info_list}>
                    <li>
                      <p>기대평점 : </p>
                      <img src={small_star} alt="평점별"></img>
                      <p>4.2</p>
                    </li>
                    <li>
                      개요 : 중세,판타지
                    </li>
                    <li>
                      감독 : 안제이 사프콥스키
                    </li>
                    <li>
                      출연 : 헨리 카빌,안야 차토르라,프레이아 앨런
                    </li>
                    <li>
                      개봉일 : 2023.05.12
                    </li>
                  </ul>
                  <ul className={OrangeMainSt.preview_menu}>
                    <li>
                      예매하기
                    </li>
                    <li>
                      예고편
                    </li>
                    <li>
                      포토보기
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <img src={scheduledImg2} alt="예정작 이미지"></img>
                <div className={OrangeMainSt.scheduled_info_box}>
                  <span className={OrangeMainSt.scheduled_movie_title}>
                    <p>신의 한 수 : 귀곡사편</p>
                    <p>The Divine Move : bent four in the corner</p>
                  </span>
                  <ul className={OrangeMainSt.scheduled_info_list}>
                    <li>
                      <p>기대평점 : </p>
                      <img src={small_star} alt="평점별"></img>
                      <p>4.8</p>
                    </li>
                    <li>
                      개요 : 범죄,액션,스릴러
                    </li>
                    <li>
                      감독 : 조범구
                    </li>
                    <li>
                      출연 : 정우성,권상우,김희원,김인권
                    </li>
                    <li>
                      개봉일 : 2023.08.11
                    </li>
                  </ul>
                  <ul className={OrangeMainSt.preview_menu}>
                    <li>
                      예매하기
                    </li>
                    <li>
                      예고편
                    </li>
                    <li>
                      포토보기
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <img src={scheduledImg3} alt="예정작 이미지"></img>
                <div className={OrangeMainSt.scheduled_info_box}>
                  <span className={OrangeMainSt.scheduled_movie_title}>
                    <p>노아</p>
                    <p>NOAH</p>
                  </span>
                  <ul className={OrangeMainSt.scheduled_info_list}>
                    <li>
                      <p>기대평점 : </p>
                      <img src={small_star} alt="평점별"></img>
                      <p>4.0</p>
                    </li>
                    <li>
                      개요 : 판타지,재난,드라마
                    </li>
                    <li>
                      감독 : 대런 에러노프스키
                    </li>
                    <li>
                      출연 : 러셀 크로우,제니퍼 코넬리,엠마 왓슨
                    </li>
                    <li>
                      개봉일 : 미정
                    </li>
                  </ul>
                  <ul className={OrangeMainSt.preview_menu}>
                    <li>
                      예매하기
                    </li>
                    <li>
                      예고편
                    </li>
                    <li>
                      포토보기
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <img src={scheduledImg4} alt="예정작 이미지"></img>
                <div className={OrangeMainSt.scheduled_info_box}>
                  <span className={OrangeMainSt.scheduled_movie_title}>
                    <p>마크맨</p>
                    <p>The marksman</p>
                  </span>
                  <ul className={OrangeMainSt.scheduled_info_list}>
                    <li>
                      <p>기대평점 : </p>
                      <img src={small_star} alt="평점별"></img>
                      <p>3.6</p>
                    </li>
                    <li>
                      개요 : 액션
                    </li>
                    <li>
                      감독 : 로버트 로렌즈
                    </li>
                    <li>
                      출연 : 리암 니슨,제이콥 페레즈,캐서린 원닉
                    </li>
                    <li>
                      개봉일 : 미정
                    </li>
                  </ul>
                  <ul className={OrangeMainSt.preview_menu}>
                    <li>
                      예매하기
                    </li>
                    <li>
                      예고편
                    </li>
                    <li>
                      포토보기
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <img src={scheduledImg5} alt="예정작 이미지"></img>
                <div className={OrangeMainSt.scheduled_info_box}>
                  <span className={OrangeMainSt.scheduled_movie_title}>
                    <p>어나더 라운드</p>
                    <p>Another Round</p>
                  </span>
                  <ul className={OrangeMainSt.scheduled_info_list}>
                    <li>
                      <p>기대평점 : </p>
                      <img src={small_star} alt="평점별"></img>
                      <p>4.5</p>
                    </li>
                    <li>
                      개요 : 코미디,드라마
                    </li>
                    <li>
                      감독 : 토마스 빈터베르
                    </li>
                    <li>
                      출연 : 매즈 미켈슨,토마스 보 라센,마그누스 밀링
                    </li>
                    <li>
                      개봉일 : 미정
                    </li>
                  </ul>
                  <ul className={OrangeMainSt.preview_menu}>
                    <li>
                      예매하기
                    </li>
                    <li>
                      예고편
                    </li>
                    <li>
                      포토보기
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <img src={scheduledImg6} alt="예정작 이미지"></img>
                <div className={OrangeMainSt.scheduled_info_box}>
                  <span className={OrangeMainSt.scheduled_movie_title}>
                    <p>백악관 최후의 날</p>
                    <p>Olympus has Fallen</p>
                  </span>
                  <ul className={OrangeMainSt.scheduled_info_list}>
                    <li>
                      <p>기대평점 : </p>
                      <img src={small_star} alt="평점별"></img>
                      <p>4.3</p>
                    </li>
                    <li>
                      개요 : 액션,스릴러
                    </li>
                    <li>
                      감독 : 앤드완 퓨콰
                    </li>
                    <li>
                      출연 : 제라드 버틀러,아론 에크하트,모건 프리먼
                    </li>
                    <li>
                      개봉일 : 미정
                    </li>
                  </ul>
                  <ul className={OrangeMainSt.preview_menu}>
                    <li>
                      예매하기
                    </li>
                    <li>
                      예고편
                    </li>
                    <li>
                      포토보기
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <button className={OrangeMainSt.scheduled_more_btn}>
              + 상영예정작 더 보기
            </button>
          </section>
          <div className={OrangeMainSt.net_movie_ad} />
          <section className={OrangeMainSt.mid_menu_wrap}>
            <ul className={OrangeMainSt.mid_menu_list}>
              <li>
                <img src={midiconImg1} alt="메뉴 아이콘"></img>
                <span>할인안내</span>
              </li>
              <li>
                <img src={midiconImg2} alt="메뉴 아이콘"></img>
                <span>포인트적립</span>
              </li>
              <li>
                <img src={midiconImg3} alt="메뉴 아이콘"></img>
                <span>맴버십 가입</span>
              </li>
              <li>
                <img src={midiconImg4} alt="메뉴 아이콘"></img>
                <span>지점안내</span>
              </li>
              <li>
                <img src={midiconImg4} alt="메뉴 아이콘"></img>
                <span>지점안내</span>
              </li>
              <li>
                <img src={midiconImg4} alt="메뉴 아이콘"></img>
                <span>지점안내</span>
              </li>
            </ul>
          </section>
          <section className={OrangeMainSt.notice_warp}>
            <span className={OrangeMainSt.notice_title}>
              <p>공지사항</p>
              <p>+더보기</p>
            </span>
            <ul className={OrangeMainSt.notice_list}>
              <li>
                <span>영화관람권 가격 변동 안내</span>
                <span>2023-02-24</span>
              </li>
              <li>
                <span>오렌지박스 영구VIP 서비스 등록 안내</span>
                <span>2023-02-20</span>
              </li>
              <li>
                <span>오렌지박스 개인정보처리방침 개정 안내</span>
                <span>2023-02-12</span>
              </li>
              <li>
                <span>시스템 장애 복구 안내</span>
                <span>2023-02-10</span>
              </li>
            </ul>
          </section>
          <section className={OrangeMainSt.bottom_ad}>
            <div className={OrangeMainSt.bottom_ad_in}>
              <img src={bottomadImg} alt="밑 광고 이미지"></img>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default OrangeMain;