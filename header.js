let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    header.classList.add('hidden'); // cache avec fondu
  } else {
    header.classList.remove('hidden'); // réaffiche avec fondu
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
