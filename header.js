const header = document.getElementById('header');
const menuBubble = document.getElementById('menuBubble');
const menuDropdown = document.getElementById('menuDropdown');

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Masquer / afficher le header
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    header.classList.add('hidden');
    menuBubble.classList.add('visible'); // afficher bulle menu
  } else {
    header.classList.remove('hidden');
    menuBubble.classList.remove('visible'); // cacher bulle menu
    menuDropdown.classList.remove('show'); // cacher le menu si header visible
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Toggle menu dropdown
menuBubble.addEventListener('click', () => {
  menuDropdown.classList.toggle('show');
});
