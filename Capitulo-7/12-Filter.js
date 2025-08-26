
// Filter
//
// El método filter() crea un nuevo array con todos los elementos que cumplan la condición
// implementada por la función dada.
// No modifica el array original.

// Sintaxis
// arr.filter(callback(element[, index[, array]])[, thisArg])
// callback: Función que se ejecuta en cada elemento del array, tomando tres argumentos:
// element: El elemento actual que se está procesando en el array.
// index (opcional): El índice del elemento actual que se está procesando en el array.
// array (opcional): El array sobre el cual se llamó el método filter().
// thisArg (opcional): Valor a usar como this cuando se ejecute callback.
// Retorna un nuevo array con los elementos que cumplan la condición.

const numeros = [1, 2, 3, 4, 5, 6];
const numerosPares = numeros.filter(num => num % 2 === 0);
console.log(numerosPares); // [2, 4, 6]

const palabras = ['spray', 'limite', 'elite', 'exuberante', 'destrucción', 'presente'];
const largoPalabras = palabras.filter(palabra => palabra.length > 6);
console.log(largoPalabras); // ['exuberante', 'destrucción', 'presente']

const personas = [
    { nombre: 'Catalina', edad: 25 },
    { nombre: 'Camila', edad: 30 },
    { nombre: 'Fernando', edad: 35 },
    { nombre: 'Ana', edad: 28 }
];
const adultos = personas.filter(persona => persona.edad >= 30);
console.log(adultos); // [{ nombre: 'Camila', edad: 30 }, { nombre: 'Fernando', edad: 35 }]

// Casos de uso comunes
// - Filtrado de datos: Extraer elementos que cumplen ciertos criterios
// - Búsqueda avanzada: Encontrar elementos que coincidan con múltiples condiciones
// - Limpieza de datos: Eliminar elementos no deseados de un array
// - Transformaciones: Crear subarrays basados en propiedades específicas
// - Validaciones: Verificar si todos los elementos cumplen una condición específica
// - Análisis de datos: Agrupar o segmentar datos según ciertos atributos