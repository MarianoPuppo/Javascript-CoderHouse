let monto = 0;
let yerbaCantidad = 0;
let precioFinal = 0;
let nombreYerba;

const multiplicar = (numeroUno, numeroDos) => {return numeroUno * numeroDos};

do {
    alert("Bienvenido al Sistema de Compras de Yerbatero...");
    alert("A continuacion te mostraremos los productos con los que contamos en Stock para que elijas...");

    let nombreUsuario = prompt("Primero contanos como te llamas: ");

    let tipoYerba = prompt(`Hola ${nombreUsuario}\nPodes elegir el tipo de yerba que te gustaria comprar:\n\n1 - Yerba Clasica\n2 - Yerba Ahumada\n3 - Yerba Aromatizada\n\n4 - Cancelar Compra`);

    if (tipoYerba == 1){
        nombreYerba = "Yerba Clasica";
    } else if (tipoYerba == 2) {
        nombreYerba = "Yerba Ahumada";
    } else if (tipoYerba == 3) {
        nombreYerba = "Yerba Aromatizada";
    } else if (tipoYerba == 4) {
        break;
    } else {
        alert("Elige una opcion valida");
        continue;
    };

    alert(`Elegiste ${nombreYerba}. Excelente Eleccion!!!`);

    let tamañoYerba = prompt(`A continuacion te mostramos los distintos tamaños de la yerba seleccionada con sus respectivos precios:\n\n1.- 500g = $2000 \n2.- 1kg = $3500 \n3.-1.5kg = $4500\n\n4 - Cancelar Compra`);

    if (tamañoYerba == 1){
        tamañoYerba = "500g";
        monto = 2000;
    } else if (tamañoYerba == 2) {
        tamañoYerba = "1kg";
        monto = 3500;
    } else if (tamañoYerba == 3) {
        tamañoYerba = "1.5kg";
        monto = 4500;
    } else if (tamañoYerba == 4) {
        break;
    } else {
        alert("Elige una opcion valida");
        continue;
    };

    let yerbaCantidad = prompt(`A continuacion decinos que cantidad de ${nombreYerba} de ${tamañoYerba} queres comprar: `);

    precioFinal = multiplicar(yerbaCantidad, monto);

    alert(`Felicitaciones, compraste ${yerbaCantidad} unidades de ${nombreYerba} por ${tamañoYerba} dando un precio total de $${precioFinal}. En los proximos dias procederemos al envio. Que la Disfrutes!!!...`)

} while (confirm("Quisieras Comprar Algo mas?"));


