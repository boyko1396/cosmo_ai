export default class HeaderSticky {
  constructor(headerClass, stickyClass = 'is-sticky') {
    this.header = document.querySelector(headerClass);
    this.stickyClass = stickyClass;
    this.scrollOffset = 5;

    if (this.header) {
      this.initScrollEvent();
      this.checkInitialScroll();
    }
  }

  initScrollEvent() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    if (window.scrollY > this.scrollOffset) {
      this.header.classList.add(this.stickyClass);
    } else {
      this.header.classList.remove(this.stickyClass);
    }
  }

  checkInitialScroll() {
    if (window.scrollY > this.scrollOffset) {
      this.header.classList.add(this.stickyClass);
    }
  }
}