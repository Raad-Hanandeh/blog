
import { React,useReducer } from "react";
const intialState=0;

const moath=()=>{
const reducer=(State,action)=>{
switch (action){
    case "increment":
        return State+1;

        case "decrement":
           return State-1;

           case "reset":
            return intialState;

            default :
            return State;



}
};
    const[count,dispatch]= useReducer (reducer,intialState);
    
   return(

<div>
    <h1>count- {count}</h1>
    <button onClick={()=>dispatch("increment")}>increment</button>
    <button className="mx-5" onClick={()=>dispatch("decrement")}>decrement</button>
    <button onClick={()=>dispatch("reset")}>reset</button>
</div>
    

    );

};



export default moath;