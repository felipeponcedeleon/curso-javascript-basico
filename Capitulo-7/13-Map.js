
// Map
// 
// es un método de arrays que crea un NUEVO array transformando cada elemento del 
// array original mediante una función.

// Sintaxis

// const nuevoArray = array.map(function(elemento, indice, array) {
  // retorna el elemento transformado
// }, thisArg);

// Comportamiento
// - Retorna un NUEVO array (no modifica el original)
// - Mantiene la misma longitud que el array original
// - Ejecuta la función para cada elemento en orden

// Durante la iteración, la función recibe tres argumentos:
// - elemento: El elemento actual que se está procesando en el array.
// - indice (opcional): El índice del elemento actual que se está procesando en el array.
// - array (opcional): El array sobre el cual se llamó el método map().

// Duplicación de números
const numeros = [1, 2, 3, 4, 5];
const numerosDoblados = numeros.map(num => num * 2);
console.log(numerosDoblados); // [2, 4, 6, 8, 10]

// Convertir a mayúsculas
const frutas = ['manzana', 'banana', 'naranja'];
const mayusculas = frutas.map(fruta => fruta.toUpperCase());
console.log(mayusculas); // ['MANZANA', 'BANANA', 'NARANJA']

// Extraer propiedades de objetos
const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
  { nombre: "Marta", edad: 28 }
];

const nombres = personas.map(persona => persona.nombre);
console.log(nombres); // ['Ana', 'Luis', 'Marta']

// Usando todos los argumentos
const numeros2 = [10, 20, 30];

const transformados = numeros2.map((num, index, arr) => {
  return {
    valor: num,
    posicion: index,
    arrayOriginal: arr
  };
});

console.log(transformados);
/*
[
  { valor: 10, posicion: 0, arrayOriginal: [10, 20, 30] },
  { valor: 20, posicion: 1, arrayOriginal: [10, 20, 30] },
  { valor: 30, posicion: 2, arrayOriginal: [10, 20, 30] }
]
*/

// Casos de uso comunes
// - Transformación de datos: Convertir datos a un formato diferente
// - Crear elementos UI: Generar listas de componentes en frameworks como React
// - Normalización de datos: Estandarizar valores en un array
// - Cálculos derivados: Crear nuevos valores basados en propiedades existentes