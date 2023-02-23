import React from 'react';
import $ from 'jquery';
import NgChannelSt from "./NgChannel.module.css";
import ChannelMainImg from "../img/Cheannl_logo_w.png"
import channel_bg1 from "../img/channel_bg1.jpg";
import channel_bg2 from "../img/channel_bg2.jpg";
import channel_bg3 from "../img/channel_bg3.jpg";
import channel_bg4 from "../img/channel_bg4.jpg";
import channel_bg5 from "../img/channel_bg5.jpg";
import introImg1 from "../img/Sealife.jpg";
import introImg2 from "../img/OurSpace.jpg";
import introImg3 from "../img/history.jpg";
import introImg4 from "../img/oopths.jpg";
import channelImg1 from "../img/channel_img1.jpg";
import channelImg2 from "../img/channel_img2.jpg";
import channelImg3 from "../img/channel_img3.jpg";
import channelImg4 from "../img/channel_img4.jpg";
import channelImg5 from "../img/channel_img5.jpg";
import channelImg6 from "../img/channel_img6.jpg";
import channelImg7 from "../img/channel_img7.jpg";
import channelImg8 from "../img/channel_img11.jpg";
class NgChannel extends React.Component{
  componentDidMount()
  {
    let channel_bg_list = $('.'+NgChannelSt.channel_bg).children("li");
    let channel_slide = setInterval(slide,7000);
    let channel_index = 0;
    function slide()
    {
      if(channel_index===4)
      {
        channel_bg_list.fadeOut().eq(0).fadeIn(1200);
        channel_index=0;
      }
      else
      {
        channel_bg_list.fadeOut().eq(channel_index+1).fadeIn(1200);
        channel_index++;
      }
    }

  }
  render()
  {
    return (
      <>
        <div className={NgChannelSt.channel_section}>
          <section className={NgChannelSt.channel_main}>
            <ul className={NgChannelSt.channel_bg}>
              <li>
                <img src={channel_bg1} alt="체널배경"></img>
              </li>
              <li>
                <img src={channel_bg2} alt="체널배경"></img>
              </li>
              <li>
                <img src={channel_bg3} alt="체널배경"></img>
              </li>
              <li>
                <img src={channel_bg4} alt="체널배경"></img>
              </li>
              <li>
                <img src={channel_bg5} alt="체널배경"></img>
              </li>
            </ul>
            <div className={NgChannelSt.channel_title_box}>
              <span className={NgChannelSt.title_img}></span>
              <span className={NgChannelSt.title_text}>
                네셔널지오그래픽에서 매주 제공하는 이야기를 제한없이 감상하세요
              </span>
              <button className={NgChannelSt.channel_subscribe}>
                2주 무료로 체험하기
              </button>
            </div>
          </section>
          <section className={NgChannelSt.section1}>
            <div className={NgChannelSt.section1_title}>
              <span>
                주간 인기 채널
              </span>
            </div>
            <div className={NgChannelSt.main_channel}>
              <div className={NgChannelSt.large_thumbnail}>
                <img src={introImg1} alt="큰 썸네일 이미지"></img>
                <span className={NgChannelSt.large_thumbnail_title}>
                 <h3>NARUTE</h3>
                 <h2>SEA LIFE</h2>
                 <p>바다의 세계 생명의 근원</p>
                </span>
              </div>
              <ul className={NgChannelSt.small_thumbnail_list}>
                <li>
                  <img src={introImg2} alt="작은 썸네일 이미지"></img>
                  <span className={NgChannelSt.small_thumbnail_title}>
                    <h3>SPACE</h3>
                    <h2>OUT EARTH</h2>
                    <p>먼 우주를 향해</p>
                  </span>
                </li>
                <li>
                  <img src={introImg3} alt="작은 썸네일 이미지"></img>
                  <span className={NgChannelSt.small_thumbnail_title}>
                    <h3>HISTORY</h3>
                    <h2>MYSTERY HISTORY</h2>
                    <p>기원전. 그 역사의 비밀을 풀다</p>
                  </span>
                </li>
                <li>
                  <img src={introImg4} alt="작은 썸네일 이미지"></img>
                  <span className={NgChannelSt.small_thumbnail_title}>
                    <h3>MYSTERY</h3>
                    <h2>OOPArt</h2>
                    <p>초고대문명의 흔적을 찾아</p>
                  </span>
                </li>
              </ul>
            </div>
          </section>
          <section className={NgChannelSt.section2}>
            <div className={NgChannelSt.channel_search_box}>
              <span className={NgChannelSt.channel_title}>
                채널 검색
              </span>
              <span className={NgChannelSt.channel_search}>
                <input className={NgChannelSt.channel_search_input}>
                </input>
                <button className={NgChannelSt.channel_search_button}>

                </button>
              </span>
            </div>
            <ul className={NgChannelSt.channel_list_area}>
              <li>
                <img src={channelImg1} alt="채널리스트 이미지"></img>
                <div className={NgChannelSt.channel_list_title}>
                  <span>HUMANITY</span>
                  <span>Money Flow</span>
                  <span>공급과 수요, 가격과 경쟁</span>
                </div>
              </li>
              <li>
                <img src={channelImg2} alt="채널리스트 이미지"></img>
                <div className={NgChannelSt.channel_list_title}>
                  <span>ANIMAL</span>
                  <span>Alpah</span>
                  <span>리더의 자격</span>
                </div>
              </li>
              <li>
                <img src={channelImg3} alt="채널리스트 이미지"></img>
                <div className={NgChannelSt.channel_list_title}>
                  <span>TECHNILOGY</span>
                  <span>Five by five</span>
                  <span>날아라 하늘 더 높이</span>
                </div>
              </li>
              <li>
                <img src={channelImg4} alt="채널리스트 이미지"></img>
                <div className={NgChannelSt.channel_list_title}>
                  <span>NATURE</span>
                  <span>Wind Howling</span>
                  <span>대자연의 울음소리</span>
                </div>
              </li>
              <li>
                <img src={channelImg5} alt="채널리스트 이미지"></img>
                <div className={NgChannelSt.channel_list_title}>
                  <span>SPACE</span>
                  <span>Mission Docking 2</span>
                  <span>우주로 가는 이야기 2</span>
                </div>
              </li>
              <li>
                <img src={channelImg6} alt="채널리스트 이미지"></img>
                <div className={NgChannelSt.channel_list_title}>
                  <span>MYSTERY</span>
                  <span>Real Alien</span>
                  <span>만약 외계인이 실존한다면..</span>
                </div>
              </li>
              <li>
                <img src={channelImg7} alt="채널리스트 이미지"></img>
                <div className={NgChannelSt.channel_list_title}>
                  <span>SPACE</span>
                  <span>Mission Docking 1</span>
                  <span>우주로 가는 이야기</span>
                </div>
              </li>
              <li>
                <img src={channelImg8} alt="채널리스트 이미지"></img>
                <div className={NgChannelSt.channel_list_title}>
                  <span>NATURE</span>
                  <span>Mountain king</span>
                  <span>끝없는 도전</span>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </>
    );
  }
}

export default NgChannel;