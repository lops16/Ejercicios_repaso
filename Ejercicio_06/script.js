function alquiler(Age) {
    if (Age >= 18) {
        let carnet = prompt("¿Tienes carnet de conducir?");
        if (carnet === "si") { 
            let nombre = prompt("Introduce tu nombre y apellido");
            let city = prompt("Introduce un ciudad");
            let days = parseInt(prompt("Introduces el numero de dias de alquiler"));
            let dayprice = 25;
            let weekprice = 150;
            if (days<=6) {
                console.log("Nombre: ", nombre," Ciudad: ", city," Precio: ", days*dayprice,"€")
                
            }
            
            if (days == 7) {
                console.log("Nombre: ", nombre," Ciudad: ", city," Precio: ", weekprice,"€")
                
            }
            
            if (days>=8) {
                console.log("Nombre: ", nombre," Ciudad: ", city," Precio: ", weekprice + (dayprice*(days-7)),"€")
                
            }
        
        } else { alert("No puedes alquilar un coche")
            
        }

    
    } else {alert("Eres menor de edad")
        
    }
    
}


let askAge = parseInt(prompt("¿Cuantos años tienes?"));
alquiler(askAge)




