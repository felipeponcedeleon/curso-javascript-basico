
// Instrucción Switch
// La instrucción switch se utiliza para ejecutar uno de varios bloques de código basados en el valor de una expresión.
//
// Sintaxis:
switch (expresion) {
    case valor1:
        // bloque de código a ejecutar si expresion es igual a valor1
        break;
    case valor2:
        // bloque de código a ejecutar si expresion es igual a valor2
        break;
    // se pueden agregar más casos según sea necesario
    default:
        // bloque de código a ejecutar si ninguna de las condiciones anteriores es verdadera
}

// Ejemplo de uso de switch para clasificar un día de la semana
let dia = 3; // 1: Lunes, 2: Martes, 3: Miércoles, etc.
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default: // Si el día no es válido
        console.log("Día inválido");
}

// Ejemplo de uso de switch para clasificar un mes del año
let mes = 5; // 1: Enero, 2: Febrero, etc
switch (mes) {
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Mayo");
        break;
    case 6:
        console.log("Junio");
        break;
    case 7:
        console.log("Julio");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Septiembre");
        break;
    case 10:
        console.log("Octubre");
        break;
    case 11:
        console.log("Noviembre");
        break;
    case 12:
        console.log("Diciembre");
        break;
    default: // Si el mes no es válido
        console.log("Mes inválido");
}   

// Ejemplo en un menú de usuario
let opcion = 2; // Supongamos que el usuario selecciona la opción 2
switch (opcion) {
    case 1:
        console.log("Opción 1: Ver perfil");
        break;
    case 2:
        console.log("Opción 2: Configuración");
        break;
    case 3:
        console.log("Opción 3: Ayuda");
        break;
    case 4:
        console.log("Opción 4: Salir");
        break;
    default: // Si la opción no es válida 
        console.log("Opción no válida");
}