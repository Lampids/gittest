import React from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import "./Header.css";

class Header extends React.Component{
  componentDidMount()
  {
    let nindex = 0;
    $(".navi_button").on('click',function()
    {
      if(nindex == 0)
      {
        $(".header").css({"width":"360px"});
        $(".navi_button").css({"background-color":"rgb(255, 174, 120)"});
        nindex = 1;
      }
      else
      {
        $(".header").css({"width":"60px"});
        $(".navi_button").css({"background-color":"rgb(220, 228, 255)"})
        nindex = 0;
      }
    });

  }
  render()
  {
    return(
      <>
      <header className='header'>
        <button className='navi_button' />
          <ul className='navi'>
            <li>
              <Link to ="/Oldlsy/Lsyportfolio">포트폴리오</Link>
            </li>
            <li>
              <Link to ="/Oldlsy/Lsyintro">소개</Link>
            </li>
            <li>
              <Link to ="/Oldlsy">메인</Link>
            </li>
          </ul>
        {/* <ul className='navi'>
          <li>
            <Link to ="/">메인</Link>
          </li>
          <li>
            <Link to ="/intro">소개</Link>
          </li>
          <li>
            <Link to ="/portfolio">포트폴리오</Link>
          </li>
        </ul> */}
      </header>
      </>
    );
  }
}

export default Header;

// function App() {
//   return (
//     <>
//     <nav>
//       <ul>
//         <li><Link to ="/">Home</Link></li>
//         <li><Link to ="/books">Books</Link></li>
//       </ul>
//     </nav>
//     <Routes>
//       <Route path ="/" element={<Home />} />
//       <Route path ="/books" element={<Book />} />
//     </Routes>
//     </>
//   );
// }

// export default App;
