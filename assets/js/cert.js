// JavaScript 코드
var links = document.querySelectorAll('.link');

links.forEach(function(link) {
  link.addEventListener('click', function() {

    // 현재 요소에 'active' 클래스가 있는지 확인하고 추가 또는 제거
    if (this.classList.contains('active')) {
      this.classList.remove('active');
    } else {
      this.classList.add('active');
    }

    // 모든 .menu 요소를 숨김
    var menus = document.querySelectorAll('.menu');
    menus.forEach(function(menu) {
      menu.style.display = 'none';
    });

    // 현재 요소의 다음 요소가 숨겨져 있는지 확인하고 표시
    var nextElement = this.nextElementSibling;
    if (nextElement && window.getComputedStyle(nextElement).display === 'none') {
      nextElement.style.display = 'block'; // 또는 다른 적절한 디스플레이 값 설정
    }
  });
});

var swiper = new Swiper(".Won-Slide", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });