import {React, useState} from "react";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Cards from "./components/cards/Cards";
import Menu from "./components/menu/Menu";
import './app.scss'


function App() {
  const [menuOpen, setMenuOpen]= useState(false);

  return (
    <div className="App">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className='sections'>
      <Intro />
      <Portfolio />
      <Works/>
      <Cards/> 
      <Contact className='contact'/>

    </div>
    </div>
  );
}

export default App;
