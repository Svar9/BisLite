//= components/slick.js

/* document.querySelector('.menu__btn').onclick = function() {
    document.querySelector('.menu__btn').classList.toggle('active');
    document.querySelector('.menu__items').classList.toggle('active');
}; */


$('.menu__btn').on('click', function() {
    $('.menu__btn').toggleClass('active');
    $('.menu__items').toggleClass('active');
});

document.querySelector('.menu__items.active .menu__item.menu__list').onclick = function(){
    console.log('test');


//.menu__items.active .menu__item.menu__list
/*     .menu__list {
        .menu__dropdown{
            position: static;
            display: none;
        } */
};