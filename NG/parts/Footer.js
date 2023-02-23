import React from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import NgFooter from "./Footer.module.css";

class Footer extends React.Component{
  componentDidMount()
  {

  }
  render()
  {
    return (
      <>
      <footer className={NgFooter.footer}>
        <div className={NgFooter.summary_box}>
          <div className={NgFooter.summary_navi}>
            <ul className={NgFooter.summary_list}>
              <h3>Summary</h3>
              <li>
                <Link to="#">HOME</Link>
              </li>
              <li>
                <Link to="#">BRAND</Link>
              </li>
              <li>
                <Link to="#">CHANNEL</Link>
              </li>
              <li>
                <Link to="#">NEWS</Link>
              </li>
              <li>
                <Link to="#">STORE</Link>
              </li>
              <li>
                <Link to="#">LOGIN</Link>
              </li>
            </ul>
            <ul className={NgFooter.summary_list}>
              <h3>Guide</h3>
              <li>
                <Link to="#">이용자 약관</Link>
              </li>
              <li>
                <Link to="#">개인정보처리방침</Link>
              </li>
              <li>
                <Link to="#">인재 채용</Link>
              </li>
              <li>
                <Link to="#">광고 및 제류 문의</Link>
              </li>
              <li>
                <Link to="#">회사 소개</Link>
              </li>
            </ul>
          </div>
          <div className={NgFooter.site_info}>
            <span className={NgFooter.subscribe}>
              <button className={NgFooter.subscribe_button}>
                정기구독신청
              </button>
            </span>
            <ul className={NgFooter.site_info_list}>
              <li>
                <p>대표이사:LAMBDA</p>
                <p>사업자등록번호:000-00-00000</p>
                <p>통신판매업신고번호 대구 제00-000호</p>
              </li>
              <li>
                <p>구독문의:00-0000-1111</p>
                <p>FAX:053-000-1111</p>
              </li>
              <li>
                <p>Copyright ⓒ 2022 LSY portfolio</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={NgFooter.footer_bottom}></div>
      </footer>
      </>
    );
  }
}

export default Footer;