import React, { useState } from 'react';
const FormEvents=()=>{
    const[value,setValue]=useState(" ")
    const[input,setInput]=useState(" ")
    const OnChange=(event)=>{
        setValue(event.target.value)

    }
    return(
        <form onSubmit={(e)=>{alert(`value: ${e.target.elements.inputName.value}`)}}
              onReset={()=>{alert('reset')}}>
            <input 
            type="text"
            name="inputName"
            onChange={OnChange}/>
            {/* // onChange={(e)=>{setValue(e.target.value)}}/> */}
            {value}
            <br/>
            <input
            type='text'
            onFocus={()=>{console.log('input focused')}}
            onBlur={()=>{console.log('input blured')}}
            />
            <input 
            type='text'
            placeholder='onChange'
            onChange={(e)=>(console.log(`onchange:${e.target.value}`))}
            />
            {/* {input} */}
             <input 
            type='text'
            placeholder='onInput'
            onInput={(e)=>{console.log(`onInput: ${e.target.value}`)}}
            />

            <button type='submit'>submit</button>
            <br/>
            <button type='reset'>reset</button>
        </form>

    )
}
export default FormEvents