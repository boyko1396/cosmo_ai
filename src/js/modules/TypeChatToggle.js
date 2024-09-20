export default class TypeChatToggle {
  constructor() {
    this.typeChat = document.querySelector('.js-type-chat');
    this.toggleBtn = document.querySelector('.js-type-chat-toggle');

    if (this.typeChat && this.toggleBtn) {
      this.init();
    }
  }

  init() {
    this.toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleVisibility();
    });

    document.addEventListener('click', () => {
      if (this.typeChat.classList.contains('is-show')) {
        this.toggleVisibility();
      }
    });
  }

  toggleVisibility() {
    this.typeChat.classList.toggle('is-show');
  }
}
