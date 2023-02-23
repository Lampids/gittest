import React from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";
import NgLoginSt from "./NgLogin.module.css";
class NgLogin extends React.Component{
  componentDidMount()
  {

  }
  render()
  {
    return (
      <>
        <div className={NgLoginSt.login_section}>
          <section className={NgLoginSt.login_area}>
            <div className={NgLoginSt.account_select}>
              <span>
                로그인
              </span>
              <span>
                계정 만들기
              </span>
            </div>
            <div className={NgLoginSt.account_input}>
              <input className={NgLoginSt.input_id} type="text" placeholder='이메일을 입력해주세요  '>
              </input>
              <input className={NgLoginSt.input_password} type="password" placeholder='비밀번호를 입력해주세요'>
              </input>
            </div>
            <div className={NgLoginSt.account_help}>
              <span>로그인에 도움이 필요합니까?</span>
            </div>
            <div className={NgLoginSt.login_logo}>
              <Link to="/Netgeo"></Link>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default NgLogin;