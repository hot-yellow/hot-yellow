// ================================
// HOT-YELLOW Slider
// ================================

const images = [
    "assets/images/studio_1.jpeg",
    "assets/images/studio_2.jpeg",
    "assets/images/studio_3.jpeg",
    "assets/images/studio_4.jpeg",
    "assets/images/studio_5.jpeg"
];

let currentSlide = 0;

const sliderImage = document.getElementById("slider-image");
const dots = document.querySelectorAll(".dot");

function updateSlider() {

    sliderImage.style.opacity = 0;

    setTimeout(() => {

        sliderImage.src = images[currentSlide];

        sliderImage.style.opacity = 1;

        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentSlide].classList.add("active");

    }, 200);

}

function changeSlide(direction) {

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = images.length - 1;
    }

    if (currentSlide >= images.length) {
        currentSlide = 0;
    }

    updateSlider();

}

function goToSlide(index) {

    currentSlide = index;

    updateSlider();

}

// Automatischer Wechsel alle 4 Sekunden

setInterval(() => {

    changeSlide(1);

}, 4000);

// Touch-Support für Smartphones

let touchStartX = 0;
let touchEndX = 0;

const slider = document.querySelector(".slider");

slider.addEventListener("touchstart", e => {

    touchStartX = e.changedTouches[0].screenX;

});

slider.addEventListener("touchend", e => {

    touchEndX = e.changedTouches[0].screenX;

    if (touchEndX < touchStartX - 50) {
        changeSlide(1);
    }

    if (touchEndX > touchStartX + 50) {
        changeSlide(-1);
    }

});
