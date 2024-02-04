document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mon-slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000,
    },
  });
});

const lightbox = new SimpleLightbox(".card a");

const option = {
  gutterPixels: 50,
};

const filterizr = new Filterizr(".portfolio-elements", option);

let filtersList = document.querySelectorAll(".filters li");

filtersList.forEach(function (filterItem) {
  filterItem.addEventListener("click", function () {
    document.querySelector(".filters .active").classList.remove("active");
    this.classList.add("active");
  });
});