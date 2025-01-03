document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('nextBtn').addEventListener('click', function() {
        const currentSlide = document.querySelector('.slide.current');
        const nextSlide = currentSlide.nextElementSibling || document.querySelector('.slide:first-child');

        currentSlide.classList.remove('current');
        currentSlide.classList.add('out');

        nextSlide.classList.add('incoming');

        setTimeout(() => {
            currentSlide.classList.remove('out');
            nextSlide.classList.remove('incoming');
            nextSlide.classList.add('current');
        }, 500);  // ここはCSSのtransitionの時間と一致させる
    });
});

let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  // Remove the active class from all slides and dots
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  // Add the active class to the selected slide and dot
  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function currentSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
}
