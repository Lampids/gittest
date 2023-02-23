import React from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import GiShowcaseSt from "./Gishowcase.module.css";
import Gilogo from "./img/Gensin_logo_old.png";
import navercafeImg from "./img/cafe.png";
import facebookImg from "./img/facebook.png";
import youtubeImg from "./img/youtube.png";
import appdownImg from "./img/to_app_down.jpg";
import playdownImg from "./img/to_play_down.jpg";
import slideBg1 from "./img/slidebg1.jpg";
import slideinfoImg1 from "./img/char-name.png";
import slideimg1 from "./img/char-img1.png";
import slideBg2 from "./img/slidebg2.jpg";
import slideinfoImg2 from "./img/event-name1.png";
import slideimg2 from "./img/char-img2.png";
import slideBg3 from "./img/slidebg3.jpg";
import slideimg3 from "./img/char-img3.png";
import slideBg4 from "./img/slidebg4.jpg";
import slideinfoImg4 from "./img/char-name2.png";
import slideimg4 from "./img/char-img4.png";

class Gishowcase extends React.Component{
  componentDidMount()
  {
    let slide_list = $('.'+GiShowcaseSt.slide_list).children('li');
    slide_list.hide();
    slide_list.eq(0).fadeIn(300);
    let showcase_list = $('.'+GiShowcaseSt.showcase_list).children('li');

    showcase_list.on("click",function()
    {
      let showcase_list_index =$(this).index();
      slide_list.fadeOut().eq(showcase_list_index).fadeIn(300);
    });
  }
  render()
  {
    return(
      <>
      <div className={GiShowcaseSt.showcase_section}>
        <section className={GiShowcaseSt.showcase_menu}>
          <div className={GiShowcaseSt.to_main}>
            <Link to="/Genshin/main">
              <img src={Gilogo} alt="원신로고"></img>
              <span>공식 사이트 바로가기</span>
            </Link>
          </div>
            <ul className={GiShowcaseSt.showcase_list}>
              <li>
                <span>
                  신규 캐릭터 출시
                </span>
                <span>
                  「정화의 하얀 풀」나히다
                </span>
              </li>
              <li>
                <span>
                  복귀 이벤트
                </span>
                <span>
                  「돌아오지 않는 꺼진 별」피슬.모나 확률 UP!
                </span>
              </li>
              <li>
                <span>
                  복귀 이벤트
                </span>
                <span>
                  「윈드블룸의 초대」그떄의 일을 다시!
                </span>
              </li>
              <li>
                <span>
                  신규 캐릭터 출시
                </span>
                <span>
                  「잎을 수호하는 반석」카미사토 아야토
                </span>
              </li>
            </ul>
            <ul className={GiShowcaseSt.sns_list}>
              <li>
                <Link>
                  <img src={navercafeImg} alt="sns링크이미지"></img>
                </Link>
              </li>
              <li>
                <Link>
                  <img src={facebookImg} alt="sns링크이미지"></img>
                </Link>
              </li>
              <li>
                <Link>
                  <img src={youtubeImg} alt="sns링크이미지"></img>
                </Link>
              </li>
            </ul>
            <div className={GiShowcaseSt.download}>
              <span>
                <img src={appdownImg} alt="다운로드이미지"></img>
              </span>
              <span>
                <img src={playdownImg}alt="다운로드이미지"></img>
              </span>
            </div>
        </section>
        <section className={GiShowcaseSt.slide_section}>
          <ul className={GiShowcaseSt.slide_list}>
            <li>
              <img src={slideBg1} alt="슬라이드 이미지"></img>
              <span className={GiShowcaseSt.slide_title}>
                신규 캐릭터 기원
              </span>
              <div className={GiShowcaseSt.slide_frame}>
                <div className={GiShowcaseSt.slide_info_box}>
                  <span>
                    <img src={slideinfoImg1} alt="슬라이드인포 이미지"></img>
                  </span>
                  <span>
                    <p>캐릭터 PV 보기</p>
                    <button className={GiShowcaseSt.video_button}>

                    </button>
                  </span>
                </div>
                <div className={GiShowcaseSt.slide_img_box}>
                  <img src={slideimg1} alt="슬라이드 디테일 이미지"></img>
                </div>
              </div>
            </li>
            <li>
              <img src={slideBg2} alt="슬라이드 이미지"></img>
              <span className={GiShowcaseSt.slide_title}>
                복귀 이벤트
              </span>
              <div className={GiShowcaseSt.slide_frame}>
                <div className={GiShowcaseSt.slide_info_box}>
                  <span>
                    <img src={slideinfoImg2} alt="슬라이드인포 이미지"></img>
                  </span>
                  <span>
                    <p>돌아오지 않은 꺼진 별 이벤트가 복각됩니다.</p>
                    <p>「모나」와 「피슬」의 픽업확률 UP!</p>
                    <p>자세한 내용은 링크를 통해 확인해보세요</p>
                  </span>
                </div>
                <div className={GiShowcaseSt.slide_img_box}>
                  <img src={slideimg2} alt="슬라이드 디테일 이미지"></img>
                </div>
              </div>
            </li>
            <li>
              <img src={slideBg3} alt="슬라이드 이미지"></img>
              <span className={GiShowcaseSt.slide_title}>
                복귀 이벤트
              </span>
              <div className={GiShowcaseSt.slide_frame}>
                <div className={GiShowcaseSt.slide_img_box_single}>
                  <img src={slideimg3} alt="슬라이드 디테일 이미지"></img>
                  <span>윈드블룸 축제에 다시 한번 여러분들을 초대합니다</span>
                  <span>이벤트 자세히</span>
                </div>
              </div>
            </li>
              <li>
              <img src={slideBg4} alt="슬라이드 이미지"></img>
              <span className={GiShowcaseSt.slide_title}>
                캐릭터 복귀 기원
              </span>
              <div className={GiShowcaseSt.slide_frame}>
                <div className={GiShowcaseSt.slide_info_box}>
                  <span>
                    <img src={slideinfoImg4} alt="슬라이드인포 이미지"></img>
                  </span>
                  <span>
                    <p>야시로 봉행 카미사토 가문의 한 가주</p>
                    <p>온화하고 예의 바르며</p>
                    <p>수완이 탁월하다</p>
                  </span>
                </div>
                <div className={GiShowcaseSt.slide_img_box}>
                  <img src={slideimg4} alt="슬라이드 디테일 이미지"></img>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
      </>
    );
  }
}

export default Gishowcase;