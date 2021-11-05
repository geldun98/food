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

$(".popular-list").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1500,
  dots: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
      },
      breakpoint: 468,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        infinite: false,
        dots: true,
      },
    },
  ],
});
