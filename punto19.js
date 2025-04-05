//Punto 19
// Números perfectos
// Escribe un programa que encuentre los números perfectos entre 1 y 1000. Un número perfecto es igual a la suma de sus divisores (excluyendo el propio número).

function sumaArray(array){
    let suma = 0;
    for (i = 0; i < array.length; i++){
        suma += array[i]
    };
    return suma
};

function divisores(num){
    let divisores = [];
    //Divisores completos
    for (let i = 1; i <= num; i++){
        if (num % i == 0){
            divisores.push(i)
        }
    };
    //Quitar el numero propio
    for (let j = 0; j < divisores.length; j++){
        if (divisores[j] == num){
            divisores.splice(j, 1)
        }
    };
    return divisores
};

function numerosPerfectos(num){
    let perfectos = [];
    for (let i = 1; i <= num; i++){
        if (sumaArray(divisores(i)) == i){
            perfectos.push(i)
        }
    }
    return perfectos
};

console.log(`Los números perfectos entre 1 y 1000 son:\n ${numerosPerfectos(1000)}`);
