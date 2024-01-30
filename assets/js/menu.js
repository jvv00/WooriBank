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
