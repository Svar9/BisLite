//= components/slick.js

document.querySelector('.menu__btn').onclick = function() {
    document.querySelector('.menu__btn').classList.toggle('active');
    document.querySelector('.menu__items').classList.toggle('active');
}