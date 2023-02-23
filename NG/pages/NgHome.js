import React from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";
import NgHomeSt from "./NgHome.module.css";
import introImg1 from "../img/Sealife.jpg";
import introImg2 from "../img/OurSpace.jpg";
import introImg3 from "../img/history.jpg";
import introImg4 from "../img/oopths.jpg";
import newsimg1 from "../img/News1.jpg";
import newsimg2 from "../img/News2.jpg"; 
import newsimg3 from "../img/News3.jpg";
import newsimg4 from "../img/News4.jpg"; 
import NgLogo from "../img/NGlogo.png"; 
import magaImg1 from "../img/s_magazine1.jpg";
import magaImg2 from "../img/s_magazine2.jpg";
import magaImg3 from "../img/s_magazine3.jpg";
import magaImg4 from "../img/s_magazine4.jpg";
import magaImg5 from "../img/s_magazine5.jpg";

class NgHome extends React.Component{
  componentDidMount()
  {
    $('.'+NgHomeSt.intro_slide).children('li').fadeOut(300);
    $('.'+NgHomeSt.intro_slide).children('li').eq(0).fadeIn(300);
    let slide_item = $('.'+NgHomeSt.intro_slide).children('li');
    let slide_index=0;
    let auto_slide = setInterval(slide,7000);
    let main_slide_select = $("."+NgHomeSt.main_slide_select_box).children("li");
    function slide()
    {
      if(slide_index===3)
      {
        slide_item.fadeOut().eq(0).fadeIn(1200);
        slide_index=0;
        main_slide_select.css({"background-color":"#191919"}).eq(0).css({"background-color":"#ffd800"});
      }
      else
      {
        slide_item.fadeOut().eq(slide_index+1).fadeIn(1200);
        slide_index++;
        main_slide_select.css({"background-color":"#191919"}).eq(slide_index).css({"background-color":"#ffd800"});
      }
    }


    /*뉴스 슬라이드 부분*/
    let news_slide_item = $('.'+NgHomeSt.news_slide).children('li');
    let news_slide_list = $('.'+NgHomeSt.news_select).children('li');
    news_slide_item.fadeOut(300);
    news_slide_item.eq(0).fadeIn(300);
    let new_auto_slide = setInterval(news_slide,7000);
    let news_slide_index =0;
    function news_slide()
    {
      if(news_slide_index==3)
      {
        news_slide_item.fadeOut().eq(0).fadeIn(600);
        news_slide_index=0;
        news_slide_list.css({"background-color":"#191919"}).eq(0).css({"background-color":"#ffd800"});
      }
      else
      {
        news_slide_item.fadeOut().eq(news_slide_index+1).fadeIn(600);
        news_slide_index++;
        news_slide_list.css({"background-color":"#191919"}).eq(slide_index).css({"background-color":"#ffd800"});
      }
    }
    
    news_slide_list.on("click",function()
    {
      let news_slide_list_index = $(this).index();
      news_slide_item.fadeOut().eq(news_slide_list_index).fadeIn(300);
      news_slide_list.css({"background-color":"#191919"}).eq(news_slide_list_index).css({"box-shadow":"none","background-color":"#ffd800"});
    })
    /*뉴스 슬라이드 부분*/

  }
  render()
  {
    return (
      <>
        <div className={NgHomeSt.home_section}>
          <section className={NgHomeSt.intro_area}>
            <ul className={NgHomeSt.intro_slide}>
              <li>
                <img src={introImg1} alt="리스트이미지"></img>
                <div className={NgHomeSt.slide_title}>
                  <span>
                    SEA LIFE
                  </span>
                  <span>
                    바다 세계의 생명의 근원
                  </span>
                </div>
              </li>
              <li>
                <img src={introImg2} alt="리스트이미지"></img>
                <div className={NgHomeSt.slide_title}>
                  <span>
                    OUR SPACE
                  </span>
                  <span>
                    지구 밖 우리의 우주
                  </span>
                </div>
              </li>
              <li>
                <img src={introImg3} alt="리스트이미지"></img>
                <div className={NgHomeSt.slide_title}>
                  <span>
                    HISTORY MYSTERY
                  </span>
                  <span>
                    기원전 그 역사의 비밀을 풀다.
                  </span>
                </div>
              </li>
              <li>
                <img src={introImg4} alt="리스트이미지"></img>
                <div className={NgHomeSt.slide_title}>
                  <span>
                    OOPArt
                  </span>
                  <span>
                    초고대문명의 흔적을 찾아
                  </span>
                </div>
              </li>
            </ul>
            <ul className={NgHomeSt.main_slide_select_box}>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </section>
          <section className={NgHomeSt.news_area}>
            <div className={NgHomeSt.news_area_title}>
              <span>
                주요 기사
              </span>
              <span>
                <Link to="#">
                  + 더 많은 기사
                </Link>
              </span>
            </div>
            <ul className={NgHomeSt.news_slide}>
              <li className={NgHomeSt.news_summary}>
                <img src={newsimg1} alt="뉴스이미지"></img>
                <span className={NgHomeSt.news_head_title}>
                  <p>다가오는 가상세계</p>
                </span>
                <span className={NgHomeSt.news_category_title}>
                  <h2>TECHNOLOGY</h2>
                  <p>
                    가상을 뜻하는 ‘메타’와 세계를 의미하는 ‘유니버스’의 합성어인 메타버스는 현실을 디지털 세상으로 확장시키는 새로운 차원에 대한 이야기다. 가상세계 속에서 정치, 사회, 경제, 문화 활동을 하고 진짜 나를 대신해 아바타가 살아가는 세상이 바로 메타버스의 핵심이다. 이러한 메타버스 산업의 활성화를 위해서는 해결해야 할 과제가 산적해 있다. 우선 플랫폼적으로 메타버스가 구현될 시스템을 어떻게 갖추느냐이다. 
                  </p>
                </span>
              </li>
              <li className={NgHomeSt.news_summary}>
                <img src={newsimg2} alt="뉴스이미지"></img>
                <span className={NgHomeSt.news_head_title}>
                  <p>더 뛰어난 인공지능 인간을 넘어..</p>
                </span>
                <span className={NgHomeSt.news_category_title}>
                  <h2>TECHNOLOGY</h2>
                  <p>
                    MIT 불가능한 AI 연구소 연구원이자 MIT 전기공학 및 컴퓨터과학부 박사과정 에릭 첸(Eric Chen) 제1저자는 "새로운 문제에 대해 일관된 우수한 성능을 얻는 것은 매우 어려운 일입니다“라며, "극도로 어려운 문제를 해결하기 위해서는 호기심이 필요하지만 일부 문제에서는 성능이 저하될 수 있습니다.이에 우리는 탐사와 이용의 균형을 조정하는 부담을 없애는 알고리즘을 제안했습니다”라고 말했다. 
                  </p>
                </span>
              </li>
              <li className={NgHomeSt.news_summary}>
                <img src={newsimg3} alt="뉴스이미지"></img>
                <span className={NgHomeSt.news_head_title}>
                  <p>녹아내리는 만년설 병들어가는 지구</p>
                </span>
                <span className={NgHomeSt.news_category_title}>
                  <h2>NATURE</h2>
                  <p>
                    보고서는 위성으로 촬영한 빙하 이미지들을 분석한 내용을 담았다. 전 세계 약 1만 8600개의 빙하가 유엔 세계문화유산으로 지정된 곳에서 포착됐다. 이는 지구 빙하 면적의 약 10%를 차지한다. 보고서는 1만 8600개 중 약 3분의 1이 20년 안에 사라질 것이라 봤다. 
                  </p>
                </span>
              </li>
              <li className={NgHomeSt.news_summary}>
                <img src={newsimg4} alt="뉴스이미지"></img>
                <span className={NgHomeSt.news_head_title}>
                  <p>사건의 지평선 그 해답에 가까워지다</p>
                </span>
                <span className={NgHomeSt.news_category_title}>
                  <h2>SPACE</h2>
                  <p>
                  빅뱅이 시작된 후 우주가 팽창하며 우주 환경이 변화하면서 과거 우주와 현재 우주와의 밀도가 매우 달라질 수 있다. 이 때문에 우주 초기의 퀘이사들은 더 이상 활동이 활발하지 못하게 된다. 이것이 퀘이사가 먼 우주에서만 발견되는 이유이며, 이를 통해서 퀘이사들은 비교적 초창기 우주에서 탄생했음을 알 수 있다. 이 때문에 퀘이사는 과거를 보는 창으로 불리기도 한다.
                  </p>
                </span>
              </li>
            </ul>
            <ul className={NgHomeSt.news_select}>
              <li />
              <li />
              <li />
              <li />
            </ul>
          </section>
          <section className={NgHomeSt.magazine_area}>
            <div className={NgHomeSt.magazine_inner}>
            <span className={NgHomeSt.magazine_area_title}>
              단신 기사
            </span>
            <ul className={NgHomeSt.magazine_list}>
              <li>
                <div className={NgHomeSt.magazine_img }>
                  <img src={magaImg1} alt="매거진 이미지"></img>
                </div>
                <div className={NgHomeSt.magazine_text}>
                  <span>
                    야생으로 돌아간 샘의 이야기
                  </span>
                  <span>
                    <p>글 : 엘라 머스크</p>
                    <p>사진 : 미카 슈미트</p>
                  </span>
                </div>
              </li>
              <li>
                <div className={NgHomeSt.magazine_img }>
                  <img src={magaImg2} alt="매거진 이미지"></img>
                </div>
                <div className={NgHomeSt.magazine_text}>
                  <span>
                    한 발도 물러서지 않는 전쟁
                  </span>
                  <span>
                    <p>글 : 마크 노트</p>
                    <p>사진 : 노먼 리차드</p>
                  </span>
                </div>
              </li>
              <li>
                <div className={NgHomeSt.magazine_img }>
                  <img src={magaImg3} alt="매거진 이미지"></img>
                </div>
                <div className={NgHomeSt.magazine_text}>
                  <span>
                    가슴 속을 울리는 장관
                  </span>
                  <span>
                    <p>글 : 조지 바톤</p> 
                    <p>사진 : 벤자민 행콕</p>
                  </span>
                </div>
              </li>
              <li>
                <div className={NgHomeSt.magazine_img }>
                  <img src={magaImg4} alt="매거진 이미지"></img>
                </div>
                <div className={NgHomeSt.magazine_text}>
                  <span>
                    극한의 익사이팅, 끝없는 도전
                  </span>
                  <span>
                    <p>글 : 마가렛 켈리</p>
                    <p>사진 : 닉 이스턴</p>
                  </span>
                </div>
              </li>
              <li>
                <div className={NgHomeSt.magazine_img }>
                  <img src={magaImg5} alt="매거진 이미지"></img>
                </div>
                <div className={NgHomeSt.magazine_text}>
                  <span>
                    심해 생물의 비밀
                  </span>
                  <span>
                    <p>글 : 제이크 윈터</p>
                    <p>사진 : 루덴스 펜</p>
                  </span>
                </div>
              </li>
            </ul>
            </div>
          </section>
          <section className={NgHomeSt.store_door}>
            <div className={NgHomeSt.store_inner}>
              <img src={NgLogo} alt="로고"></img>
              <span>새 상품 입고
              </span>
              <button>
                <Link to="#">STORE</Link>
              </button>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default NgHome;