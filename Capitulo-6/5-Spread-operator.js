
// Spread operator en objetos
// El spread operator (operador de propagación) permite expandir un objeto en otro objeto o en un array.
// se utiliza el operador `...` para descomponer un objeto en sus propiedades individuales.
// Esto es útil para combinar objetos, clonar objetos o agregar propiedades a un objeto existente.
//
// Cómo usar el spread operator con objetos:

const persona = {
    nombre: 'Catalina',
    edad: 39,
    ciudad: 'San Pedro de Atacama',
};

// Clonar un objeto utilizando el spread operator
const personaClonada = { ...persona };
console.log(personaClonada);
// Resultado: { nombre: 'Catalina', edad: 39, ciudad: 'San Pedro de Atacama' }

// Agregar propiedades a un objeto existente
const personaConTrabajo = {
    ...persona,
    profesion: 'Astrónoma',
    pais: 'Chile',
};
console.log(personaConTrabajo);
// Resultado: { nombre: 'Catalina', edad: 39, ciudad: 'San Pedro de Atacama', profesion: 'Astrónoma', pais: 'Chile' }

// Combinar dos objetos utilizando el spread operator
const contacto = {
    email: 'catalina@alma.cl',
    telefono: '123456789',
};

const personaCv = {
    ...persona,
    ...contacto,
};

console.log(personaCv);
// Resultado:   
// { nombre: 'Catalina', edad: 39, ciudad: 'San Pedro de Atacama', email: 'catalina@alma.cl', telefono: '123456789' }

// Usar el spread operator para unir objetos
const producto = {
    nombreProducto: 'Telescopio',
    precio: 1500,
    disponible: true,
};
const cliente = {
    nombreCliente: 'Carlos',
    premium: true,
};
// Unir objetos utilizando el spread operator
const objetoUnido = {
    ...producto,
    ...cliente,
};
console.log(objetoUnido);
// Resultado:
// { nombreProducto: 'Telescopio', precio: 1500, disponible: true, nombreCliente: 'Carlos', premium: true }



