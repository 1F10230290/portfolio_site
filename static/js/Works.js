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
