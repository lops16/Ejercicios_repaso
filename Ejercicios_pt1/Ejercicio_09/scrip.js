while (true) {
    let comment = prompt("Dile algo a Bob")

    if(comment.includes("!") && comment.includes("?")){
        alert("¡Eh!, ¡Tranquilízate! Yo sé lo que hago")
    }else if (comment.includes("!")) {
        alert("¡Eh!, Tranquilízate")
    }else if (comment.includes("?")) {
        alert("¡Claro!")
    }else if (comment.length === 0) {
        alert("Vale, con que esas tenemos…")
    }else{
        alert("Sin más")
    }
    
}