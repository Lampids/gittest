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
                  <img src={myimg} alt="??? ?????????">
                  </img>
                </span>
                <div className='my_word'>
                  <span>
                    <p>????????? ????????? ????????? ??????</p>
                  </span>
                  <span>
                    <p>????????? ????????? ????????????</p>
                  </span>
                </div>
              </div>
              <ul className='site_component'>
                <h2>
                  ????????? ????????????
                </h2>
                <li>
                  <span className='list_head'>
                    ????????? ????????????
                  </span>
                  <ul className='program_detail'>
                    <li>
                      <img src={html} alt="???????????? ?????????"></img>
                    </li>
                    <li>
                      <img src={css} alt="???????????? ?????????"></img>
                    </li>
                    <li>
                      <img src={jq} alt="???????????? ?????????"></img>
                    </li>
                    <li>
                      <img src={ps} alt="???????????? ?????????"></img>
                    </li>
                    <li>
                      <img src={react} alt="???????????? ?????????"></img>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className='list_head'>
                    ????????? ?????? ??????
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
                    ????????? ??????
                  </span>
                  <ul className='program_detail'>
                    <li>
                      <img src={desktop} alt="?????????"></img>
                    </li>
                    <li>
                      <img src={phone} alt="?????????"></img>
                    </li>
                    <li>
                      <img src={tablet} alt="?????????"></img>
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
                    <Link to="/Lsyintrophotoarea">????????? ??? ?????? +</Link>
                  </span>
                  <li>
                    <img src={slideImg1} alt="?????????????????????"></img>
                  </li>
                  <li>
                    <img src={slideImg2} alt="?????????????????????"></img>
                  </li>
                  <li>
                    <img src={slideImg3} alt="?????????????????????"></img>
                  </li>
                  <li>
                    <img src={slideImg4} alt="?????????????????????"></img>
                  </li>
                  <li>
                    <img src={slideImg5} alt="?????????????????????"></img>
                  </li>
                  <li>
                    <img src={slideImg6} alt="?????????????????????"></img>
                  </li>
                  <li>
                    <img src={slideImg7} alt="?????????????????????"></img>
                  </li>
                  <li>
                    <img src={slideImg8} alt="?????????????????????"></img>
                  </li>
                  <li>
                    <img src={slideImg9} alt="?????????????????????"></img>
                  </li>
                  <li>
                    <img src={slideImg10} alt="?????????????????????"></img>
                  </li>
                </ul>
              </div>
              <ul className='ability_list'>
                <h2>
                  ?????? ??? ??????
                </h2>
                <li>
                  ????????????????????? ????????? ?????? ??????
                </li>
                <li>
                  SBS ????????? ???????????? UI/UX ??????????????? ???????????? ??????
                </li>
                <li>
                  ???????????? ????????? ????????????
                </li>
                <li>
                  (???)?????? - ?????????(???????????????)
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
