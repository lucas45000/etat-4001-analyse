// header.js - menu déroulant dynamique pour toutes les pages
document.addEventListener("DOMContentLoaded", function() {
  const header = document.getElementById("header");
  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      header.classList.add("hidden"); // cache le header
    } else {
      header.classList.remove("hidden"); // réaffiche le header
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
});
