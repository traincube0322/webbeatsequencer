const accountBtn = document.getElementById('account-btn');
const accountDropdown = document.getElementById('account-dropdown');

accountBtn.addEventListener('click', () => {
  accountDropdown.classList.toggle('visible');
});

// 여기에 사용자 로그인 여부를 확인하는 로직을 추가합니다.
const isLoggedIn = false; // 예시에서는 로그인 상태가 아니라고 가정합니다.

if (!isLoggedIn) {
  // 로그인 상태가 아닌 경우 버튼 텍스트를 변경합니다.
  accountBtn.textContent = 'Sign Up / Log In';
}