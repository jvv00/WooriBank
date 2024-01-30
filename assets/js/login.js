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
        ansList.style.display = 'flex';
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

  document.addEventListener("DOMContentLoaded", function () {
    // 로그인 버튼 활성화
    const userIdInput = document.getElementById('userId');
    const passwordInput = document.getElementById('password');
    const btn2 = document.getElementById('IdLoginBtn');
  
    function handleInput() {
      // input 값이 비어있지 않으면 btn2의 색상을 파란색으로 변경
      if (userIdInput.value && passwordInput.value) {
        btn2.classList.remove('disabled');
      } else {
        // input 값이 비어있으면 기본 색상으로 변경
        btn2.classList.add('disabled');
      }
    }
  
    // 초기 상태에서 input 값이 비어있으면 버튼 비활성화
    handleInput();
  
    // input 값이 변경될 때 이벤트 처리
    userIdInput.addEventListener('input', handleInput);
    passwordInput.addEventListener('input', handleInput);
  
    // 클릭 이벤트 처리
    btn2.addEventListener('click', function (event) {
      if (btn2.classList.contains('disabled')) {
        event.preventDefault();
        // 버튼이 비활성화되어 있으면 클릭 이벤트 중단
      } else {
        // 버튼이 활성화되어 있으면 클릭 이벤트 처리
        // 여기에 로그인 등의 동작 추가
  
        // 입력된 값 가져오기
        var userIdValue = userIdInput.value;
        var passwordValue = passwordInput.value;
        
         // 입력된 값 초기화
        userIdInput.value = '';
        passwordInput.value = '';
        // 가져온 값으로 원하는 작업 수행 (예: 서버로 전송, 검증 등)
        console.log('아이디:', userIdValue);
        console.log('비밀번호:', passwordValue);
        
        btn2.classList.add('disabled');
        // 원하는 작업 수행 후 페이지 이동 등 추가 작업이 필요하다면 여기에 추가
      }
    });
  });
  
  function showTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.login-box');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Deactivate all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => button.classList.remove('active'));

    // Show the selected tab
    const selectedTab = document.getElementById(`${tabName}Tab`);
    selectedTab.classList.add('active');

    // Activate the corresponding tab button
    const selectedTabButton = document.querySelector('.tab-wrap .tab-btn.' + tabName);
    selectedTabButton.classList.add('active');
}
