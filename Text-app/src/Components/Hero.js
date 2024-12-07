import React, { useState } from "react";
import "./heroStyle.css";

function Hero(props) {
const [inputText, setInputText] = useState("");
const [outputText, setOutputText] = useState("");
const [binaryText, setBinaryText] = useState("");
const [text, setText] = useState("");

function handelOutput(e) {
setInputText(e.target.value);
}

const changeToUppercase = () => {
setOutputText(inputText.toUpperCase());

if (inputText.length > 0) { 
  props.heldShow("Success","Successfully convert to apartheid");
}
else {
  props.heldShow("Warning","Input field is empty");
}
};

const binary = () => {
setBinaryText(
inputText
    .split("")
    .map((char) => char.charCodeAt(0).toString(2))
    .join(" ")
    
);

if (inputText.length > 0) { 
  props.heldShow("Success","successfully convert to Binary");
}
else {
  props.heldShow("Warning","Input field is empty");
}
};

const allClear = () => {
    setInputText("");
    setOutputText("");
    setBinaryText("");
    setText("");

    if (inputText.length > 0) { 
      props.heldShow("Success","All clear");
    }
    else {
      props.heldShow("Warning","Input field is empty");
    }
};


// const textConvert= () =>{
//     setText =(binaryText.split(' ') 
//     .map(bin => String.fromCharCode(parseInt(bin, 2)))
//     .join('')); 
// };

const textConvert = () => {
    setText(binaryText.split(' ')
    .map(bin => String.fromCharCode(parseInt(bin, 2)))
    .join('')); 
        // setBinaryText("");
        if (binaryText.length > 0) { 
          props.heldShow("Success","Successfully convert binary to test");
        }
        else {
          props.heldShow("Warning","Input field is empty");
        }
};

return (
    <div className="hero_centner" style={{color:props.mood === "black"?"white":"black"}}>
    <label htmlFor="text" className="from_title" style={{color:props.mood === "black"?"white":"black"}}>
        {props.headline}
    </label >
    <input  style={{
        color: props.mood === "black" ? "white" : "black",
        borderColor: props.mood === "black" ? "white" : "black",
        
    }}
        type="text"
        id="text"
        className="input_text"
        value={inputText}
        onChange={handelOutput}
        placeholder="Enter your name"
    />
    <div className="but_box" style={{color:props.mood === "black"?"white":"black"}}>
        <button className="hero_btn" onClick={changeToUppercase}>
        convert to uppercase
        </button>
        <button className="hero_btn" onClick={binary}>
        convert to binary
        </button>
        <button className="hero_btn" onClick={allClear}>
        clear
        </button>
        
    </div>
      {/* when the button is clicked */}
    <p className="output" style={{color:props.mood === "black"?"white":"black"}}>{outputText}</p>
      {/* display the input text */}
    <p className="output length" style={{color:props.mood === "black"?"white":"black"}}>{inputText}</p>
      {/* display the length of the input text */}
    <p className="output length" style={{color:props.mood === "black"?"white":"black"}}>
        {
            inputText
            .trim()
            .split(/\s+/)
            .filter((word) => word).length
        }{" "}
        words and {inputText.length} characters
    </p>
      {/* time  */}

    <p className="output length" style={{color:props.mood === "black"?"white":"black"}}>
        {0.0008 *
        inputText
        .trim()
        .split(/\s+/)
        .filter((word) => word).length}{" "}
        Minutes how match time to read
    </p>
      {/* <p className="output length">{0.0008*inputText.length} Minutes how match time to read</p> */}
    <p className="output length" style={{color:props.mood === "black"?"white":"black"}}>{binaryText}</p>
      {/* display the binary of the input text */}

<button className="hero_btn" onClick={textConvert}>
        binary to test Convert
        </button>
  <p className="output" style={{color:props.mood === "black"?"white":"black"} }>{text}</p>
    </div>
);
}

export default Hero;
