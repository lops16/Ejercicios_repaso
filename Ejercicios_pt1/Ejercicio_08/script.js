
let num = prompt("Introduce un numero de tres cifras")

let arraynum = []
for (let i = 0; i < num.length; i++) {
    arraynum.push(parseInt(num[i]))
    
}

if (arraynum[0] % 2 === 0 && arraynum[1] % 2 === 0 && arraynum[2] % 2 === 0 ) {
    console.log("Pares")
    
}else if (arraynum[0] % 2 !== 0 && arraynum[1] % 2 !== 0 && arraynum[2] % 2 !== 0) {
    console.log("impares")
}else{
    console.log("mix")
}

//Solución 1
// let num = prompt("Introduce un numero de tres cifras")

// let arraynum = []
// for (let i = 0; i < num.length; i++) {
//     arraynum.push(parseInt(num[i]))
    
// }

// if (arraynum[0] % 2 === 0 && arraynum[1] % 2 === 0 && arraynum[2] % 2 === 0 ) {
//     console.log("Pares")
    
// }else if (arraynum[0] % 2 !== 0 && arraynum[1] % 2 !== 0 && arraynum[2] % 2 !== 0) {
//     console.log("impares")
// }else{
//     console.log("mix")
// }

//solucion 2

// let num = prompt("Introduce un numero de tres cifras")
// let par =0
// let impar = 0

// let arraynum = []
// for (let i = 0; i < num.length; i++) {
//     parseInt(num[i] % 2 === 0 ? par++ : impar++)
    
// }

// if(par === 0){
//     console.log("pares")
// }else if (impar === 0) {
//    console.log("impares")
// }else{
//     console.log(mix)
// }

//solucion 3

// let numero = prompt("Introduce un numero de tres cifras")
// let par =0
// let impar = 0

// for (let i = 0; i < num.length; i++) {
//     parseInt(num[i] % 2 === 0 ? (par = true) : (impar = false))
// }

// if (par && !impar) {
//     console.log("pares")
// }else if (!par && impar) {
//     console.log("impares")
// } else {
//     console.log("mix")
// }