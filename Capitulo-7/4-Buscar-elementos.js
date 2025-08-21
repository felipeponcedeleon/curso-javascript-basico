
// Buscar elementos en un array
// Usando indexOf para encontrar el índice de un elemento
const numeros = [1, 2, 3, 4, 5];
const indice = numeros.indexOf(3);
console.log(indice); // 2 (índice del elemento 3)

// Iniciando una búsqueda desde un índice específico
// Si el elemento no se encuentra, devuelve -1
// (indice del elemento, comenzando desde el índice 1)
const indiceDesde = numeros.indexOf(2, 1);
console.log(indiceDesde); // 1 (índice del elemento 2, comenzando desde el índice 1)

// LastIndex Of para encontrar el último índice de un elemento
const numerosRepetidos = [1, 2, 3, 2, 4, 2];
const ultimoIndice = numerosRepetidos.lastIndexOf(2);   
console.log(ultimoIndice); // 5 (último índice del elemento 2)

// Usando includes para verificar si un elemento está en el array
const contieneTres = numeros.includes(3);
console.log(contieneTres); // true (el array contiene el elemento 3)


