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

class Character_inazuma extends React.Component{
  componentDidMount()
  {
    
  }
  render()
  {
    return (
      <>
        <ul className={GiCharSt.char_list}>
          <li className={GiCharSt.five_star}>
            <img src={ele_anemo} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>카미사토 아야카</span>
            <img src="https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20210715/2021071517165456342.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.five_star}>
            <img src={ele_anemo} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>카에데하라 카즈하</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/44e2d916d9c13bca863d56423004fd98_7407781867019607258.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.five_star}>
            <img src={ele_pyro} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>나가노하라 요이미야</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/593e6a6d5d8836ca2ab5c27a98593e58_7949673323956764891.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.four_star}>
            <img src={ele_anemo} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>사유</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/982542a6c0e2dfb628a4f087fa6bde5d_5561742546348721466.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.five_star}>
            <img src={ele_elec} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>라이덴 쇼군</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/fdcbc9ef8859b7077d92ae38d925e15e_4182419098670334250.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.five_star}>
            <img src={ele_elec} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>쿠죠 사라</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/f05d8a7e32075403340d0d2ea8e590ff_4705441338406141442.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.five_star}>
            <img src={ele_hydro} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>산고노미아 코코미</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/8ca5953fb331d71bc880496f5e8b7745_6380460094489935630.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.four_star}>
            <img src={ele_pyro} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>토마</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/9d753f7cee1ed5c645340d6396c50c46_3197403530279178943.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.five_star}>
            <img src={ele_geo} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>아라타키 이토</span>
            <img src="https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20211203/2021120310431334925.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.four_star}>
            <img src={ele_geo} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>고로</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/33b7b5d2536416116765a3f55e47f51a_7880870077337436853.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.four_star}>
            <img src={ele_elec} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>야에 미코</span>
            <img src="https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20220208/2022020815135636944.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.four_star}>
            <img src={ele_elec} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>쿠키 시노부</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/ef220a612a40dc5d4d7c9136345f4967_7593224177453304340.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>              
          <li className={GiCharSt.five_star}>
            <img src={ele_hydro} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>카미사토 아야토</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/037d6fa79d3066c5bc8711187ad2f673_405660450686456764.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.four_star}>
            <img src={ele_hydro} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>시카노인 헤이조</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/07/c20ab407d9316480290f7c690836f35c_2055503342699220793.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
        </ul>
      </>
    );
  }
}

export default Character_inazuma;