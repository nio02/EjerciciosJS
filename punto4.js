//Punto 4
// Tabla de multiplicar
// Escribe un programa que imprima la tabla de multiplicar del 1 al 10 para un número ingresado por el usuario.
const prompt = require("prompt-sync")();

let userNumber = Number(prompt("Introduce un número: "));
let counter = 1;

while (counter <= 10){
    multiplo = userNumber * counter;
    console.log("Su numero", userNumber, "x", counter, "es igual a:", multiplo)
    counter = counter + 1
}