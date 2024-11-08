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

// Menu handling
const categories = document.querySelectorAll(".category");

categories.forEach((category) => {
  category.addEventListener("click", () => {
    categories.forEach((cat) => cat.classList.remove("active"));

    category.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll(".category");
  const itemsContainers = document.querySelectorAll(".items-container");

  categories.forEach((category) => {
    category.addEventListener("click", () => {
      // Remove 'show' class from all items containers
      itemsContainers.forEach((container) => {
        container.classList.remove("show");
      });

      // Remove 'active' class from all categories
      categories.forEach((cat) => {
        cat.classList.remove("active");
      });

      // Add 'active' class to clicked category
      category.classList.add("active");

      // Show the relevant items container
      const selectedCategory = category.getAttribute("data-category");
      document
        .querySelector(`.items-container.${selectedCategory}`)
        .classList.add("show");
    });
  });
});

// Alert
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".res-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (form.checkValidity()) {
      Swal.fire({
        icon: "success",
        title: "Reservation Confirmed",
        text: "Your reservation has been successfully submitted!",
        confirmButtonText: "OK",
      }).then(() => {
        form.reset();
      });
    } else {
      form.reportValidity();
    }
  });
});
