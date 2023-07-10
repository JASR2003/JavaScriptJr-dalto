// console.assert() - Aparece un mensaje de error en la consola si la afirmación es falsa. y si es verdadera, no aparece nada (no es estandar)

console.assert(5 < 3) // pone "Assertion failed" ya que es falso, si fuese cierto, directamente no muestra nada en consola (actualmente no se usa)

// console.clear() - limpiar la consola

console.clear(); //la consola se vacia

// console.error() - muestra un mensaje de error en la consola web

console.error("cagaste") // muestra un mensaje de error en la consola

// console.info() - emite un mensaje informativo a la consola web, en firefox y chrome, se muestra un pequeño icono "i" junto a esos elementos en el registro web de la consola

console.info("bien hecho pero ya no sirve"); //mensaje informativo

// console.log() - muestra un mensaje en la consola web o interprete de JS

console.log(variable); //mensaje depuración

// console.table() - esta función toma un argumento obligatorio: Data, que debe ser un array o un objeto y un parametro adicional: columns y nos muestra una tabla en consola

console.table([1,2,3,4,5,6,7,8,9,10,11,12]); // el resultado que muestra en consola es el siguiente

// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │    0    │   1    │
// │    1    │   2    │
// │    2    │   3    │
// │    3    │   4    │
// │    4    │   5    │
// │    5    │   6    │
// │    6    │   7    │
// │    7    │   8    │
// │    8    │   9    │
// │    9    │   10   │
// │   10    │   11   │
// │   11    │   12   │
// └─────────┴────────┘

// console.warn() - imprime un mensaje de advertencia en la consola web

console.warn("pendiente de una mosca") //advertencia

// console.dir() - despliega una lista interactiva de las propiedades del objeto JavaScript especificado (no estandar)

console.dir([1, 2, 3, 4]);