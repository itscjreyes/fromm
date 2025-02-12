const app = {};

app.init = function(){
    app.navigation();
    app.search();
    app.slider();
    app.products();
    app.readMore();
    app.changeSize();
};

app.navigation = function(){
    $('header nav li.hasChildren').each(function(i){
        $(this).append('<span><i class="fa fa-angle-down"></i></span>');
    });

    // Sticky Navigation
    $(window).scroll(function () {
        var y = $(document).scrollTop();
        var topBarHeight = $('.topBar').height() + $('.topLogo').height();
        var navHeight = $('header nav').height();

        if (y >= topBarHeight) {
            $('header').addClass('navSticky');
            $('header.navSticky').css('margin-bottom', navHeight);
        } else {
            $('header').removeClass('navSticky');
            $('header').css('margin-bottom', 0);    
        }
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

app.search = function(){
    $('button.searchToggle').click(function(){
        $('.hs-search-field__wrapper').addClass('open');
        $('header.mobile nav').removeClass('open');
        $('.mobileToggle').removeClass('open');
    });

    $("body").mouseup(function (e) {
        var subject = $(".hs-search-field__bar");

        if (e.target.id != subject.attr('id') && !subject.has(e.target).length) {
            $('.hs-search-field__wrapper').removeClass('open');
        }
    });
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

app.products = function(){
    $('.prodSingle button').click(function(){
        $(this).parent().toggleClass('active');
        $(this).parent().find('.prodBlock').slideToggle();
    });
};

app.readMore = function(){
	$('.readMoreLP').on('click', function(e){
		e.preventDefault();

		$('.lpContent').slideToggle(250);
		$('.readMoreLP').toggleClass('show');
	});
}

app.changeSize = function(){
	$('#increaseFont').click(function(e){
		e.preventDefault();
		var currentBodySize = parseInt($('.section.post-body p').css('font-size')) + 2;
		if (currentBodySize<=24){
			$('.section.post-body p').css('font-size', currentBodySize);
			$('.section.post-body span').css('font-size', currentBodySize);
			$('.section.post-body li').css('font-size', currentBodySize);
			$('.section.post-body h4').css('font-size', currentBodySize);
		}

		var currentH2Size = parseInt($('.section.post-body h2').css('font-size')) + 2;
		if (currentH2Size<=28){
			$('.section.post-body h2').css('font-size', currentH2Size);
		}

		var currentH3Size = parseInt($('.section.post-body h3').css('font-size')) + 2;
		if (currentH3Size<=26){
			$('.section.post-body h3').css('font-size', currentH3Size);
		}
	});

	$('#decreaseFont').click(function(e){
		e.preventDefault();
		var currentBodySize = parseInt($('.section.post-body p').css('font-size')) - 2;
		if (currentBodySize>=12){
			$('.section.post-body p').css('font-size', currentBodySize);
			$('.section.post-body span').css('font-size', currentBodySize);
			$('.section.post-body li').css('font-size', currentBodySize);
			$('.section.post-body h4').css('font-size', currentBodySize);
		}

		var currentH2Size = parseInt($('.section.post-body h2').css('font-size')) - 2;
		if (currentH2Size>=16){
			$('.section.post-body h2').css('font-size', currentH2Size);
		}

		var currentH3Size = parseInt($('.section.post-body h3').css('font-size')) - 2;
		if (currentH3Size>=14){
			$('.section.post-body h3').css('font-size', currentH3Size);
		}
	});
};

$(document).ready(function(){
    app.init();
})