// ******************** FUNCIONES ******************** //
const getDBProductosJSON = async () => {
	/* console.log("1");
	await fetch("../db/dbProductos.json")
		.then((response) => response.json())
		.then((data) => {
			data.forEach((x) => productos.push(new Producto(x.id, x.marca, x.modelo, x.clasif, x.imgFile, x.alt, x.precio, x.stock)));
			console.log("2");
		});
	console.log("3"); */

	console.log("1");
	const response = await fetch("../db/dbProductos.json");
	const data = await response.json();
	data.forEach((x) => productos.push(new Producto(x.id, x.marca, x.modelo, x.clasif, x.imgFile, x.alt, x.precio, x.stock)));
	console.log("2");
};

const getDBProductos = () => {
	productos.push(new Producto(1001, "Aqualung", "Amika", clasificacionProductos.aletas, "1001.jpg", "Aleta de buceo", 10207, 3));
	productos.push(new Producto(1002, "Aqualung", "Phazer", clasificacionProductos.aletas, "1002.jpg", "Aleta de buceo", 34590, 2));
	productos.push(new Producto(1003, "Aqualung", "Stratos ADJ", clasificacionProductos.aletas, "1003.jpg", "Aleta de buceo", 21349, 4));
	productos.push(new Producto(1004, "Cressi", "Frog", clasificacionProductos.aletas, "1004.png", "Aleta de buceo", 29626, 9));
	productos.push(new Producto(1005, "Cressi", "Frog Plus", clasificacionProductos.aletas, "1005.png", "Aleta de buceo", 29626, 9));
	productos.push(new Producto(1006, "Cressi", "Pluma", clasificacionProductos.aletas, "1006.jpg", "Aleta de buceo", 13412, 3));
	productos.push(new Producto(1007, "Cressi", "Pro Light", clasificacionProductos.aletas, "1007.jpg", "Aleta de buceo", 19500, 4));
	productos.push(new Producto(1008, "Cressi", "Reaction EBS", clasificacionProductos.aletas, "1008.jpg", "Aleta de buceo", 34900, 1));
	productos.push(new Producto(1009, "Cressi", "Thor EBS", clasificacionProductos.aletas, "1009.jpg", "Aleta de buceo", 41400, 7));
	productos.push(new Producto(1010, "Pino", "Antenal", clasificacionProductos.aletas, "1010.jpg", "Aleta de buceo", 17600, 1));
	productos.push(new Producto(1011, "Scubapro", "Jet Sport", clasificacionProductos.aletas, "1011.jpg", "Aleta de buceo", 18900, 3));
	productos.push(new Producto(1012, "Aqualung", "Axiom", clasificacionProductos.chalecos, "1012.png", "Chaleco de buceo", 124996, 7));
	productos.push(new Producto(1013, "Aqualung", "Omni", clasificacionProductos.chalecos, "1013.png", "Chaleco de buceo", 158246, 1));
	productos.push(new Producto(1014, "Aqualung", "Soul I3", clasificacionProductos.chalecos, "1014.jpg", "Chaleco de buceo", 147951, 7));
	productos.push(new Producto(1015, "Aqualung", "Wave", clasificacionProductos.chalecos, "1015.jpg", "Chaleco de buceo", 69900, 4));
	productos.push(new Producto(1016, "Scubapro", "Equator", clasificacionProductos.chalecos, "1016.jpg", "Chaleco de buceo", 131731, 2));
	productos.push(new Producto(1017, "Scubapro", "Glide", clasificacionProductos.chalecos, "1017.jpg", "Chaleco de buceo", 155000, 5));
	productos.push(new Producto(1018, "Scubapro", "Go", clasificacionProductos.chalecos, "1018.jpg", "Chaleco de buceo", 133399, 6));
	productos.push(new Producto(1019, "Scubapro", "Hydros Pro", clasificacionProductos.chalecos, "1019.jpg", "Chaleco de buceo", 208031, 3));
	productos.push(new Producto(1020, "Scubapro", "Knighthawk", clasificacionProductos.chalecos, "1020.jpg", "Chaleco de buceo", 172707, 7));
	productos.push(new Producto(1021, "Scubapro", "Level", clasificacionProductos.chalecos, "1021.png", "Chaleco de buceo", 124900, 6));
	productos.push(new Producto(1022, "Scubapro", "Litehawk", clasificacionProductos.chalecos, "1022.jpg", "Chaleco de buceo", 106615, 10));
	productos.push(new Producto(1023, "Aqualung", "I100", clasificacionProductos.computadoras, "1023.png", "Computadora de buceo", 49900, 10));
	productos.push(new Producto(1024, "Cressi", "Goa", clasificacionProductos.computadoras, "1024.jpg", "Computadora de buceo", 119004, 2));
	productos.push(new Producto(1025, "Scubapro", "Aladin Sport Matrix", clasificacionProductos.computadoras, "1025.jpg", "Computadora de buceo", 110988, 8));
	productos.push(new Producto(1026, "Scubapro", "Z1 Solar", clasificacionProductos.computadoras, "1026.png", "Computadora de buceo", 170182, 5));
	productos.push(new Producto(1027, "Aqualung", "Look", clasificacionProductos.mascaras, "1027.jpg", "Máscara de buceo", 7900, 2));
	productos.push(new Producto(1028, "Aqualung", "Reveal X1", clasificacionProductos.mascaras, "1028.jpg", "Máscara de buceo", 9500, 8));
	productos.push(new Producto(1029, "Aqualung", "Reveal X2", clasificacionProductos.mascaras, "1029.jpg", "Máscara de buceo", 9500, 2));
	productos.push(new Producto(1030, "Cressi", "Action", clasificacionProductos.mascaras, "1030.jpg", "Máscara de buceo", 13076, 5));
	productos.push(new Producto(1031, "Cressi", "Air", clasificacionProductos.mascaras, "1031.jpg", "Máscara de buceo", 19750, 8));
	productos.push(new Producto(1032, "Cressi", "Calibro", clasificacionProductos.mascaras, "1032.jpg", "Máscara de buceo", 22500, 2));
	productos.push(new Producto(1033, "Cressi", "Matrix", clasificacionProductos.mascaras, "1033.jpg", "Máscara de buceo", 15500, 8));
	productos.push(new Producto(1034, "Cressi", "Nano Crystal", clasificacionProductos.mascaras, "1034.jpg", "Máscara de buceo", 21900, 8));
	productos.push(new Producto(1035, "Cressi", "Zeuz", clasificacionProductos.mascaras, "1035.jpg", "Máscara de buceo", 24500, 5));
	productos.push(new Producto(1036, "Scubapro", "Sinergy 2 Twin", clasificacionProductos.mascaras, "1036.png", "Máscara de buceo", 8900, 9));
	productos.push(new Producto(1037, "Scubapro", "Sirenetta", clasificacionProductos.mascaras, "1037.jpg", "Máscara de buceo", 8111, 4));
	productos.push(new Producto(1038, "Aqualung", "Dive 5.5mm", clasificacionProductos.neoprene, "1038.jpg", "Traje húmedo de buceo", 61528, 4));
	productos.push(new Producto(1039, "Aqualung", "Hudson 7mm", clasificacionProductos.neoprene, "1039.png", "traje húmedo de buceo", 115695, 7));
	productos.push(new Producto(1040, "Aqualung", "Polynesian 3mm", clasificacionProductos.neoprene, "1040.jpg", "Botas de buceo", 11900, 3));
	productos.push(new Producto(1041, "Aqualung", "Superzip Ergo 5mm", clasificacionProductos.neoprene, "1041.jpg", "Botas de buceo", 18500, 1));
	productos.push(new Producto(1042, "Aquon", "Chaleco Smooth 3mm", clasificacionProductos.neoprene, "1042.jpg", "Chaleco de buceo", 17900, 1));
	productos.push(new Producto(1043, "Pino", "Bota Islander", clasificacionProductos.neoprene, "1043.jpg", "Botas de buceo", 17500, 7));
	productos.push(new Producto(1044, "Pino", "Casco buceo 5mm", clasificacionProductos.neoprene, "1044.jpg", "Casco de buceo", 6289, 3));
	productos.push(new Producto(1045, "Pino", "Casco Nervi 6mm", clasificacionProductos.neoprene, "1045.jpg", "Casco de buceo", 8822, 1));
	productos.push(new Producto(1046, "Pino", "Casco Pro Dive 6.5mm", clasificacionProductos.neoprene, "1046.jpg", "Casco de buceo", 9350, 9));
	productos.push(new Producto(1047, "Pino", "Casco Supreme 6mm", clasificacionProductos.neoprene, "1047.jpg", "Casco de buceo", 8525, 5));
	productos.push(new Producto(1048, "Pino", "Conjunto Albacora 7mm", clasificacionProductos.neoprene, "1048.jpg", "Traje húmedo de buceo", 73259, 10));
	productos.push(new Producto(1049, "Pino", "Conjunto Narwhal 5mm", clasificacionProductos.neoprene, "1049.jpg", "Traje húmedo de buceo", 82592, 3));
	productos.push(new Producto(1050, "Pino", "Conjunto Narwhal 5mm", clasificacionProductos.neoprene, "1050.jpg", "Traje húmedo de buceo", 82592, 6));
	productos.push(new Producto(1051, "Pino", "Conjunto Narwhal 7mm", clasificacionProductos.neoprene, "1051.jpg", "Traje húmedo de buceo", 99143, 10));
	productos.push(new Producto(1052, "Pino", "Conjunto New Supreme 7mm", clasificacionProductos.neoprene, "1052.jpg", "Traje húmedo de buceo", 90161, 3));
	productos.push(new Producto(1053, "Pino", "Guante Amara", clasificacionProductos.neoprene, "1053.jpg", "Guantes de buceo", 7600, 5));
	productos.push(new Producto(1054, "Pino", "Guante buceo 3mm", clasificacionProductos.neoprene, "1054.jpg", "Guantes de buceo", 7400, 5));
	productos.push(new Producto(1055, "Pino", "Media anatómica 2mm", clasificacionProductos.neoprene, "1055.jpg", "Medias de buceo", 6900, 5));
	productos.push(new Producto(1056, "Pino", "Media caza submarina 5mm", clasificacionProductos.neoprene, "1056.jpg", "Medias de buceo", 13842, 10));
	productos.push(new Producto(1057, "Pino", "Neolycra Mesh UV manga larga", clasificacionProductos.neoprene, "1057.jpg", "Lycra de buceo", 13900, 2));
	productos.push(new Producto(1058, "Pino", "Neolycra Mesh UV manga larga", clasificacionProductos.neoprene, "1058.jpg", "Lycra de buceo", 13900, 1));
	productos.push(new Producto(1059, "Pino", "Neolycra UV manga larga", clasificacionProductos.neoprene, "1059.jpg", "Lycra de buceo", 13900, 3));
	productos.push(new Producto(1060, "Pino", "Patagonic 7mm", clasificacionProductos.neoprene, "1060.jpg", "Traje semi seco de buceo", 132279, 9));
	productos.push(new Producto(1061, "Pino", "Raia 5mm", clasificacionProductos.neoprene, "1061.jpg", "Traje húmedo de buceo", 66040, 7));
	productos.push(new Producto(1062, "Pino", "Raia 7mm", clasificacionProductos.neoprene, "1062.jpg", "Traje húmedo de buceo", 71005, 6));
	productos.push(new Producto(1063, "Pino", "Raia 5mm", clasificacionProductos.neoprene, "1063.jpg", "Traje húmedo de buceo", 66040, 3));
	productos.push(new Producto(1064, "Pino", "Raia 7mm", clasificacionProductos.neoprene, "1064.jpg", "Traje húmedo de buceo", 71005, 4));
	productos.push(new Producto(1065, "Pino", "Pro Yamamoto Seco 7mm", clasificacionProductos.neoprene, "1065.jpg", "Traje seco de buceo", 316958, 10));
	productos.push(new Producto(1066, "Pino", "Seco 7mm", clasificacionProductos.neoprene, "1066.png", "Traje seco de buceo", 270616, 10));
	productos.push(new Producto(1067, "Pino", "Zapatilla náutica", clasificacionProductos.neoprene, "1067.jpg", "Botas de buceo", 13737, 2));
	productos.push(new Producto(1068, "Aqualung", "Calypso classic", clasificacionProductos.reguladores, "1068.jpg", "Regulador de buceo", 49900, 1));
	productos.push(new Producto(1069, "Aqualung", "Calypso octopus", clasificacionProductos.reguladores, "1069.jpg", "Regulador octopus de buceo", 27315, 2));
	productos.push(new Producto(1070, "Aqualung", "Consola", clasificacionProductos.reguladores, "1070.png", "Consola de buceo", 43861, 7));
	productos.push(new Producto(1071, "Aqualung", "Legend ACD Yoke", clasificacionProductos.reguladores, "1071.png", "Regulador de buceo", 171434, 9));
	productos.push(new Producto(1072, "Aqualung", "Legend Lux ACD Yoke", clasificacionProductos.reguladores, "1072.png", "Regulador de buceo", 233837, 8));
	productos.push(new Producto(1073, "Aqualung", "Legend MBS ACD", clasificacionProductos.reguladores, "1073.png", "Regulador de buceo", 175000, 3));
	productos.push(new Producto(1074, "Aqualung", "Legend octopus", clasificacionProductos.reguladores, "1074.png", "Regulador octopus de buceo", 54477, 6));
	productos.push(new Producto(1075, "Aqualung", "Manómetro", clasificacionProductos.reguladores, "1075.png", "Manómetro de buceo", 28550, 3));
	productos.push(new Producto(1076, "Aqualung", "Mikron", clasificacionProductos.reguladores, "1076.jpg", "Regulador de buceo", 125478, 1));
	productos.push(new Producto(1077, "Cressi", "XS Compact octopus", clasificacionProductos.reguladores, "1077.png", "Regulador octopus de buceo", 37899, 4));
	productos.push(new Producto(1078, "Cressi", "XS Compact-MC9 Yoke", clasificacionProductos.reguladores, "1078.png", "Regulador de buceo", 105762, 1));
	productos.push(new Producto(1079, "Cressi", "XS2 octopus", clasificacionProductos.reguladores, "1079.png", "Regulador octopus de buceo", 36230, 2));
	productos.push(new Producto(1080, "Cressi", "XS2-AC2 Yoke", clasificacionProductos.reguladores, "1080.png", "Regulador de buceo", 75972, 8));
	productos.push(new Producto(1081, "Scubapro", "Consola 2G U Line", clasificacionProductos.reguladores, "1081.jpg", "Consola de buceo", 45900, 8));
	productos.push(new Producto(1082, "Scubapro", "Manómetro U Line", clasificacionProductos.reguladores, "1082.jpg", "Manómetro de buceo", 27315, 6));
	productos.push(new Producto(1083, "Scubapro", "MK2 Evo", clasificacionProductos.reguladores, "1083.jpg", "Regulador de buceo", 72500, 3));
	productos.push(new Producto(1084, "Scubapro", "MK11-C370", clasificacionProductos.reguladores, "1084.jpg", "Regulador de buceo", 125605, 2));
	productos.push(new Producto(1085, "Scubapro", "MK25 Evo DIN", clasificacionProductos.reguladores, "1085.jpg", "Regulador de buceo", 231730, 4));
	productos.push(new Producto(1086, "Scubapro", "MK25 Evo Yoke", clasificacionProductos.reguladores, "1086.png", "Regulador de buceo", 231730, 5));
	productos.push(new Producto(1087, "Aqualung", "Air Dry PV", clasificacionProductos.snorkels, "1087.jpg", "Snorkel de buceo", 4191, 4));
	productos.push(new Producto(1088, "Aqualung", "Aquilon", clasificacionProductos.snorkels, "1088.jpg", "Snorkel de buceo", 3822, 10));
	productos.push(new Producto(1089, "Aqualung", "Aquilon PV", clasificacionProductos.snorkels, "1089.png", "Snorkel de buceo", 7237, 9));
	productos.push(new Producto(1090, "Aqualung", "Pike", clasificacionProductos.snorkels, "1090.jpg", "Snorkel de buceo", 3690, 9));
	productos.push(new Producto(1091, "Aqualung", "Zephyr", clasificacionProductos.snorkels, "1091.jpg", "Snorkel de buceo", 3900, 5));
	productos.push(new Producto(1092, "Aqualung", "Zephyr Flex", clasificacionProductos.snorkels, "1092.png", "Snorkel de buceo", 4900, 2));
	productos.push(new Producto(1093, "Cressi", "Alpha Ultra Dry", clasificacionProductos.snorkels, "1093.jpg", "Snorkel de buceo", 12911, 10));
	productos.push(new Producto(1094, "Cressi", "Corsica", clasificacionProductos.snorkels, "1094.png", "Snorkel de buceo", 5932, 2));
	productos.push(new Producto(1095, "Cressi", "Desert Dry", clasificacionProductos.snorkels, "1095.png", "Snorkel de buceo", 9587, 9));
	productos.push(new Producto(1096, "Cressi", "Gamma", clasificacionProductos.snorkels, "1096.jpg", "Snorkel de buceo", 5500, 10));
	productos.push(new Producto(1097, "Cressi", "México", clasificacionProductos.snorkels, "1097.jpg", "Snorkel de buceo", 3500, 7));
	productos.push(new Producto(1098, "Cressi", "Tao", clasificacionProductos.snorkels, "1098.png", "Snorkel de buceo", 7125, 6));
	productos.push(new Producto(1099, "Cressi", "Top Kids", clasificacionProductos.snorkels, "1099.jpg", "Snorkel de buceo", 4055, 6));
	productos.push(new Producto(1100, "Pino", "Antenal", clasificacionProductos.snorkels, "1100.jpg", "Snorkel de buceo", 2500, 5));
	productos.push(new Producto(1101, "Scubapro", "Apena", clasificacionProductos.snorkels, "1101.png", "Snorkel de buceo", 5200, 9));
	productos.push(new Producto(1102, "Scubapro", "Escape", clasificacionProductos.snorkels, "1102.jpg", "Snorkel de buceo", 4952, 9));
	productos.push(new Producto(1103, "Scubapro", "Pufferfish Kid", clasificacionProductos.snorkels, "1103.png", "Snorkel de buceo", 2551, 4));
	productos.push(new Producto(1104, "Scubapro", "Trinidad", clasificacionProductos.snorkels, "1104.jpg", "Snorkel de buceo", 5193, 9));
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

const renderProductos = (fProductos, fOrden) => {
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
	for (let i = 0; i < productos.length; i++) {
		if (productos[i].id === fId) {
			productos[i].stock += fCantidad;
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
			<p> 
				Felicitaciones <b>${usuario.nombre} ${usuario.apellido}</b> por tu compra.<br />
				Recibirás en tu correo <b>${usuario.mail}</b> un resumen de la compra que acabás de realizar.
			</p>
			<hr />
			<p>
			`;

	carrito.forEach((item) => {
		container += `${item.marca} ${item.modelo} [$${item.precio}]<br />`;
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

//getDBProductos();
getDBProductosJSON();
console.log("xxx");
renderProductos(productos, selOrdenarPor.value);

getLocalStorage();

renderCarrito();
