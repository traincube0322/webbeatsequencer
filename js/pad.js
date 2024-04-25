var key_colors = ['#FF007F', '#00FF2E', '#00DDFF', '#D400FF'];

const buttons = document.querySelectorAll('.key');
let animationInterval; // 애니메이션을 제어하기 위한 변수
let bpm = 60;

function updateFontSize(input) {
    // 입력 상자의 값을 가져옴
    const bpmValue = input.value;
	bpm = bpmValue;
    // 입력 상자의 길이에 따라 너비를 조정
    const minWidth = 100; // 최소 너비
    const maxWidth = 200; // 최대 너비
    const width = Math.min(maxWidth, Math.max(minWidth, bpmValue.length * 50)); // 텍스트 길이에 따라 너비 계산
    input.style.width = width + 'px';
}

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
	let interval = 60000 / (bpm * 4);
	animationInterval = setInterval(() => {
	  activateButton(num);
	  num = num % 16 + 1;
	}, interval);
}




