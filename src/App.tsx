import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Card, { Döner, Pommes } from "./Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
      <h1>Willkomen Osman</h1>
      <Card />
      <Card />
      <Card />
      <Döner />
      <Döner />
      <Döner />
      <Pommes />  
      <Pommes />  
      <Pommes />  



    </>
  );
}

export default App;
