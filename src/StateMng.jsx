 import React, { useState,useEffect } from 'react';
// function State() {
//     const[city,setCity]=useState('hyd')
//    // console.log(city)
//    if(city=='hyd'){
//     setCity('AP')
//    }
//    // if we use here else then it becomes to an infinite loop.
//     return ( 
//         <div>
//             <p>I am living in {city}</p>
//         </div>
//      );
// }

// export default State;
const StateMng =()=>{
    const[city,setCity]=useState('hyd')
    useEffect(()=>{
    if (city=='hyd'){
        setCity('AP')
    }
    else{
        setCity('Delhi')
    }

    },[])
   
    return(
        <div>
        StateMng {city}

        </div>
    )
}
export default StateMng