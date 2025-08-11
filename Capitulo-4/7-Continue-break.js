
// Continue y break 
// Continue: salta a la siguiente iteración del bucle
// Break: termina el bucle completamente
//
// Sintaxis con continue

const numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 3) {
        continue; // Salta el número 3
    }
    console.log(numeros[i]);
}

// sintaxis con break
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 3) {
        break; // Termina el bucle al encontrar el número 3
    }
    console.log(numeros[i]);
}