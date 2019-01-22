const app = {};

app.init = function(){
    app.navigation();
    app.slider();
};

app.navigation = function(){
    $('header nav li.hasChildren').each(function(i){
        $(this).append('<span><i class="fa fa-angle-down"></i></span>');
    });

    // Mobile Navigation
    $('header nav li.hasChildren span').click(function(){
        var allSubMenus = $('ul.subMenu');
        var thisSubMenu = $(this).parent().find('ul.subMenu');

        if (thisSubMenu.hasClass('open')){
            thisSubMenu.removeClass('open');
            thisSubMenu.slideUp(400);
        } else {
            allSubMenus.slideUp(400);
            allSubMenus.removeClass('open');
            thisSubMenu.addClass('open');
            thisSubMenu.slideDown(400);
        }
    });
    
    $('.mobileToggle').click(function(){
        $(this).toggleClass('open');
        $('header nav').toggleClass('open');
    })

    $(window).on('resize', function(){
        var mobileNav = $('header nav');
        if ($(window).width() < 1095) {
            $('header').addClass('mobile');
            $('.topBar').appendTo(mobileNav);
            $('.topPhone').appendTo(mobileNav);
        } else {
            $('header').removeClass('mobile');
            $('.topBar').prependTo('header');
            $('.topPhone').appendTo('.topLogo .container');
        }
    }).resize();
};

app.slider = function(){
    $('.fullSlider').slick({
        centerMode: true,
        slidesToShow: 3,
        dots: true,
        prevArrow: '<a class="slick-prev slick-arrow"><i class="fa fa-angle-left"></i></a>',
        nextArrow: '<a class="slick-next slick-arrow"><i class="fa fa-angle-right"></i></a>',
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 1,
                    centerMode: false
                }
            }
        ]
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