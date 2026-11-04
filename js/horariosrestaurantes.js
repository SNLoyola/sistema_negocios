// Map con los datos y horarios de cada día de la semana (0 = Domingo, 1 = Lunes, etc.)
const horariosSemana = {
  0: { nombre: "Domingo", horario: "Cerrado" },
  1: { nombre: "Lunes", horario: "8:30 am - 21:00 pm" },
  2: { nombre: "Martes", horario: "8:30 am - 21:00 pm" },
  3: { nombre: "Miércoles", horario: "8:30 am - 21:00 pm" },
  4: { nombre: "Jueves", horario: "8:30 am - 21:00 pm" },
  5: { nombre: "Viernes", horario: "8:30 am - 21:00 pm" },
  6: { nombre: "Sábado", horario: "9:00 am - 14:00 pm" }
};

const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

function cargarHorarioHoy() {
  const hoy = new Date();
  
  const numDia = hoy.getDate();
  const mesNombre = meses[hoy.getMonth()];
  const diaSemanaIndex = hoy.getDay(); // Retorna 0 para Domingo, 1 para Lunes, etc.
  
  const datosHoy = horariosSemana[diaSemanaIndex];

  // Insertar en el HTML
  document.getElementById("fecha-hoy").textContent = `${numDia} ${mesNombre} (Hoy)`;
  document.getElementById("dia-nombre").textContent = datosHoy.nombre;
  document.getElementById("horario-texto").textContent = datosHoy.horario;
}

// Función para mostrar/ocultar todos los horarios al hacer clic en el botón
function toggleHorarios() {
  const lista = document.getElementById("lista-completa");
  const btn = document.getElementById("btn-ver-todos");

  if (lista.classList.contains("oculto")) {
    lista.classList.remove("oculto");
    btn.textContent = "Ocultar horarios";
  } else {
    lista.classList.add("oculto");
    btn.textContent = "Ver todos los horarios";
  }
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", cargarHorarioHoy);