import React from 'react';
import { Routes , Route } from "react-router-dom";
import NewMain from './Main/NewMain';
import MainPage from "./MainPage";
import Introduction from "./pages/Introduction";
import Netgeo from "./NG/Netgeo";
import Genshin from "./GS/Genshin";
import Insquare from './SQUARE/Insquare';
import Orange from "./OrangeBox/Orangebox";
import $ from 'jquery';
import "./App.css";

class App extends React.Component{
  componentDidMount()
  {

  }
  render()
  {
    return(
      <>
      <div className="wrap">
        <Routes>
          <Route path="/*" exact={true} element={<NewMain />} />
          <Route path="Oldlsy/*" element={<MainPage />} />
          <Route path="Netgeo/*" element={<Netgeo />} />
          <Route path="Genshin/*" element={<Genshin /> } />
          <Route path="InSquare/*" element={<Insquare />} />
          <Route path="OrangeBox/*" element={<Orange />} />
        </Routes>
      </div>
      </>
    );
  }
}

export default App;