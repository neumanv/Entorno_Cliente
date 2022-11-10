"use strict"

let salaries = {   
    Harry: 100,
    Ron: 160,
    Hermione: 130
}

let sum = salaries.Harry + salaries.Ron + salaries.Hermione;

//si el resultado es NaN muestra un 0
if(isNaN(sum)){
    alert(0);
}else{
    alert(sum);
}