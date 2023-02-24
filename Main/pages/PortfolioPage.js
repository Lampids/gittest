import React from 'react';
import { Routes , Route , Link } from "react-router-dom";
import $ from 'jquery';
import PortSt from "./PortfolioPage.module.css";
import titleImg_port from "../imgs/portpage_text.png";
import PortImg from "../imgs/port_icon_c.png";
import logoImg from "../imgs/my_logo.png";
import projectImg1 from "../imgs/NG.jpg";
import projectImg2 from "../imgs/GI.jpg";
import projectImg3 from "../imgs/PH.jpg";
import projectImg4 from "../imgs/UC.jpg";


class PortfolioPage extends React.Component{
  componentDidMount()
  {
    let section_title = $("."+PortSt.section_title);
    let porject_list = $("."+PortSt.portfolio_list).children("li");
    setTimeout(function()
    {
      section_title.animate({"top":"0px"});
      porject_list.eq(0).delay(700).animate({"opacity":"1"});
      porject_list.eq(1).delay(900).animate({"opacity":"1"});
      porject_list.eq(2).delay(1100).animate({"opacity":"1"});
      porject_list.eq(3).delay(1300).animate({"opacity":"1"});
    });
  }
  render()
  {
    return(
      <>
      <section className={PortSt.portfolio_section}>
        <span className={PortSt.section_title}>
          <img src={PortImg} alt="타이틀 아이콘"></img>
          <img src={titleImg_port} alt="타이틀"></img>
        </span>
        <div className={PortSt.portfolio_area}>
          <ul className={PortSt.portfolio_list}>
            <li>
              <div className={PortSt.portfolio_img_box}>
                <Link to ="/Netgeo" target="_blank">
                  <img src={projectImg1} alt="프로젝트 이미지"></img>
                </Link>
              </div>
              <div className={PortSt.portfolio_info}>
                <span className={PortSt.project_name}>
                  <Link to ="/Netgeo" target="_blank">
                    네셔널지오그래픽
                  </Link>
                </span>
                <span className={PortSt.project_text}>
                  기존의 네셔널지오그래픽 홈페이지의 디자인을 벤치마킹하여 마크업을 한 홈페이지 입니다.
                  반응형으로 마크업을 했으며 메인페이지를 포함한 다른 로그인 및 서브페이지도 구성이 되어있습니다.
                </span>
              </div>
              <ul className={PortSt.portfolio_type}>
                <li>PC</li>
                <li>테블릿</li>
                <li>모바일</li>
                <li>메인페이지</li>
                <li>브랜드</li>
                <li>채널</li>
                <li>로그인</li>
              </ul>
            </li>
            <li>
              <div className={PortSt.portfolio_img_box}>
                <Link to ="/Genshin" target="_blank">
                  <img src={projectImg2} alt="프로젝트 이미지"></img>
                </Link>
              </div>
              <div className={PortSt.portfolio_info}>
                <span className={PortSt.project_name}>
                  <Link to ="/Genshin" target="_blank">
                    원신
                  </Link>
                </span>
                <span className={PortSt.project_text}>
                  모바일 , PC게임이자 원신 IP를 밴치마킹하여 마크업한 홈페이지 입니다. 고정형으로 되어있으며
                  메인페이지를 포함한 다른 로그인 및 서브페이지도 구성이 되어있습니다.
                </span>
              </div>
              <ul className={PortSt.portfolio_type}>
                <li>PC</li>
                <li>소개페이지</li>
                <li>메인페이지</li>
                <li>캐릭터소개</li>
                <li>로그인</li>
              </ul>
            </li>
            <li>
              <div className={PortSt.portfolio_img_box}>
                <Link to ="/OrangeBox" target="_blank">
                  <img src={projectImg4} alt="프로젝트 이미지"></img>
                </Link>
              </div>
              <div className={PortSt.portfolio_info}>
                <span className={PortSt.project_name}>
                  <Link to ="/OrangeBox" target="_blank">
                    오렌지박스
                  </Link>
                </span>
                <span className={PortSt.project_text}>
                  자체적으로 디자인하여 마크업한 웹페이지 입니다. 영화를 주제로 개발한 사이트 이며 PC형으로 개발되었습니다.
                </span>
              </div>
              <ul className={PortSt.portfolio_type}>
                <li>PC</li>
              </ul>
            </li>
            <li>
              <div className={PortSt.portfolio_img_box}>
                <Link to ="/InSquare" target="_blank">
                  <img src={projectImg3} alt="프로젝트 이미지"></img>
                </Link>
              </div>
              <div className={PortSt.portfolio_info}>
                <span className={PortSt.project_name}>
                  <Link to ="/InSquare" target="_blank">
                    인스퀘어
                  </Link>
                </span>
                <span className={PortSt.project_text}>
                  자체적으로 창작한 디자인으로 마크업한 웹페이지입니다. 게임판매 및 구매를 목적으로 하는 사이트이며
                  반응형으로 개발되었습니다.
                </span>
              </div>
              <ul className={PortSt.portfolio_type}>
                <li>PC</li>
                <li>테블릿</li>
                <li>모바일</li>
                <li>메인페이지</li>
                <li>로그인</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      </>
    );
  }
}

export default PortfolioPage;