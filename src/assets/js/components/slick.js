//= ../../../../node_modules/slick-carousel/slick/slick.js

$(function(){
    
    $(".slider__inner").slick({
        arrows: false,
        dots: true,
    });
    
    $(".works__slider").slick({
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
    });
    

});