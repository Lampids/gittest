import React from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import LoginSt from "./Login.module.css";
import insquareLogo from "../img/insquare_logo_w.png";

class Login extends React.Component{
  componentDidMount()
  {

  }
  render()
  {
    return(
      <>
      <div className={LoginSt.login_section}>
        <div className={LoginSt.login_inner}>
          <h2>로그인</h2>
          <form className={LoginSt.account_form}>
            <div className={LoginSt.input_id_box}>
              <span>
                계정 아이디
              </span>
              <input type="text" placeholder='아이디를 입력해주세요'>
              </input>
            </div>
            <div className={LoginSt.input_pass_box}>
              <span>
                계정 비밀번호
              </span>
              <input type="password" placeholder='비밀번호를 입력해주세요'>
              </input>
            </div>
          </form>
          <button className={LoginSt.login_btn}>
            로그인
          </button>
          <ul className={LoginSt.account_help}>
            <li>
              <Link to="#">아이디 찾기</Link>
            </li>
            <li>
              <Link to="#">비밀번호 찾기</Link>
            </li>
            <li>
              <Link to="#">계정문의</Link>
            </li>
          </ul>
        </div>
      </div>
      </>
    );
  }
}

export default Login;