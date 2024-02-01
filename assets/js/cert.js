var links = document.querySelectorAll(".link");

document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll(".link");

  links.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();

      var certMenuContent = this.nextElementSibling;
      var isActive = this.parentElement.classList.toggle('active');
      certMenuContent.style.maxHeight = isActive ? certMenuContent.scrollHeight + "px" : 0;
    });
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