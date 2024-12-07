import React from 'react'
import "./AlertStyle_cont.css"

function Alert_Cont(props) {
    let backColor = "defaultColor"; 
    let Color = "defaultColor"; 
    let icon = "defaultColor"; 


    if (props.show && props.show.title) { 
        if (props.show.title === "Success") {
            backColor = "#00cc0e";
            Color = "#004909";
            icon = "bx bx-check bx-tada";
                
            } else if (props.show.title === "Warning") {
                backColor = "#1c23ac";
                Color = "rgb(0, 255, 251)";
                icon = "bx bx-question-mark bx-tada";
                    
                // } else if (props.show.title === "Error") {
                //     backColor = "#ac1c1c";
                //     Color = "#540101";
                //     icon = "bx bx-error bx-tada'";

        } else {
            // backColor = "defaultColor";
            // Color = "defaultColor";
            // // setTimeout(() => {
            // //     props.setdate(null); 
            // // }, 2000);
        }
    }

    return (
        props.show && <div className='alert_cunt' style={{ backgroundColor: backColor}}>
            <i className=  {`in ${icon}`}></i>
            <h5 className='alert_massed' style={{color:Color}}>{props.show.title}</h5>
            <p className='alert_massed-text'>{props.show.massage}</p>
        </div>
    )
}

export default Alert_Cont;
