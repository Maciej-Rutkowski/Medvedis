const imgList = [...document.querySelectorAll('img.slider')];
const dots = [...document.querySelectorAll(".dot")];

const time = 5000;
let active = 0;
const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}
const changeSlide = () => {
    imgList[active].classList.remove('active')
    active++;
    if (active === imgList.length) {
        active = 0;
    }
    imgList[active].classList.add('active');
    changeDot()
}

let indexInterval = setInterval(changeSlide, time);

const nextSlide = (e) => {
    imgList[active].classList.remove('active');
    // console.log(e.target.className)
    clearInterval(indexInterval);
    e.target.className === 'next' ? active++ : active--;
    if (active === imgList.length) {
        active = 0;
    } else if (active < 0) {
        active = imgList.length - 1;
    }
    imgList[active].classList.add('active');
    indexInterval = setInterval(changeSlide, time);
    changeDot()
}

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        imgList[active].classList.remove('active');
        clearInterval(indexInterval);
        active = dots.indexOf(dot);
        imgList[active].classList.add('active');
        indexInterval = setInterval(changeSlide, time);
        changeDot()
    })
})
const prev = document.querySelector('.prev').addEventListener('click', nextSlide);
const next = document.querySelector('.next').addEventListener('click', nextSlide);