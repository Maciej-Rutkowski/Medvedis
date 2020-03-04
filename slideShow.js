const imgList = [...document.querySelectorAll('img.slider')];
const dots = [...document.querySelectorAll(".dot")];

const time = 5000;
let active = 0;

const changeSlide = () => {
    imgList[active].classList.remove('active')
    active++;
    if (active === imgList.length) {
        active = 0;
    }
    imgList[active].classList.add('active')
}
let indexInterval = setInterval(changeSlide, time);

const nextSlide = (e) => {
    imgList[active].classList.remove('active');
    console.log("ok!")
    clearInterval(indexInterval);
    e.target.value === next ? active++ : active--;
    if (active === imgList.length) {
        active = 0;
    } else if (active < 0) {
        active = imgList - 1;
    }
    imgList[active].classList.add('active');
    indexInterval = setInterval(changeSlide, time);
}

// dots.forEach(dot => {
//         dot.addEventListener('click', () => {
//             imgList[active].classList.remove('active');
//             clearInterval(indexInterval);
//             console.log(dots[dot])
//         })
//     }
// )
const prev = document.querySelector('.prev').addEventListener('click', nextSlide);
const next = document.querySelector('.next').addEventListener('click', nextSlide);