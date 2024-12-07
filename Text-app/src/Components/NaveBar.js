import React from "react";
import "./naveStyle.css";

function NaveBar(props) {
  return (
    <header style={{borderColor:props.mood === "black"?"white":"black"}}>

      <i className='bx bxl-react search' style={{color:props.mood === "black"?"white":"black"}}></i>
      <h1 className="logo" style={{color:props.mood === "black"?"white":"black"}}>change to uppercase</h1>

<label className="switch" >
  <input type="checkbox" onClick={props.handelDark} />
  <span className="slider"></span>
</label>
  
    </header>
  );
}

export default NaveBar;
