// comm
$(document).ready(function () {
  // gnb 메뉴 호버
  $(".gnb_1depth > li").hover(
    function () {
      $(this).find(".gnb_2depth").stop().slideDown(300);
      $(this).children("a").css("color", "#0067ac");
    },
    function () {
      $(this).find(".gnb_2depth").stop().slideUp(300);
      $(this).children("a").css({
        color: "#333333",
      });
    }
  );

  $(".gnb_2depth > li").hover(
    function () {
      $(this).children("a").css("font-family", "WooridaumR");
    },
    function () {
      $(this).children("a").css("font-family", "WooridaumL");
    }
  );

  // tnb Language 클릭
  $(".tnb_lang").click(function () {
    $(this).find(".tnb_lang_sel").stop().slideDown(300);
    $(this).find(".la-angle-up, .la-angle-down").toggle();
  });

  $(".tnb_lang").mouseleave(function () {
    setTimeout(function () {
      $(".tnb_lang_sel").slideUp(300, function () {
        $(this).parent().find(".la-angle-up, .la-angle-down").toggle();
      });
    }, 1000);
  });

  $(".tnb_lang_sel > li").hover(
    function () {
      $(this).children("a").css("border-bottom", "1px solid #333333");
    },
    function () {
      $(this).children("a").css("border-bottom", "none");
    }
  );

  // footer more 호버
  $(".ft_more_1depth > li").hover(
    function () {
      $(this).find("ul").stop().fadeIn(200);
    },
    function () {
      $(this).find("ul").stop().fadeOut(200);
    }
  );

  // footer img 호버
  $(".ft_img_info1, .ft_img_info2, .ft_img_info3").hover(
    function () {
      $(this).find("span").stop().fadeIn(200);
    },
    function () {
      $(this).find("span").stop().fadeOut(200);
    }
  );
});

// main
$(document).ready(function () {
  // 메인 슬라이드
  var mainSwiper = new Swiper(".swiper-container1", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    loopAdditionalSlides: 1,
    initialSlide: 0,
  });

  $(".swiper-button-play").on("click", function () {
    mainSwiper.autoplay.start();
    console.log("play");
  });
  $(".swiper-button-pause").on("click", function () {
    mainSwiper.autoplay.stop();
    console.log("stop");
  });

  $(".swiper-button-play").on("click", function () {
    mainSwiper.autoplay.start();
    $(".swiper-button-play").hide();
    $(".swiper-button-pause").show();
    console.log("play");
  });

  $(".swiper-button-pause").on("click", function () {
    mainSwiper.autoplay.stop();
    $(".swiper-button-play").show();
    $(".swiper-button-pause").hide();
    console.log("stop");
  });

  // 추천상품 슬라이드
  var recSwiper = new Swiper(".swiper-container2", {
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".custom-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".custom-button-next",
      prevEl: ".custom-button-prev",
    },
    loop: true,
    loopAdditionalSlides: 0,
    initialSlide: 0,
  });

  // 이벤트 슬라이드
  var eventSwiper = new Swiper(".swiper-container3", {
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".custom-pagination2",
      type: "fraction",
    },
    navigation: {
      nextEl: ".custom-button-next2",
      prevEl: ".custom-button-prev2",
    },
    loop: true,
    loopAdditionalSlides: 0,
    initialSlide: 0,
  });
});

// main 모바일
$(document).ready(function () {
  // 메인 슬라이드
  var mobileSwiper1 = new Swiper(".swiper-container-m1", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    loopAdditionalSlides: 1,
    initialSlide: 0,
  });

  $(".swiper-button-play").on("click", function () {
    mobileSwiper1.autoplay.start();
    console.log("play");
  });
  $(".swiper-button-pause").on("click", function () {
    mobileSwiper1.autoplay.stop();
    console.log("stop");
  });

  $(".swiper-button-play").on("click", function () {
    mobileSwiper1.autoplay.start();
    $(".swiper-button-play").hide();
    $(".swiper-button-pause").show();
    console.log("play");
  });

  $(".swiper-button-pause").on("click", function () {
    mobileSwiper1.autoplay.stop();
    $(".swiper-button-play").show();
    $(".swiper-button-pause").hide();
    console.log("stop");
  });

  // 추천상품 슬라이드
  var recSwiper = new Swiper(".swiper-container-m2", {
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".custom-pagination-m",
      type: "fraction",
    },
    navigation: {
      nextEl: ".custom-button-next",
      prevEl: ".custom-button-prev",
    },
    loop: true,
    loopAdditionalSlides: 0,
    initialSlide: 0,
  });

  // 이벤트 슬라이드
  var eventSwiper = new Swiper(".swiper-container-m3", {
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".custom-pagination-m2",
      type: "fraction",
    },
    navigation: {
      nextEl: ".custom-button-next2",
      prevEl: ".custom-button-prev2",
    },
    loop: true,
    loopAdditionalSlides: 0,
    initialSlide: 0,
  });
});

