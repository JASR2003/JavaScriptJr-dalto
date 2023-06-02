let dineroCofla = prompt('cuanto dinero tienes Cofla?');
let dineroPedro = prompt('cuanto dinero tienes Pedro?');
let dineroRoberto = prompt('cuanto dinero tienes Roberto?');

let dineroTotal = dineroCofla + dineroPedro + dineroRoberto;

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla compra el helado de agua")
} else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Cofla compra el helado de crema")
} else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Cofla compra el helado de heladix")
} else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Cofla compra el helado de heladovic")
} else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Cofla compra el helado de helardo")
} else if (dineroCofla >= 2.9) {
    alert("Cofla comprate el pote de 1/4KG o el potecito de helado con confites")
} else {
    alert("Cofla no te alcanza para ninguno, trae más dinero para la próxima")
}

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto compra el helado de agua")
} else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert("Roberto compra el helado de crema")
} else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert("Roberto compra el helado de heladix")
} else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert("Roberto compra el helado de heladovic")
} else if (dineroRoberto>= 1.8 && dineroRoberto < 2.9) {
    alert("Roberto compra el helado de helardo")
} else if (dineroRoberto >= 2.9) {
    alert("Roberto comprate el pote de 1/4KG o el potecito de helado con confites")
} else {
    alert("Roberto no te alcanza para ninguno, trae más dinero para la próxima")
}

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro compra el helado de agua")
} else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert("Pedro compra el helado de crema")
} else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert("Pedro compra el helado de heladix")
} else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert("Pedro compra el helado de heladovic")
} else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert("Pedro compra el helado de helardo")
} else if (dineroPedro >= 2.9) {
    alert("Pedro comprate el pote de 1/4KG o el potecito de helado con confites")
} else {
    alert("Pedro no te alcanza para ninguno, trae más dinero para la próxima")
}