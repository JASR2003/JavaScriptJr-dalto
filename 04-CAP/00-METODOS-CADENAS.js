let cadena = 'cadena de prueba prueba';
let cadena2 = 'cadena';

//concat() -- junta dos o más cadenas y retorna una sola

console.log(cadena.concat(cadena2)); // muestra en consola "cadena de prueba cadena"


// startsWith() -- si una cadena comienza con los caracteres de la otra cadena, devuelve true, si no, devuelve un false

console.log(cadena.startsWith(cadena2)); // muestra en consola "true"

// endsWith() -- si una cadena termina con los caracteres de la otra cadena, devuelve true, si no, devuelve un false

console.log(cadena.endsWith(cadena2)); // muestra en consola "false"


// includes() -- si una cadena puede encontrarse dentro de otra cadena, devuelve true, si no, devuelve false

console.log(cadena.includes(cadena2)); // muestra en consola "true"

// indexOf() -- si una cadena puede encontrarse dentro de otra cadena nos va a devolver la posición donde empieza la primera palabra que se pase, si no está devuelve -1

console.log(cadena.indexOf("prueba")); // muestra en consola "10" ya que ahí está la  de "prueba"

// lastIndexOf() -- si una cadena puede encontrarse dentro de otra cadena nos va a devolver la posición donde empieza la ultima palabra que se pase, si no está devuelve -1

console.log(cadena.lastIndexOf("prueba")); // muestra en consola "17" ya que ahí está la p de "prueba"

// padStart(10, "1") -- si el texto tiene por ejemplo 3 caracteteres, el padStart va a rellenar con siete "1" para que el total de caracteres en la cadena sea 10 caracteres

console.log(cadena.padStart(50, "homero")); // regresa "homerohomerohomerohomerohomcadena de prueba prueba"

// padEnd(10, "1") -- lo mismo pero en vez del comienzo es al final

console.log(cadena.padEnd(50, "homero")); // regresa "cadena de prueba pruebahomerohomerohomerohomerohom"

// repeat(2) -- repite la cadena la cantidad de veces que uno le pida

console.log(cadena.repeat(3)); // regresa "cadena de prueba pruebacadena de prueba pruebacadena de prueba prueba"