const startBtn = document.querySelector('#startBtn');
const metronomeBtn = document.querySelector('#metronomeBtn')
const tick = document.querySelector('#tick');
const tok = document.querySelector('#tok');
const bpm = document.querySelector('#bpm');
const title = document.querySelector('h1');
let timer = null;
let nowBpm = 60;
let isPlay = false;
let metronomeActive = false;

bpm.addEventListener('change', (e) => {
	const containerTitle = document.querySelector('.container h1');
	containerTitle.innerHTML = e.target.value + ' BPM';
	nowBpm = parseInt(e.target.value);
	if (isPlay) {
		clearInterval(timer);
		timer = setInterval(playSound, realBpm(nowBpm));
	}
});

startBtn.addEventListener('click', () => {
	if (isPlay) {
		clearInterval(timer);
		changeBtn();
	} 
	else {
		changeBtn();
		if (metronomeActive) {
			playSound();
			timer = setInterval(() => {
				if (metronomeActive) { // 메트로놈이 활성화된 경우에만 소리 재생
					playSound();
				}
			}, realBpm(nowBpm));
		}
	}
	isPlay = !isPlay;
});

startBtn.addEventListener('click', () => {
	if (isPlay) {
		clearInterval(timer);
		changeBtn(); 
	} 
	else {
		changeBtn();
		if (metronomeActive)
			playSound();
		timer = setInterval(playSound, realBpm(nowBpm));            
	}
	isPlay = !isPlay;
 });

metronomeBtn.addEventListener('click', () => {
	toggleButton();
	if (!metronomeActive) {
		clearInterval(timer);
	}
	metronomeActive = !metronomeActive;
});

function playSound() {
    tick.currentTime = 0;
    tick.play();
}

function changeBtn() {
	var startBtn = document.getElementById("startBtn");
	var image = document.getElementById("startstop");
	if (startBtn.getAttribute("name") === "start") {
		startBtn.setAttribute("name", "stop");
		image.innerHTML = '<path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5"/>';
	} else {
		startBtn.setAttribute("name", "start");
		image.innerHTML = '<path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>';
	}
}

function toggleButton() {
	var button = document.getElementById("metronomeBtn");

	if (button.classList.contains("btn-secondary")) {
		button.classList.remove("btn-secondary");
		button.classList.add("btn-light");
	} else {
		button.classList.remove("btn-light");
		button.classList.add("btn-secondary");
	}
}

function realBpm(bpm) {
	return (60 * 1000) / bpm;
}
