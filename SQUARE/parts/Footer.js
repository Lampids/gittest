import React from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import FooterSt from "./Footer.module.css";
import insquareLogo from "../img/insquare_logo_w.png";

class Main extends React.Component{
  componentDidMount()
  {

  }
  render()
  {
    return(
      <>
      <footer className={FooterSt.footer}>
        <div className={FooterSt.footer_inner}>
          <div className={FooterSt.copyright_box}>
            <span className={FooterSt.footer_logo} />
            <span className={FooterSt.copyright}>
            © 2022 INSQUARE. All rights reserved. All trademarks are property of their respective owners in the US and other countries.
              VAT included in all prices where applicable.   Privacy Policy 
            </span>
          </div>
          <ul className={FooterSt.summary_box}>
            <li>
              <Link to='#'>
                인스퀘어 소개
              </Link>
            </li>
            <li>
              <Link to='#'>
                채용안내
              </Link>
            </li>
            <li>
              <Link to='#'>
                지원
              </Link>
            </li>
            <li>
              <Link to='#'>
                상점
              </Link>
            </li>
            <li>
              <Link to='#'>
                커뮤니티
              </Link>
            </li>
            <li>
              <Link to='#'>
                이용약관
              </Link>
            </li>
            <li>
              <Link to='#'>
                개인정보처리방침
              </Link>
            </li>
            <li>
              <Link to='#'>
                청소년보호정책
              </Link>
            </li>
            <li>
              <Link to='#'>
                로그인
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      </>
    );
  }
}

export default Main;