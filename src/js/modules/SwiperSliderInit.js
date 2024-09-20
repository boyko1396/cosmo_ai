import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

Swiper.use([Navigation, Pagination]);

export default class SwiperSliderInit {
  constructor(sliderClass, prevBtnClass, nextBtnClass, paginationClass, options = {}) {
    this.slider = document.querySelector(sliderClass);
    this.prevButton = document.querySelector(prevBtnClass);
    this.nextButton = document.querySelector(nextBtnClass);
    this.pagination = document.querySelector(paginationClass);
    this.options = options;

    if (this.slider) {
      this.initSlider();
    }
  }

  initSlider() {
    const navigationOptions = this.prevButton && this.nextButton ? {
      navigation: {
        nextEl: this.nextButton,
        prevEl: this.prevButton,
      }
    } : {};

    const paginationOptions = this.pagination ? {
      pagination: {
        el: this.pagination,
        type: 'custom',
        renderCustom: (swiper, current, total) => {
          return `${current}/${total}`;
        },
      }
    } : {};

    new Swiper(this.slider, {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      ...navigationOptions,
      ...paginationOptions,
      ...this.options,
    });
  }
}
