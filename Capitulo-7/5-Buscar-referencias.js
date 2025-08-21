
// Buscar referencias en un array
const referencias = [
    { id: 1, nombre: 'Referencia A' },
    { id: 2, nombre: 'Referencia B' },
    { id: 3, nombre: 'Referencia C' }   
];

// Usando find para buscar una referencia por su nombre
// Devuelve el primer elemento que cumple con la condición
const consulta = referencias.find(referencia => 
    referencia.nombre === 'Referencia C' 
);

console.log(consulta); // { id: 2, nombre: 'Referencia B' }

// Usando findIndex para encontrar el índice de una referencia por su id
// Devuelve el índice del primer elemento que cumple con la condición
const indice = referencias.findIndex(referencia => 
    referencia.id === 3
);

console.log(indice); // 2