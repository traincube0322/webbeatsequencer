// 로그인 버튼 클릭 시 모달 창을 보이도록 처리
document.getElementById("loginBtn").addEventListener("click", function() {
	document.getElementById("loginModal").style.display = "block";
});
  
// 모달 창을 닫기 위한 close 버튼 클릭 시 처리
document.getElementsByClassName("close")[0].addEventListener("click", function() {
	document.getElementById("loginModal").style.display = "none";
});