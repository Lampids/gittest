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

class Character_liyue extends React.Component{
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
            <span className={GiCharSt.char_name}>소</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/930f3ce55517e3c711a962c82e4639c0_3098050102762499068.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.four_star}>
            <img src={ele_elec} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>북두</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/01d9b164e0de2611c84ccdec5b84ced8_2709054602827381427.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.four_star}>
            <img src={ele_geo} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>응광</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/d35a0a1d13f821fd55a6951210c672ac_8518515778220055312.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.four_star}>
            <img src={ele_pyro} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>묘향릉</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/1169862f9fa35734b06ce09c96dad9ae_1319670718820402740.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.four_star}>
            <img src={ele_hydro} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>행추</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/4569d28adb1d8fa4394b8d02886abe7a_3914236011270227422.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.four_star}>
            <img src={ele_cryo} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>중운</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/d0accc6031019427d20d2f009169d7cd_2356762267295432845.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.five_star}>
            <img src={ele_cryo} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>치치</span>
            <img src="https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20200828/2020082818085925874.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.five_star}>
            <img src={ele_elec} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>각청</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/d063646e97392638e07da24ce6b8c3cb_2920774527446714963.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.five_star}>
            <img src={ele_hydro} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>아약스</span>
            <img src="https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20201103/2020110321314895882.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.five_star}>
            <img src={ele_geo} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>종려</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/e699d7e2413ed5dfb384ee48c2b872d3_8749521488560437102.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.four_star}>
            <img src={ele_pyro} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>신염</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/3deca8e73a03e779087b74ebeac883cb_3876184017281060876.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.five_star}>
            <img src={ele_cryo} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>감우</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/1ae0d0aaad9ee9b55652ea7ec67f0465_3969242656150327368.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>              
          <li className={GiCharSt.five_star}>
            <img src={ele_pyro} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>호두</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/300df2aed5060579f08d7db601d8710d_1135611518548018723.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.five_star}>
            <img src={ele_pyro} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>연비</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/494f7aa4668cb7fe2d6d0463e7cc835f_8818288508096881672.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.five_star}>
            <img src={ele_cryo} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>신학</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/cb95a5b5d57165a4970d801c5dcf0435_1420673191155400712.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.four_star}>
            <img src={ele_geo} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>운근</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/974d7a34d3cc71f74ac98e50d4b935fc_6761068135991774965.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li>
          <li className={GiCharSt.five_star}>
            <img src={ele_hydro} alt="원소이미지" className={GiCharSt.ele_img}></img>
            <span className={GiCharSt.char_name}>야란</span>
            <img src="https://webstatic.hoyoverse.com/upload/contentweb/2022/07/22/073932dc472fa00623cefb70a18df516_3904477664614477247.png" alt="캐릭터 이미지" className={GiCharSt.char_img}></img>
          </li> 
        </ul>
      </>
    );
  }
}

export default Character_liyue;