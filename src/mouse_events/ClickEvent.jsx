import React, { useState,useEffect } from 'react';
const ClickEvent=()=>{
   const [value,setValue]=useState(0)
   const Increment=()=>{
    setValue(value+1)
   
   }
   const Decrement=()=>{
        if (value>0){
       
        setValue(value-1)
        
    }
    
   }
   const reset=()=>{
        setValue(0)
    }
    return(
        <div> 
          <h1>
          {value}
          </h1>
          <button onClick={Increment}>increment</button>
          <button onClick={Decrement}>decrement</button>
          <button onClick={reset}>reset</button>
        </div>

    )
}
export default ClickEvent