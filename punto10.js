//Punto 10
// Número primo. Pide un número al usuario y determina si es primo (divisible solo por 1 y por sí mismo).
const prompt = require("prompt-sync")();

let numUsuario = Number(prompt("Introduzca un número: "))

divisores = [];

for (let i = 1; i <= numUsuario; i++){
    if (numUsuario % i == 0){
        divisores.push(i)
    }
}

if (divisores.length >= 3){
    console.log("Su numero NO es primo")
} else {
    console.log("Su numero ES es primo")
}