/*--------------------------------------
 jQuery Document Ready
 --------------------------------------*/
$(document).ready(function () {
    'use strict';

    /*--------------------------------------
     jQuery to collapse the navbar on scroll
     --------------------------------------*/
    $(function () {
        $(window).on('scroll', function () {
            if ($('.navbar').offset().top > 50) {
                $(".fixed-top").addClass("nav-scroll");
            } else {
                $(".fixed-top").removeClass("nav-scroll");
            }
        });
    });
    /*--------------------------------------
     Autohide Navbar
     --------------------------------------*/

    $(".fixed-top").autoHidingNavbar();

    /*--------------------------------------
     Scroll To Section
     --------------------------------------*/
    $(function () {
        $('.navbar-nav a[href*="#"]:not([href="#"]), .get_started').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    /*--------------------------------------
     Date & Time Picker
     --------------------------------------*/
    $('#drop, #pick').datepicker({});

    /*--------------------------------------
     Car Slider
     --------------------------------------*/
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        grabCursor: true,
        freeMode: true,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
});
/*--------------------------------------
 jQuery Document Ready
 --------------------------------------*/