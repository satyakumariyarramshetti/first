import React, { useState } from 'react';
const MouseOverOout =()=>{
    const[text,setText]=useState('hover me')
    const[text1,setText1]=useState('hover me')
    const[text2,setText2]=useState('hover me')

    const MouseOver=()=>{
        setText("Mouse over done!")
    }
    const MouseOut=()=>{
        setText("Mouse out done!")
    }
    const MouseEnter=()=>{
        setText1("mouse entered")
    }
    const MouseLeave=()=>{
        setText1("mouse leave")
    }
    const MouseUp=()=>{
        setText2("mouse up")
    }
    const MouseDown=()=>{
        setText2("mouse down")
    }
    return(
        <div>
         <h1 onMouseOver={MouseOver} onMouseOut={MouseOut} onMouseEnter={MouseEnter}>{text}</h1>
         <br/>
         <h1  onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} >{text1}</h1>
         <br/>
          <h1  onMouseUp={MouseUp} onMouseDowne={MouseDown} >{text2}</h1>



        </div>

    )
}
export default MouseOverOout