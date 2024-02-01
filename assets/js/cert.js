var links = document.querySelectorAll(".link");

document.addEventListener('DOMContentLoaded', function() {
  // 이하 스크립트 코드...
});
links.forEach(function(link) {
  link.addEventListener("click", function(event){
    event.preventDefault();

    var certMenuContent = this.nextElementSibling;
    certMenuContent.style.display = (certMenuContent.style.display === 'none' || certMenuContent.style.display === '') ? 'block' : 'none';
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
      loop: true,
  });