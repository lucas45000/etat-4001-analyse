// --- HEADER DYNAMIQUE AU SCROLL ---
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollTop > lastScrollTop && scrollTop > 100){
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
