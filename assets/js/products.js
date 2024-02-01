// intro
type = "text/javascript";
const banner = document.querySelector(".circle");
window.addEventListener("scroll", function () {
  const value = 800 + window.scrollY;
  banner.style.clipPath = "circle(" + value + "px at center center)";
});

// products
AOS.init({
  duration: 1000,
});

// mobile swiper 상단 버튼
var swiper = new Swiper(".product-menu-m", {
  slidesPerView: 3,
});

//모바일 상품 컨텐츠
var swiper = new Swiper(".product-contents-m", {
  slidesPerView: 2.5,
});
