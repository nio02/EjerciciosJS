//Punto 5
// Contar vocales. Pide al usuario una palabra y usa un for para contar cuántas vocales tiene.
const prompt = require("prompt-sync")();

let userString = prompt("Introduce una palabra: ");
let vocales = [
    "a",
    "e",
    "i",
    "o",
    "u"
];

let vocalesPalabra = [] //A diferencia de Python, cada vez que yo ejecute esto dentro del bucle se vuelve a declarar vacía, "reseteandola"

for (let i = 0; i < userString.length; i++){
    if (vocales.includes(userString[i]) == true){
        vocalesPalabra.push(userString[i]);
    };
}

console.log("Su palabra tiene " + vocalesPalabra.length + " vocales.")