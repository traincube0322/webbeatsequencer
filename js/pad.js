function changeColor() {
    var pad = document.querySelector('.pad');
    if (pad.style.backgroundColor === 'blue') {
        pad.style.backgroundColor = 'red';
    } else {
        pad.style.backgroundColor = 'blue';
    }
}
