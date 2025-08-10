
// Operadores de Comparación
// Los operadores de comparación se utilizan para comparar dos valores y devolver un booleano (true o false).
// Existen varios tipos de operadores de comparación: igualdad, desigualdad, mayor que, menor que, 
// mayor o igual que, menor o igual que, y estrictamente igual.

// Igualdad
let a = 5;
let b = '5';
console.log(a == b); // true, porque compara el valor, no el tipo
console.log(a === b); // false, porque compara el valor y el tipo

// Desigualdad
console.log(a != b); // false, porque el valor es igual
console.log(a !== b); // true, porque el tipo es diferente

// Mayor que y menor que
console.log(a > 3); // true, porque 5 es mayor que 3    
console.log(a < 10); // true, porque 5 es menor que 10
console.log(a >= 5); // true, porque 5 es mayor o igual que 5
console.log(a <= 5); // true, porque 5 es menor o igual que 5

// Comparación de cadenas
let str1 = 'apple'; 
let str2 = 'banana';
console.log(str1 < str2); // true, porque 'apple' es menor que 'banana' en orden alfabético
console.log(str1 > str2); // false, porque 'apple' no es mayor que 'banana'

// Comparación de booleanos
let bool1 = true;
let bool2 = false;
console.log(bool1 == bool2); // false, porque true no es igual a false
console.log(bool1 != bool2); // true, porque true es diferente de false
console.log(bool1 === true); // true, porque bool1 es estrictamente igual a true
console.log(bool2 === false); // true, porque bool2 es estrictamente igual a false

// Comparación de null y undefined
let nullValue = null;
let undefinedValue;
console.log(nullValue == undefinedValue); // true, porque ambos son considerados iguales en valor   
console.log(nullValue === undefinedValue); // false, porque son de tipos diferentes
console.log(nullValue != undefinedValue); // false, porque son considerados iguales en valor
console.log(nullValue !== undefinedValue); // true, porque son de tipos diferentes
console.log(nullValue == null); // true, porque nullValue es null
console.log(undefinedValue == undefined); // true, porque undefinedValue es undefined   
console.log(nullValue === null); // true, porque nullValue es estrictamente igual a null
console.log(undefinedValue === undefined); // true, porque undefinedValue es estrictamente igual a undefined    

