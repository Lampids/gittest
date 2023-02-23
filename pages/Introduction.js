import React from 'react';
import { Link } from "react-router-dom";  
import $ from 'jquery';
import './Introduction.css';
import myimg from "../imgs/myimg.png";
import html from "../imgs/html.png"
import css from "../imgs/css.png"
import jq from "../imgs/jq.png"
import ps from "../imgs/ps.png"
import react from "../imgs/react.png"
import desktop from "../imgs/desktop.png"
import tablet from "../imgs/tablet.png"
import phone from "../imgs/phone.png"
import slideImg1 from "../imgs/intro_slide1.jpg";
import slideImg2 from "../imgs/intro_slide2.jpg";
import slideImg3 from "../imgs/intro_slide3.jpg";
import slideImg4 from "../imgs/intro_slide5.jpg";
import slideImg5 from "../imgs/intro_slide5.jpg";
import slideImg6 from "../imgs/intro_slide6.jpg";
import slideImg7 from "../imgs/intro_slide7.jpg";
import slideImg8 from "../imgs/intro_slide8.jpg";
import slideImg9 from "../imgs/intro_slide9.jpg";
import slideImg10 from "../imgs/intro_slide10.jpg";
class Introduction extends React.Component{
  componentDidMount()
  {
    setTimeout(function()
    {
      $(".intro_box").css({"height":"720px"});
    });
    setTimeout(function()
    {
      $(".intro_box_inner").animate({"opacity":"1"});
    },800);
    let slideindex =0;
    let slidelist = $(".slide_list").children("li");
    let slide_left = $(".slide_show").children(".slide_left");
    let slide_right = $(".slide_show").children(".slide_right");
    slidelist.hide().eq(0).show();
    let auto_slide = setInterval(slide,5000);
    function slide()
    {
      if(slideindex===9)
      {
        slidelist.fadeOut().eq(0).fadeIn(300);
        slideindex =0;
      }
      else
      {
        slidelist.fadeOut().eq(slideindex+1).fadeIn(600);
        slideindex++;
      }
    }
    slide_left.on("click",function()
    {
      clearInterval(auto_slide);
      slideindex--;
      slidelist.fadeOut().eq(slideindex).fadeIn(300);
      if(slideindex < 0)
      {
        slideindex=9;
        slidelist.fadeOut().eq(slideindex).fadeIn(300);
      }
    });
    slide_right.on("click",function()
    {
      clearInterval(auto_slide);
      slideindex++;
      slidelist.fadeOut().eq(slideindex).fadeIn(300);
      if(slideindex > 9)
      {
        slideindex=0;
        slidelist.fadeOut().eq(slideindex).fadeIn(300);
      }
    });
  }
  render()
  {
    return(
      <section className="intro_section">
        <div className='intro_box'>
          <div className='intro_box_inner'>
            <div className='intro_column'>
              <div className='photo_box'>
                <span className="photo_img">
                  <img src={myimg} alt="내 이미지">
                  </img>
                </span>
                <div className='my_word'>
                  <span>
                    <p>언제나 최선과 발전을 위해</p>
                  </span>
                  <span>
                    <p>처음의 다짐이 현결같이</p>
                  </span>
                </div>
              </div>
              <ul className='site_component'>
                <h2>
                  사이트 구성요소
                </h2>
                <li>
                  <span className='list_head'>
                    사용한 프로그램
                  </span>
                  <ul className='program_detail'>
                    <li>
                      <img src={html} alt="프로그램 이미지"></img>
                    </li>
                    <li>
                      <img src={css} alt="프로그램 이미지"></img>
                    </li>
                    <li>
                      <img src={jq} alt="프로그램 이미지"></img>
                    </li>
                    <li>
                      <img src={ps} alt="프로그램 이미지"></img>
                    </li>
                    <li>
                      <img src={react} alt="프로그램 이미지"></img>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className='list_head'>
                    사용한 주요 색상
                  </span>
                  <ul className='color_detail'>
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                  </ul>
                </li>
                <li>
                  <span className='list_head'>
                    사이트 유형
                  </span>
                  <ul className='program_detail'>
                    <li>
                      <img src={desktop} alt="아이콘"></img>
                    </li>
                    <li>
                      <img src={phone} alt="아이콘"></img>
                    </li>
                    <li>
                      <img src={tablet} alt="아이콘"></img>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className='ability_column'>
              <div className="slide_show">
                <button className="slide_left"></button>
                <button className="slide_right"></button>
                <ul className='slide_list'>
                  <span className='photo_more'>
                    <Link to="/Lsyintrophotoarea">이미지 더 보기 +</Link>
                  </span>
                  <li>
                    <img src={slideImg1} alt="슬라이드이미지"></img>
                  </li>
                  <li>
                    <img src={slideImg2} alt="슬라이드이미지"></img>
                  </li>
                  <li>
                    <img src={slideImg3} alt="슬라이드이미지"></img>
                  </li>
                  <li>
                    <img src={slideImg4} alt="슬라이드이미지"></img>
                  </li>
                  <li>
                    <img src={slideImg5} alt="슬라이드이미지"></img>
                  </li>
                  <li>
                    <img src={slideImg6} alt="슬라이드이미지"></img>
                  </li>
                  <li>
                    <img src={slideImg7} alt="슬라이드이미지"></img>
                  </li>
                  <li>
                    <img src={slideImg8} alt="슬라이드이미지"></img>
                  </li>
                  <li>
                    <img src={slideImg9} alt="슬라이드이미지"></img>
                  </li>
                  <li>
                    <img src={slideImg10} alt="슬라이드이미지"></img>
                  </li>
                </ul>
              </div>
              <ul className='ability_list'>
                <h2>
                  경험 및 이력
                </h2>
                <li>
                  계명문화대학교 컴퓨터 학부 졸업
                </li>
                <li>
                  SBS 컴퓨터 아카데미 UI/UX 웹퍼블리셔 양성과정 수료
                </li>
                <li>
                  웹디자인 기능사 자격취득
                </li>
                <li>
                  (주)키키 - 개발부(웹퍼블리싱)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Introduction;
