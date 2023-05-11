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
        </div>
          <Swiper2 data="2023" />
      </header>
    </div>
  );
}

// import React, { useState } from "react";

// const App = () => {
//   const [state, setState] = useState(10);
//   const [color, setColor] = useState('white');
//   const [value, setValue] = useState('')
//   const [pass, setPass] = useState('')

//   let red = (pass.length < 3 && pass.length > 0) && 'red'
//   let yellow = (pass.length <= 6 && pass.length > 3) && 'yellow'
//   let green = (pass.length > 6) && 'green'

//   return (
//     <div>

//       <input type="text" onChange={(e) => setPass(e.target.value)}/>
//       <div
//         style={{
//           width: "200px",
//           height: "200px",
//           border: "2px solid black",
//           background: (red || yellow || green)
//         }}></div>
//       <div
//         style={{
//           width: "200px",
//           height: "200px",
//           border: "2px solid black",
//           background: color,
//           color: (color === "black" || color === "blue" || color === "white") && "white",
//         }}
//       >
//         {color}
//       </div>
//       <button onClick={() => setColor("red")}>Красный</button>
//       <button onClick={() => setColor("green")}>Зеленый</button>
//       <button onClick={() => setColor("yellow")}>Желтый</button>
//       <button onClick={() => setColor("blue")}>Синий</button>
//       <button onClick={() => setColor("black")}>Черный</button>
//       <button onClick={() => setColor("white")}>Очистить</button>

//       <input onChange={(e) => setValue(e.target.value)} type='text'/>
//       <h1>{value}</h1>
//       <div
//         style={{
//           width: "200px",
//           height: "200px",
//           border: "2px solid black",
//           background: color ? "green" : "white",
//         }}
//       ></div>
//       <button onClick={() => setColor(!color)}>
//         {color ? "Убрать" : "Закрасить"}
//       </button>
//       <h1>Счет: {state}</h1>
//       <button onClick={() => setState((state) => state + 1)}>Добавить</button>
//       <button onClick={() => setState((state) => state - 1)}>Отнять</button>
//     </div>
//   );
// };

export default App;
