const app = {};

app.init = function(){
    app.slider();
};

app.slider = function(){
    $('.fullSlider').slick({
        centerMode: true,
        slidesToShow: 3,
        dots: true,
        prevArrow: '<a class="slick-prev slick-arrow"><i class="fa fa-angle-left"></i></a>',
        nextArrow: '<a class="slick-next slick-arrow"><i class="fa fa-angle-right"></i></a>'
    });

    $('.testimonialSlider').slick({
        prevArrow: '<a class="slick-prev slick-arrow"><i class="fa fa-angle-left"></i></a>',
        nextArrow: '<a class="slick-next slick-arrow"><i class="fa fa-angle-right"></i></a>',
        adaptiveHeight: true
    })
};

$(document).ready(function(){
    app.init();
})