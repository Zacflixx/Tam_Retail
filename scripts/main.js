'use strict';

$(function () {

    //range input
    var slideInput = function slideInput(elem) {
        var rangeInput = document.querySelector(elem + ' input');
        var rangeInputFill = document.querySelector(elem + ' .fill');

        if (rangeInput) {
            rangeInput.addEventListener('input', function (e) {
                rangeInputFill.style.width = e.target.value + '%';
            });
        }
    };

    //add photo profile
    var readURL = function readURL(input, elem) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                elem.attr('src', e.target.result).addClass('current');
            };

            reader.readAsDataURL(input.files[0]);
        }
    };

    var sizeSteps = $('.step').length;

    slideInput('#salar-range');
    slideInput('#apr-range');

    $('#input-profile-photo').change(function () {
        readURL(this, $('#photo'));
    });

    // user menu
    $('.user-account').click(function () {
        $('.user-menu').toggleClass('active');
    });

    $('body, html').click(function (e) {
        if ($(e.target).closest('.user-menu, .user-account').length === 0) {
            $('.user-menu').removeClass('active');
        }
    });

    //mob menu
    $('.burger').click(function () {
        $('body').toggleClass('active-menu').find('.header-nav, .burger').toggleClass('active');
    });

    // select2
    $('.money-select select').select2({
        width: '100%'
    });
    $('.allowance-select select').select2({
        width: '100%'
    });
    $('.style-select select').select2({ width: '100%' });

    // accordion
    $('.user-info__box h4').click(function () {
        $(this).closest('.user-info__box').toggleClass('active').find('.user-info__text').slideToggle();
    });

    //change field
    $('.profile-edit').click(function () {
        $(this).closest('.tracking-input__wrap').find('input').prop('disabled', false);
    });

    // language
    $('.lan').click(function () {
        $('.lan-list').toggleClass('active');
    });

    $('body, html').click(function (e) {
        if ($(e.target).closest('.lan-list, .lan').length === 0) {
            $('.lan-list').removeClass('active');
        }
    });

    $('.lan-list a').click(function (e) {
        e.preventDefault();
        $('.lan-list a').removeClass('current');
        $(this).addClass('current').closest('.lan-list').removeClass('active');
        $('.lan span').text($(this).text());
        if ($('.arabic-lan').hasClass('current')) {
            $('body').addClass('direction-rtl');
        } else {
            $('body').removeClass('direction-rtl');
        }
    });

    // steps
    $('.step-present').text(Math.ceil(100 / sizeSteps));
    $('.step-btn').click(function () {
        $(this).closest('.step').removeClass('active').next().addClass('active');
        var index = $('.step.active').index() + 1;
        var present = Math.ceil(100 / sizeSteps * index);
        var strokeDashoffset = 234 - 2.34 * present;
        $('.step-num').text(index);
        $('.step-present').text(present);
        $('path.progress').attr('style', 'fill:none;stroke-dashoffset: ' + strokeDashoffset);
    });

    //video in popup
    $('[data-fancybox=""]').fancybox({
        video: {
            autoStart: false
        }
    });

    $('.video-play').click(function () {
        var video = $(this).closest('.popup-video').find('video');
        if (video.get(0).paused) {
            video.get(0).play();
            video.attr('controls', 'controls');
            $(this).fadeOut();
        } else {
            video.get(0).pause();
            $(this).fadeIn();
        }
    });

    // statistic
    $('.statistic-circle').circleProgress({
        size: 220,
        thickness: 44,
        startAngle: -1.55,
        emptyFill: '#2354d8',
        fill: {
            color: '#f4cd43'
        }
    });

    // sliders
    $('.banner-slider').slick({
        fade: true,
        autoplay: true,
        arrows: false,
        direction: 'rtl'
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        dots: true,
        prevArrow: '.product-nav .slider-prev',
        nextArrow: '.product-nav .slider-next',
        appendDots: '.product-nav .slider-dots',
        direction: 'rtl',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('.brands-slider').slick({
        slidesToShow: 6,
        autoplay: true,
        direction: 'rtl',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 568,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    // tabs

    $('.tab-menu li').click(function () {
        $(this).addClass('active').siblings().removeClass('active').closest('.tab-wrap').find('.tab-content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('.graph-menu li').click(function () {
        $(this).addClass('active').siblings().removeClass('active').closest('.graph-wrap').find('.graph-content').removeClass('active').eq($(this).index()).addClass('active');
    });

    // data
    var data = [{ x: '10:00', y: 8107.85 }, { x: '10:05', y: 9844.85 }, { x: '10:15', y: 8756.85 }, { x: '10:50', y: 8798.85 }, { x: '11:00', y: 8107.85 }, { x: '11:36', y: 9898.85 }, { x: '11:45', y: 9585.85 }, { x: '12:00', y: 7895.85 }, { x: '12:15', y: 8107.85 }, { x: '12:30', y: 9565.85 }, { x: '12:45', y: 8971.85 }, { x: '13:00', y: 8107.85 }, { x: '13:30', y: 8107.85 }, { x: '13:45', y: 9884.85 }, { x: '13:56', y: 9455.85 }, { x: '14:00', y: 8996.85 }, { x: '14:30', y: 9554.85 }, { x: '15:00', y: 8107.85 }];

    // charts
    var options = {
        series: [{
            data: data
        }],
        chart: {
            type: 'area',
            height: 320,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
        fill: {
            type: 'solid',
            colors: '#e0ecf4',
            opacity: 0.6
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        grid: {
            show: true,
            strokeDashArray: 0,
            yaxis: {
                lines: {
                    show: true
                }
            }
        },
        yaxis: {
            opposite: true
        },
        legend: {
            horizontalAlign: 'left'
        }
    };

    var tasi = new ApexCharts(document.querySelector('#tasi'), options);
    var nomu = new ApexCharts(document.querySelector('#nomu'), options);
    var mt30 = new ApexCharts(document.querySelector('#mt30'), options);

    if (document.querySelector('#tasi')) {
        tasi.render();
    }
    if (document.querySelector('#nomu')) {
        nomu.render();
    }
    if (document.querySelector('#mt30')) {
        mt30.render();
    }
});

function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});
//# sourceMappingURL=main.js.map
$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Quick Loans", "Real Estate Loans", "Mortgage Loans", "Business Loans"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Quick Loans", "Real Estate Loans", "Mortgage Loans", "Business Loans"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

function ScrollDiv() {

    if (document.getElementById('feeds1').scrollTop < (document.getElementById('feeds1').scrollHeight - document.getElementById('feeds1').offsetHeight)) {
        -1
        document.getElementById('feeds1').scrollTop = document.getElementById('feeds1').scrollTop + 1
    }
    else { document.getElementById('feeds1').scrollTop = 0; }
}

setInterval(ScrollDiv, 70)

var container = document.getElementById('container')
var slider = document.getElementById('slider');
var slides = document.getElementsByClassName('slide').length;
var buttons = document.getElementsByClassName('btn');


var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        slidesPerPage = 1;
    } else {
        if (w < 901) {
            slidesPerPage = 2;
        } else {
            if (w < 1101) {
                slidesPerPage = 3;
            } else {
                slidesPerPage = 3;
            }
        }
    }
    slidesCount = slides - slidesPerPage;
    if (currentPosition > slidesCount) {
        currentPosition -= slidesPerPage;
    };
    currentMargin = - currentPosition * (100 / slidesPerPage);
    slider.style.marginLeft = currentMargin + '%';
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
    if (currentPosition >= slidesCount) {
        buttons[1].classList.add('inactive');
    }
}

setParams();

function slideRight() {
    if (currentPosition != 0) {
        slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    };
    if (currentPosition === 0) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
};

function slideLeft() {
    if (currentPosition != slidesCount) {
        slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
        currentMargin -= (100 / slidesPerPage);
        currentPosition++;
    };
    if (currentPosition == slidesCount) {
        buttons[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
};
$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        mouseDrag: false,
        loop: true,
        margin: 2,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });

    $('.owl-prev').click(function () {
        $active = $('.owl-item .item.show');
        $('.owl-item .item.show').removeClass('show');
        $('.owl-item .item').removeClass('next');
        $('.owl-item .item').removeClass('prev');
        $active.addClass('next');
        if ($active.is('.first')) {
            $('.owl-item .last').addClass('show');
            $('.first').addClass('next');
            $('.owl-item .last').parent().prev().children('.item').addClass('prev');
        }
        else {
            $active.parent().prev().children('.item').addClass('show');
            if ($active.parent().prev().children('.item').is('.first')) {
                $('.owl-item .last').addClass('prev');
            }
            else {
                $('.owl-item .show').parent().prev().children('.item').addClass('prev');
            }
        }
    });

    $('.owl-next').click(function () {
        $active = $('.owl-item .item.show');
        $('.owl-item .item.show').removeClass('show');
        $('.owl-item .item').removeClass('next');
        $('.owl-item .item').removeClass('prev');
        $active.addClass('prev');
        if ($active.is('.last')) {
            $('.owl-item .first').addClass('show');
            $('.owl-item .first').parent().next().children('.item').addClass('prev');
        }
        else {
            $active.parent().next().children('.item').addClass('show');
            if ($active.parent().next().children('.item').is('.last')) {
                $('.owl-item .first').addClass('next');
            }
            else {
                $('.owl-item .show').parent().next().children('.item').addClass('next');
            }
        }
    });

});

