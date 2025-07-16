import FourthComp from "./FourthComp";

const object={
    name:'object',
    age:20
}
function ThirdComp() {
    return ( 
        <div>
        <p className="para">
            <FourthComp name={object.name}/>third
        </p>
        </div>
     );
}

export default ThirdComp;