let suma = prompt("Suma algo");
let posicion = suma.indexOf("+")
let sub1 = suma.substring(0, posicion);
let sub2 = suma.substring(posicion +1);
console.log("Los numero que quieres sumar son "+sub1+" y "+sub2)