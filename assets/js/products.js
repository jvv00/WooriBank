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
// gsap.registerPlugin(ScrollTrigger);

// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".circle-contain",
//     start: "top top",
//     end: "bottom top",
//     pin: true,
//     markers: true,
//     pinSpacing: false,
//     scrub: true,
//   },
// });
// tl.to(".circle", {
//   scale: 5,
// });

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".circle-contain",
    start: "top top",
    end: "+=100%",
    pin: true,
    markers: true,
    pinSpacing: false,
    scrub: true,
    toggleActions: "play none none none", // 변경된 부분
    // fromto:
  },
});

tl.to(".circle", {
  scale: 5,
});

ScrollTrigger.create({
  trigger: ".products",
  start: "top top",
  end: "+=100%",
  pin: true,
  pinSpacing: false,
});
