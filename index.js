import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ScrollToTop from './ScrollTop';
import { HashRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
      <ScrollToTop />
      <App />
    </HashRouter>
);
 