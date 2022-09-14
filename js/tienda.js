// ******************** FUNCIONES ******************** //
const getDBProductosJSON = async () => {
	const response = await fetch("../db/dbProductos.json");
	const data = await response.json();
	data.forEach((x) => productos.push(new Producto(x.id, x.marca, x.modelo, x.clasif, x.imgFile, x.alt, x.precio, x.stock)));
};

const filtrarProductos = () => {
	if (!checkAletas.checked && !checkChalecos.checked && !checkComputadoras.checked && !checkMascaras.checked && !checkNeoprene.checked && !checkReguladores.checked && !checkSnorkels.checked) {
		checkVerTodos.checked = true;
		renderProductos(productos, selOrdenarPor.value);
	} else {
		productosFiltrados = productos.filter(
			(x) =>
				(checkAletas.checked && x.clasif === clasificacionProductos.aletas) ||
				(checkChalecos.checked && x.clasif === clasificacionProductos.chalecos) ||
				(checkComputadoras.checked && x.clasif === clasificacionProductos.computadoras) ||
				(checkMascaras.checked && x.clasif === clasificacionProductos.mascaras) ||
				(checkNeoprene.checked && x.clasif === clasificacionProductos.neoprene) ||
				(checkReguladores.checked && x.clasif === clasificacionProductos.reguladores) ||
				(checkSnorkels.checked && x.clasif === clasificacionProductos.snorkels)
		);
		renderProductos(productosFiltrados, selOrdenarPor.value);
	}
};

const orderProductos = (fProductos, fOrden) => {
	switch (fOrden) {
		case "ordenAZ":
			fProductos.sort((itemA, itemB) => {
				if (itemA.marca + itemA.modelo > itemB.marca + itemB.modelo) {
					return 1;
				}
				if (itemA.marca + itemA.modelo < itemB.marca + itemB.modelo) {
					return -1;
				}
				// a es igual a b
				return 0;
			});
			break;
		case "ordenZA":
			fProductos.sort((itemA, itemB) => {
				if (itemA.marca + itemA.modelo > itemB.marca + itemB.modelo) {
					return -1;
				}
				if (itemA.marca + itemA.modelo < itemB.marca + itemB.modelo) {
					return 1;
				}
				// a es igual a b
				return 0;
			});
			break;
		case "precioMeMa":
			fProductos.sort((itemA, itemB) => {
				if (itemA.precio > itemB.precio) {
					return 1;
				}
				if (itemA.precio < itemB.precio) {
					return -1;
				}
				// a es igual a b
				return 0;
			});
			break;
		case "precioMaMe":
			fProductos.sort((itemA, itemB) => {
				if (itemA.precio > itemB.precio) {
					return -1;
				}
				if (itemA.precio < itemB.precio) {
					return 1;
				}
				// a es igual a b
				return 0;
			});
			break;
	}
	return fProductos;
};

const renderProductos = (fProductos, fOrden) => {
	fProductos = orderProductos(fProductos, fOrden);
	let container = "";

	for (let i = 0; i < fProductos.length; i++) {
		let auxDisponibilidad = "";

		fProductos[i].disponible() > 0
			? (auxDisponibilidad = `<button onclick="agregarAlCarrito(${fProductos[i].id});" class="btnComprar">Agregar<i class="bi bi-cart"></i></button>`)
			: (auxDisponibilidad = `<p class="mb-3 fst-italic text-decoration-underline">Sin stock</p>`);

		container += `
		<div class="col-10 col-sm-6 col-md-4 col-xl-3 p-4 d-flex align-items-stretch">
			<div class="tienda__card">
				<img src="../images/productos/${fProductos[i].imgFile}" alt="${fProductos[i].alt}" width="100%" />
				<div class="tienda__cardDatos">
					<h3 class="mt-3">${fProductos[i].marca} / ${fProductos[i].modelo}</h3>
					<p class="mb-3">
						<b>$${fProductos[i].precio}.-</b><br />Disponibles: ${fProductos[i].disponible()} u.
					</p>
					${auxDisponibilidad}
				</div>
			</div>
		</div>
		`;
	}
	document.getElementById("tienda__resultados").innerHTML = `Resultados: ${fProductos.length}`;
	document.getElementById("tienda__productos").innerHTML = container;
};

