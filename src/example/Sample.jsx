import React from 'react'
import TestComponent from './TestComponent'
const Grapes=()=>{
    return(
        <div>
            grapes are good
        </div>
    )
}
const Mango=()=>{
    return(
        <div>
            <h2>mangoes are sweet</h2>
        </div>
    )
}
function Sample() {
    return (  
        <div>
            Sample
            <Mango /> 
            <Grapes />
            <TestComponent/>
        </div>
    );
}

export default Sample;