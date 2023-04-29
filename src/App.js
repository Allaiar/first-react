import "./style.scss";
import Swiper from "./Swiper";
import Swiper2 from "./Swiper2"
//импортировали кампонент

function App() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <Swiper />
          {/*здесь вызываем компанент swiper и даем ему ключ name*/}
          <Swiper2 name="Аллаяр" />
        </div>
      </header>
    </div>
  );
}

export default App;
