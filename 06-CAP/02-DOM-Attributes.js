const rangoEdad = document.getElementById("ageRange");

rangoEdad.setAttribute("type", "range"); //si el atributo existe solo lo modifica, si no, lo crea

console.log(rangoEdad.getAttribute("type")); //muestra en consola "range" ya que ese es el valor del atributo

rangoEdad.removeAttribute("type"); //remueve el atributo que se le pida en cuestion