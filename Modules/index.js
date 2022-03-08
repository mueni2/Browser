//import add from './modules/calc.js';
//import addition from './modules/calc.js';
//import {multiply} from './modules/calc.js';
import calcF from './modules/calc.js'

 const input_num1 = document.querySelector('#num1');
const input_num2 = document.querySelector('#num2');
const div_result = document.querySelector('.result');
const btn_add    = document.querySelector('#add'); 
const btn_sub    = document.querySelector('#sub'); 
const btn_multiply = document.querySelector('#mult'); 


/*  const input_num1 = document.querySelector('#num1');
const input_num2 = document.querySelector('#num2');
const div_result = document.querySelector('.result');
const btn_multiply = document.querySelector('#mult');  */

input_num1.addEventListener('keyup',(e)=>{
  console.log(e.target.value);
})

input_num2.addEventListener('keyup',(e)=>{
  console.log(e.target.value);
})

btn_add.addEventListener('click',()=>{
  const temp_result = calcF.add(parseInt(input_num1.value),parseInt(input_num2.value))

  div_result.innerHTML = temp_result;
})

