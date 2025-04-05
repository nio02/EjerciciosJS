//Punto 1
//Crea un programa que solicite dos números al usuario y muestre su suma.
const prompt = require("prompt-sync")();

let numero1 = Number(prompt("Introduce el primer número: "));
let numero2 = Number(prompt("Introduce el segundo número: "));

let suma = numero1 + numero2;

console.log("El resultado de la suma es:", suma)