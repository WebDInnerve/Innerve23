console.clear();
const app = (() => {
  let body;
  let menu;
  let menuItems;

  const init = () => {
    body = document.querySelector('body');
    menu = document.querySelector('.menu-icon');
    menuItems = document.querySelectorAll('.nav__list-item');

    // Disable the links on page load
    menuItems.forEach(item => item.classList.add('disabled'));

    applyListeners();
  }

  const applyListeners = () => {
    menu.addEventListener('click', () => {
      toggleClass(body, 'nav-active');
      // Enable the links when the menu icon is clicked
      menuItems.forEach(item => item.classList.remove('disabled'));
    });
  }

  const toggleClass = (element, stringClass) => {
    if (element.classList.contains(stringClass)) {
      element.classList.remove(stringClass);
    } else {
      element.classList.add(stringClass);
    }
  }

  init();
})();
