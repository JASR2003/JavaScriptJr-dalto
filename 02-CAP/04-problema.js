let alumnosCantidad = prompt(`¿Cuantos alumnos son?`);
let alumnosTotal = [];

for (let i = 0; i < alumnosCantidad; i++) {
    alumnosTotal[i] = [prompt('nombre del alumno ' + (i+1)),0];
}

const asistencia = (nombre, p)=>{
    let presente = prompt(nombre);
    if (presente == 'p' || presente == 'P') {
        alumnosTotal[p][1]++;
    }
}

for (let i = 0; i < 30; i++) {
    for (alumno in alumnosTotal) {
        asistencia(alumnosTotal[alumno][0], alumno);
    }
}

for (alumno in alumnosTotal){
    let resultado = `${alumnosTotal[alumno][0]}: <br>
                    __________Asistencias: ${alumnosTotal[alumno][1]}<br>
                    __________Ausencias: ${30 - alumnosTotal[alumno][1]}`;
    if(30 - alumnosTotal[alumno][1] > 18){
        resultado +=`<br> Reprobado por inasistencias <br><br>`
    } else {
        resultado += `<br><br>`
    }
    document.write(resultado);
}