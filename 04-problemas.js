const materias = {
    fisica: [90, 6, 3, 'fisica'],
    programacion: [84, 8, 2, 'programacion'],
    matematicas: [92, 8, 4, 'matematicas'],
    historia: [82, 6, 3, 'historia'],
    ingles: [100, 10, 4, 'ingles'],
}

const aprobacion = ()=> {
 for (const materia in materias) {
    let asistencia = materias[materia][0];
    let promedioNotas = materias[materia][1];
    let trabajos = materias[materia][2];
    let nombreMateria = materias[materia][3];
    console.log(`${nombreMateria}:`)
    if(asistencia >= 90){
        console.log(`%c     Asistencias: ${asistencia}%`, "color: green");
    }else{
        console.log(`%c     Asistencias: ${asistencia}%`, "color: red");
    }
    if(promedioNotas >= 7){
        console.log(`%c     Promedio de notas: ${promedioNotas}/10`, "color: green");
    }else{
        console.log(`%c     Promedio de notas: ${promedioNotas}/10`, "color: red");
    }
    if(trabajos >= 3){
        console.log(`%c     Trabajos realizados: ${trabajos}`, "color: green");
    }else{
        console.log(`%c     Trabajos realizados: ${trabajos}`, "color: red");
    }

    if (asistencia >= 90 && promedioNotas >= 7 && trabajos >= 3){
        console.log(`     Felicidades, aprobaste ${nombreMateria}`);
    }
    else{
        console.log(`     Lo siento, reprobaste ${nombreMateria}`);
    }
}
}

aprobacion();