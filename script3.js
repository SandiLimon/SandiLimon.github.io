var carrito = [];
var total = 0;

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;

  actualizarCarrito();
}

function actualizarCarrito() {
  var listaCarrito = document.getElementById("lista-carrito");
  listaCarrito.innerHTML = "";

  carrito.forEach(function (producto) {
    var li = document.createElement("li");
    li.innerHTML = producto.nombre + " - $" + producto.precio.toFixed(2);
    listaCarrito.appendChild(li);
  });

  document.getElementById("total-carrito").innerHTML = "Total: $" + total.toFixed(2);
}

function mostrarResumen() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  localStorage.setItem("total", total.toFixed(2));

  window.open("datos.html", "_blank");
}

function reiniciarCarrito() {
  carrito = [];
  total = 0;
  actualizarCarrito();
}

function realizarPedido() {
  var formulario = document.getElementById('pedidoForm');
  
  if (formulario.checkValidity()) {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var direccion = document.getElementById("direccion").value;
    var telefono = document.getElementById("telefono").value;


    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);
    localStorage.setItem("direccion", direccion);
    localStorage.setItem("telefono", telefono);

    window.location.href = "carrito.html"; 
  } else {
    alert('Por favor, complete todos los campos.');
  }
}

var nombre = localStorage.getItem("nombre");
var apellido = localStorage.getItem("apellido");
var direccion = localStorage.getItem("direccion");
var telefono = localStorage.getItem("telefono");

document.getElementById("nombre").textContent = nombre;
document.getElementById("apellido").textContent = apellido;
document.getElementById("direccion").textContent = direccion;
document.getElementById("telefono").textContent = telefono;

var carrito = JSON.parse(localStorage.getItem("carrito"));
var total = localStorage.getItem("total");

var resumenCarrito = document.getElementById("resumen-carrito");
var resumenTotal = document.getElementById("resumen-total");

carrito.forEach(function (producto) {
  var div = document.createElement("div");
  div.className = "producto";
  div.innerHTML = `<span>${producto.nombre}</span><span>$${producto.precio.toFixed(2)}</span>`;
  resumenCarrito.appendChild(div);
});

resumenTotal.innerHTML = `Total: $${total}`;

function imprimir() {
  window.print();
}

function obtenerFechaHoraActual() {
  var fechaHora = new Date();

  var dia = fechaHora.getDate();
  var mes = fechaHora.getMonth() + 1;
  var anio = fechaHora.getFullYear();

  var horas = fechaHora.getHours();
  var minutos = fechaHora.getMinutes();
  var segundos = fechaHora.getSeconds();

  var fechaHoraActual = dia + "/" + mes + "/" + anio + " " + horas + ":" + minutos + ":" + segundos;

  return fechaHoraActual;
}

document.addEventListener("DOMContentLoaded", function() {
  var fechaHoraElemento = document.getElementById("fecha-hora");
  fechaHoraElemento.textContent = obtenerFechaHoraActual();
});

function generarNumeroFactura() {
  return Math.floor(Math.random() * 1000000) + 1;
}

function actualizarNumeroFactura() {
  var numeroFactura = generarNumeroFactura();
  var elementoFactura = document.getElementById("factura-numero");
  elementoFactura.textContent = "N° factura: #" + numeroFactura;
}

actualizarNumeroFactura();
