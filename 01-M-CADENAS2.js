let cadena = 'cadena de prueba';
let cadena2 = 'cadena 2';
let cadenaNumber = 432;

// split() -- divide la cadena como se la pidamos en una array

console.log(cadena.split(" ")); // regresa "[ 'cadena', 'de', 'prueba'

// substring() -- La función substring toma dos argumentos: el índice donde comienza la subcadena y el índice donde termina la subcadena (no incluyendo este último índice). En este caso, el índice de inicio es 0 y el índice final es 4 (no incluyendo este último índice), por lo que la subcadena resultante es "Hola".

const substringCadena = "Hola mundo";
console.log(substringCadena.substring(0, 4)); // "Hola"

console.log(cadena.toLowerCase()); // devuelve todo en minusculas
console.log(cadena.toUpperCase()); // devuelve todo en mayusculas
console.log(cadenaNumber.toString()); // aparentemente no hace nada diferente, sigue viendose el 432, con la diferencia de que si se le pregunta el typeOf ya no dirá number, dirá string, esto sirve cuando necesitamos que el valor obligatoriamente sea un texto y no un numero

const cadenaTrim = "    Hola mundo    ";
console.log(cadenaTrim.trim()); //quita los espacios del comienzo y del final
console.log(cadenaTrim.trimStart()); //quita los espacios del comienzo
console.log(cadenaTrim.trimEnd()); //quita los espacios del final


