class Apps {
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.descargada = false;
    }
    instalar(){
        if (this.descargada == false) {
            alert(`descargando app`);
            this.descargada = true;
        }
    }
    desinstalar(){
        if (this.descargada == true) {
            alert(`borrando app`);
            this.descargada = false;
        }
    }
    abrir(){
        if (this.iniciada == false && this.descargada == true) {
            alert(`abriendo app`);
            this.iniciada = true;
        }
    }
    cerrar(){
        if (this.iniciada == true && this.descargada == true) {
            alert(`cerrando app`);
            this.iniciada = false;
        }
    }
    mostrarDatos(){
        return `
        Descargas: <b>${this.descargas}</b> </br>
        Valoración: <b>${this.puntuacion}</b> </br>
        Peso: <b>${this.peso}</b> </br>
        `
    }
}

const app1 = new Apps("35K", "4.1/5", "859MB");
const app2 = new Apps("348K", "4.5/5", "931MB");
const app3 = new Apps("256K", "4.7/5", "1.2GB");

app1.instalar();
app1.abrir();
app1.cerrar();
app1.desinstalar();

// app2.instalar();
// app2.abrir();
// app2.cerrar();
// app2.desinstalar();

// app3.instalar();
// app3.abrir();
// app3.cerrar();
// app3.desinstalar();

document.write(`
    ${app1.mostrarDatos()} </br>
    ${app2.mostrarDatos()} </br>
    ${app3.mostrarDatos()} </br>
`)