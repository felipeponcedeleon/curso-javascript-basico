
// Eliminar elementos de un arreglo
let lenguajes = ['JavaScript', 'Python', 'Ruby', 'Java', 'C++'];
console.log(lenguajes);

// Forma 1: Asignar un nuevo arreglo vacío
lenguajes = []; 
console.log(lenguajes);

// Forma 2: Establecer la longitud a 0
let consolas = ['PS4', 'Xbox', 'Nintendo Switch'];
console.log(consolas);
consolas.length = 0; 
console.log(consolas);

// Forma 3: Usar splice para eliminar todos los elementos
let frutas = ['Manzana', 'Banana', 'Cereza', 'Durazno'];
console.log(frutas);
frutas.splice(0, frutas.length);
console.log(frutas);


