import React, { useState,useEffect } from 'react';
const EventListeners=()=>{
    const[ScreenSize,SetScreenSize]=useState
({
    width:window.innerWidth,
    height:window.innerHeight
})
const updateScreensize=()=>{
    SetScreenSize({
    width:window.innerWidth,
    height:window.innerHeight,
   })
}
useEffect(()=>{
    window.addEventListener('resize',updateScreensize)
    return()=>{
        window.removeEventListener('resize',updateScreensize)

    }
},[])
    return(
        <div>
            <h1>
                <p style={{color:"red"}}>height of the screen:{ScreenSize.height}</p>
                <p style={{color:"blue"}}>width of the screen:{ScreenSize.width}</p>
            </h1>
        </div>
    )
}
export default EventListeners