const agregarAlCarrito = (fId) => {
	const item = productos.find((prod) => prod.id === fId);
	carrito.push(item);
	actualizarStock(fId, -1);
	filtrarProductos();
	renderCarrito();

	Toastify({
		text: "El producto seleccionado se agregó a tu carrito",
		duration: 3000,
		offset: { y: 120 },
		style: {
			background: "linear-gradient(to right, #006878, #009878)",
		},
	}).showToast();
};

const eliminarDelCarrito = (fId, fI) => {
	carrito.splice(fI, 1);
	actualizarStock(fId, 1);
	filtrarProductos();
	renderCarrito();

	Toastify({
		text: "El producto seleccionado se eliminó de tu carrito",
		duration: 3000,
		offset: { y: 120 },
		style: {
			background: "linear-gradient(to right, #DC0054, #DC6054)",
		},
	}).showToast();
};

const actualizarStock = (fId, fCantidad) => {
	if (fId === 0 && fCantidad === 0) {
		if (carrito.length > 0) {
			carrito.forEach((x) => {
				for (let i = 0; i < productos.length; i++) {
					if (x.id === productos[i].id) {
						productos[i].stock--;
					}
				}
			});
		}
	} else {
		for (let i = 0; i < productos.length; i++) {
			if (productos[i].id === fId) {
				productos[i].stock += fCantidad;
			}
		}
	}
};

const renderCarrito = () => {
	let container = "";
	let total = getTotalCompra();

	if (carrito.length >= 1) {
		for (let i = 0; i < carrito.length; i++) {
			container += `
			<div class="d-flex justify-content-between align-items-center mb-2">
				<div class="tienda__productoCarrito">
					<button onclick="eliminarDelCarrito(${carrito[i].id}, ${i})" class="btnEliminar"><i class="bi bi-x-circle"></i></button>	
					<img src="../images/productos/${carrito[i].imgFile}" alt="${carrito[i].alt}">
					<p class="ms-2 mb-0">${carrito[i].marca} / ${carrito[i].modelo}</p>
				</div>
				<p class="mb-0">$${carrito[i].precio}.-</p>
			</div>`;
		}
	} else {
		container = "<p>El carrito de compras está vacío</p>";
	}
	container += `<hr /><p class="fs-5 text-end"><b>TOTAL: $${total}.-</br></p>`;
	if (carrito.length >= 1) {
		container += `
		<div class="row">
			<div class="col text-end">
				<button onclick="btnCheckout()" class="btnComprar">Finalizar</button>
			</div>
		</div>`;
	}
	document.getElementById("tienda__containerCarrito--productos").innerHTML = container;
	document.getElementById("tienda__btnCarrito--contador").innerHTML = `${carrito.length}`;

	setLocalStorage();
};

const getTotalCompra = () => {
	let total = carrito.reduce((acumulador, item) => acumulador + item.precio, 0);
	return total;
};

const setLocalStorage = () => {
	const carritoJSON = JSON.stringify(carrito);
	localStorage.setItem("carritoJSON", carritoJSON);
};

const getLocalStorage = () => {
	const carritoJSONGet = JSON.parse(localStorage.getItem("carritoJSON"));
	carrito = [...carritoJSONGet] || [];
};

const renderContainerCheckoutConfirma = () => {
	let total = getTotalCompra();
	let container = "";
	container += `
	<div class="row justify-content-center">
		<div class="col-10 col-md-8 mb-2">
			<h2 class="pt-4">TU COMPRA FUE CONFIRMADA!</h2>
			<hr />
			<p>Felicitaciones <b>${usuario.nombre} ${usuario.apellido}</b> por tu compra.</p>
			<hr />
			<p>
			`;

	carrito.forEach((x) => {
		container += `${x.marca} ${x.modelo} [$${x.precio}]<br />`;
	});

	container += `<b>Total: $${total}</b> (`;

	switch (formTarjetaCuotas.value) {
		case "TCx01":
			container += `1 cuota sin interés de $${parseFloat(total).toFixed(2)})<br />`;
			break;
		case "TCx03":
			container += `3 cuotas sin interés de $${parseFloat(total / 3).toFixed(2)})<br />`;
			break;
		case "TCx06":
			container += `6 cuotas sin interés de $${parseFloat(total / 6).toFixed(2)})<br />`;
			break;
		case "TCx12":
			container += `12 cuotas sin interés de $${parseFloat(total / 12).toFixed(2)})<br />`;
			break;
	}

	container += `
			</p>
			<hr />
			<p>`;

	if (checkRetiro.checked) {
		container += `
				Recordá que podrás retirar tu compra a partir del próximo día hábil por:<br />
				- Club José Hernández - Bragado 5950, Mataderos, C.A.B.A., Argentina.<br />
				- Lunes a viernes de 9 a 18hs.<br />`;
	} else {
		container += `
				Dirección de envío: ${usuario.calle} ${usuario.numero} ${usuario.piso} ${usuario.depto} - ${usuario.ciudad} (${usuario.codigoPostal})<br />`;
	}

	container += `
			</p>
		</div>
	</div>`;
	containerCheckoutConfirma.innerHTML = container;
};

