import React from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import GiLoginSt from "./GiLogin.module.css";
import hoyologoImg from "../img/hoyoverse_logo_b.png";

class GiLogin extends React.Component{
  componentDidMount()
  {
    let login_btn = $('.'+GiLoginSt.login_path).children('button');
    login_btn.on("click",function()
    {
      let login_index = $(this).index();
      login_btn.css({"background-color":"#383b40"}).eq(login_index).css({"background-color":"#7bb1ff"});
    });
  }
  render()
  {
    return (
      <>
        <div className={GiLoginSt.login_section}>
          <section className={GiLoginSt.login_inner}>
            <div className={GiLoginSt.login_box}>
              <div className={GiLoginSt.login_title}>
                <img src={hoyologoImg} alt="호요버스 이미지"></img>
              </div>
              <div className={GiLoginSt.login_path}>
                <button className={GiLoginSt.hoyoverse_login}>
                  호요버스 ID
                </button>
                <button className={GiLoginSt.genshin_login}>
                  원신 ID
                </button>
              </div>
              <div className={GiLoginSt.account_input}>
                <input type="text" placeholder='아이디'></input>
                <input type="password" placeholder='비밀번호'></input>
              </div>
              <ul className={GiLoginSt.account_help}>
                <li>
                  회원가입
                </li>
                <li>
                  비밀번호 찾기
                </li>
              </ul>
              <button className={GiLoginSt.login_button}>
                로그인
              </button>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default GiLogin;