export default class ChatHeaderToggle {
  constructor(toggleBtnClass, headerClass, activeClass = 'is-show') {
    this.toggleButton = document.querySelector(toggleBtnClass);
    this.header = document.querySelector(headerClass);
    this.activeClass = activeClass;

    if (this.toggleButton && this.header) {
      this.initEvents();
    }
  }

  initEvents() {
    this.toggleButton.addEventListener('click', this.toggleHeader.bind(this));

    document.addEventListener('click', this.handleOutsideClick.bind(this));
  }

  toggleHeader() {
    this.header.classList.toggle(this.activeClass);
  }

  handleOutsideClick(event) {
    const isClickInsideHeader = this.header.contains(event.target);
    const isClickOnToggleButton = this.toggleButton.contains(event.target);

    if (!isClickInsideHeader && !isClickOnToggleButton) {
      this.header.classList.remove(this.activeClass);
    }
  }
}