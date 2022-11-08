"use strict"

let menu = {
    width: 200,
    height: 300,
    title: "Mi menú"
};

multiplyNumeric(menu);

function multiplyNumeric(men){

    for (let key in obj) {

        if (typeof obj[key] == "number") {
        obj[key] *= 2;
        }
    }
}