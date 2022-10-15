import "./button.css"
import React, {useState, useEffect} from "react"

function Button(props) {
  const [colorBtn , setColorBtn] = useState ({
    backgroundcolor: "rgb(15, 31, 58)",
  });
  console.log("%cRenderizar componente")

useEffect(()=>{
  console.log("Montaje del componente");

}, []);

  function handleClick(){
    setColorBtn({backgroundcolor: "rgb(800, 80, 80)"});
  }
  return (
    <button onclick= {handleClick} style={colorBtn} className="btn">
      {props.children}
    </button>
  ) 
}

export default Button;