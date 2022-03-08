function add (num1,num2) {
    return num1+num2
  }
  
  function sub (num1,num2) {
    return num1-num2
  }
  
  
  // // OR another way of using export default
  
  // export default function add (num1,num2) {
  //   return num1+num2
  // }
  
   function mult (num1,num2) {
    return num1*num2
  }
   
  //export default add 
  //export {mult}
 
  const calFunctions = {
      add,
      sub,
      mult,
      div
  }

  export  default calFunctions