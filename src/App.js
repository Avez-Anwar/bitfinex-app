import React, { useState, useEffect } from "react"
import logo from './logo.svg';
import './App.css';
import axios from "axios"
import Fetch from "./FetchData";
import Header from "./Header";
import "./Header.css"
import Sidebar from "./SideBar/Sidebar";
import Content from "./MainContent/Content";
import Footer from "./Footer/Footer";


function App() {

  return (
    <div className="App">
      {/* <Fetch /> */}
      <Header />
      <div className="App__content">
        <Sidebar />
        <Content />

      </div>
      <Footer />

    </div>
  );
}

export default App;
