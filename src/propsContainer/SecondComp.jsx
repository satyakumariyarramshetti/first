// function SecondComp(props) {
//     // return ( 
//     //     <div>
//     //     <p className="para">
//     //         {props.a},{"second"}
//     //     </p>
//     //     <p>{props.a},{'again printing second'}</p>
//     //     <p>second last one</p>
//     //     </div>
//     //  );
//     const {model,year,dealer,color} =props.car
//     return(
//         <section>
//              <div>
//                {model},{'model printed with all details'},
//                {year},
//                {dealer},
//                {color}
//              </div>
//         </section>
       
        
//     )

// }
const Child=(props)=>{
    const {model,year,dealer,color} =props.car
     return(
        <section>
             <div>
               {model},{'model printed with all details'},
               {year},
               {dealer},
               {color}
             </div>
        </section>
     )


}
// function SecondComp ({car}){
//     return(
//         <Child car={car}/>
//     )
// }
function SecondComp (props){
    return(
        <Child car={props.car}/>
    )
}


export default SecondComp;