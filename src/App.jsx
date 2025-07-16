import React, { useState } from 'react';
import './App.css'
import FirstComp from './propsContainer/FirstComp';
import FourthComp from './propsContainer/FourthComp';
import SecondComp from './propsContainer/SecondComp';
import ThirdComp from './propsContainer/ThirdComp';
import StateMng from './StateMng';
import State from './StateMng';
import ClickEvent from './mouse_events/ClickEvent';
import DbClick from './mouse_events/DbClick';
import MouseOverOout from './mouse_events/MouseOverOout';
import KeyEvents from './mouse_events/KeyBoard';
import FormEvents from './mouse_events/FormEvents';
import EventListeners from './event_listeners/EventListeners';
//import img from './assets/image1.jpg'
{/*
import './App.css';
import Apple from './Apple'
// import Sample from './example/Sample';
function App() {
  return(
    <div className='App'>
   {/* <Apple/> */}
   {/* <Sample /> */}
{/*}
    </div>
  );
  
}

export default App;
*/}
{/*
let a="Apples"
function App() {
  return ( 
    <div className="container">
      <p className="para">
        this is paragraph
      </p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJhL16w51elwtdtMfsF3N9UlpeFnF5xl2bw&s" />
      <img src="/images/image1.jpg" alt="image is not loading" height="200px"/>
      <img src={img} />
    </div>
   );
}

export default App;
*/}
// const car={
//   model:"maruti",
//   year:"2025",
//   dealer:"nixon",
//   color:"red"
// }

function App() {
  const[sampleCondition,setSampleCondition]=useState(true)

  return ( 
    <div className='container'>
      {/* <FirstComp model={car.model}/>
      <SecondComp car={car}/> */}
      {/* <StateMng/> */}
      {/* {sampleCondition?<FirstComp/>:<SecondComp/>} */}
     {/* {sampleCondition?"this is true":"this is false"} */}
      {/* <ClickEvent/> */}
      {/* <DbClick/> */}
    {/* <MouseOverOout/> */}
    {/* <KeyEvents/> */}
    {/* <FormEvents/> */}
    <EventListeners/>
    </div>
   );
}

export default App;