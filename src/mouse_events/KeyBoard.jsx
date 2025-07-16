import React, { useState } from 'react';

const KeyEvents=()=>{
    const[key,setKey]=useState(" ")
    const KeyDown=(event)=>{
       setKey(`Key Down: ${event.key}`);
    }
     const KeyUp=(event)=>{
        setKey(`key up:${event.key}`)
    }
     const Keypress=(event)=>{
        console.log(`key press,${event.key}`)
    }
    return(
        <div>
        <input
        type='text'
        placeholder='type something'
        onKeyUp={KeyUp}
        onKeyDown={KeyDown}
        onKeyPress={Keypress}
        />
        <p>{key}</p>
        </div>
    )

}
export default KeyEvents
