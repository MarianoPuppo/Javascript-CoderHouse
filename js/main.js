//Variables
let tipoYerba;
let yerbaTamaño;
let yerbaCantidad;
let cantidadSeleccionada;

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
}

//Constructor Objetos
class nuevaYerba {
  constructor(nombre, tamaño, precio, cantidad) {
    this.nombre = nombre;
    this.tamaño = tamaño;
    this.precio = precio;
    this.cantidad = cantidad;
    this.stock = true;
  }
}


const crearYerba = (nombre, tamaño, precio, cantidad) => {
  return {
    nombreYerba: nombre,
    tamañoYerba: tamaño,
    precioYerba: precio,
    cantidadYerba: cantidad,
  };
};

//Comienza Codigo

marketYerba.push(new nuevaYerba("Clasica", "500", 600));
marketYerba.push(new nuevaYerba("Clasica", "1000", 700));
marketYerba.push(new nuevaYerba("Clasica", "1500", 800));

marketYerba.push(new nuevaYerba("Ahumada", "500", 900));
marketYerba.push(new nuevaYerba("Ahumada", "1000", 1000));
marketYerba.push(new nuevaYerba("Ahumada", "1500", 1100));

marketYerba.push(new nuevaYerba("Aromatizada", "500", 1200));
marketYerba.push(new nuevaYerba("Aromatizada", "1000", 1300));
marketYerba.push(new nuevaYerba("Aromatizada", "1500", 1400));

// Empezamos con el DOM
//Modificamos el texto del NavBar usando SessionStorage

let navBarModifica = document.getElementById("texto")
let nombreUsuario = prompt("Como es tu nombre?"); 

sessionStorage.setItem(`Nombre`, nombreUsuario);
let nombreObtenido = capitalizeFirstLetter(sessionStorage.getItem(`Nombre`));

navBarModifica.innerHTML = `Bienvenido ${nombreObtenido}. Tenemos los siguientes productos en stock`; 

// Aca hacemos que el cliente al hacer click visualice el producto en su Carrito

let carta = document.getElementsByClassName("card");

let claveYerba = 0;

for (const yerba of marketYerba) {
  let contenedor = document.getElementById("contenedorTarjeta");
  let tarjeta = document.createElement("div");
  tarjeta.className = "col-4 mb-4";

  tarjeta.innerHTML = `<div class="card">
    <img src="resources/paquete.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Yerba ${yerba.nombre}</h5>
      <p class="card-text">Tamaño: ${yerba.tamaño}g</p>
      <p class="card-text">Precio: $${yerba.precio}</p>
      <a href="#" class="btn btn-primary add-to-cart">Añadir al Carrito</a>
    </div>
  </div>`;

  contenedor.appendChild(tarjeta);

  // Agregamos el evento click al botón "Añadir al Carrito"
  let addToCartButton = tarjeta.querySelector('.add-to-cart');
  addToCartButton.addEventListener("click", function (event) {
    event.preventDefault();

    let cantidadSeleccionada = prompt("Qué cantidad le gustaría llevar?");

    // Verificar si se canceló la selección de cantidad
    if (cantidadSeleccionada === null) {
      return; // Salir del evento sin hacer nada
    }

    cantidadSeleccionada = parseInt(cantidadSeleccionada); // Convertir a entero

    // Verificar si la cantidad seleccionada es un número válido y mayor que cero
    if (isNaN(cantidadSeleccionada) || cantidadSeleccionada <= 0) {
      alert("Por favor ingrese una cantidad válida mayor que cero.");
      return; // Salir del evento sin hacer nada
    }

    let total = cantidadSeleccionada * yerba.precio;

    let contenedorCarrito = document.getElementById("carritoCompras");
    let tarjetaCarrito = document.createElement("div");
    tarjetaCarrito.className = "col-4 mb-4";

    tarjetaCarrito.innerHTML = `<div class="card">
      <img src="resources/paquete.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Yerba ${yerba.nombre}</h5>
        <p class="card-text">Tamaño: ${yerba.tamaño}g</p>
        <p class="card-text">Cantidad: ${cantidadSeleccionada}</p>
        <p class="card-text">Precio por unidad: $${yerba.precio}</p>
        <p class="card-text">Total: $${total}</p>
      </div>
    </div>`;

    contenedorCarrito.appendChild(tarjetaCarrito);

    Toastify({
      text: "Se agregó el pedido a tu Carrito",
      duration: 3000
    }).showToast();
  });
}


// Division entre Productos y Carrito

let division = document.getElementById("divisionPagina");

division.innerHTML = `<h3>Si agregaste productos, los podes ver abajo!!!</h3>`;





