var key_colors = ['#FF007F', '#00FF2E', '#00DDFF', '#D400FF'];

function toggleColor(button) {
	var computedStyle = window.getComputedStyle(button);
	var backgroundColor = computedStyle.backgroundColor;

	if (backgroundColor === 'rgb(254, 225, 232)') {
		var randomIndex = Math.floor(Math.random() * key_colors.length);
		var randomColor = key_colors[randomIndex];
		button.style.backgroundColor = randomColor;
	}
	else {
		button.style.backgroundColor = '#FEE1E8';
	}
}