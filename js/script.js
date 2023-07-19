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
  var formattedTime = "<ul class='horizontal-list'>" +
  "<li>" + days + " <span>DIAS</span></li>" +
  "<li>" + (parseInt(hours) < 10 ? hours : parseInt(hours)) + " <span>HORAS</span></li>" +
  "<li>" + (parseInt(minutes) < 10 ? minutes : parseInt(minutes)) + " <span>MINUTOS</span></li>" +
  "<li>" + (parseInt(seconds) < 10 ? seconds : parseInt(seconds)) + " <span>SEGUNDOS</span></li>" +
  "</ul>";
  // Actualizar el contenido del contador
  counter.innerHTML = formattedTime;
}

// Actualizar el contador cada segundo
setInterval(updateCounter, 1000);

function abrirReproductor() {
  var boton = document.getElementById("boton");
  var reproductorContainer = document.getElementById("reproductorContainer");
  reproductorContainer.style.display = "block";
  boton.style.display = "none";

  // Agregar el evento para escuchar la tecla "Escape"
  document.addEventListener("keydown", cerrarConEscape);
}

function cerrarConEscape(event) {
  if (event.key === "Escape") {
    var boton = document.getElementById("boton");
    var reproductorContainer = document.getElementById("reproductorContainer");
    reproductorContainer.style.display = "none";
    boton.style.display = "block";

    // Eliminar el evento del escucha de la tecla "Escape"
    document.removeEventListener("keydown", cerrarConEscape);
  }
}

var reproductor = document.getElementById("reproductor");
reproductor.addEventListener("ended", cerrarReproductor);

function cerrarReproductor() {
  var boton = document.getElementById("boton");
  var reproductorContainer = document.getElementById("reproductorContainer");
  var reproductor = document.getElementById("reproductor");
  
  reproductor.pause(); // Pausar la reproducción del video
  reproductor.currentTime = 0; // Reiniciar el tiempo del video
  
  reproductorContainer.style.display = "none";
  boton.style.display = "block";
}



