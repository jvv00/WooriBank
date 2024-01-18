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
