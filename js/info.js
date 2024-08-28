

let currentSlide = 0;
let slideInterval;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const offset = -currentSlide * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function startSlideShow() {
    slideInterval = setInterval(() => {
        moveSlide(1);
    }, 4000); // Change slide every 4 seconds
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

document.addEventListener('DOMContentLoaded', (event) => {
    startSlideShow();

    const slider = document.getElementById('slider');
    slider.addEventListener('mouseenter', stopSlideShow);
    slider.addEventListener('mouseleave', startSlideShow);

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            moveSlide(-1);
        } else if (event.key === 'ArrowRight') {
            moveSlide(1);
        }
    });
});