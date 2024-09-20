export default class ChatForm {
  constructor() {
    this.textarea = document.querySelector('.js-chat-textarea');
    this.sendButton = document.querySelector('.js-chat-btn-send');

    if (this.textarea && this.sendButton) {
      this.init();
    }
  }

  init() {
    this.textarea.addEventListener('input', () => {
      this.toggleButtonState();
    });
  }

  toggleButtonState() {
    const textLength = this.textarea.value.trim().length;
    if (textLength > 0) {
      this.sendButton.disabled = false;
    } else {
      this.sendButton.disabled = true;
    }
  }
}