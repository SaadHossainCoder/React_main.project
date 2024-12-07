// import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import Hero from './Components/Hero';
import NaveBar from './Components/NaveBar';
import Alert from './Components/Alert_Cont';
function App() {
  const [mood, setMode] = useState("black");
  // console.log(mood);
  

  const handelDark = () => {
    if(mood === "black") {
    setMode("white");
    // console.log("yeas");
    document.body.style.backgroundColor ="white";
    heldShow("Success","change to white mood");
    
  }else{
    setMode("black");
    // console.log("no");
    document.body.style.backgroundColor ="black";
    heldShow("Success","change to black mood");
    }
  };

  const [show,setShow] = useState();

  const heldShow = (title,massage) => {
  setShow({
    title: title, 
    massage: massage,
  });
  setTimeout(() => {
    setShow(null);
  }, 1500);
  };

  return (
  <>
  <NaveBar mood={mood} handelDark={handelDark} alert={heldShow} heldShow={heldShow}  setdate={setShow}/>
  <Alert show={show} heldShow={heldShow} setdate={setShow}/>
  <Hero headline= "Enter anything " mood={mood} heldShow={heldShow}  setdate={setShow}/>
  </>  
  );
}

export default App;
