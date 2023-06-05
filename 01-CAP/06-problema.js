// let dineroCofla =  prompt('cuanto dinero tienes Cofla?');
// let dineroPedro = prompt('cuanto dinero tienes Pedro?');
// let dineroRoberto = prompt('cuanto dinero tienes Roberto?');

// dineroCofla = parseFloat(dineroCofla);
// dineroPedro = parseFloat(dineroPedro);
// dineroRoberto = parseFloat(dineroRoberto);

// let dineroTotal = dineroCofla + dineroPedro + dineroRoberto;

// if (dineroCofla >= 0.6 && dineroCofla < 1) {
//     alert("Cofla compra el helado de agua")
//     alert("y te sobran " + (dineroCofla - 0.6))
// } else if (dineroCofla >= 1 && dineroCofla < 1.6) {
//     alert("Cofla compra el helado de crema")
//     alert("y te sobran " + (dineroCofla - 1))
// } else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
//     alert("Cofla compra el helado de heladix")
//     alert("y te sobran " + (dineroCofla - 1.6))
// } else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
//     alert("Cofla compra el helado de heladovic")
//     alert("y te sobran " + (dineroCofla - 1.7))
// } else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
//     alert("Cofla compra el helado de helardo")
//     alert("y te sobran " + (dineroCofla - 1.8))
// } else if (dineroCofla >= 2.9) {
//     alert("Cofla comprate el pote de 1/4KG o el potecito de helado con confites")
//     alert("y te sobran " + (dineroCofla - 2.9))
// } else {
//     alert("Cofla no te alcanza para ninguno, trae más dinero para la próxima")
// }

// if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
//     alert("Roberto compra el helado de agua")
//     alert("y te sobran " + (dineroRoberto - 0.6))
// } else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
//     alert("Roberto compra el helado de crema")
//     alert("y te sobran " + (dineroRoberto - 1))
// } else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
//     alert("Roberto compra el helado de heladix")
//     alert("y te sobran " + (dineroRoberto - 1.6))
// } else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
//     alert("Roberto compra el helado de heladovic")
//     alert("y te sobran " + (dineroRoberto - 1.7))
// } else if (dineroRoberto>= 1.8 && dineroRoberto < 2.9) {
//     alert("Roberto compra el helado de helardo")
//     alert("y te sobran " + (dineroRoberto - 1.8))
// } else if (dineroRoberto >= 2.9) {
//     alert("Roberto comprate el pote de 1/4KG o el potecito de helado con confites")
//     alert("y te sobran " + (dineroRoberto - 2.9))
// } else {
//     alert("Roberto no te alcanza para ninguno, trae más dinero para la próxima")
// }

// if (dineroPedro >= 0.6 && dineroPedro < 1) {
//     alert("Pedro compra el helado de agua")
//     alert("y te sobran " + (dineroPedro - 0.6))
// } else if (dineroPedro >= 1 && dineroPedro < 1.6) {
//     alert("Pedro compra el helado de crema")
//     alert("y te sobran " +( dineroPedro - 1))
// } else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
//     alert("Pedro compra el helado de heladix")
//     alert("y te sobran " + (dineroPedro - 1.6))
// } else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
//     alert("Pedro compra el helado de heladovic")
//     alert("y te sobran " + (dineroPedro - 1.7))
// } else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
//     alert("Pedro compra el helado de helardo")
//     alert("y te sobran " + (dineroPedro - 1.8))
// } else if (dineroPedro >= 2.9) {
//     alert("Pedro comprate el pote de 1/4KG o el potecito de helado con confites")
//     alert("y te sobran " + (dineroCofla - 2.9))
// } else {
//     alert("Pedro no te alcanza para ninguno, trae más dinero para la próxima")
// }

//OR

const deninirCompra = (numberMoney) => {
    let din = parseFloat(prompt(`Dinero de ${numberMoney}`));
    if (din >= 0.6 && din < 1) return (`${numberMoney} compra helado de agua y te sobran ${(din - 0.6).toFixed(2)}`);
    if (din >= 1 && din < 1.6) return (`${numberMoney} compra helado de crema y te sobran ${(din - 1).toFixed(2)}`);
    if (din >= 1.6 && din < 1.7) return (`${numberMoney} compra helado de heladix y te sobran ${(din - 1.6).toFixed(2)}`);
    if (din >= 1.7 && din < 1.8) return (`${numberMoney} compra helado de heladovich y te sobran ${(din - 1.7).toFixed(2)}`);
    if (din >= 1.8 && din < 2.9) return (`${numberMoney} compra helado de helardo y te sobran ${(din - 1.8).toFixed(2)}`);
    if (din >= 2.9) return (`${numberMoney} compra el pote de 1/4KG o el potecito de helado con confites y te sobran ${(din - 2.9).toFixed(2)}`);
    else return (`${numberMoney} no te alcanza para ninguno, trae más dinero para la próxima`);
}

alert(deninirCompra("Cofla"));
alert(deninirCompra("Pedro"));
alert(deninirCompra("Roberto"));