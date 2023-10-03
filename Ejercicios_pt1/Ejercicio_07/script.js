let year = parseInt(prompt("Introduce un año"))

if (((year%4==0)&&(year%100!=0))|| year%400==0) {
    alert("el año es bisiesto")
} else {
    alert("el año no es bisiesto")
}