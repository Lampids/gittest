import React from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import mainSt from "./main.module.css";
import slideImg1 from "../img/slideImg1.jpg";
import slideImg2 from "../img/slideImg2.jpg";
import slideImg3 from "../img/slideImg3.jpg";
import slideImg4 from "../img/slideImg4.jpg";
import saleproduct1 from "../img/sale_product1.jpg";
import saleproduct2 from "../img/sale_product2.jpg";
import saleproduct3 from "../img/sale_product3.jpg";
import saleproduct4 from "../img/sale_product4.jpg";
import saleproduct5 from "../img/sale_product5.jpg";
import saleproduct6 from "../img/sale_product6.jpg";
import saleproduct7 from "../img/sale_product7.jpg";
import saleproduct8 from "../img/sale_product8.jpg";
import saleproduct9 from "../img/sale_product9.jpg";
import saleproduct10 from "../img/sale_product10.jpg";
import saleproduct11 from "../img/sale_product11.jpg";
import saleproduct12 from "../img/sale_product12.jpg";
import saleproduct13 from "../img/sale_product13.jpg";
import saleproduct14 from "../img/sale_product14.jpg";
import saleproduct15 from "../img/sale_product15.jpg";
import saleproduct16 from "../img/sale_product16.jpg";
import cate1 from "../img/category_openworld.jpg";
import adImg from "../img/genshin_ad.png";
import gameImg1 from "../img/game1.jpg";
import gameImg2 from "../img/game2.jpg";
import gameImg3 from "../img/game3.jpg";
import gameImg4 from "../img/game4.jpg";
import gameImg5 from "../img/game5.jpg";
import gameImg6 from "../img/game6.jpg";
import gameImg7 from "../img/game7.jpg";
import gameImg8 from "../img/game8.jpg";
import gameImg9 from "../img/game9.jpg";
import gameImg10 from "../img/game10.jpg";
import gameImg11 from "../img/game11.jpg";
import gameImg12 from "../img/game12.jpg";
import gameImg13 from "../img/game13.jpg";
import gameImg14 from "../img/game14.jpg";
import gameImg15 from "../img/game15.jpg";
class Main extends React.Component{
  componentDidMount()
  {
    let main_select = $('.'+mainSt.slide_select_list).children('li');
    let mainslide_index =0;
    let mainslide_list = $('.'+mainSt.slide_list).children('li');
    mainslide_list.hide().eq(0).show();
    let mainslide_auto = setInterval(slideA,6000);
    function slideA()
    {
      if(mainslide_index===3)
      {
        mainslide_list.fadeOut().eq(0).fadeIn(700);
        mainslide_index=0;
      }
      else
      {
        mainslide_list.fadeOut().eq(mainslide_index+1).fadeIn(700);
        main_select.css({"background-color":"#fff"}).eq(mainslide_index+1).css({"background-color":"aqua"});
        mainslide_index++;
      }
    }
    main_select.on('click',function()
    {
      clearInterval(mainslide_auto);
      mainslide_index = $(this).index();
      mainslide_list.fadeOut().eq(mainslide_index).fadeIn(700);
      main_select.css({"background-color":"#fff"}).eq(mainslide_index).css({"background-color":"aqua"});
    });

    let sale_slide = $('.'+mainSt.sale_list);
    let slidewidth = $('.'+mainSt.sale_list).children('li').width();
    let slide_select = $('.'+mainSt.sale_select_list).children('li');
    let slide_select_index =0;
    slide_select.on("click",function()
    {
      slide_select_index = $(this).index();
      if(slide_select_index==0)
      {
        sale_slide.animate({"left":"0px"});
      }
      else
      {
        sale_slide.animate({"left":-slidewidth*slide_select_index+1});
      }
    });
    $(window).on("resize",function()
    {
      let pagewidth = $(window).width(); 
      if(pagewidth < 1400)
      {
        sale_slide.css({"left":"0px"});
      }
    });
  }
  render()
  {
    return(
      <>
      <div className={mainSt.main_section}>
        <section className={mainSt.main_slide_area}>
          <div className={mainSt.search_box}>
            <span className={mainSt.game_search}>
              <button className={mainSt.search_btn}>

              </button>
              <input type="text" placeholder='검색'>
              </input>
            </span>
            <ul className={mainSt.search_list}>
              <li>
                내 상점
              </li>
              <li>
                신규 및 특집
              </li>
              <li>
                카테고리
              </li>
              <li>
                새 소식
              </li>
            </ul>
          </div>
          <ul className={mainSt.slide_list}>
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
          </ul>
          <div className={mainSt.slide_select_box}>
            <ul className={mainSt.slide_select_list}>
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
        </section>
        <section className={mainSt.special_product}>
          <div className={mainSt.product_sale}>
            <span className={mainSt.area_name}>
              특별세일 및 추천
            </span>
            <div className={mainSt.sale_list_box}>
              <ul className={mainSt.sale_list}>
                <li>
                  <ul className={mainSt.sale_list_detail}>
                    <li>
                      <img src={saleproduct1} alt="세일상품이미지"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -50%
                        </span>
                        <span className={mainSt.product_name}>
                          몬스터 헌터 월드
                        </span>
                      </div>
                    </li>
                    <li>
                      <img src={saleproduct2} alt="세일상품이미지"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -80%
                        </span>
                        <span className={mainSt.product_name}>
                          크라이시스 3
                        </span>
                      </div>
                    </li>
                    <li>
                      <img src={saleproduct3} alt="세일상품이미지"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -25%
                        </span>
                        <span className={mainSt.product_name}>
                          다크소울3
                        </span>
                      </div>
                    </li>
                    <li>
                      <img src={saleproduct4} alt="세일상품이미지"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -75%
                        </span>
                        <span className={mainSt.product_name}>
                          바이오쇼크 시리즈
                        </span>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className={mainSt.sale_list_detail}>
                    <li>
                      <img src={saleproduct5} alt="세일상품이미지"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -50%
                        </span>
                        <span className={mainSt.product_name}>
                          소닉 프론티어
                        </span>
                      </div>
                    </li>
                    <li>
                      <img src={saleproduct6} alt="세일상품이미지"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -66%
                        </span>
                        <span className={mainSt.product_name}>
                          시티즈 스카이라인
                        </span>
                      </div>
                    </li>
                    <li>
                      <img src={saleproduct7} alt="세일상품이미지"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -50%
                        </span>
                        <span className={mainSt.product_name}>
                          리틀 나이트메어2
                        </span>
                      </div>
                    </li>
                    <li>
                      <img src={saleproduct8} alt="세일상품이미지"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -75%
                        </span>
                        <span className={mainSt.product_name}>
                          나루티밋스톰 4
                        </span>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className={mainSt.sale_list_detail}>
                    <li>
                      <img src={saleproduct9} alt="세일상품이미지"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -70%
                        </span>
                        <span className={mainSt.product_name}>
                          컴퍼니 오브 히어로즈 2
                        </span>
                      </div>
                    </li>
                    <li>
                      <img src={saleproduct10} alt="세일상품이미지"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -70%
                        </span>
                        <span className={mainSt.product_name}>
                          배틀필드 1
                        </span>
                      </div>
                    </li>
                    <li>
                      <img src={saleproduct11} alt="세일상품이미지"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -70%
                        </span>
                        <span className={mainSt.product_name}>
                          암네시아 : 리버스
                        </span>
                      </div>
                    </li>
                    <li>
                      <img src={saleproduct12} alt="세일상품이미지"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -90%
                        </span>
                        <span className={mainSt.product_name}>
                          둠
                        </span>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className={mainSt.sale_list_detail}>
                    <li>
                      <img src={saleproduct13} alt="세일상품이미지"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -75%
                        </span>
                        <span className={mainSt.product_name}>
                          폴아웃 4
                        </span>
                      </div>
                    </li>
                    <li>
                      <img src={saleproduct14} alt="세일상품이미지"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -55%
                        </span>
                        <span className={mainSt.product_name}>
                          메트로 2033
                        </span>
                      </div>
                    </li>
                    <li>
                      <img src={saleproduct15} alt="세일상품이미지"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -40%
                        </span>
                        <span className={mainSt.product_name}>
                          바이오하자드 7
                        </span>
                      </div>
                    </li>
                    <li>
                      <img src={saleproduct16} alt="세일상품이미지"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          FREE
                        </span>
                        <span className={mainSt.product_name}>
                          화이트데이 : 학교라는 이름의 미궁
                        </span>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <ul className={mainSt.sale_select_list}>
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
        </section>
        <section className={mainSt.category_area}>
          <span className={mainSt.area_name}>
            장르 카테고리
          </span>
          <div className={mainSt.category_list_box}>
            <ul className={mainSt.category_list}>
              <li>
                오픈월드
              </li>
              <li>
                RPG
              </li>
              <li>
                FPS
              </li>
              <li>
                RTS
              </li>
              <li>
                어드벤처
              </li>
              <li>
                시뮬레이션
              </li>
              <li>
                전략 시뮬레이션
              </li>
              <li>
                액션
              </li>
              <li>
                대전격투
              </li>
              <li>
                런앤건
              </li>
              <li>
                잠입
              </li>
              <li>
                헌팅
              </li>
              <li>
                ARPG
              </li>
              <li>
                슈팅
              </li>
              <li>
                탄막
              </li>
              <li>
                생존
              </li>
              <li>
                비주얼 노벨
              </li>
              <li>
                시뮬레이션
              </li>
              <li>
                추리
              </li>
              <li>
                미궁
              </li>
              <li>
                공포
              </li>
              <li>
                레이싱
              </li>
              <li>
                비행
              </li>
              <li>
                AOS
              </li>
              <li>
                건설 경영
              </li>
              <li>
                육성
              </li>
              <li>
                샌드박스
              </li>
              <li>
                ORPG
              </li>
              <li>
                MORPG
              </li>
              <li>
                MMORPG
              </li>
              <li>
                음악
              </li>
              <li>
                힐링
              </li>
            </ul>
          </div>
        </section>
        <div className={mainSt.free_game}>
          <Link to ="/Genshin">
            <img src={adImg} alt="광고이미지"></img>
          </Link>
        </div>
        <section className={mainSt.popular_area}>
          <ul className={mainSt.popular_list}>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg1} alt="게임이미지"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>PUBG: 배틀그라운드</p>
                  <p>윈도우</p>
                  <p>생존,슈팅,멀티플레이,배틀로얄</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  무료
                </span>
              </div>
            </li>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg2} alt="게임이미지"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>프로젝트 좀보이드</p>
                  <p>윈도우,맥</p>
                  <p>생존,좀비,오픈월드,생존 전략</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  ₩ 20,500
                </span>
              </div>
            </li>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg3} alt="게임이미지"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>철권 7</p>
                  <p>윈도우,맥</p>
                  <p>생존,좀비,오픈월드,생존 전략</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  ₩ 43,800
                </span>
              </div>
            </li>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg4} alt="게임이미지"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>그랜드 체이스</p>
                  <p>윈도우</p>
                  <p>액션RPG,캐주얼,PVE,PVP</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  무료
                </span>
              </div>
            </li>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg5} alt="게임이미지"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>다잉라이트 2 : 스테이 휴먼</p>
                  <p>윈도우,맥</p>
                  <p>생존,좀비,오픈월드</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  ₩ 51,800
                </span>
              </div>
            </li>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg6} alt="게임이미지"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>데이즈 곤</p>
                  <p>윈도우</p>
                  <p>생존,좀비,오픈월드,생존 전략</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  ₩ 13,200
                </span>
              </div>
            </li>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg7} alt="게임이미지"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>레디 오아 낫</p>
                  <p>윈도우,맥</p>
                  <p>FPS,전략,현실,멀티플레이</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  ₩ 39,000
                </span>
              </div>
            </li>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg8} alt="게임이미지"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>프로스트 펑크</p>
                  <p>윈도우,맥</p>
                  <p>생존,도시건설,포스트아포칼립스</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  ₩ 31,000
                </span>
              </div>
            </li>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg9} alt="게임이미지"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>팀 포트리스 2</p>
                  <p>윈도우,맥</p>
                  <p>FPS,협동,PVP,멀티플레이</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  무료
                </span>
              </div>
            </li>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg10} alt="게임이미지"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>라이즈 오브 툼 레이더</p>
                  <p>윈도우</p>
                  <p>어드벤처,생존,전략,RPG</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  ₩ 21,800
                </span>
              </div>
            </li>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg11} alt="게임이미지"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>코드베인</p>
                  <p>윈도우</p>
                  <p>소울라이크,애니메,액션RPG</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  ₩ 64,100
                </span>
              </div>
            </li>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg12} alt="게임이미지"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>사이버펑크 2077</p>
                  <p>윈도우</p>
                  <p>오픈월드,RPG,싱글플레이</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  ₩ 44,000
                </span>
              </div>
            </li>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg13} alt="게임이미지"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>엘더스크롤 5 : 스카이림 스페셜 에디션</p>
                  <p>윈도우</p>
                  <p>오픈월드,RPG,싱글플레이</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  ₩ 30,700
                </span>
              </div>
            </li>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg14} alt="게임이미지"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>레드 데드 리뎀션 2</p>
                  <p>윈도우</p>
                  <p>오픈월드,액션,스토리,서부</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  ₩ 66,700
                </span>
              </div>
            </li>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg15} alt="게임이미지"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>세븐 데이즈 투 다이</p>
                  <p>윈도우</p>
                  <p>좀비,생존,오픈월드,멀티플레이</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  ₩ 26,700
                </span>
              </div>
            </li>
          </ul>
          <button className={mainSt.more_game}>게임 더 보기</button>
        </section>
      </div>
      </>
    );
  }
}

export default Main;