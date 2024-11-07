function handleScroll() {
  const nav = document.querySelector(".nav");
  if (window.scrollY > 100) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}

function toggleMenu() {
  document.querySelector(".nav-list").classList.toggle("active");
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
