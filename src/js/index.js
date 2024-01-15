//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
function simpleCounter(props) {}
let counter = 0;
//render your react application
setInterval(() => {
  counter += 1;
  let primerNumero = Math.floor((counter / 1) % 10);
  let segundoNumero = Math.floor((counter / 10) % 10);
  let tercerNumero = Math.floor((counter / 100) % 10);
  let cuartoNumero = Math.floor((counter / 1000) % 10);
  let quintoNumero = Math.floor((counter / 10000) % 10);
  let sextoNumero = Math.floor((counter / 100000) % 10);
  console.log("primer numero", Math.floor(counter / 1) % 10);
  ReactDOM.render(
    <Home
      seis={sextoNumero}
      cinco={quintoNumero}
      cuatro={cuartoNumero}
      tres={tercerNumero}
      dos={segundoNumero}
      uno={primerNumero}
    />,
    document.querySelector("#app")
  );
}, 1000);
