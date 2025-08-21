
// Agregar elementos a un array
const numeros = [1, 2, 3];

// Usando push para agregar al final
numeros.push(4);
console.log(numeros); // [1, 2, 3, 4]

// Usando unshift para agregar al inicio
numeros.unshift(0, 5); 
console.log(numeros); // [0, 1, 2, 3, 4]

// Usando splice para agregar en una posición específica
// (índice, cantidad a eliminar, elementos a agregar)
numeros.splice(2, 0, 1.5); // En la posición 2, no eliminar nada, agregar 1.5
console.log(numeros); // [0, 1, 1.5,