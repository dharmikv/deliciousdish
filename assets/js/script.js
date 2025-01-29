var culture_swiper = new Swiper(".culture-slider", {
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

var tesimonial_swiper = new Swiper(".tesmonial-swiper", {
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
    if ($(window).scrollTop() >= 40) {
        $('.header').addClass('is-sticky');
        $('.top-bar').addClass('hidden');
    }
    $(window).scroll(function () { 
        if ($(window).scrollTop() >= 40) {
            $('.header').addClass('is-sticky');
            $('.top-bar').addClass('hidden');
        } else {
            $('.header').removeClass('is-sticky');
            $('.top-bar').removeClass('hidden');
        }
    });
});


gsap.registerPlugin(ScrollTrigger);

const sectionanim = gsap.utils.toArray('.fade-in');
sectionanim.forEach((box) => {
  gsap.fromTo(box, 
    { autoAlpha: 0,y:30 }, 
    { 
      duration: 1, 
      y:0,
      autoAlpha: 1,
      scrollTrigger: {
        trigger: box,
        start: 'top 80%',  
        end: 'top 50%',    
        toggleActions: 'play none none none',
        once: true
      }
    }
  );
});

let open_btn = document.querySelector(".open-button");
let sidebar = document.querySelector(".sidebar");
let close_btn = document.querySelector(".close-btn");
let sidebar_links = document.querySelectorAll(".sidebar ul li ");
let sidebar_timeline = gsap.timeline();

sidebar_timeline.to(sidebar, {
  right: 0,
  duration: 0.3,
});
sidebar_timeline.from(sidebar_links, {
  x: 150,
  opacity: 0,
  duration: 0.3,
  stagger: 0.1,
});
sidebar_timeline.pause();

open_btn.addEventListener("click", function () {
  sidebar_timeline.play();
  document.body.style.overflow = "hidden";
});

close_btn.addEventListener("click", function () {
  sidebar_timeline.reverse();
  document.body.style.overflow = "";
});