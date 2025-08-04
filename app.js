const navLinks = document.querySelectorAll(".nav_menu .nav_link");
const menuOpenButton= document.querySelector("#menu_open_button");
const menuCloseButton= document.querySelector("#menu_close_button");

menuOpenButton.addEventListener("click", () =>{
    document.body.classList.toggle("show_mobile_menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navLinks.forEach(link =>{
    link.addEventListener("click", () => menuOpenButton.click());
});

const swiper = new Swiper('.slider_wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    0: {
        slidesPerView:1
    },
    768: {
        slidesPerView:2
    },
    1024: {
        slidesPerView:3
    },
  }
});