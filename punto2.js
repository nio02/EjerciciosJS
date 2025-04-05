//Punto 2
// Par o impar
// Pide un número al usuario y determina si es par o impar usando if.
const prompt = require("prompt-sync")();

let numero1 = Number(prompt("Introduce un número: "));

if (numero1 % 2 == 0){
    console.log("Su numero es PAR")
} else {
    console.log("Su numero es IMPAR")
};