import React from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import mainSt from "./main.module.css";
import slideImg1 from "../img/slideImg1.jpg";
import slideImg2 from "../img/slideImg2.jpg";
import slideImg3 from "../img/slideImg3.jpg";
import slideImg4 from "../img/slideImg4.jpg";
import saleproduct1 from "../img/sale_product1.jpg";
import saleproduct2 from "../img/sale_product2.jpg";
import saleproduct3 from "../img/sale_product3.jpg";
import saleproduct4 from "../img/sale_product4.jpg";
import saleproduct5 from "../img/sale_product5.jpg";
import saleproduct6 from "../img/sale_product6.jpg";
import saleproduct7 from "../img/sale_product7.jpg";
import saleproduct8 from "../img/sale_product8.jpg";
import saleproduct9 from "../img/sale_product9.jpg";
import saleproduct10 from "../img/sale_product10.jpg";
import saleproduct11 from "../img/sale_product11.jpg";
import saleproduct12 from "../img/sale_product12.jpg";
import saleproduct13 from "../img/sale_product13.jpg";
import saleproduct14 from "../img/sale_product14.jpg";
import saleproduct15 from "../img/sale_product15.jpg";
import saleproduct16 from "../img/sale_product16.jpg";
import cate1 from "../img/category_openworld.jpg";
import adImg from "../img/genshin_ad.png";
import gameImg1 from "../img/game1.jpg";
import gameImg2 from "../img/game2.jpg";
import gameImg3 from "../img/game3.jpg";
import gameImg4 from "../img/game4.jpg";
import gameImg5 from "../img/game5.jpg";
import gameImg6 from "../img/game6.jpg";
import gameImg7 from "../img/game7.jpg";
import gameImg8 from "../img/game8.jpg";
import gameImg9 from "../img/game9.jpg";
import gameImg10 from "../img/game10.jpg";
import gameImg11 from "../img/game11.jpg";
import gameImg12 from "../img/game12.jpg";
import gameImg13 from "../img/game13.jpg";
import gameImg14 from "../img/game14.jpg";
import gameImg15 from "../img/game15.jpg";
class Main extends React.Component{
  componentDidMount()
  {
    let main_select = $('.'+mainSt.slide_select_list).children('li');
    let mainslide_index =0;
    let mainslide_list = $('.'+mainSt.slide_list).children('li');
    mainslide_list.hide().eq(0).show();
    let mainslide_auto = setInterval(slideA,6000);
    function slideA()
    {
      if(mainslide_index===3)
      {
        mainslide_list.fadeOut().eq(0).fadeIn(700);
        mainslide_index=0;
      }
      else
      {
        mainslide_list.fadeOut().eq(mainslide_index+1).fadeIn(700);
        main_select.css({"background-color":"#fff"}).eq(mainslide_index+1).css({"background-color":"aqua"});
        mainslide_index++;
      }
    }
    main_select.on('click',function()
    {
      clearInterval(mainslide_auto);
      mainslide_index = $(this).index();
      mainslide_list.fadeOut().eq(mainslide_index).fadeIn(700);
      main_select.css({"background-color":"#fff"}).eq(mainslide_index).css({"background-color":"aqua"});
    });

    let sale_slide = $('.'+mainSt.sale_list);
    let slidewidth = $('.'+mainSt.sale_list).children('li').width();
    let slide_select = $('.'+mainSt.sale_select_list).children('li');
    let slide_select_index =0;
    slide_select.on("click",function()
    {
      slide_select_index = $(this).index();
      if(slide_select_index==0)
      {
        sale_slide.animate({"left":"0px"});
      }
      else
      {
        sale_slide.animate({"left":-slidewidth*slide_select_index+1});
      }
    });
    $(window).on("resize",function()
    {
      let pagewidth = $(window).width(); 
      if(pagewidth < 1400)
      {
        sale_slide.css({"left":"0px"});
      }
    });
  }
  render()
  {
    return(
      <>
      <div className={mainSt.main_section}>
        <section className={mainSt.main_slide_area}>
          <div className={mainSt.search_box}>
            <span className={mainSt.game_search}>
              <button className={mainSt.search_btn}>

              </button>
              <input type="text" placeholder='??????'>
              </input>
            </span>
            <ul className={mainSt.search_list}>
              <li>
                ??? ??????
              </li>
              <li>
                ?????? ??? ??????
              </li>
              <li>
                ????????????
              </li>
              <li>
                ??? ??????
              </li>
            </ul>
          </div>
          <ul className={mainSt.slide_list}>
            <li>
              <img src={slideImg1} alt="???????????? ?????????"></img>
            </li>
            <li>
              <img src={slideImg2} alt="???????????? ?????????"></img>
            </li>
            <li>
              <img src={slideImg3} alt="???????????? ?????????"></img>
            </li>
            <li>
              <img src={slideImg4} alt="???????????? ?????????"></img>
            </li>
          </ul>
          <div className={mainSt.slide_select_box}>
            <ul className={mainSt.slide_select_list}>
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
        </section>
        <section className={mainSt.special_product}>
          <div className={mainSt.product_sale}>
            <span className={mainSt.area_name}>
              ???????????? ??? ??????
            </span>
            <div className={mainSt.sale_list_box}>
              <ul className={mainSt.sale_list}>
                <li>
                  <ul className={mainSt.sale_list_detail}>
                    <li>
                      <img src={saleproduct1} alt="?????????????????????"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -50%
                        </span>
                        <span className={mainSt.product_name}>
                          ????????? ?????? ??????
                        </span>
                      </div>
                    </li>
                    <li>
                      <img src={saleproduct2} alt="?????????????????????"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -80%
                        </span>
                        <span className={mainSt.product_name}>
                          ??????????????? 3
                        </span>
                      </div>
                    </li>
                    <li>
                      <img src={saleproduct3} alt="?????????????????????"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -25%
                        </span>
                        <span className={mainSt.product_name}>
                          ????????????3
                        </span>
                      </div>
                    </li>
                    <li>
                      <img src={saleproduct4} alt="?????????????????????"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -75%
                        </span>
                        <span className={mainSt.product_name}>
                          ??????????????? ?????????
                        </span>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className={mainSt.sale_list_detail}>
                    <li>
                      <img src={saleproduct5} alt="?????????????????????"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -50%
                        </span>
                        <span className={mainSt.product_name}>
                          ?????? ????????????
                        </span>
                      </div>
                    </li>
                    <li>
                      <img src={saleproduct6} alt="?????????????????????"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -66%
                        </span>
                        <span className={mainSt.product_name}>
                          ????????? ???????????????
                        </span>
                      </div>
                    </li>
                    <li>
                      <img src={saleproduct7} alt="?????????????????????"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -50%
                        </span>
                        <span className={mainSt.product_name}>
                          ?????? ???????????????2
                        </span>
                      </div>
                    </li>
                    <li>
                      <img src={saleproduct8} alt="?????????????????????"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -75%
                        </span>
                        <span className={mainSt.product_name}>
                          ?????????????????? 4
                        </span>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className={mainSt.sale_list_detail}>
                    <li>
                      <img src={saleproduct9} alt="?????????????????????"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -70%
                        </span>
                        <span className={mainSt.product_name}>
                          ????????? ?????? ???????????? 2
                        </span>
                      </div>
                    </li>
                    <li>
                      <img src={saleproduct10} alt="?????????????????????"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -70%
                        </span>
                        <span className={mainSt.product_name}>
                          ???????????? 1
                        </span>
                      </div>
                    </li>
                    <li>
                      <img src={saleproduct11} alt="?????????????????????"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -70%
                        </span>
                        <span className={mainSt.product_name}>
                          ???????????? : ?????????
                        </span>
                      </div>
                    </li>
                    <li>
                      <img src={saleproduct12} alt="?????????????????????"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -90%
                        </span>
                        <span className={mainSt.product_name}>
                          ???
                        </span>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className={mainSt.sale_list_detail}>
                    <li>
                      <img src={saleproduct13} alt="?????????????????????"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -75%
                        </span>
                        <span className={mainSt.product_name}>
                          ????????? 4
                        </span>
                      </div>
                    </li>
                    <li>
                      <img src={saleproduct14} alt="?????????????????????"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -55%
                        </span>
                        <span className={mainSt.product_name}>
                          ????????? 2033
                        </span>
                      </div>
                    </li>
                    <li>
                      <img src={saleproduct15} alt="?????????????????????"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          -40%
                        </span>
                        <span className={mainSt.product_name}>
                          ?????????????????? 7
                        </span>
                      </div>
                    </li>
                    <li>
                      <img src={saleproduct16} alt="?????????????????????"></img>
                      <div className={mainSt.price_info}>
                        <span className={mainSt.percent}>
                          FREE
                        </span>
                        <span className={mainSt.product_name}>
                          ??????????????? : ???????????? ????????? ??????
                        </span>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <ul className={mainSt.sale_select_list}>
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
        </section>
        <section className={mainSt.category_area}>
          <span className={mainSt.area_name}>
            ?????? ????????????
          </span>
          <div className={mainSt.category_list_box}>
            <ul className={mainSt.category_list}>
              <li>
                ????????????
              </li>
              <li>
                RPG
              </li>
              <li>
                FPS
              </li>
              <li>
                RTS
              </li>
              <li>
                ????????????
              </li>
              <li>
                ???????????????
              </li>
              <li>
                ?????? ???????????????
              </li>
              <li>
                ??????
              </li>
              <li>
                ????????????
              </li>
              <li>
                ?????????
              </li>
              <li>
                ??????
              </li>
              <li>
                ??????
              </li>
              <li>
                ARPG
              </li>
              <li>
                ??????
              </li>
              <li>
                ??????
              </li>
              <li>
                ??????
              </li>
              <li>
                ????????? ??????
              </li>
              <li>
                ???????????????
              </li>
              <li>
                ??????
              </li>
              <li>
                ??????
              </li>
              <li>
                ??????
              </li>
              <li>
                ?????????
              </li>
              <li>
                ??????
              </li>
              <li>
                AOS
              </li>
              <li>
                ?????? ??????
              </li>
              <li>
                ??????
              </li>
              <li>
                ????????????
              </li>
              <li>
                ORPG
              </li>
              <li>
                MORPG
              </li>
              <li>
                MMORPG
              </li>
              <li>
                ??????
              </li>
              <li>
                ??????
              </li>
            </ul>
          </div>
        </section>
        <div className={mainSt.free_game}>
          <Link to ="/Genshin">
            <img src={adImg} alt="???????????????"></img>
          </Link>
        </div>
        <section className={mainSt.popular_area}>
          <ul className={mainSt.popular_list}>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg1} alt="???????????????"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>PUBG: ??????????????????</p>
                  <p>?????????</p>
                  <p>??????,??????,???????????????,????????????</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  ??????
                </span>
              </div>
            </li>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg2} alt="???????????????"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>???????????? ????????????</p>
                  <p>?????????,???</p>
                  <p>??????,??????,????????????,?????? ??????</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  ??? 20,500
                </span>
              </div>
            </li>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg3} alt="???????????????"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>?????? 7</p>
                  <p>?????????,???</p>
                  <p>??????,??????,????????????,?????? ??????</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  ??? 43,800
                </span>
              </div>
            </li>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg4} alt="???????????????"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>????????? ?????????</p>
                  <p>?????????</p>
                  <p>??????RPG,?????????,PVE,PVP</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  ??????
                </span>
              </div>
            </li>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg5} alt="???????????????"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>??????????????? 2 : ????????? ??????</p>
                  <p>?????????,???</p>
                  <p>??????,??????,????????????</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  ??? 51,800
                </span>
              </div>
            </li>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg6} alt="???????????????"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>????????? ???</p>
                  <p>?????????</p>
                  <p>??????,??????,????????????,?????? ??????</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  ??? 13,200
                </span>
              </div>
            </li>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg7} alt="???????????????"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>?????? ?????? ???</p>
                  <p>?????????,???</p>
                  <p>FPS,??????,??????,???????????????</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  ??? 39,000
                </span>
              </div>
            </li>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg8} alt="???????????????"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>???????????? ??????</p>
                  <p>?????????,???</p>
                  <p>??????,????????????,????????????????????????</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  ??? 31,000
                </span>
              </div>
            </li>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg9} alt="???????????????"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>??? ???????????? 2</p>
                  <p>?????????,???</p>
                  <p>FPS,??????,PVP,???????????????</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  ??????
                </span>
              </div>
            </li>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg10} alt="???????????????"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>????????? ?????? ??? ?????????</p>
                  <p>?????????</p>
                  <p>????????????,??????,??????,RPG</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  ??? 21,800
                </span>
              </div>
            </li>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg11} alt="???????????????"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>????????????</p>
                  <p>?????????</p>
                  <p>???????????????,?????????,??????RPG</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  ??? 64,100
                </span>
              </div>
            </li>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg12} alt="???????????????"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>??????????????? 2077</p>
                  <p>?????????</p>
                  <p>????????????,RPG,???????????????</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  ??? 44,000
                </span>
              </div>
            </li>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg13} alt="???????????????"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>??????????????? 5 : ???????????? ????????? ?????????</p>
                  <p>?????????</p>
                  <p>????????????,RPG,???????????????</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  ??? 30,700
                </span>
              </div>
            </li>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg14} alt="???????????????"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>?????? ?????? ????????? 2</p>
                  <p>?????????</p>
                  <p>????????????,??????,?????????,??????</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  ??? 66,700
                </span>
              </div>
            </li>
            <li>
              <div className={mainSt.game_info_box}>
                <span className={mainSt.game_img}>
                  <img src={gameImg15} alt="???????????????"></img>
                </span>
                <span className={mainSt.game_info}>
                  <p>?????? ????????? ??? ??????</p>
                  <p>?????????</p>
                  <p>??????,??????,????????????,???????????????</p>
                </span>
              </div>
              <div className={mainSt.game_price}>
                <span>
                  ??? 26,700
                </span>
              </div>
            </li>
          </ul>
          <button className={mainSt.more_game}>?????? ??? ??????</button>
        </section>
      </div>
      </>
    );
  }
}

export default Main;