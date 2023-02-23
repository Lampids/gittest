import React from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import GiCharSt from "./Character_list.module.css";
import ele_anemo from "../img/ele_anemo.png";
import ele_cryo from "../img/ele_cryo.png";
import ele_dendro from "../img/ele_dendro.png";
import ele_elec from "../img/ele_elec.png";
import ele_geo from "../img/ele_geo.png";
import ele_hydro from "../img/ele_hydro.png";
import ele_pyro from "../img/ele_pyro.png";

class Character_sumeru extends React.Component{
  componentDidMount()
  {
    
  }
  render()
  {
    return (
      <>
        <ul className={GiCharSt.char_list}>
          <li className={GiCharSt.five_star}>
            <img src={ele_dendro} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>타이나리</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/08/23/a15445b2b2e4443398eabf3b479f49e7_7920398508440158634.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.four_star}>
            <img src={ele_dendro} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>콜레이</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/08/23/2c752da0a5921583011a4ec36f83703c_8489123471837746487.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.four_star}>
            <img src={ele_elec} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>도리</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/08/30/9b5c8d26504c19154056175bbb7e287a_1215240095564031484.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.five_star}>
            <img src={ele_elec} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>사이노</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/09/20/c4f05fb0c04afac045171c27c7d03cdc_1339862669857070347.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.four_star}>
            <img src={ele_hydro} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>캔디스</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/09/22/d0226e61c64dbd14f3041775ceebb59a_5040281717122883075.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.five_star}>
            <img src={ele_hydro} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>닐루</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/09/28/d978cf1ce85e372971bdcf6add639e8f_5166293001162982189.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.five_star}>
            <img src={ele_dendro} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>나히다</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/10/26/fe684624008db25ac4b44ea4704f9ba0_1976471220143309850.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.four_star}>
            <img src={ele_cryo} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>레일라</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/11/07/4322a175c30a3480092513ad73a8509a_9192082726204655148.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.five_star}>
            <img src={ele_anemo} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>스카라무슈</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/11/28/d44dde6ef8b8b1963b06a94d3ea0186b_6404890984075480529.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.four_star}>
            <img src={ele_anemo} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>파루잔</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/12/03/820230e5076f0cba1837d7bca81d8483_7776598608734705852.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
        </ul>
      </>
    );
  }
}

export default Character_sumeru;