class Producto {
	constructor(id, nombre, descripcion, clasificacion, precio, stock) {
		this.id = id;
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.clasificacion = clasificacion;
		this.precio = parseFloat(precio);
		this.stock = parseInt(stock);
	}
	disponible() {
		if (this.stock > 0) {
			return this.stock;
		} else {
			return 0;
		}
	}
}

const clasificacionProductos = ["---", "Máscaras", "Snorkels", "Aletas", "Chalecos", "Reguladores", "Instrumentos", "Computadoras", "Neoprene", "Accesorios"];
const productos = [];
productos.push(new Producto(1001, "Máscara id1001", "Máscara de buceo id1001", "Máscaras", 2001, 101));
productos.push(new Producto(1002, "Máscara id1002", "Máscara de buceo id1002", "Máscaras", 2002, 102));
productos.push(new Producto(1003, "Máscara id1003", "Máscara de buceo id1003", "Máscaras", 2003, 103));
productos.push(new Producto(2001, "Snorkel id2001", "Snorkel de buceo id2001", "Snorkels", 3001, 201));
productos.push(new Producto(2002, "Snorkel id2002", "Snorkel de buceo id2002", "Snorkels", 3002, 202));
productos.push(new Producto(2003, "Snorkel id2003", "Snorkel de buceo id2003", "Snorkels", 3003, 203));
productos.push(new Producto(3001, "Aleta id3001", "Aleta de buceo id3001", "Aletas", 4001, 301));
productos.push(new Producto(3002, "Aleta id3002", "Aleta de buceo id3002", "Aletas", 4002, 302));
productos.push(new Producto(3003, "Aleta id3003", "Aleta de buceo id3003", "Aletas", 4003, 303));
productos.push(new Producto(4001, "Chaleco id4001", "Chaleco de buceo id4001", "Chalecos", 5001, 401));
productos.push(new Producto(4002, "Chaleco id4002", "Chaleco de buceo id4002", "Chalecos", 5002, 402));
productos.push(new Producto(4003, "Chaleco id4003", "Chaleco de buceo id4003", "Chalecos", 5003, 403));
productos.push(new Producto(5001, "Regulador id5001", "Regulador de buceo id5001", "Reguladores", 6001, 501));
productos.push(new Producto(5002, "Regulador id5002", "Regulador de buceo id5002", "Reguladores", 6002, 502));
productos.push(new Producto(5003, "Regulador id5003", "Regulador de buceo id5003", "Reguladores", 6003, 503));
productos.push(new Producto(6001, "Instrumento id6001", "Instrumento de buceo id6001", "Instrumentos", 7001, 101));
productos.push(new Producto(6002, "Instrumento id6002", "Instrumento de buceo id6002", "Instrumentos", 7002, 102));
productos.push(new Producto(6003, "Instrumento id6003", "Instrumento de buceo id6003", "Instrumentos", 7003, 103));
productos.push(new Producto(7001, "Computadora id7001", "Computadora de buceo id7001", "Computadoras", 8001, 201));
productos.push(new Producto(7002, "Computadora id7002", "Computadora de buceo id7002", "Computadoras", 8002, 202));
productos.push(new Producto(7003, "Computadora id7003", "Computadora de buceo id7003", "Computadoras", 8003, 203));
productos.push(new Producto(8001, "Neoprene id8001", "Neoprene de buceo id8001", "Neoprene", 9001, 301));
productos.push(new Producto(8002, "Neoprene id8002", "Neoprene de buceo id8002", "Neoprene", 9002, 302));
productos.push(new Producto(8003, "Neoprene id8003", "Neoprene de buceo id8003", "Neoprene", 9003, 303));
productos.push(new Producto(9001, "Accesorio id9001", "Accesorio de buceo id9001", "Accesorios", 9901, 401));
productos.push(new Producto(9002, "Accesorio id9002", "Accesorio de buceo id9002", "Accesorios", 9902, 402));
productos.push(new Producto(9003, "Accesorio id9003", "Accesorio de buceo id9003", "Accesorios", 9903, 403));

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
	let texto = "Por favor seleccione la opción deseada:";

	for (let i = 1; i < clasificacionProductos.length; i++) {
		texto = texto + "\n" + i + "   " + clasificacionProductos[i];
	}

	while (!entrada || entrada < 1 || entrada >= clasificacionProductos.length) {
		entrada = parseInt(prompt(texto));
	}

	return clasificacionProductos[entrada];
}

function mostrarSubmenu(xClasificacion) {
	let entrada = 0;
	let texto = "Por favor seleccione el ID de la opción deseada:";
	let noEncontrado = true;

	for (let i = 0; i < productos.length; i++) {
		if (productos[i].clasificacion === xClasificacion) {
			texto = texto + "\nID:" + productos[i].id + "   " + productos[i].nombre + "   $" + productos[i].precio;
		}
	}

	while (!entrada || entrada < 1 || noEncontrado) {
		entrada = parseInt(prompt(texto));
		for (let i = 0; i < productos.length; i++) {
			if (productos[i].id === entrada) {
				noEncontrado = false;
			}
		}
	}

	return entrada;
}

function confirmarCompra(xidSeleccionado) {
	let confirmacion = -1;
	let i = 0;

	for (i = 0; i < productos.length; i++) {
		if (productos[i].id === xidSeleccionado) {
			break;
		}
	}

	while (confirmacion !== 0 && confirmacion != 1) {
		confirmacion = parseInt(prompt("Por favor confirma tu compra de:\n" + productos[i].nombre + "   $" + productos[i].precio + "\n0   SALIR\n1   CONFIRMAR"));
	}
	if (confirmacion === 0) {
		alert("Muchas gracias por visitar nuestra tienda " + usuarioNombre);
		console.log("No se concretó la venta");
	} else {
		alert("Muchas gracias por tu compra " + usuarioNombre + "\nCompraste: " + productos[i].nombre + " por $" + productos[i].precio);
		console.log("Se concretó la venta");
	}
}

// MAIN
iniciarSesion();

let menuSeleccionado = mostrarMenu();
console.log("Menú seleccionado: " + menuSeleccionado);

let idSeleccionado = mostrarSubmenu(menuSeleccionado);
console.log("Producto seleccionado: " + idSeleccionado);

confirmarCompra(idSeleccionado);

//FIN
