// header.js
const header = document.getElementById('header');
const menuBubble = document.getElementById('menuBubble');
const menuDropdown = document.getElementById('menuDropdown');

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 100) {
    header.classList.add('hidden');
    menuBubble.classList.add('visible'); // Affiche la bulle
  } else {
    header.classList.remove('hidden');
    menuBubble.classList.remove('visible'); // Cache la bulle
    menuDropdown.classList.remove('show'); // Ferme le menu si ouvert
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Clique sur la bulle pour afficher/masquer le menu
menuBubble.addEventListener('click', () => {
  menuDropdown.classList.toggle('show');
});
