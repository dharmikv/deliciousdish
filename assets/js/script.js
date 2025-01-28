var swiper = new Swiper(".culture-slider", {
    slidesPerView: 1,
    loop:true, // Default for small screens
    breakpoints: {
        640: {
            slidesPerView: 1, // For screens >= 640px
        },
        768: {
            slidesPerView: 2, // For screens >= 768px
        },
        1440: {
            slidesPerView: 3, // For screens >= 1024px (desktop)
        }
    }
});

jQuery(document).ready(function ($) { 
    if ($(window).scrollTop() >= 70) {
        $('.header').addClass('is-sticky');
        $('.top-bar').addClass('hidden');
    }
    $(window).scroll(function () { 
        if ($(window).scrollTop() >= 70) {
            $('.header').addClass('is-sticky');
            $('.top-bar').addClass('hidden');
        } else {
            $('.header').removeClass('is-sticky');
            $('.top-bar').removeClass('hidden');
        }
    });
});
