
// Some
//
// El método some() comprueba si al menos un elemento de un array cumple con una condición y
// devuelve true o false según corresponda.
//
// Sintaxis
// array.some(function(elemento, indice, array) {
//   // condición a evaluar
// });
//
// Comportamiento
// - Retorna true si AL MENOS UN elemento cumple la condición.
// - Retorna false si NINGÚN elemento cumple la condición.
// - Deja de iterar en el primer elemento que cumpla la condición.
// - No modifica el array original.

const numeros = [1, 2, 3, 4, 5];
const mayorA3 = numeros.some((num) => num > 3);
console.log(mayorA3); // true

const edades = [25, 30, 17, 22];
const hayMenores = edades.some(edad => edad < 18);
console.log(hayMenores); // true (porque 17 < 18)

const numeros2 = [1, 3, 5, 7, 8, 9];
const hayPares = numeros2.some(num => num % 2 === 0);
console.log(hayPares); // true (porque el 8 es par)

const productos = [
  { nombre: "Laptop", precio: 1000, stock: 0 },
  { nombre: "Mouse", precio: 25, stock: 0 },
  { nombre: "Teclado", precio: 75, stock: 3 }
];

const hayStock = productos.some(producto => producto.stock > 0);
console.log(hayStock); // true (el Teclado tiene stock)

// Array vacío
const vacio = [];
const resultadoVacio = vacio.some(num => num > 0);
console.log(resultadoVacio); // false (ningún elemento cumple la condición)

// Casos de uso comunes
// - Búsqueda rápida: Verificar si existe al menos un elemento que cumpla un criterio
// - Validaciones: Comprobar si hay algún error en un conjunto de datos
// - Permisos: Verificar si un usuario tiene al menos un permiso específico
// - Filtros: Detectar si hay elementos que coincidan con un filtro