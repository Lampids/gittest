import React from 'react';
import { Link } from "react-router-dom";  
import $ from 'jquery';
import Test from "./../portfolio/Test";
import './PortfolioList.css';
import Netgeo from "../imgs/NG.jpg";
import Genshin from "../imgs/GI.jpg";
import Playhub from "../imgs/PH.jpg";
import UniqueCinema from "../imgs/UC.jpg";
class PortfolioList extends React.Component{
  componentDidMount()
  {
    setTimeout(function()
    {
      $(".portfolio_box").css({"width":"80%"});
    });
    setTimeout(function()
    {
      $(".portfolio_box").children(".portfolio_inner").fadeIn(300);
    },800);
  }
  render()
  {
    return(
      <>
        <section className="portfolio_section">
          <div className='portfolio_box'>
            <div className='portfolio_inner'>
              <span className='port_title'>포트폴리오 리스트</span>
              <ul className='portfolio_list'>
                <li>
                  <Link to="/Netgeo" target="_blank">
                    <img src={Netgeo} alt="네셔널지오그래픽 이미지"></img>
                    <span>클릭하여 접속</span>
                  </Link>
                  <div className="list_info">
                    <span className="project_title">
                      <p>프로젝트 제목 </p>
                      <p>
                        <Link to="/Netgeo" target="_blank">
                          네셔널지오그래픽
                        </Link>
                      </p>
                    </span>
                    <span className="project_content">
                    기존의 네셔널지오그래픽의 홈페이지 디자인을 벤치마킹하여 디자인 및 퍼블리싱을 했습니다.
                    반응형으로 되어있으며 로그인 페이지 및 메인을 포함한 다른 페이지도 구성이 되어있습니다.
                    </span>
                    <span className="project_detail">
                      <p>사이트 구성 </p>
                      <p>반응형,메인,브랜드,채널,로그인</p>
                    </span>
                  </div>
                </li>
                <li>
                  <Link to="/Genshin" target="_blank">
                    <img src={Genshin} alt="원신 이미지"></img>
                    <span>클릭하여 접속</span>
                  </Link>
                  <div className="list_info">
                    <span className="project_title">
                      <p>프로젝트 제목</p>
                      <p>
                        <Link to="/Genshin" target="_blank">
                          원신
                        </Link>
                      </p>
                    </span>
                    <span className="project_content">
                      모바일 , PC게임이자 원신 IP를 밴치마킹 하여 홈페이지를 밴치마킹하여 리디자인 및 재구성을 하여 다른 방식으로
                      웹페이지를 개발했습니다. 고정형으로 개발되어있으며 메인 페이지 및 캐릭터 소개,로그인 페이지도
                      구성이 되어 있습니다.
                    </span>
                    <span className="project_detail">
                      <p>사이트 구성</p>
                      <p>고정형,메인,캐릭터,소개,로그인</p>
                    </span>
                  </div>
                </li>
                <li>
                  <Link to="/Insquare" target="_blank">
                    <img src={Playhub} alt="인스퀘어 이미지"></img>
                    <span>클릭하여 접속</span>
                  </Link>
                  <div className="list_info">
                    <span className="project_title">
                      <p>프로젝트 제목</p>
                      <p>
                        <Link to="/Insquare" target="_blank">
                          인스퀘어
                        </Link>
                      </p>
                    </span>
                    <span className="project_content">
                      자체적으로 창작한 디자인으로 마크업한 웹페이지입니다. 게임판매 및 구매를 목적으로 하는 사이트이며
                      반응형으로 제작되었습니다.
                    </span>
                    <span className="project_detail">
                      <p>사이트 구성</p>
                      <p>반응형,메인,로그인</p>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

      </>
    );
  }
}

export default PortfolioList;
