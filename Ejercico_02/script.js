let num1 = prompt("introduce un numero");
let num2 = prompt ("introduce otro numero");

let frac = num1/num2;
let fracSt = frac.toString()
let subfrac = fracSt.indexOf(".");

console.log(fracSt.substring(subfrac));


