import React, { useState } from 'react';
import $ from 'jquery';
import Character_mond from '../parts/Character_mond';
import Character_liyue from '../parts/Character_liyue';
import Character_inazuma from '../parts/Character_inazuma';
import Character_sumeru from '../parts/Character_sumeru';
import GiCharSt from "./GiCharacter.module.css";
import citybgImg1 from "../img/city-bg1.jpg";
import ele_anemo from "../img/ele_anemo.png";
import ele_cryo from "../img/ele_cryo.png";
import ele_dendro from "../img/ele_dendro.png";
import ele_elec from "../img/ele_elec.png";
import ele_geo from "../img/ele_geo.png";
import ele_hydro from "../img/ele_hydro.png";
import ele_pyro from "../img/ele_pyro.png";

class GiCharacter extends React.Component{
  componentDidMount()
  {
    let basic_color ="rgb(0, 0, 0)";
    let city_color1 ="#72e2c3";
    let city_color2 ="#e3b342";
    let city_color3 ="#a757cb";
    let city_color4 ="#23c18a";
    let city_color5 ="#21e1eb";
    let city_color6 ="#fe925d";
    let city_color7 ="#a0e9e5";
    let select_area = $('.'+GiCharSt.select_area).children('li');
    let charlist = $('.'+GiCharSt.char_list_area).children("ul");
    charlist.hide().eq(0).show();
    select_area.eq(0).css({"background-color":"rgba(114, 226, 195)"});
    select_area.on("click",function()
    {
      let select_area_index = $(this).index();
      if(select_area_index===0)
      {
        select_area.css({"background-color":basic_color}).eq(select_area_index).css({"background-color":city_color1});
        charlist.hide().eq(select_area_index).show();
      }
      if(select_area_index===1)
      {
        select_area.css({"background-color":basic_color}).eq(select_area_index).css({"background-color":city_color2});
        charlist.hide().eq(select_area_index).show();
      }
      if(select_area_index===2)
      {
        select_area.css({"background-color":basic_color}).eq(select_area_index).css({"background-color":city_color3});
        charlist.hide().eq(select_area_index).show();
      }
      if(select_area_index===3)
      {
        select_area.css({"background-color":basic_color}).eq(select_area_index).css({"background-color":city_color4});
        charlist.hide().eq(select_area_index).show();
      }
      if(select_area_index===4)
      {
        select_area.css({"background-color":basic_color}).eq(select_area_index).css({"background-color":city_color5});
      }
      if(select_area_index===5)
      {
        select_area.css({"background-color":basic_color}).eq(select_area_index).css({"background-color":city_color6});
      }
      if(select_area_index===6)
      {
        select_area.css({"background-color":basic_color}).eq(select_area_index).css({"background-color":city_color7});
      }
    });
  }
  render()
  {
    return (
      <>
        <div className={GiCharSt.character_section}>  
          <span className={GiCharSt.city_select_title}>
          </span>
          <ul className={GiCharSt.select_area}>
            <li>
              <img src={ele_anemo} alt="원소 이미지"></img>
              <span>
                <p>몬드</p>
                <p>바람과 자유의 도시</p>
              </span>
            </li>
            <li>
            <img src={ele_geo} alt="원소 이미지"></img>
            <span>
                <p>리월</p>
                <p>바위와 계약의 항구</p>
              </span>
            </li>
            <li>
            <img src={ele_elec} alt="원소 이미지"></img>
            <span>
                <p>이나즈마</p>
                <p>번개와 영원의 군도</p>
              </span>
            </li>
            <li>
            <img src={ele_dendro} alt="원소 이미지"></img>
            <span>
                <p>수메르</p>
                <p>풀과 지혜의 우림</p>
              </span>
            </li>
            <li>
            <img src={ele_hydro} alt="원소 이미지"></img>
            <span>
                <p>폰타인</p>
                <p>물과 정의의 철옹성</p>
              </span>
            </li>
            <li>
            <img src={ele_pyro} alt="원소 이미지"></img>
            <span>
                <p>나타</p>
                <p>불과 개척의 대지</p>
              </span>
            </li>
            <li>
            <img src={ele_cryo} alt="원소 이미지"></img>
            <span>
                <p>스네즈나야</p>
                <p>얼음의 왕정 설국</p>
              </span>
            </li>
          </ul>
          <section className={GiCharSt.char_list_area}>
            <Character_mond />
            <Character_liyue />
            <Character_inazuma />
            <Character_sumeru />
          </section>
        </div>
      </>
    );
  }
}

export default GiCharacter;