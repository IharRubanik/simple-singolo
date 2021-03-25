let btnLeft = document.getElementById('btn_left');
let btnRight = document.getElementById('btn_right');
let slide1 = document.getElementById('slide_red');
let slide2 = document.getElementById('slide_blue');
let menuMobile = document.getElementById('menu_mobile');
let threeStripes = document.getElementById('three_stripes');
let nameStar = document.getElementById('headr__name_star');
let nameMobile = document.getElementById('name_mobile');


btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', nextSlide);
menuMobile.addEventListener('click', openMenu);


function nextSlide() {
    if( slide1.style.opacity !== '0') {
     slide1.style.opacity = '0';
    slide2.style.opacity = '1';
    } else {
        slide1.style.opacity = '1';
        slide2.style.opacity = '0';
    }
}
function openMenu() {
    threeStripes.className = ('main_menu_active')
    nameStar.style.display = "none"
    nameMobile.style.display = "none"
}   