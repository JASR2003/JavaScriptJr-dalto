let whileNumber = 1;
while (whileNumber < 10) {
    console.log(whileNumber);
    whileNumber++;
} //Mientras la condición se cumpla se va a realizar lo que dice el bloque de codigo, hay que ser consientes de que el bucle es infinito mientras la condición se mantenga, por ende hay que tener cierto cuidado al utilizarla ya que eso puede traer ciertos problemas como que se cierre el programa

let doWhileNumber = 1;
do {
    console.log(doWhileNumber);
    doWhileNumber++;
    if (doWhileNumber == 9) {
        break; // es una forma de cortar el bucle
        continue; // es como el break solo que en vez de cortar el bucle se salta ese y sigue
    }
} while (doWhileNumber < 10); // el doWhile es practicamente lo mismo, solo que si lo hace la primera vez y despues pregunta, si no se cumple la condición solo se hace la primera, el while es pregunta y hace, el do es hace y pregunta

let forNumber = [1, 2, 3, 4, 5];

for (let i = 0; i < forNumber.length; i++) {
    console.log(forNumber[i])
} //acá es, i empieza como 0, mientras que i sea menor que el largo de forNumber se va a realizar el bucle y se le va a incrementar 1, cuando ya deje de ser así se va a cerrar el bucle

let numeros = [11, 22, 33, 44 , 55, 66, 77, 88, 99]

for(num in numeros) {
    console.log(num)
} // for...in es una estructura de bucle que se utiliza para recorrer todas las propiedades enumerables de un objeto, incluyendo los índices de un array

for(num of numeros) {
    console.log(num)
} // hace lo mismo pero en vez de mostrar posición muestra contenido