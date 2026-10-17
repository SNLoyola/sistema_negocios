const carousel = document.querySelector(".carousel");

const container = carousel.querySelector(".carousel__container");
const slides = carousel.querySelectorAll(".carousel__slide");
const prevBtn = carousel.querySelector(".carousel__btn--prev");
const nextBtn = carousel.querySelector(".carousel__btn--next");
const indicators = carousel.querySelectorAll(".carousel__indicator");

let currentIndex = 0;
let autoplay;

function showSlide(index) {
    // Volver al principio si superamos la última imagen
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    // Desplazar el contenedor
    container.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Actualizar el indicador activo
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle("active", i === currentIndex);
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Eventos de los botones
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Eventos de los indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
        showSlide(index);
        restartAutoplay();
    });
});

// Cambio automático cada 5 segundos
function startAutoplay() {
    autoplay = setInterval(nextSlide, 5000);
}

function restartAutoplay() {
    clearInterval(autoplay);
    startAutoplay();
}

nextBtn.addEventListener("click", restartAutoplay);
prevBtn.addEventListener("click", restartAutoplay);

// Iniciar carrusel
showSlide(0);
startAutoplay();