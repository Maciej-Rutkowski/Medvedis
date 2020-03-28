const modal = document.querySelector('.modal');
const imgList = [...document.querySelectorAll('.clickableImg')];
const modalImg = document.querySelector('.modalImage');
const description = document.querySelector('.modal .text');

function addDescription() {
    description.innerHTML = null;
    const span = document.querySelector('.active~span');
    description.innerHTML = span.innerHTML;
}
function handleClick() {
    this.classList.add('active');
    modal.style.display = "block";
    modalImg.src = this.src;
    addDescription()
}

imgList.forEach(img => {
    img.addEventListener('click', handleClick)
});

const nextSlide = (e) => {
    let activeImg = imgList.findIndex(img => img.classList.contains('active'));
    imgList[activeImg].classList.remove('active');
    e.target.className === 'next' ? activeImg++ : activeImg--;
    if (activeImg === imgList.length) {
        activeImg = 0;
    } else if (activeImg < 0) {
        activeImg = imgList.length - 1;
    }
    imgList[activeImg].classList.add('active');
    modalImg.src = imgList[activeImg].src;
    addDescription();
}

function closeModal() {
    let activeImg = imgList.findIndex(img => img.classList.contains('active'));
    imgList[activeImg].classList.remove('active');
    modal.style.display = "none"
}
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', nextSlide);
next.addEventListener('click', nextSlide);

document.querySelector('.close').addEventListener('click', closeModal);
window.addEventListener('keydown', e => {
    if (e.keyCode == 27) closeModal();
    else if (e.keyCode == 39) next.click();
    else if (e.keyCode == 37) prev.click();
    else return;
}
);