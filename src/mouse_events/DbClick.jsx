import React, { useState } from 'react';
const DbClick=()=>{
    const [clicked,SetClicked]=useState('double click here')
    const Double=()=>{
        SetClicked('you double clicked')
    }
    return(
        <div>
            <h1 onDoubleClick={Double}> {clicked}</h1>
           
        </div>

    )
}
export  default DbClick