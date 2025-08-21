
// Unir arrays con join
let elementos = ['Fuego', 'Agua', 'Tierra', 'Aire'];
console.log(elementos);
let unidos = elementos.join(', '); // Puedes usar cualquier separador
console.log(unidos);

// Unir arrays con join y un separador diferente
let unidos2 = elementos.join(' - ');
console.log(unidos2);

// Unir arrays con join y sin separador
let unidos3 = elementos.join('');   
console.log(unidos3);

// Unir arrays con join y un separador personalizado
let unidos4 = elementos.join(' | ');
console.log(unidos4);

// Dividir con split
let texto = 'JavaScript,Python,Ruby,Java,C++';
let lenguajes = texto.split(','); // Divide el texto en un arreglo
console.log(lenguajes);

// Dividir con split y un separador diferente
let texto2 = 'HTML;CSS;JavaScript';
let lenguajes2 = texto2.split(';'); // Divide el texto en un arreglo
console.log(lenguajes2);

