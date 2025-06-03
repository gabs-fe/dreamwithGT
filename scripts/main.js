let slideIndex = 0;

function showSlides() {
  let slides = document.querySelectorAll('.carousel-item');
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  slides[slideIndex].classList.add('active');
}

function moveSlide(step) {
  let slides = document.querySelectorAll('.carousel-item');
  slideIndex += step;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slides[slideIndex].classList.add('active');
}

// Navegação automática
setInterval(showSlides, 3000);  // Troca a imagem automaticamente a cada 3 segundos
