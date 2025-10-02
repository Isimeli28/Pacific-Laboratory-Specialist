let index = 0;
const slides = document.getElementById("slides");
if (slides) {
  const totalSlides = slides.children.length;

  function showSlide(i) {
    if (i >= totalSlides) index = 0;
    if (i < 0) index = totalSlides - 1;
    slides.style.transform = `translateX(${-index * 100}%)`;
  }
  function nextSlide() { index++; showSlide(index); }
  function prevSlide() { index--; showSlide(index); }

  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;

  setInterval(nextSlide, 4000); // Auto slide every 4 sec
}
