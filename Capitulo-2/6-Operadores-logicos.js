
// Operadores lógicos
// Los operadores lógicos se utilizan para combinar o invertir valores booleanos.   
// Existen tres operadores lógicos principales: AND (&&), OR (||) y NOT (!).
//
// AND (&&)
let a = true;
let b = false;

console.log(a && b); // false, porque ambos deben ser true para que el resultado sea true
console.log(a && true); // true, porque al menos uno es true
console.log(false && false); // false, porque ambos son false

// OR (||)
console.log(a || b); // true, porque al menos uno es true
console.log(b || false); // false, porque ambos son false
console.log(false || true); // true, porque al menos uno es true

// NOT (!)
console.log(!a); // false, porque NOT invierte el valor de a    
console.log(!b); // true, porque NOT invierte el valor de b

// Combinación de operadores lógicos
let x = true;
let y = false;
let z = true;

console.log(x && (y || z)); // true, porque y || z es true, y x es true
console.log((x || y) && z); // true, porque x || y es true, y z es true
console.log(!(x && y)); // true, porque NOT invierte el resultado de x && y, que es false
