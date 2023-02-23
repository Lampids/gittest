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

class Character_mond extends React.Component{
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
            <span className={GiCharSt.char_name}>진 군힐드</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/b51565c6f1298e534e90b6e63332e9c1_8096008158965392293.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.four_star}>
            <img src={ele_pyro} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>앰버</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/6f0ef40157e95b0d59455c12f4d3f270_3123858993054297538.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.four_star}>
            <img src={ele_elec} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>리사</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/43922f5162840c215638affedad0459a_5461746008943511130.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.four_star}>
            <img src={ele_cryo} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>케이아 알베리히</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/cbce61ef1ee5586c4e77b2070348685f_210993883133257317.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.four_star}>
            <img src={ele_hydro} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>바바라 페그</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/6c009f0631eb71e697c2da76b608a51e_385753889142810138.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.five_star}>
            <img src={ele_pyro} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>다이루크 라겐펜더</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/f5ae62eff2cf426e98626c882dd0cf0d_7241879056120841863.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.five_star}>
            <img src={ele_anemo} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>벤티</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/965e940e6caafe8fbd4bf0e17653000b_5047047034327492937.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.four_star}>
            <img src={ele_elec} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>레이저</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/a1594317bbd0cefeb7da501f9879375b_5068865771963203902.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.five_star}>
            <img src={ele_pyro} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>클레</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/16cff1c00f651f98427fc3fbab7fc855_7565390066957239275.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.four_star}>
            <img src={ele_pyro} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>베넷</span>
            <img src="https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200312/2020031220110869944.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.four_star}>
            <img src={ele_geo} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>노엘</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/c8a5da498d29faa1c8f2e2bfb60efbd5_5404870231118781131.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.four_star}>
            <img src={ele_elec} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>피슬</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/96297a7f2679bf0dce4fb9d11120b882_1444011233464574369.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>              <li className={GiCharSt.four_star}>
            <img src={ele_anemo} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>수크로스</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/448bc697f852e5726717fa2be839eedc_3248304255937030521.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.five_star}>
            <img src={ele_hydro} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>모나 메기스토스</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/9e4203089ad086d328973adf3f6e8c7b_528836259048237760.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.four_star}>
            <img src={ele_cryo} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>디오나 캐츠라인</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/fb11c57bf9789d760d70d35ce634ebe1_4135706580840341231.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.five_star}>
            <img src={ele_geo} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>알베도</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/f95b03a7d7370aa4f5de3ac9a5f161bc_3372343246797799686.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.four_star}>
            <img src={ele_cryo} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>로자리아</span>
            <img src="https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20210325/2021032515421535125.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.five_star}>
            <img src={ele_cryo} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>유라 로렌스</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/4c4b8babc68ffedce9bd5766b60e1ae5_9107021726085564898.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.five_star}>
            <img src={ele_cryo} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>에일로이</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/9344fdabebf5e14d8ecaf34253d838c0_9028997942659542148.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
        </ul>
      </>
    );
  }
}

export default Character_mond;