import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.currentSlideIndex = 0;
    this.elem = this.render();
    this.initEventListeners();
  };

  render() {
    this.carousel = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left" style="display: none">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">
          ${this.slides.map(slide => this.createSlide(slide)).join('')}
        </div>
      </div>
    `);
    return this.carousel;
  };

  createSlide(slide) {
    return `
      <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `;
  };

  initEventListeners() {
    this.arrowRight = this.elem.querySelector('.carousel__arrow_right');
    this.arrowLeft = this.elem.querySelector('.carousel__arrow_left');
    this.inner = this.elem.querySelector('.carousel__inner');
    
    this.updateArrows();

    this.arrowRight.addEventListener('click', () => this.nextSlide());
    this.arrowLeft.addEventListener('click', () => this.prevSlide());
    
    this.elem.addEventListener('click', (event) => {
      if (event.target.closest('.carousel__button')) {
        let slide = this.slides[this.currentSlideIndex];
        this.elem.dispatchEvent(new CustomEvent("product-add", {
          detail: slide.id,
          bubbles: true
        }));
      };
    });
  };

  nextSlide() {
    this.currentSlideIndex++;
    this.updateSlides();
  };

  prevSlide() {
    this.currentSlideIndex--;
    this.updateSlides();
  };

  updateSlides() {
    let offset = -this.inner.offsetWidth * this.currentSlideIndex;
    this.inner.style.transform = `translateX(${offset}px)`;
    this.updateArrows();
  };

  updateArrows() {
    this.arrowLeft.style.display = this.currentSlideIndex === 0 ? 'none' : '';
    this.arrowRight.style.display = this.currentSlideIndex === this.slides.length - 1 ? 'none' : '';
  };
};