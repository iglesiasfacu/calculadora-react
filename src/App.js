import "./App.css";
import FreeCodeCamp from "./images/FreeCodeCamp.png";
import Boton from "./components/Boton.jsx";
import Pantalla from "./components/Pantalla.jsx";
import BotonClear from "./components/BotonClear.jsx";
import React, { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const agregarInput = (value) => {
    setInput(input + value);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Ingrese un valor antes de realizar un cálculo");
    }
  };

  return (
    <div className="App">
      <div className="fcc-logo-container">
        <img src={FreeCodeCamp} alt="logo=freeCodeCamp" className="fcc-logo" />
      </div>
      <div className="container-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton handleClick={agregarInput}>1</Boton>
          <Boton handleClick={agregarInput}>2</Boton>
          <Boton handleClick={agregarInput}>3</Boton>
          <Boton handleClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={agregarInput}>4</Boton>
          <Boton handleClick={agregarInput}>5</Boton>
          <Boton handleClick={agregarInput}>6</Boton>
          <Boton handleClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={agregarInput}>7</Boton>
          <Boton handleClick={agregarInput}>8</Boton>
          <Boton handleClick={agregarInput}>9</Boton>
          <Boton handleClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={calcularResultado}>=</Boton>
          <Boton handleClick={agregarInput}>0</Boton>
          <Boton handleClick={agregarInput}>.</Boton>
          <Boton handleClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear handleClick={() => setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
