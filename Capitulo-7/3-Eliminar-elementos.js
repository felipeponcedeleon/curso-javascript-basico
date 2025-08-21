
// Elimar elementos de un array

const numeros = [0, 1, 1.5, 2, 3, 4];

// Usando pop para eliminar el último elemento
const eliminarFinal = numeros.pop();
console.log(numeros); // [0, 1, 1.5, 2, 3]

// Usando shift para eliminar el primer elemento
const eliminarInicio = numeros.shift(); 
console.log(numeros); // [1, 1.5, 2, 3]

// Usando splice para eliminar en una posición específica
// (índice, cantidad a eliminar)
numeros.splice(1, 1); // En la posición 1, eliminar 1 elemento
console.log(numeros); // [1, 2, 3]

// Usando splice para eliminar varios elementos
numeros.splice(0, 2); // En la posición 0, eliminar 2 elementos
console.log(numeros); // [3]