// desktop
// intro
type = "text/javascript";
const banner = document.querySelector(".circle");
window.addEventListener("scroll", function () {
  const value = 300 + window.scrollY;
  banner.style.clipPath = "circle(" + value + "px at center center)";
});
// products
AOS.init({
  duration: 1000,
});

// mobile
// mobile swiper 상단 버튼
var swiper = new Swiper(".product-menu-m", {
  slidesPerView: 4.5,
});
// 상단 버튼 클릭시 색상변경
document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".menu-link");

  menuLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      menuLinks.forEach(function (link) {
        link.classList.remove("clicked");
      });

      link.classList.add("clicked");
    });
  });
});

//모바일 상품 컨텐츠
var swiper = new Swiper(".product-contents-m", {
  slidesPerView: 2,
});
