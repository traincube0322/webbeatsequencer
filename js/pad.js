var key_colors = ['#FF007F', '#00FF2E', '#00DDFF', '#D400FF'];

const buttons = document.querySelectorAll('.key');

buttons.forEach(button => {
	button.addEventListener('click', toggleButton);
});

function toggleButton(event) {
	const button = event.target;
	if (!button.classList.contains('on')) {
	button.classList.add('on');
	} else {
		button.classList.remove('on');
	}
}

document.getElementById('startBtn').addEventListener('click', startAnimation);

function activateButton(num) {
	const buttons = document.querySelectorAll('.key');
	buttons.forEach(button => {
		button.classList.remove('active'); // 모든 버튼의 활성화 클래스 제거
	});
	const buttonToActivate = document.querySelectorAll('.num-' + num);
	buttonToActivate.forEach(button => {
		button.classList.add('active'); // 해당 버튼에 활성화 클래스 추가
	});
}

function startAnimation() {
	let num = 1;
	setInterval(() => {
		activateButton(num);
		num = num % 8 + 1; // 1부터 8까지 루프
	}, 1000);
}
