//Variables
let tipoYerba;
let yerbaTamaño;
let yerbaCantidad;

//Arrays
const marketYerba = [];
const compraCliente = [];

//Funciones
const multiplicar = (numeroUno, numeroDos) => {
  return numeroUno * numeroDos;
};

const sumarIva = (numeroUno) => {
  return numeroUno * (21 / 100);
};

const suma = (numeroUno, numeroDos) => {
  return numeroUno + numeroDos;
};

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

//Constructor Objetos
class nuevaYerba {
  constructor(nombre, tamaño, cantidad, precio) {
    this.nombre = nombre;
    this.tamaño = tamaño;
    this.cantidad = cantidad;
    this.precio = precio;
    this.stock = true;
  }

  controlarStock() {
    if (cantidad >= 0) {
      alert(
        `Hola ${nombreUsuario}\nTenemos ${this.cantidad} unidades de ${this.nombre} en Stock`
      );
    } else {
      this.stock == false;
      alert(
        `Hola ${nombreUsuario}\nNo tenemos ${this.cantidad} unidades de ${this.nombre} en Stock`
      );
    }
  }
};

class yerbaCliente {
  constructor(nombre, tamaño, cantidad, precio) {
    this.nombre = nombre;
    this.tamaño = tamaño;
    this.cantidad = cantidad;
    this.precio = precio;
  }};

//Comienza Codigo

marketYerba.push(new nuevaYerba("Clasica", "500", 3, 600));
marketYerba.push(new nuevaYerba("Clasica", "1000", 4, 700));
marketYerba.push(new nuevaYerba("Clasica", "1500", 5, 800));

marketYerba.push(new nuevaYerba("Ahumada", "500", 6, 900));
marketYerba.push(new nuevaYerba("Ahumada", "1000", 7, 1000));
marketYerba.push(new nuevaYerba("Ahumada", "1500", 8, 1100));

marketYerba.push(new nuevaYerba("Aromatizada", "500", 9, 1200));
marketYerba.push(new nuevaYerba("Aromatizada", "1000", 10, 1300));
marketYerba.push(new nuevaYerba("Aromatizada", "1500", 11, 1400));



// Aca Deberiamos hacer una funcion que controle el stock de todos los tipos de Yerba que tenemos, sino que los elimine del array para no ofrecerlas




//Aca seleccionamos la yerba a llevar

while (true) {
  tipoYerba = capitalizeFirstLetter(
    prompt(
      `Ingrese el nombre de la yerba que desea comprar:\n\n${marketYerba[0].nombre}\n${marketYerba[3].nombre}\n${marketYerba[6].nombre}\n\n`
    )

  );

  const yerbaSeleccionada = marketYerba.find(
    (yerba) => yerba.nombre === tipoYerba
  );

  if (yerbaSeleccionada) {
    console.log(`¡${tipoYerba} seleccionada!`);
    // Aca deberiamos agregarla al Array
    break; // Rompemos el bucle.
  } else {
    alert(
      `El nombre ingresado de Yerba "${tipoYerba}", no corresponde a ninguna de las opciones. Por favor, ingrese un nombre válido.`
    );
  }
};

//Aca seleccionamos el tamaño de la yerba seleccionada
while (true) {
  yerbaTamaño =
    prompt(
      `Ingrese el tamaño de la yerba ${tipoYerba} que desea comprar:\n\n${marketYerba[0].tamaño}\n${marketYerba[1].tamaño}\n${marketYerba[2].tamaño}\n\n`
    );

  const tamañoSeleccionado = marketYerba.find(
    (yerba) => yerba.tamaño === yerbaTamaño
  );


  if (tamañoSeleccionado) {
    console.log(`¡${yerbaTamaño} seleccionada!`);


    // O aca deberiamos agregarla al Array
    break; // Rompemos el bucle.
  } else {
    alert(
      `El tamaño ingresado "${yerbaTamaño}" no corresponde a ninguna de las opciones. Por favor, ingrese un nombre válido.`
    );
  }
};


//Aca seleccionamos la cantidad a comprar

while (true) {

  // Con este codigo vamos a entrar al objeto seleccionado y mostrar la cantidad disponible
marketYerba.forEach(element => {
  if (element.nombre == tipoYerba && element.tamaño == yerbaTamaño) {
      numeroObjeto = element;
      /* alert(`El numero de objeto es ${numeroObjeto} el ${element.nombre} y ${element.tamaño} y ${element.cantidad}`); */
  }
});

  yerbaCantidad =
    prompt(
      `Contamos con la cantidad de ${numeroObjeto.cantidad} unidades, de la yerba ${tipoYerba} de ${yerbaTamaño}g. Ingrese la cantidad que desea llevar:\n\n`
    );

/*   const tamañoSeleccionado = marketYerba.find(
    (yerba) => yerba.tamaño === yerbaTamaño
  ); */


  if (yerbaCantidad <= numeroObjeto.cantidad) {
    console.log(`¡${yerbaCantidad} unidades seleccionada/s!`);
    // O aca deberiamos agregarla al Array
    break; // Rompemos el bucle.
  } else {
    alert(
      `La cantidad ingresada de "${yerbaCantidad}" unidades, supera a nuestro stock actual. Ingrese una cantidad igual o menor a la disponible.`
    );
  }
};


compraCliente.push(new yerbaCliente(`${tipoYerba}`, `${yerbaTamaño}`, `${yerbaCantidad}`, `${numeroObjeto.precio}`));

console.log(compraCliente);

// Mostramos el resultado final de la compra en el carrito del Cliente

  compraCliente.forEach((obj) => {

    const sumaProductos = multiplicar(`${obj.cantidad}`,`${obj.precio}`);
    const iva = sumarIva(sumaProductos);
    const totalConIva = suma(sumaProductos, iva);

    alert(`Felicitaciones por comprar ${obj.cantidad} unidad/es de yerba ${obj.nombre} de ${obj.tamaño}g por un precio de $${obj.precio} cada una.\n\nEl total de tus productos es de $${sumaProductos}.\n\nEl total de tus productos con IVA es de $${totalConIva}.`);
  });
//La suma del iva esta mal
