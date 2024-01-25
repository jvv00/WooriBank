window.addEventListener("resize", function () {
  var winWidth = window.innerWidth || document.documentElement.clientWidth;
  var circleElement = document.querySelector(".circle");
  if (winWidth <= 1920) {
    // 2:1
    circleElement.style.height = circleElement.offsetWidth * 1 + "px";
  } else {
    // 리사이즈 범위를 벗어날 경우 초기 높이로 설정
    circleElement.style.height = "";
  }
});

// intro
// type = "text/javascript";
// const banner = document.querySelector(".circle");
// window.addEventListener("scroll", function () {
//   const value = 800 + window.scrollY;
//   banner.style.clipPath = "circle(" + value + "px at center center)";
// });

AOS.init({
  duration: 1000,
});
