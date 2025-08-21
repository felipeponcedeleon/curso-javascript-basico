
// Combinar o dividir arreglos
let numeros1 = [1, 2, 3];
let numeros2 = [4, 5, 6];
console.log(numeros1);
console.log(numeros2);

// Forma 1: Usar concat para combinar arreglos
let numerosCombinados = numeros1.concat(numeros2);  
console.log(numerosCombinados);

// Forma 2: Usar el operador de propagación (spread operator)
let numerosCombinados2 = [...numeros1, ...numeros2];
console.log(numerosCombinados2);

// Extra
let letras = ['a', 'b', 'c'];
console.log(letras);

let masLetras = [...letras, 'd', 'e', 'f'];
console.log(masLetras);

// Forma 3: Usar push con el spread operator para agregar elementos de un arreglo a otro
let numeros3 = [7, 8, 9];
console.log(numeros3);
numeros1.push(...numeros3);

// Dividir un arreglo en dos partes con slice
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// (indice de inicio, indice de fin)
let parte1 = numeros.slice(0, 5); // Primeros 5 elementos
let parte2 = numeros.slice(5); // Restantes elementos  
console.log(parte1);
console.log(parte2); 
