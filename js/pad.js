var key_colors = ['#FF007F', '#00FF2E', '#00DDFF', '#D400FF'];

const buttons = document.querySelectorAll('.key');
let animationInterval; // 애니메이션을 제어하기 위한 변수

buttons.forEach(button => {
	button.addEventListener('click', toggleButton);
});

function toggleButton(event) {
	const button = event.target;
	button.classList.toggle('on')
}

document.getElementById('powerBtn').addEventListener('click', startAnimation);

const powerBtn = document.getElementById('powerBtn');

powerBtn.addEventListener('click', function() {
	this.classList.toggle('on');
	if (this.classList.contains('on')) {
	startAnimation();
	} else {
	clearInterval(animationInterval);
	clearEvent();
}});

function clearEvent() {
	const buttons = document.querySelectorAll('.key');
	buttons.forEach(button => {
	button.classList.remove('active');
	});
}

function playSound(parentClass) {
	const sound = document.getElementById('sound-' + parentClass);
	sound.currentTime = 0;
	if (sound) {
		sound.play();
		console.log('play');
	} else {
		console.error('오디오 요소를 찾을 수 없습니다.');
	}
}

function activateButton(num) {
	clearEvent();
	const buttonToActivate = document.querySelectorAll('.num-' + num);
	buttonToActivate.forEach(button => {
		button.classList.add('active');
		const parentClass = button.parentElement.classList[1]; // 첫 번째 부모 요소의 클래스명 가져오기
		if (button.classList.contains('on')) {
			playSound(parentClass);
		}
	});
}

function startAnimation() {
	let num = 1;
	clearInterval(animationInterval); // 애니메이션 초기화
	animationInterval = setInterval(() => {
	  activateButton(num);
	  num = num % 8 + 1; // 1부터 8까지 루프
	}, 200);
}

