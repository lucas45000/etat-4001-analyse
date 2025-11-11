const header = document.getElementById('header');
const menuBubble = document.getElementById('menuBubble');
const menuDropdown = document.getElementById('menuDropdown');

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Si on descend et qu'on a scrollé au moins 50px
  if (scrollTop > lastScrollTop && scrollTop > 50) {
    header.classList.add('hidden');
    menuBubble.classList.add('visible');
  } 
  // Si on remonte
  else if (scrollTop < lastScrollTop) {
    header.classList.remove('hidden');
    menuBubble.classList.remove('visible');
    menuDropdown.classList.remove('show');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // éviter les valeurs négatives
});

// Clique sur la bulle pour afficher/masquer le menu
menuBubble.addEventListener('click', () => {
  menuDropdown.classList.toggle('show');
});
