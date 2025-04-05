// Punto 7
// Factorial
//  Escribe un programa que calcule el factorial de un número usando un for.
const prompt = require("prompt-sync")();

let numero = Number(prompt("Introduzca un numero: "));

let factorial = numero;

for (let i = 1; i < numero; i++){
    factorial = factorial * (numero - i)
};

console.log(`El factorial de !${numero} es: ${factorial}`);