let lastY = 0;
const bar = document.querySelector('.topbar');

window.addEventListener('scroll',() => {
    const y = window.scrollY;
    if (y > lastY && y > 50){
        bar.classList.add('hidden');
    } else {
        bar.classList.remove('hidden')
    }
    lastY = y;
});