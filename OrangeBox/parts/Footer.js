import React from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import OrangeFootSt from "./Footer.module.css";
import f_logo from "../img/Logo.png";

class Footer extends React.Component{
  componentDidMount()
  {

  }
  render()
  {
    return (
      <>
       <footer className={OrangeFootSt.footer}>
         <div className={OrangeFootSt.footer_inner}>
           <div className={OrangeFootSt.footer_logo}>
            <img src={f_logo} alt="풋터로고"  ></img>
           </div>
           <ul className={OrangeFootSt.footer_menu}>
            <li>
              <Link to="#">이용약관</Link>
            </li>
            <li>
              <Link to="#">개인정보처리방침</Link>
            </li>
            <li>
              <Link to="#">영상정보처리기기 운영 및 관리방침</Link>
            </li>
            <li>
              <Link to="#">광고/임대문의</Link>
            </li>
            <li>
              <Link to="#">기업정보</Link>
            </li>
            <li>
              <Link to="#">채용안내</Link>
            </li>
           </ul>
           <ul className={OrangeFootSt.footer_address}>
            <li>
              <p>대구광역시 남구 대명동 1111-12 번지 플라워타워 3층</p>
              <p>고객센터 : 1101-1010</p>
            </li>
            <li>
              <p>대표이사 : 이상윤</p>
              <p>사업자 등록번호 : 111-11-1111</p>
              <p>통신판매업신고번호 제0000호</p>
              <p>개인정보보호책임자 : 이상윤</p>
            </li>
            <li>
              <p>COPYRIGHT© ORANGE BOX ALL RIGHT RESERVED.</p>
            </li>
           </ul>
         </div>
       </footer>
      </>
    );
  }
}

export default Footer;