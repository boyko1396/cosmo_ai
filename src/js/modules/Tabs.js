export class Tabs {
  constructor(navSelector, contentSelector, activeClass, showClass) {
    this.nav = document.querySelector(navSelector);
    this.contents = document.querySelectorAll(contentSelector);
    this.activeClass = activeClass;
    this.showClass = showClass;

    if (!this.nav || this.contents.length === 0) return;

    this.init();
  }

  init() {
    this.navItems = this.nav.querySelectorAll('a');
    
    this.navItems.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = tab.getAttribute('href').substring(1);
        const targetContent = document.getElementById(targetId);

        this.toggleTab(tab, targetContent);
      });
    });
  }

  toggleTab(activeTab, activeContent) {
    this.navItems.forEach((tab) => tab.classList.remove(this.activeClass));
    this.contents.forEach((content) => content.classList.remove(this.showClass));

    activeTab.classList.add(this.activeClass);
    activeContent.classList.add(this.showClass);
  }
}