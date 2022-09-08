import { test } from './includes/functions.js';
import React, { useState } from 'react';


function add(a, b) {
	return a+b;
}

function div(a,b){
	return a/b;
}

const multiply = (a,b) => a*b;
const sub = (a,b) => a/b;
const exp = (a,b) => a**b;


function App() {

//const [Summing, setSumming] = useState("");

const [Summing, setSumming] = useState("");
const [Type, setType] = useState("");

const [first, setfirst] = useState("");
const [last, setlast] = useState("");


function setTypee(type) {

if (first !== "") {
	setType(type)
} else {
	//
}

}



function Qdata() {


switch (Type) {
  case '+':
    setfirst(parseInt(first)+parseInt(last))
    setlast('')
    setType('')
    break;
  case '-':
    setfirst(parseInt(first)-parseInt(last))
    setlast('')
    setType('')
    break;
  case '*':
    setfirst(parseInt(first)*parseInt(last))
    setlast('')
    setType('')
    break;
  case '/':
    setfirst(parseInt(first)/parseInt(last))
    setlast('')
    setType('')
    break;
  case '^':
    setfirst(parseInt(first)**parseInt(last))
    setlast('')
    setType('')
    break;
  case '%':
    setfirst(parseInt(first)%parseInt(last))
    setlast('')
    setType('')
    break;
    default:
    //alert('uwu :D ')
	setlast('')
    setType('')
}




setlast("")

}

function reset(){
setfirst("")
setlast("")
setType("")
}

const setDataz = (num) => {

if (Type === "") {

if (first === "")
	setfirst(num) 
else 
	setfirst(first+""+num) 

} else if (last == "") {

if (last === "")
	setlast(num) 
else 
	setlast(last+""+num) 


} else  {

if (last === "")
	setlast(num) 
else 
	setlast(last+""+num) 


} 

};


function Sum_up(){

if (Summing!== undefined && Summing!== "" && Type !== undefined && Type!== "") {


}

}

  return (

<div className="container">

<div className="Brdr">



<div className="btnd">
<span>{first}{Type}{last}</span>
</div>

<div className="btnd2">
<button className="btn" onClick={reset}>C</button>
<button className="btn" onClick={()=>setTypee('^')}>^</button>
<button className="btn" onClick={()=>setTypee('%')}>%</button>
<button className="btn" onClick={()=>setTypee('*')}>*</button>
<button className="btn" onClick={() => setDataz(1)}>1</button>
<button className="btn" onClick={() => setDataz(2)}>2</button>
<button className="btn" onClick={() => setDataz(3)}>3</button>
<button className="btn" onClick={()=>setTypee('/')}>/</button>
<button className="btn" onClick={() => setDataz(4)}>4</button>
<button className="btn" onClick={() => setDataz(5)}>5</button>
<button className="btn" onClick={() => setDataz(6)}>6</button>
<button className="btn" onClick={()=>setTypee('+')}>+</button>
<button className="btn" onClick={() => setDataz(7)}>7</button>
<button className="btn" onClick={() => setDataz(8)}>8</button>
<button className="btn" onClick={() => setDataz(9)}>9</button>
<button className="btn" onClick={()=>setTypee('-')}>-</button>
<div style={{width:'100%',borderTop:'1px solid #cda0a0'}}>
<button className="btn" style={{width:'20%',borderRight:'1px solid #cda0a0'}} onClick={() => setDataz(0)}>0</button>
<button className="btn" style={{width:'30%',borderRight:'1px solid #cda0a0'}}>.</button>
<button className="btn" onClick={Qdata} style={{width:'50%',background:'#'}}>=</button>
</div>
</div>





</div>
</div>
  );
}

export default App;
