const modal = document.querySelector(".check-modal");
const menu = document.querySelector("#menu-btn");
const headerMenu = document.querySelector(".header-menu");
const inputSeacrh = document.querySelector(".search-input");
const backgroundSearch = document.querySelector(".search");
const closeSearch = document.querySelector(".search-close");
const searchBtn = document.querySelector("#search-btn");
const closeCart = document.querySelector(".cart-close");
const backgroundCart = document.querySelector(".cart");
const cartBtn = document.querySelector("#cart-btn");
const loginBtn = document.querySelector("#login-btn");
const backgroundLogin = document.querySelector(".login");
const closeLogin = document.querySelector(".login-close");

menu.addEventListener("click", function () {
  modal.classList.add("modal");

  if (headerMenu.classList.contains("modal")) {
    removeMenuModal();
  } else {
    headerMenu.classList.add("modal");
  }
});

window.addEventListener("click", function (e) {
  if (
    e.target.matches(".check-modal") ||
    e.target.matches(".header-item-link")
  ) {
    removeMenuModal();
  }
});

function removeMenuModal() {
  modal.classList.remove("modal");
  headerMenu.classList.remove("modal");
}

inputSeacrh.addEventListener("click", function () {
  backgroundSearch.classList.add("dark");
});
closeSearch.addEventListener("click", function () {
  backgroundSearch.classList.add("close");
});
searchBtn.addEventListener("click", function () {
  backgroundSearch.classList.remove("close");
});

window.addEventListener("click", function (e) {
  if (e.target.matches(".cart-item-delete")) {
    e.path[1].classList.add("close");
  }
});

closeCart.addEventListener("click", function () {
  backgroundCart.classList.add("close");
});
cartBtn.addEventListener("click", function () {
  backgroundCart.classList.remove("close");
});
loginBtn.addEventListener("click", function () {
  backgroundLogin.classList.remove("close");
});
closeLogin.addEventListener("click", function () {
  backgroundLogin.classList.add("close");
});

//Slider
$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  // autoplayTimeout: 1000,
  responsiveClass: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 4,
      nav: true,
      loop: true,
    },
  },
});
