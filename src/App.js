import './App.css';
import Slider from './Components/Slider/Slider.js'


function App() {
  return (
    <div>

      

      <h1 className="wrapper1">Need for drive</h1>
      <h2 className="wrapper2">Need for drive</h2>
      <h3 className="wrapper3">Каршеринг</h3>
      <h4 className="wrapper4">Поминутная аренда авто твоего города</h4>
      <button className="b1">Забронировать</button>
      <span><p className="spacer"></p></span>
      <h5 className="wrapper5">© 2016-2021 «Need for drive»</h5>
      <h6 className="wrapper6">Kinda telephone number</h6>
      <Slider />
    </div>
  );
}

export default App;
