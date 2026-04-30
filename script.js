let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let autoPlay;

function showSlides(n) {
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slides[slideIndex].classList.add("active");
}

function changeSlides(n) {
    clearInterval(autoPlay);
    showSlides(slideIndex += n);
    startAutoPlay();
}

function startAutoPlay() {
    autoPlay = setInterval(() => {
        showSlides(slideIndex += 1);
    }, 5000);
}

// Initialize
showSlides(slideIndex);
startAutoPlay();