// main 태블릿
$(document).ready(function () {
  // 메인 슬라이드
  var tabletSwiper1 = new Swiper(".swiper-container-t1", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    loopAdditionalSlides: 1,
    initialSlide: 0,
  });

  $(".swiper-button-play").on("click", function () {
    tabletSwiper1.autoplay.start();
    console.log("play");
  });
  $(".swiper-button-pause").on("click", function () {
    tabletSwiper1.autoplay.stop();
    console.log("stop");
  });

  $(".swiper-button-play").on("click", function () {
    mobileSwiper1.autoplay.start();
    $(".swiper-button-play").hide();
    $(".swiper-button-pause").show();
    console.log("play");
  });

  $(".swiper-button-pause").on("click", function () {
    mobileSwiper1.autoplay.stop();
    $(".swiper-button-play").show();
    $(".swiper-button-pause").hide();
    console.log("stop");
  });

  // 추천상품 슬라이드
  var recSwiper = new Swiper(".swiper-container-m2", {
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".custom-pagination-m",
      type: "fraction",
    },
    navigation: {
      nextEl: ".custom-button-next",
      prevEl: ".custom-button-prev",
    },
    loop: true,
    loopAdditionalSlides: 0,
    initialSlide: 0,
  });

  // 이벤트 슬라이드
  var eventSwiper = new Swiper(".swiper-container-m3", {
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".custom-pagination-m2",
      type: "fraction",
    },
    navigation: {
      nextEl: ".custom-button-next2",
      prevEl: ".custom-button-prev2",
    },
    loop: true,
    loopAdditionalSlides: 0,
    initialSlide: 0,
  });
});

// introduce
$(document).ready(function () {
  // 메인 텍스트 애니메이션
  gsap.from(".intro_main", {
    opacity: 0,
    y: 50,
    duration: 2,
    ease: "power1.out",
  });

  // 목업 스크롤트리거
  function fadeInOnScroll(element, direction) {
    gsap.from(element, {
      opacity: 0,
      x: direction === "left" ? -50 : 50,
      duration: 3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        end: "bottom 40%",
        scrub: true,
      },
    });
  }

  fadeInOnScroll(".mokup-pc", "right");
  fadeInOnScroll(".mokup-mobile", "left");
  fadeInOnScroll(".mokup-tablet", "right");

  // 연혁 슬라이드
  var historySwiper = new Swiper(".swiper-container4", {
    slidesPerView: 0.5,
    freeMode: true,
  });

  // 상품 스크롤트리거
  const sections = document.querySelectorAll(
    ".intro_insurance, .intro_card, .intro_mydata"
  );

  sections.forEach((section) => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.from(section.querySelector("img"), { opacity: 0, y: 100, duration: 1 })
      .to(section.querySelector("img"), {
        filter: "brightness(50%)",
        duration: 1,
        delay: 0,
        toggleActions: "restart pause reverse pause",
      })

      .to(section.querySelector("strong"), { opacity: 1, duration: 1 })
      .to(section.querySelector("p"), { opacity: 1, duration: 1 });

    ScrollTrigger.create({
      trigger: section,
      start: "top 70%",
      animation: tl,
    });
  });
});

// introduce 모바일
$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);

  function handleAnimation(element, opacityValue) {
    gsap.to(element, {
      filter: "brightness(0.5)",
      opacity: opacityValue,
      duration: 1,
      toggleActions: "restart pause reverse pause",
    });
  }

  gsap.utils
    .toArray(".mobile_insurance, .mobile_card, .mobile_mydata")
    .forEach((section) => {
      const imgElement = section.querySelector("img");
      const strongElement = section.querySelector("strong");
      const textElement = section.querySelector("p");

      ScrollTrigger.create({
        trigger: section,
        start: "top 10%",
        onEnter: () => {
          handleAnimation(imgElement, 1);
          gsap.to(strongElement, {
            opacity: 1,
            duration: 1,
          });
          gsap.to(textElement, {
            opacity: 1,
            duration: 1,
          });
        },
        onLeaveBack: () => {
          handleAnimation(imgElement, 0);
          gsap.to(strongElement, {
            opacity: 0,
            duration: 1,
          });
          gsap.to(textElement, {
            opacity: 0,
            duration: 1,
          });
        },
      });
    });
});
