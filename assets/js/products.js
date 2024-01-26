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
