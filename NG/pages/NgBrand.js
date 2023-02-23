import React from 'react';
import $ from 'jquery';
import NgBrandSt from "./NgBrand.module.css";
import Nglogo from "../img/NGlogo.png";
import magazineimg1 from "../img/magazine_img1.jpg";
import magazineimg2 from "../img/magazine_img2.jpg";
import magazineimg3 from "../img/magazine_img3.jpg";
import storeimg from "../img/Storeimg.jpg";
class NgHome extends React.Component{
  componentDidMount()
  {

  }
  render()
  {
    return (
      <>
        <div className={NgBrandSt.brand_section}>
          <section class={NgBrandSt.section1}>
          <iframe className={NgBrandSt.section_video} width="100%" height="100%" src="https://www.youtube.com/embed/7XhsuT0xctI?autoplay=1&playlist=7XhsuT0xctI&loop=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class={NgBrandSt.section1_inner}>
              <span className={NgBrandSt.section1_img}>
                <img src={Nglogo} alt="로고"></img>
              </span>
              <span class={NgBrandSt.main_topic}>
                <p>살아있는 모든 것</p>
                <p>우리는 그 이야기를 만듭니다.</p>
                <p>네셔널지오그래픽과 함께.</p>
              </span>
              <span class={NgBrandSt.sub_phrase}>
                <p>
                내셔널 지오그래픽에는 TV 채널, 잡지, 어린이 미디어, 여행 및 탐험, 서적, 지도, 소비자 제품, 지역 기반 엔터테인먼트 및 디지털 미디어 등이 포함됩니다. 전 세계 다양한 플랫폼을 통해 세계 최고의 과학자, 사진작가, 언론인, 제작자들의 놀라운 이야기를 전달하며 즐거움을 선사합니다.
                </p>
              </span>
            </div>
          </section>
          <section className={NgBrandSt.section2}>
            <div className={NgBrandSt.section2_inner}>
              <div className={NgBrandSt.section2_main_topic}>
                <span className={NgBrandSt.channel_logo}></span>
                <span className={NgBrandSt.channel_phrase}>
                내셔널 지오그래픽 채널은 1997년에 개국했으며 현재 전 세계 171개국에서 45개 언어로 방송되고 있다.
세밀한 과학적 분석과 엄격한 팩트 체크는 물론 뛰어난 영상미를 바탕으로 한 팩트 엔터테인먼트는 세계 최고 수준이다. 그것은 프로그램을 제작하고 방송해 왔고, 지금까지 에미상과 다른 국제 방송상에서 1,000개 이상의 상을 받았다.
                </span>
              </div>
              <div className={NgBrandSt.channel_area}>
                <span>

                </span>
              </div>
            </div>
          </section>
          <section className={NgBrandSt.section3}>
            <div className={NgBrandSt.section3_inner}>
              <div className={NgBrandSt.section3_main_topic}>
                <span className={NgBrandSt.magazine_logo}></span>
                <span className={NgBrandSt.magazine_phrase}>
                내셔널 지오그래픽 매거진은 현재 전 세계 28개국에서 매달 23개 언어로 동시 발행되고 있다. 1888년 내셔널지오그래픽협회의 지리학 저널로 창간된 이곳은 현재 세계의 지리는 물론 과학, 모험, 탐험, 자연, 인류, 문화, 역사, 고고학, 생태, 환경, 우주 등 다양한 분야에서 활동하고 있다.
다양한 분야를 심층적으로 다루는 세계 최고의 종합 문화지로 인정받고 있다. 특히 단순한 기록을 넘어 예술적으로 높은 평가를 받고 있는 내셔널 지오그래픽의 사진들이 눈길을 끈다.
                </span>
              </div>
              <ul className={NgBrandSt.magazine_area}>
                <li>
                  <img src={magazineimg1} alt="메거진이미지"></img>
                </li>
                <li>
                  <img src={magazineimg2} alt="메거진이미지"></img>
                </li>
                <li>
                  <img src={magazineimg3} alt="메거진이미지"></img>
                </li>
              </ul>
            </div>
          </section>
          <section className={NgBrandSt.section4}>
            <div className={NgBrandSt.section4_inner}>
              <div className={NgBrandSt.section4_main_topic}>
                <span className={NgBrandSt.apparel_logo}></span>
                <span className={NgBrandSt.apparel_phrase}>
                내셔널 지오그래픽 어패럴은 이 순간에도 지구와 인류에 대한 끊임없는 모험과 탐험을 계속하고 있다.
그것은 그들의 업적에 기반을 두고 있다. 의류, 여행용 캐리어, 백팩, 캠핑, 등산용품 등 700여개 제품을 통해 도시와 자연을 넘나드는 특별한 여정, 일상과 모험을 공유합니다.
                </span>
              </div>
              <div className={NgBrandSt.apparel_area}>
                
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default NgHome;