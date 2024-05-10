const openBtn = document.querySelector("#menu-bar");
const closeBtn = document.querySelector("#close-bar");
const toggleNav = document.querySelector("#toggle-nav");
var flag = 1;

openBtn.addEventListener("click", () => {
  toggleNav.style.right = "0%";
});

closeBtn.addEventListener("click", () => {
  toggleNav.style.right = "-100%";
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
