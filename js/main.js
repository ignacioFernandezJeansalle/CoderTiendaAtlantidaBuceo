// VARIABLES GLOBALES
let menu01 = "Máscaras";
let menu02 = "Snorkels";
let menu03 = "Aletas";
let producto0101 = "Máscara ID01";
let precio0101 = 1230;
let producto0102 = "Máscara ID02";
let precio0102 = 1290;
let producto0103 = "Máscara ID03";
let precio0103 = 2150;

let producto0201 = "Snorkel ID01";
let precio0201 = 2345;
let producto0202 = "Snorkel ID02";
let precio0202 = 2598;
let producto0203 = "Snorkel ID03";
let precio0203 = 3252;

let producto0301 = "Aleta ID01";
let precio0301 = 2299;
let producto0302 = "Aleta ID02";
let precio0302 = 2399;
let producto0303 = "Aleta ID03";
let precio0303 = 2480;

let usuarioNombre = "";

// FUNCIONES
function iniciarSesion() {
	usuarioNombre = prompt("Bienvenido a la tienda de productos de BUCEO de Atlantida!!\n\nPor favor ingrese su nombre de usuario:");

	while (!usuarioNombre) {
		usuarioNombre = prompt("\nPor favor ingrese un nombre de usuario válida:");
	}

	console.log("Nombre de usuario: " + usuarioNombre);
}

function mostrarMenu() {
	let entrada = 0;

	while (!entrada || entrada < 1 || entrada > 3) {
		entrada = parseInt(prompt("Por favor seleccione la opción deseada:\n1   " + menu01 + "\n2   " + menu02 + "\n3   " + menu03));
	}

	return entrada;
}

function mostrarSubmenu(n) {
	let entrada = 0;

	switch (n) {
		case 1:
			while (!entrada || entrada < 1 || entrada > 3) {
				entrada = parseInt(prompt("Por favor seleccione la opción deseada:\n1   " + producto0101 + "   $" + precio0101 + "\n2   " + producto0102 + "   $" + precio0102 + "\n3   " + producto0103 + "   $" + precio0103));
			}
			break;
		case 2:
			while (!entrada || entrada < 1 || entrada > 3) {
				entrada = parseInt(prompt("Por favor seleccione la opción deseada:\n1   " + producto0201 + "   $" + precio0201 + "\n2   " + producto0202 + "   $" + precio0202 + "\n3   " + producto0203 + "   $" + precio0203));
			}
			break;
		case 3:
			while (!entrada || entrada < 1 || entrada > 3) {
				entrada = parseInt(prompt("Por favor seleccione la opción deseada:\n1   " + producto0301 + "   $" + precio0301 + "\n2   " + producto0302 + "   $" + precio0302 + "\n3   " + producto0303 + "   $" + precio0303));
			}
			break;
	}
	return entrada;
}

function confirmarCompra(n, m) {
	let producto = "";
	let precio = "";
	let confirmacion = -1;

	switch (n) {
		case 1:
			switch (m) {
				case 1:
					producto = producto0101;
					precio = precio0101;
					break;
				case 2:
					producto = producto0102;
					precio = precio0102;
					break;
				case 3:
					producto = producto0103;
					precio = precio0103;
					break;
			}
			break;
		case 2:
			switch (m) {
				case 1:
					producto = producto0201;
					precio = precio0201;
					break;
				case 2:
					producto = producto0202;
					precio = precio0202;
					break;
				case 3:
					producto = producto0203;
					precio = precio0203;
					break;
			}
			break;
		case 3:
			switch (m) {
				case 1:
					producto = producto0301;
					precio = precio0301;
					break;
				case 2:
					producto = producto0302;
					precio = precio0302;
					break;
				case 3:
					producto = producto0303;
					precio = precio0303;
					break;
			}
			break;
	}

	while (confirmacion !== 0 && confirmacion != 1) {
		confirmacion = parseInt(prompt("Por favor confirma tu compra de:\n" + producto + "   $" + precio + "\n0   SALIR\n1   CONFIRMAR"));
		console.log(confirmacion);
	}
	if (confirmacion === 0) {
		alert("Muchas gracias por visitar nuestra tienda " + usuarioNombre);
		console.log("No se concretó la venta");
	} else {
		alert("Muchas gracias por tu compra " + usuarioNombre + "\nCompraste: " + producto + " por $" + precio);
		console.log("Se concretó la venta");
	}
}

// MAIN

iniciarSesion();

let menuSeleccionado = mostrarMenu();
console.log("Menú seleccionado: " + menuSeleccionado);

let productoSeleccionado = mostrarSubmenu(menuSeleccionado);
console.log("Producto seleccionado: " + productoSeleccionado);

confirmarCompra(menuSeleccionado, productoSeleccionado);
//FIN
