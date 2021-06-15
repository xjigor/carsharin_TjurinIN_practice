import './App.css';
import React, { useState } from "react";
import Slider from './Components/Slider/Slider.js'
import burgerMenu from'./menu_btn.svg';
import Menu from './burgerMenu/Menu';

function App() {
  const [menuActive, setMenuActive] = useState(false)

  const items = [{value:"парковка", href:"/parkovka"},
  {value:"страховка", href:"/strahovka"},
  {value:"бензин", href:"/benzin"},
  {value:"обслуживание", href:"/obcluzivanie"}]
  return (
    <div>
      <nav>
        <div className="nav">
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
        <img src={burgerMenu} alt="no download"></img>
        </div>
       </div>
      </nav>
      <main>
      <h1 className="wrapper1">Need for drive</h1>
      <h2 className="wrapper2">Need for drive</h2>
      <h3 className="wrapper3">Каршеринг</h3>
      <h4 className="wrapper4">Поминутная аренда авто твоего города</h4>
      <button className="b1">Забронировать</button>
      <span><p className="spacer"></p></span>
      <h5 className="wrapper5">© 2016-2021 «Need for drive»</h5>
      <h6 className="wrapper6">Kinda telephone number</h6>
      </main>
      <Menu active = {menuActive} setActive = {setMenuActive} items={items}/>
      <Slider />
    </div>
  );
}

export default App;
