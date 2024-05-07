const slides = document.querySelectorAll('.banner-slide');
const container = document.querySelector('.banner-container');
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
}

function updateSlide() {
  container.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds