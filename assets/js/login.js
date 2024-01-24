// NodeList를 배열로 변환하는 함수
function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
  }
  
  document.querySelectorAll('.faq-list dt').forEach(function(dt) {
    dt.addEventListener('click', function() {
      let ansList = this.nextElementSibling;
  
      if (!this.classList.contains('selected')) {
        // 선택된 질문이 없으면 모든 질문을 초기화하고 현재 선택한 질문 표시
        toArray(document.querySelectorAll('.faq-list dt')).forEach(function(item) {
          item.classList.remove('selected');
        });
        this.classList.add('selected');
  
        // 모든 답변 숨기고 현재 선택한 질문에 해당하는 답변 표시
        toArray(document.querySelectorAll('.faq-list dd')).forEach(function(item) {
          item.style.display = 'none';
        });
        ansList.style.display = 'block';
      } else {
        // 이미 선택된 질문이면 선택 취소하고 답변 숨기기
        this.classList.remove('selected');
        ansList.style.display = 'none';
      }
  
      // 답변이 숨겨져 있으면 모든 답변 숨기고 현재 선택한 질문에 해당하는 답변 표시
      if (ansList.style.display === 'none') {
        toArray(document.querySelectorAll('.faq-list dd')).forEach(function(item) {
          item.style.display = 'none';
        });
        ansList.style.display = 'none';
      }
  
      event.preventDefault();
    });
  });

  document.getElementById('IdLogin').addEventListener('click', function (event) {
    event.preventDefault(); // 이벤트 기본 동작 방지

    // 입력된 값 가져오기
    var userIdValue = document.getElementById('userId').value;
    var passwordValue = document.getElementById('password').value;

    // 가져온 값으로 원하는 작업 수행 (예: 서버로 전송, 검증 등)
    console.log('아이디:', userIdValue);
    console.log('비밀번호:', passwordValue);

    // 원하는 작업 수행 후 페이지 이동 등 추가 작업이 필요하다면 여기에 추가

});
  