const validarFormularioCheckout = () => {
	let valido = true;

	usuario.nombre = formNombre.value.toUpperCase() || "";
	usuario.apellido = formApellido.value.toUpperCase() || "";
	usuario.nroDocumento = formNroDocumento.value || 0;
	usuario.mail = formMail.value.toLowerCase() || "";
	if (checkEnvio.checked) {
		usuario.calle = formCalle.value.toUpperCase() || "";
		usuario.numero = formNumero.value || 0;
		usuario.piso = formPiso.value.toUpperCase() || "";
		usuario.depto = formDepto.value.toUpperCase() || "";
		usuario.ciudad = formCiudad.value.toUpperCase() || "";
		usuario.codigoPostal = formCodigoPostal.value || 0;
	}
	usuario.tarjetaNumero = formTarjetaNumero.value || 0;
	usuario.tarjetaNombre = formTarjetaNombre.value.toUpperCase() || "";
	usuario.tarjetaValidoMes = formTarjetaValidoMes.value || 0;
	usuario.tarjetaValidoAnio = formTarjetaValidoAnio.value || 0;
	usuario.tarjetaCodSeg = formTarjetaCodSeg.value || 0;

	if (usuario.nombre == "") {
		valido = false;
		formNombre.focus();
		msgValidacionToastify("Ingrese un nombre válido");
	} else if (usuario.apellido == "") {
		valido = false;
		formApellido.focus();
		msgValidacionToastify("Ingrese un apellido válido");
	} else if (usuario.nroDocumento < 1000000 || usuario.nroDocumento > 99999999) {
		valido = false;
		formNroDocumento.focus();
		msgValidacionToastify("Ingrese un documento válido");
	} else if (!/^\w+([\.-_]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(usuario.mail)) {
		valido = false;
		formMail.focus();
		msgValidacionToastify("Ingrese un correo electrónico válido");
	} else if (checkEnvio.checked && usuario.calle == "") {
		valido = false;
		formCalle.focus();
		msgValidacionToastify("Ingrese una calle válida");
	} else if (checkEnvio.checked && (usuario.numero == 0 || usuario.numero > 99999)) {
		valido = false;
		formNumero.focus();
		msgValidacionToastify("Ingrese un número válido");
	} else if (checkEnvio.checked && usuario.ciudad == "") {
		valido = false;
		formCiudad.focus();
		msgValidacionToastify("Ingrese una ciudad válida");
	} else if (checkEnvio.checked && (usuario.codigoPostal < 1000 || usuario.codigoPostal > 9999)) {
		valido = false;
		formCodigoPostal.focus();
		msgValidacionToastify("Ingrese un código postal válido");
	} else if (usuario.tarjetaNumero < 1000000000000000 || usuario.tarjetaNumero > 9999999999999999n) {
		valido = false;
		formTarjetaNumero.focus();
		msgValidacionToastify("Ingrese un número de tarjeta válido");
	} else if (usuario.tarjetaNombre == "") {
		valido = false;
		formTarjetaNombre.focus();
		msgValidacionToastify("Ingrese un nombre de tarjeta de crédito válido");
	} else if (usuario.tarjetaValidoMes < 1 || usuario.tarjetaValidoMes > 12) {
		valido = false;
		formTarjetaValidoMes.focus();
		msgValidacionToastify("Ingrese un mes válido (MM)");
	} else if (usuario.tarjetaValidoAnio < 22 || usuario.tarjetaValidoAnio > 99) {
		valido = false;
		formTarjetaValidoAnio.focus();
		msgValidacionToastify("Ingrese un año válido (AA)");
	} else if (usuario.tarjetaCodSeg < 100 || usuario.tarjetaCodSeg > 999) {
		valido = false;
		formTarjetaCodSeg.focus();
		msgValidacionToastify("Ingrese un código de seguridad válido (NNN)");
	}

	return valido;
};

const msgValidacionToastify = (msg) => {
	Toastify({
		text: msg,
		duration: 3000,
		offset: { y: 120 },
		style: {
			background: "linear-gradient(to right, #DC0054, #DC6054)",
		},
	}).showToast();
};

// ******************** EVENTOS ******************** //
const containerProductos = document.getElementById("tienda_containerProductos");
const containerMiCuenta = document.getElementById("tienda__containerMiCuenta");
const containerCarrito = document.getElementById("tienda__containerCarrito");
const containerCheckout = document.getElementById("tienda__containerCheckout");
const containerCheckoutConfirma = document.getElementById("tienda__containerCheckoutConfirma");
const formNombre = document.getElementById("tienda__formNombre");
const formApellido = document.getElementById("tienda__formApellido");
const formNroDocumento = document.getElementById("tienda__formNroDocumento");
const formTelefono = document.getElementById("tienda__formTelefono");
const formMail = document.getElementById("tienda__formMail");
const formCalle = document.getElementById("tienda__formCalle");
const formNumero = document.getElementById("tienda__formNumero");
const formPiso = document.getElementById("tienda__formPiso");
const formDepto = document.getElementById("tienda__formDepto");
const formCiudad = document.getElementById("tienda__formCiudad");
const formCodigoPostal = document.getElementById("tienda__formCodigoPostal");
const formTarjetaNumero = document.getElementById("tienda__formTarjetaNumero");
const formTarjetaNombre = document.getElementById("tienda__formTarjetaNombre");
const formTarjetaValidoMes = document.getElementById("tienda__formTarjetaValidoMes");
const formTarjetaValidoAnio = document.getElementById("tienda__formTarjetaValidoAnio");
const formTarjetaCodSeg = document.getElementById("tienda__formTarjetaCodSeg");
const formTarjetaCuotas = document.getElementById("tienda__formTarjetaCuotas");

const btnProductos = document.getElementById("tienda__btnProductos");
btnProductos.onclick = () => {
	containerProductos.classList.remove("d-none");
	containerMiCuenta.classList.add("d-none");
	containerCarrito.classList.add("d-none");
	containerCheckout.classList.add("d-none");
	containerCheckoutConfirma.classList.add("d-none");
	document.documentElement.scrollTop = 0;
};

const btnMiCuenta = document.getElementById("tienda__btnMiCuenta");
btnMiCuenta.onclick = () => {
	containerProductos.classList.add("d-none");
	containerMiCuenta.classList.remove("d-none");
	containerCarrito.classList.add("d-none");
	containerCheckout.classList.add("d-none");
	document.documentElement.scrollTop = 0;
};

const btnCarrito = document.getElementById("tienda__btnCarrito");
btnCarrito.onclick = () => {
	containerProductos.classList.add("d-none");
	containerMiCuenta.classList.add("d-none");
	containerCarrito.classList.remove("d-none");
	containerCheckout.classList.add("d-none");
	containerCheckoutConfirma.classList.add("d-none");
	document.documentElement.scrollTop = 0;
};

const btnCheckout = () => {
	containerProductos.classList.add("d-none");
	containerMiCuenta.classList.add("d-none");
	containerCarrito.classList.add("d-none");

	let total = getTotalCompra();
	formTarjetaCuotas.innerHTML = `
		<option value="TCx01">1 cuota sin interés de $${parseFloat(total).toFixed(2)}</option>
		<option value="TCx03">3 cuotas sin interés de $${parseFloat(total / 3).toFixed(2)}</option>
		<option value="TCx06">6 cuotas sin interés de $${parseFloat(total / 6).toFixed(2)}</option>
		<option value="TCx12">12 cuotas sin interés de $${parseFloat(total / 12).toFixed(2)}</option>`;

	containerCheckout.classList.remove("d-none");
	document.documentElement.scrollTop = 0;
};

const checkAletas = document.getElementById("tienda__filtros--checkAletas");
checkAletas.onclick = () => {
	checkVerTodos.checked = false;
	filtrarProductos();
};

const checkChalecos = document.getElementById("tienda__filtros--checkChalecos");
checkChalecos.onclick = () => {
	checkVerTodos.checked = false;
	filtrarProductos();
};

const checkComputadoras = document.getElementById("tienda__filtros--checkComputadoras");
checkComputadoras.onclick = () => {
	checkVerTodos.checked = false;
	filtrarProductos();
};

const checkMascaras = document.getElementById("tienda__filtros--checkMascaras");
checkMascaras.onclick = () => {
	checkVerTodos.checked = false;
	filtrarProductos();
};

const checkNeoprene = document.getElementById("tienda__filtros--checkNeoprene");
checkNeoprene.onclick = () => {
	checkVerTodos.checked = false;
	filtrarProductos();
};

const checkReguladores = document.getElementById("tienda__filtros--checkReguladores");
checkReguladores.onclick = () => {
	checkVerTodos.checked = false;
	filtrarProductos();
};

const checkSnorkels = document.getElementById("tienda__filtros--checkSnorkels");
checkSnorkels.onclick = () => {
	checkVerTodos.checked = false;
	filtrarProductos();
};

const checkVerTodos = document.getElementById("tienda__filtros--checkVerTodos");
checkVerTodos.onclick = () => {
	checkAletas.checked = false;
	checkChalecos.checked = false;
	checkComputadoras.checked = false;
	checkMascaras.checked = false;
	checkNeoprene.checked = false;
	checkReguladores.checked = false;
	checkSnorkels.checked = false;
	filtrarProductos();
};

const selOrdenarPor = document.getElementById("tienda__selOrdenarPor");
selOrdenarPor.onchange = () => {
	filtrarProductos();
};

const checkRetiro = document.getElementById("tienda__formCheckRetiro");
checkRetiro.onclick = () => {
	document.getElementById("containerRetiro").classList.remove("d-none");
	document.getElementById("containerEnvio").classList.add("d-none");
	checkEnvio.checked = false;
	checkRetiro.disabled = true;
	checkEnvio.disabled = false;
};

const checkEnvio = document.getElementById("tienda__formCheckEnvio");
checkEnvio.onclick = () => {
	document.getElementById("containerRetiro").classList.add("d-none");
	document.getElementById("containerEnvio").classList.remove("d-none");
	checkRetiro.checked = false;
	checkRetiro.disabled = false;
	checkEnvio.disabled = true;
};

const btnCheckoutConfirma = () => {
	document.documentElement.scrollTop = 0;
	let formOK = validarFormularioCheckout();
	if (formOK) {
		containerCheckout.classList.add("d-none");
		renderContainerCheckoutConfirma();
		containerCheckoutConfirma.classList.remove("d-none");
		carrito = [];
		renderCarrito();
	}
};

// ******************** MAIN ******************** //
// Declaración de variables, clases y objetos
class Producto {
	constructor(id, marca, modelo, clasif, imgFile, alt, precio, stock) {
		this.id = id;
		this.marca = marca;
		this.modelo = modelo;
		this.clasif = clasif;
		this.imgFile = imgFile;
		this.alt = alt;
		this.precio = parseFloat(precio);
		this.stock = parseInt(stock);
	}
	disponible() {
		return this.stock > 0 ? this.stock : 0;
	}
}
const clasificacionProductos = {
	aletas: 1,
	chalecos: 2,
	computadoras: 3,
	mascaras: 4,
	neoprene: 5,
	reguladores: 6,
	snorkels: 7,
};
let usuario = {
	nombre: "",
	apellido: "",
	nroDocumento: 0,
	telefono: 0,
	mail: "",
	calle: "",
	numero: 0,
	piso: "",
	depto: "",
	ciudad: "",
	codigoPostal: 0,
	tarjetaNumero: 0,
	tarjetaNombre: "",
	tarjetaValidoMes: 0,
	tarjetaValidoAnio: 0,
	tarjetaCodSeg: 0,
};
const productos = [];
let productosFiltrados = [];
let carrito;

// Función main
const main = async () => {
	await getDBProductosJSON();
	getLocalStorage();
	renderCarrito();
	actualizarStock(0, 0);
	renderProductos(productos, selOrdenarPor.value);
};

main();
