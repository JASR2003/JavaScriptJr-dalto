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

// Otras caracteristicas

// Abstracción: la capacidad de definir un objeto en términos de sus características y comportamientos esenciales, sin entrar en detalles innecesarios.

// Encapsulamiento: la capacidad de ocultar la complejidad de un objeto y exponer solo una interfaz pública que permita interactuar con él.

// La jerarquía es otra característica importante de la programación orientada a objetos, especialmente en relación con la herencia. La herencia permite crear nuevas clases a partir de clases existentes, heredando sus atributos y métodos. De esta manera, se pueden crear relaciones jerárquicas entre las clases, donde las clases hijas heredan de las clases padres.

// En una jerarquía de clases, las clases hijas heredan los atributos y métodos de las clases padres, y pueden agregar nuevos atributos y métodos o redefinir los ya existentes. Esto permite una mayor flexibilidad y escalabilidad en el diseño de software, ya que se pueden crear nuevas clases sin tener que volver a escribir todo el código desde cero.

// Además, la jerarquía de clases puede utilizarse para crear una estructura más organizada y comprensible del software. Por ejemplo, en un sistema de gestión de empleados, se puede crear una clase Empleado como clase base, y luego crear clases hijas como Gerente, Supervisor, y Trabajador, cada una de las cuales hereda los atributos y métodos de la clase Empleado y agrega otros específicos de su rol.

// En resumen, la jerarquía de clases permite crear relaciones estructuradas y organizadas entre las clases, lo que facilita la creación y mantenimiento de software.

// La modularidad es otra característica fundamental de la programación orientada a objetos. Se refiere a la capacidad de dividir un programa en módulos o unidades de código más pequeñas y cohesivas, cada una de las cuales se encarga de una tarea específica.

// Cada módulo puede ser desarrollado, probado y mantenido de forma independiente, lo que facilita la colaboración en equipo y la reutilización de código. Además, los módulos pueden ser combinados para formar sistemas más grandes y complejos, lo que permite una mayor flexibilidad y escalabilidad en el diseño de software.

// En la POO, los objetos también pueden ser considerados como módulos, ya que encapsulan datos y comportamientos en una unidad cohesiva y reutilizable. Esto facilita la creación de sistemas más complejos a partir de objetos más simples y modulares, lo que permite una mayor flexibilidad y reutilización de código en el diseño de software.

// Herencia: la capacidad de crear nuevas clases basadas en clases existentes, heredando sus atributos y métodos, y extendiendo o modificando su comportamiento.

// Polimorfismo: la capacidad de definir múltiples implementaciones para un mismo método, permitiendo que un objeto pueda comportarse de diferentes maneras según el contexto en que se use.


// Estas características permiten crear programas más modulares, escalables, fáciles de mantener y reutilizables, lo que las hace muy útiles en el desarrollo de sistemas grandes y complejos.

//Los métodos accesores, también conocidos como getters y setters, son métodos utilizados en la programación orientada a objetos para acceder y modificar los atributos de un objeto de forma controlada. Estos métodos permiten asegurar el encapsulamiento de los datos, ya que permiten acceder y modificar los atributos de un objeto solo a través de una interfaz pública.

//Los métodos accesores se definen generalmente de la siguiente manera:

//El método "getter" es un método que se utiliza para obtener el valor de un atributo. Su nombre comienza con "get", seguido del nombre del atributo que se quiere obtener. Por ejemplo, si tenemos un atributo llamado "nombre", el método getter correspondiente sería "getNombre()".

//El método "setter" es un método que se utiliza para establecer el valor de un atributo. Su nombre comienza con "set", seguido del nombre del atributo que se quiere establecer. El método recibe como parámetro el nuevo valor del atributo. Por ejemplo, si tenemos un atributo llamado "nombre", el método setter correspondiente sería "setNombre(String nuevoNombre)".

//El uso de métodos accesores permite asegurar el principio de encapsulamiento en la POO, ya que los atributos no son accesibles directamente desde fuera del objeto, y se permite un mayor control sobre la forma en que se accede y se modifica el estado de los objetos. Además, los métodos accesores también pueden ser utilizados para realizar validaciones o cálculos adicionales antes de acceder o modificar los atributos de un objeto.