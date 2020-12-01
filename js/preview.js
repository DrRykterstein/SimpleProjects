const btn = document.querySelector('.btn');
const preview = document.querySelector('.preview-container');
const cross = document.querySelector('.bi');

// display preview upon click
btn.addEventListener('click', () => {
    preview.style.display = 'block';
});

// close preview upon click
cross.onclick = () => {
    preview.style.display = 'none';
}

// toggle preview upon keypress
document.onkeyup = (event) => {
    if (event.keyCode == 80) {
        preview.style.display = 'block';
    }
    if (event.keyCode == 27) {
        preview.style.display = 'none';
    }
}