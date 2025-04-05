//Punto 3
// Mayor de tres números
// Pide tres números al usuario e imprime cuál es el mayor.
const prompt = require("prompt-sync")();

let number1 = Number(prompt("Introduce el primer número: "));
let number2 = Number(prompt("Introduce el segundo número: "));
let number3 = Number(prompt("Introduce el tercer número: "));

if (number1 > number2 && number1 > number3){
    console.log("El mayor número es:", number1)
} else if(number2 > number1 && number2 > number3){
    console.log("El mayor número es:", number2)
} else {
    console.log("El mayor número es:", number3)
}