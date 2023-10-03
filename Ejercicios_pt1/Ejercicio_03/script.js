let mins = prompt("Introduce tus minutos");

function ConvertMinutes(num){
    y = Math.floor(num/525600);
    d = Math.round(num-(y*525600))/1440;

    if(y>0){
        return(y + " años y " + d + " dias");
    }else{
        return(d+" dias");
    }
} 

console.log(ConvertMinutes(mins));
