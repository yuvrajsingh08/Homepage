let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const leftBtn = document.querySelector(".nav-btn.left");
const rightBtn = document.querySelector(".nav-btn.right");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Auto Slide
let slideInterval = setInterval(nextSlide, 3000);

// Manual Controls
leftBtn.addEventListener("click", () => {
  prevSlide();
  resetInterval();
});

rightBtn.addEventListener("click", () => {
  nextSlide();
  resetInterval();
});

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 3000);
}

// Initialize
showSlide(currentSlide);
