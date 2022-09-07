import "./Casio.css";
import { useState } from "react";

 export default function Casio(){
   const[digits, run]=useState("");
   const[result, setResult]=useState("");

   const operands=["/", "*", "+", "-", "."];

  const updateCalc= value=>{
    if(operands.includes(value) && digits === '' ||
       operands.includes(value) && operands.includes(digits.slice(-1)
       ) 
       ){
         return;  
        }
        run(digits + value)
        if (!operands.includes(value)){
          setResult(eval(digits+ value).tostring());
        }
  }
  

   const updateCal=(event)=>{
     run(digits.concat(event.target.value));
   }
   const clear=()=>{
     run("")
   }
   const back=()=>{
     run(digits.slice(0,-1));
   }
   
    const calculate =()=>{
      run(eval(digits));
    } 
  return(
    <div className="cal">
      <div className="output">
       {digits || "0"} {result}
         
      </div>
   
       <button onClick={updateCal} value="1">1</button>
       <button onClick={updateCal} value="2">2</button>
       <button onClick={updateCal} value="3">3</button>
       <button onClick={()=> updateCalc('/')} >/</button>
       <button onClick={updateCal} value="4">4</button>
       <button onClick={updateCal} value="5">5</button>
       <button onClick={updateCal} value="6">6</button>
       <button onClick={()=> updateCalc('*')} >*</button> 
       <button onClick={updateCal} value="7">7</button>
       <button onClick={updateCal} value="8">8</button>
       <button onClick={updateCal} value="9">9</button>
       <button onClick={()=> updateCalc('+')} >+</button>
       <button onClick={updateCal} value="0">0</button>
       <button onClick={clear}>AC</button>
       <button onClick={back} >BKSP</button>
       <button onClick={()=> updateCalc('-')}  >-</button>
       <button onClick={calculate} className="bottom" >=</button>
       <button onClick={()=> updateCalc('.')} >.</button>
    </div>
    
  );
} 
