emailjs.init("RiCMIv8_2bdnlHEdR");

const formNombre = document.getElementById("form__nombre");
const formEmail = document.getElementById("form__email");
const formTelefono = document.getElementById("form__telefono");
const formMotivo = document.getElementById("form__motivo");
const formConsulta = document.getElementById("form__consulta");
const btn = document.getElementById("button");

const vaciarFormulario = () => {
	formNombre.value = "";
	formEmail.value = "";
	formTelefono.value = "";
	formMotivo.value = "default";
	formConsulta.value = "";
};

document.getElementById("form").addEventListener("submit", function (event) {
	event.preventDefault();

	btn.value = "Enviando...";

	const serviceID = "default_service";
	const templateID = "template_howynx8";

	emailjs.sendForm(serviceID, templateID, this).then(
		() => {
			btn.value = "Enviar";
			Toastify({
				text: "Consutla enviada correctamente!",
				duration: 3000,
				offset: { y: 60 },
				style: {
					background: "linear-gradient(to right, #DC0054, #DC6054)",
				},
			}).showToast();
			vaciarFormulario();
		},
		(err) => {
			btn.value = "Enviar";
			Toastify({
				text: "Error al enviar, intente nuevamente!",
				duration: 3000,
				offset: { y: 60 },
				style: {
					background: "linear-gradient(to right, #DC0054, #DC6054)",
				},
			}).showToast();
			vaciarFormulario();
		}
	);
});
