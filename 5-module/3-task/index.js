function initCarousel() {
  const carouselArrowRight = document.querySelector('.carousel__arrow_right');
  const carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  const carouselInner = document.querySelector('.carousel__inner');
  const carouselSlides = document.querySelectorAll('.carousel__slide');
  const totalSlides = carouselSlides.length;
  let currentSlide = 0;

  carouselArrowLeft.style.display = 'none';

  function updateCarousel() {
    carouselInner.style.transform = `translateX(${-currentSlide * 100}%)`;

    carouselArrowLeft.style.display = currentSlide === 0 ? 'none' : '';
    carouselArrowRight.style.display = currentSlide === totalSlides - 1 ? 'none' : '';
  };

  function rightArrow() {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      updateCarousel();
    };
  };

  function leftArrow() {
    if (currentSlide > 0) {
      currentSlide--;
      updateCarousel();
    };
  };

  carouselArrowRight.addEventListener('click', rightArrow);
  carouselArrowLeft.addEventListener('click', leftArrow);
};