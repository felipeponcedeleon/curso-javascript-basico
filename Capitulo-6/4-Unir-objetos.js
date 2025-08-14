
// Unir objetos en JavaScript
// Puedes unir dos o más objetos en JavaScript utilizando diferentes métodos.
// Existen varias formas de hacerlo, aquí veremos las dos mas comunes:
//
// 1. Utilizando Object.assign()
// 2. Utilizando la sintaxis de objetos literales

// Unir objetos con Object.assign()
const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
};

const cliente = {
    nombreCliente: "Juan",
    premium: true,
};


// Unir objetos utilizando Object.assign()
const objetoUnido = Object.assign(cliente, producto);
//console.log(objetoUnido);

// Resultado: { nombreCliente: 'Juan', premium: true, nombreProducto: 'Monitor 20 pulgadas', precio: 300, disponible: true }

// Unir objetos utilizando la sintaxis de objetos literales
// Esto crea un nuevo objeto que contiene las propiedades de ambos objetos.

const producto2 = {
    nombreProducto: "Monitor 27 pulgadas",
    precio: 450,
    disponible: true
};

const cliente2 = {
    nombreCliente: "Ana",
    premium: false,
};

const otroObjetoUnido = {
    producto2,
    cliente2
};
console.log(otroObjetoUnido);
// Resultado:
// { producto: { nombreProducto: 'Monitor 20 pulgadas', precio: 300, disponible: true },
//   cliente: { nombreCliente: 'Juan', premium: true } }
