class telefonos{
    constructor(color, peso, tamanoTelefono, resolucionCamara, RAM) {
        this.color = color;
        this.peso = peso;
        this.tamanoTelefono = tamanoTelefono;
        this.resolucionCamara = resolucionCamara;
        this.RAM = RAM;
        this.encendido = false;
    }
    botonEncendido(){
        if(this.encendido == false){
            alert(`el telefono se está encencidendo`);
            this.encendido = true;
        } else {
            alert(`el telefono está apagado`);
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert(`el telefono se está reiniciando`);
        } else {
            alert(`el telefono está apagado`);
        }
    }
    tomarFoto(){
        alert(`foto tomada en una resolución de ${this.resolucionCamara}`);
    }
    grabarVideo(){
        alert(`grabando video en una resolución de ${this.resolucionCamara}`);
    }
    mostrarInfo(){
        return `
        Color: <b>${this.color}</b> </br>
        Peso: <b>${this.peso}</b> </br>
        Tamaño: <b>${this.tamanoTelefono}</b> </br>
        Resolución de cámara: <b>${this.resolucionCamara}</b> </br>
        Memoria RAM: <b>${this.RAM}</b> </br>
        `
    }
}

const telefono1 = new telefonos('azul', '210gr', "6.72'", '64MP', '6ram');
const telefono2 = new telefonos('blanco', '190gr', "6.53'", '48MP', '4ram');
const telefono3 = new telefonos('negro', '200gr', "6.60'", '64MP', '4ram');

// telefono1.botonEncendido();
// telefono1.tomarFoto();
// telefono1.grabarVideo();
// telefono1.reiniciar();
// telefono1.botonEncendido();

// telefono2.botonEncendido();
// telefono2.tomarFoto();
// telefono2.grabarVideo();
// telefono2.reiniciar();
// telefono2.botonEncendido();

// telefono3.botonEncendido();
// telefono3.tomarFoto();
// telefono3.grabarVideo();
// telefono3.reiniciar();
// telefono3.botonEncendido();

document.write(`
    ${telefono1.mostrarInfo()} </br>
    ${telefono2.mostrarInfo()} </br>
    ${telefono3.mostrarInfo()} </br>
`)

class altaGama extends telefonos {
    constructor(color, peso, tamanoTelefono, resolucionCamara, RAM, resolucionCamaraExtra) {
        super(color, peso, tamanoTelefono, resolucionCamara, RAM);
        this.resolucionCamaraExtra = resolucionCamaraExtra;
    }
    videoCamaraLenta() {
        alert("estás grabando en camara lenta");
    }
    reconocimentoFacial(){
        alert("Reconocimiento facial hecho");
    }
    mostrarInfoAltaGama(){
        return `${this.mostrarInfo()} resolución de cámara extra: <b>${this.resolucionCamaraExtra}</b> </br>`
    }
}

const telefono4 = new altaGama('azul', '230gr', "6.8'", '108MP', '12ram', '20MP');
const telefono5 = new altaGama('blanco', '210gr', "6.62'", '88MP', '8ram', "10MP");

document.write(`
    ${telefono4.mostrarInfoAltaGama()} </br>
    ${telefono5.mostrarInfoAltaGama()} </br>
`)