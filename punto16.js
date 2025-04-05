//Punto 16
// Fibonacci. Escribe una función que genere los primeros N números de la secuencia de Fibonacci.
const prompt = require("prompt-sync")();

let numUsuario = Number(prompt("Introduzca el valor de N: "));

function fibonacci(num){
    if (num == 1){
        return 0;
    } else if(num == 2){
        return 1;
    } else if(num > 2){
        return (fibonacci(num - 1) + fibonacci(num - 2));
    }
};

function serieFibo(num){
    let serie = [];
    for (let i = 1; i <= num; i++){
        serie.push(fibonacci(i))
    }
    console.log(`Los ${num} primeros numeros de la serie de fibonacci son:\n ${serie}`)
}

serieFibo(numUsuario)