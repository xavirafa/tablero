let previousHour = null;
let currentImageIndex = 0;

const motivationalMessages = [
  // Agrega aquí tus mensajes motivacionales
  "Haz hoy lo que otros no quieren, y tendrás mañana lo que otros no tienen.",
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
  "El fracaso es la oportunidad de comenzar de nuevo con más inteligencia.",
  "La única forma de hacer un gran trabajo es amar lo que haces.",
  "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.",
  "No se trata de tener tiempo, sino de saber administrarlo.",
  "El éxito no es cuestión de suerte, es cuestión de perseverancia.",
  "La innovación distingue a los líderes de los seguidores.",
  "Si te caes siete veces, levántate ocho.",
  "El fracaso es simplemente la oportunidad de comenzar de nuevo, esta vez de manera más inteligente.",
  "La disciplina es el puente entre metas y logros.",
  "No se trata de tener más, sino de disfrutar más de lo que se tiene.",
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
  "La excelencia no es un acto, es un hábito.",
  "Haz lo que puedas, con lo que tengas, donde estés.",
];

function updateTime() {
  const date = new Date();
  const currentHour = date.getHours();

  if (previousHour === null || previousHour !== currentHour) {
    updateMotivationalMessage();
    previousHour = currentHour;
  }

  // Actualiza la hora
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  document.getElementById("clock").innerHTML = formattedTime;

  // Actualiza el día
  const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const dayName = days[date.getDay()];
  document.getElementById("day").innerHTML = dayName;

  // Actualiza la fecha
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  document.getElementById("date").innerHTML = formattedDate;
}

function updateMotivationalMessage() {
  const randomIndex = Math.floor(Math.random() * motivationalMessages.length);
  const message = motivationalMessages[randomIndex];
  document.getElementById("motivational-message").innerHTML = message;
}

function showInfoImage() {
  const infoImages = document.querySelectorAll(".info-image");
  const mainContent = document.querySelectorAll("#clock, #motivational-message, #day, #date");
  const logo = document.querySelector(".logo");

  infoImages[currentImageIndex].classList.remove("hidden-info");
  mainContent.forEach((element) => {
    element.classList.add("hidden");
  });
  logo.classList.add("hidden");
}

function hideInfoImage() {
  const infoImages = document.querySelectorAll(".info-image");
  const mainContent = document.querySelectorAll("#clock, #motivational-message, #day, #date");
  const logo = document.querySelector(".logo");

  infoImages[currentImageIndex].classList.add("hidden-info");
  mainContent.forEach((element) => {
    element.classList.remove("hidden");
  });
  logo.classList.remove("hidden");
}

function imageRotation() {
  const rotationDelay = 2 * 60 * 1000; // 2 minutos
  const imageDisplayTime = 30 * 1000; // 30 segundos

  setInterval(() => {
    hideInfoImage(); // Oculta la imagen actual
    currentImageIndex = (currentImageIndex + 1) % document.querySelectorAll(".info-image").length; // Actualiza el índice de la imagen actual para la próxima rotación
    showInfoImage(); // Muestra la nueva imagen actual y oculta la hora, el mensaje, la fecha y el día
    setTimeout(() => {
      hideInfoImage(); // Oculta la imagen actual y muestra la hora, el mensaje, la fecha y el día
    }, imageDisplayTime);
  }, rotationDelay);

  console.log('La función imageRotation se está ejecutando');
}

updateTime();
setInterval(updateTime, 1000); // Actualiza la hora cada segundo
imageRotation(); // Agrega esta línea aquí