import React from 'react';
import $ from 'jquery';
import './Photoarea.css';
import photoimg1 from "../imgs/intro_slide1.jpg";
import photoimg2 from "../imgs/intro_slide2.jpg";
import photoimg3 from "../imgs/intro_slide3.jpg";
import photoimg4 from "../imgs/intro_slide4.jpg";
import photoimg5 from "../imgs/intro_slide5.jpg";
import photoimg6 from "../imgs/intro_slide6.jpg";
import photoimg7 from "../imgs/intro_slide7.jpg";
import photoimg8 from "../imgs/intro_slide8.jpg";
import photoimg9 from "../imgs/intro_slide9.jpg";
import photoimg10 from "../imgs/intro_slide10.jpg";
import photoimg11 from "../imgs/intro_slide11.jpg";
import photoimg12 from "../imgs/intro_slide12.jpg";
import photoimg13 from "../imgs/intro_slide13.jpg";
import photoimg14 from "../imgs/intro_slide14.jpg";
import photoimg15 from "../imgs/intro_slide15.jpg";
import photoimg16 from "../imgs/intro_slide16.jpg";
import photoimg17 from "../imgs/intro_slide17.jpg";
import photoimg18 from "../imgs/intro_slide18.jpg";
import photoimg19 from "../imgs/intro_slide19.jpg";
import photoimg20 from "../imgs/intro_slide20.jpg";


class Photoarea extends React.Component{
  componentDidMount()
  {
    let photo = $('.photo_list').children("li");
    let zoomphoto = $(".photo_list_zoom");
    let zoomphoto_list = zoomphoto.children("li");
    photo.on("click",function()
    {
      let photo_index = $(this).index();
      zoomphoto.fadeIn(300);
      zoomphoto_list.hide().eq(photo_index).fadeIn(300);
    });
    zoomphoto.on("click",function()
    {
      zoomphoto.hide();
      zoomphoto_list.hide();
    });
  }
  render()
  {
    return(
      <section className="photo_section">
        <ul className="photo_list">
          <li>
            <img src={photoimg1} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg2} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg3} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg4} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg5} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg6} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg7} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg8} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg9} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg10} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg11} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg12} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg13} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg14} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg15} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg16} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg17} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg18} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg19} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg20} alt="이미지"></img>
          </li>
        </ul>
        <ul className="photo_list_zoom">
        <li>
            <img src={photoimg1} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg2} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg3} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg4} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg5} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg6} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg7} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg8} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg9} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg10} alt="이미지."></img>
          </li>
          <li>
            <img src={photoimg11} alt="이미지."></img>
          </li>
          <li>
            <img src={photoimg12} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg13} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg14} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg15} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg16} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg17} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg18} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg19} alt="이미지"></img>
          </li>
          <li>
            <img src={photoimg20} alt="이미지"></img>
          </li>
        </ul>
      </section>
    );
  }
}

export default Photoarea;
