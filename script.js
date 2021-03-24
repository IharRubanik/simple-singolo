let btnLeft = document.getElementById('btn_left');
let btnRight = document.getElementById('btn_right');
let slide1 = document.getElementById('slide_red');
let slide2 = document.getElementById('slide_blue');


btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', nextSlide);


function nextSlide() {
    if( slide1.style.opacity !== '0') {
     slide1.style.opacity = '0';
    slide2.style.opacity = '1';
    } else {
        slide1.style.opacity = '1';
        slide2.style.opacity = '0';
    }
}