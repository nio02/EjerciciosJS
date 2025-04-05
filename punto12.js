//Punto 12
// Número mayor. Escribe una función que reciba tres números y devuelva el mayor de ellos.
const prompt = require("prompt-sync")();

let numero1 = Number(prompt("Introduzca el primer numero: "));
let numero2 = Number(prompt("Introduzca el segundo numero: "));
let numero3 = Number(prompt("Introduzca el tercer numero: "));

function numeroMayor(num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        console.log(`El numero mayor es ${num1}`)
    } else if (num2 > num1 && num2 > num3){
        console.log(`El numero mayor es ${num2}`)
    } else {
        console.log(`El numero mayor es ${num3}`)
    }
};

numeroMayor(numero1, numero2, numero3)
