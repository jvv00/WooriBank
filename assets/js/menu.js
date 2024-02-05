// 전체 메뉴 닫기
function closeModal() {
  // const modal = document.querySelector(".menu-wrap");
  // const modalBackground = document.getElementById("modalBackground");
  // modal.style.display = "none";
  // modalBackground.style.display = "none";
  // document.body.classList.remove("modal-open");
  history.back();
}

// 전체 메뉴 열기
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

  const allButtons = document.querySelectorAll(".q-button");
  allButtons.forEach((button) => {
    if (button !== element) {
      button.classList.remove("clicked");
    }
  });
}

// 모바일: 액티브 추가 (메뉴 아이콘 클릭시 ul 나타남)
document.addEventListener("DOMContentLoaded", function () {
  var downIcons = document.querySelectorAll(".down-icon i");
  var menus = document.querySelectorAll(".menu ul");

  menus[0].classList.add("active");
  downIcons[0].style.transform = "rotate(180deg)";
  menus[0].style.maxHeight = menus[0].scrollHeight + "px";

  downIcons.forEach(function (downIcon, index) {
    downIcon.addEventListener("click", function () {
      menus[index].classList.toggle("active");
      downIcon.style.transform = menus[index].classList.contains("active")
        ? "rotate(180deg)"
        : "rotate(0deg)";

      if (menus[index].classList.contains("active")) {
        menus[index].style.maxHeight = menus[index].scrollHeight + "px";
      } else {
        menus[index].style.maxHeight = 0;
      }
    });
  });
});
