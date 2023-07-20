/* =================================================================*/
/*                             CONTADOR                             */
/* =================================================================*/

// Establecer la fecha objetivo (puedes cambiarla según tus necesidades)
var targetDate = new Date("2023-08-12T00:00:00");

// Obtener el elemento del contador
var counter = document.getElementById("counter");

// Función para actualizar el contador
function updateCounter() {
  // Obtener la fecha y hora actual
  var currentDate = new Date();

  // Calcular la diferencia entre la fecha objetivo y la fecha actual
  var timeDifference = targetDate - currentDate;

  // Si la fecha objetivo ha pasado, mostrar un mensaje
  if (timeDifference < 0) {
    counter.innerHTML = "Fecha objetivo alcanzada";
    return;
  }

  // Calcular los días, horas, minutos y segundos restantes
  var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Formatear el contador como DÍAS:HH:MM:SS
  var formattedTime = "<div class='horizontal-list'>" + "<li>" + days + " <span>DIAS</span></li>" + "<li>" + (parseInt(hours) < 10 ? hours : parseInt(hours)) + " <span>HORAS</span></li>" + "<li>" + (parseInt(minutes) < 10 ? minutes : parseInt(minutes)) + " <span>MINUTOS</span></li>" + "<li>" + (parseInt(seconds) < 10 ? seconds : parseInt(seconds)) + " <span>SEGUNDOS</span></li>" + "</div>";
  // Actualizar el contenido del contador
  counter.innerHTML = formattedTime;
}

// Actualizar el contador cada segundo
setInterval(updateCounter, 1000);

/* =================================================================*/
/*                           REPRODUCTOR                            */
/* =================================================================*/

function abrirReproductor() {
  var boton = document.getElementById("boton");
  var reproductorContainer = document.getElementById("reproductorContainer");
  reproductorContainer.style.display = "block";
  reproductorContainer.style.animation = "aparecer 1s forwards";

  bloquearDesplazamiento = true;
  // Desactivar desplazamiento
  document.body.style.overflow = "hidden";
}

var bloquearDesplazamiento = false;
var estado = "";
var reproductor = document.getElementById("reproductor");
reproductor.addEventListener("ended", cerrarReproductor);

function cerrarReproductor() {
  var boton = document.getElementById("boton");
  var reproductorContainer = document.getElementById("reproductorContainer");
  var reproductor = document.getElementById("reproductor");
  reproductorContainer.style.animation = "desaparecer 1s forwards";

  setTimeout(function () {
    reproductorContainer.style.display = "none"; // Ocultamos el reproductorContainer después de que termine la animación
    reproductor.pause(); // Pausar la reproducción del video
    reproductor.currentTime = 0; // Reiniciar el tiempo del video)
  }, 900); // Tiempo igual a la duración de la animación (1000 ms = 1s)

  bloquearDesplazamiento = false;
  // Reactivar desplazamiento
  document.body.style.overflow = "auto";
  boton.style.display = "block";
}

/* =================================================================*/
/*                           ASISTENCIA                            */
/* =================================================================*/

document.getElementById("abrirFormulariook").addEventListener("click", function () {
  document.getElementById("formularioContainer").style.display = "block";
  estado = "Obvio que asistiré!!";
  bloquearDesplazamiento = true;
  // Desactivar desplazamiento
  document.body.style.overflow = "hidden";
});

document.getElementById("abrirFormulariono").addEventListener("click", function () {
  document.getElementById("formularioContainer").style.display = "block";
  estado = "No puedo asistir :c";
  bloquearDesplazamiento = true;
  // Desactivar desplazamiento
  document.body.style.overflow = "hidden";
});

document.getElementById("cerrarFormulario").addEventListener("click", function () {
  document.getElementById("formularioContainer").style.display = "none";
  bloquearDesplazamiento = false;
  // Reactivar desplazamiento
  document.body.style.overflow = "auto";
});

document.getElementById("enviarMensaje").addEventListener("click", function (event) {
  event.preventDefault();
  var nombre = document.getElementById("nombre").value;
  var mensaje = document.getElementById("mensaje").value;

  // Verificar si los campos están completos
  if (nombre.trim() === "" || mensaje.trim() === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  var enlaceWhatsapp = "https://wa.me/91123221141?text=" + encodeURIComponent("Soy " + nombre +" y "+ estado + "\n\n" + mensaje);
  window.open(enlaceWhatsapp, "_blank");
  document.getElementById("formularioContainer").style.display = "none";
});
