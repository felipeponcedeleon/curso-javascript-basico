
// Every
//
// El método every() comprueba si todos los elementos de un array cumplen con una condición y 
// devuelve true o false según corresponda.

// Sintaxis
// array.every(function(elemento, indice, array) {
//   // condición a evaluar
// }, thisArg);

//Comportamiento
// - Retorna true si TODOS los elementos cumplen la condición.
// - Retorna false si AL MENOS UN elemento no cumple la condición.
// - Deja de iterar en el primer elemento que no cumpla la condición.
// - No modifica el array original.

const numeros = [1, 2, 3, 4, 5];
const mayorACero = numeros.every((num) => num > 0);
console.log(mayorACero); // true

const numeros2 = [1, 2, 3, 4, 5];
const todosMenoresQue10 = numeros2.every((num) => num < 10);
console.log(todosMenoresQue10); // true

const numeros3 = [1, 2, 3, 4, 5, 11];
const todosMenoresQue10_2 = numeros3.every((num) => num < 10);
console.log(todosMenoresQue10_2); // false

const numeros4 = [1, 30, 39, 29, 10, 13];
const todosMenoresQue40 = numeros4.every((num) => num < 40);
console.log(todosMenoresQue40); // true

const productos = [
  { nombre: "Laptop", precio: 1000, stock: 5 },
  { nombre: "Mouse", precio: 25, stock: 0 },
  { nombre: "Teclado", precio: 75, stock: 3 }
];

const stockDisponible = productos.every((producto) => producto.stock > 0);
console.log(stockDisponible); // false
// En este caso, el método every() devuelve false porque al menos un producto (el Mouse) tiene stock 0.

// Array vacío
const arrayVacio = [];
const resultado = arrayVacio.every(num => num > 0);
console.log(resultado); // true (¡curioso!)
// every() devuelve true para arrays vacíos porque no hay elementos que fallen en la prueba.

// Casos de uso comunes
// - Validar formularios: Verificar que todos los campos estén llenos.
// - Permisos: Confirmar que un usuario tenga todos los permisos necesarios.
// - Requisitos: Validar que todos los elementos cumplan ciertos criterios.