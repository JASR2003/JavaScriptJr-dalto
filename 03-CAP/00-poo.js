// La programación orientada a objetos (POO) es un paradigma de programación que se centra en la creación de objetos que tienen propiedades y métodos que pueden interactuar entre sí para realizar acciones específicas. Esta es una forma de organizar y estructurar el código para hacerlo más modular, reutilizable y fácil de mantener.

//Ejemplo

// Definición de una clase "Persona"
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Creación de un objeto "persona1" a partir de la clase "Persona"
const persona1 = new Persona('Juan', 30);

// Llamada al método "saludar" del objeto "persona1"
persona1.saludar(); // Salida: Hola, mi nombre es Juan y tengo 30 años.

class animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `soy ${this.especie}, tengo ${this.edad} años de edad, y soy de color ${this.color}`
    }
    mostrarInfo() {
        console.log(this.info)
    }
}

let perro = new animal('Perro Bulldog Ingles', 1, 'blanco y marron');

perro.mostrarInfo();