// 전체 메뉴 닫기
function closeModal() {
  const modal = document.querySelector(".menu-wrap");
  const modalBackground = document.getElementById("modalBackground");
  modal.style.display = "none";
  modalBackground.style.display = "none";
  document.body.classList.remove("modal-open");
}

// 전체 메뉴 열었을 때
function openModal() {
  const modal = document.querySelector(".menu-wrap");
  const modalBackground = document.getElementById("modalBackground");
  modal.style.display = "block";
  modalBackground.style.display = "block";
  document.body.classList.add("modal-open");
}

// 상단 버튼 클릭 시 컬러체인지
function changeColor(element) {
  element.classList.toggle("clicked");

  const allButtons = document.querySelectorAll(".bottons");
  allButtons.forEach((button) => {
    if (button !== element) {
      button.classList.remove("clicked");
    }
  });
}

// 모바일 액티브 추가
// Your existing JavaScript code...

// Add the following code to handle click events on the angle-down icons
document.addEventListener("DOMContentLoaded", function () {
  const angleDownIcons = document.querySelectorAll(".las.la-angle-down");

  angleDownIcons.forEach(function (icon) {
    icon.addEventListener("click", function () {
      const section = icon.closest(".section");
      const isActive = section.classList.toggle("active");

      // Close other sections if any
      document
        .querySelectorAll(".section.active")
        .forEach(function (activeSection) {
          if (activeSection !== section) {
            activeSection.classList.remove("active");
          }
        });
    });
  });
});
