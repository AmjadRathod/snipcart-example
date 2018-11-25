/*--------------------------------------
 jQuery Document Ready
 --------------------------------------*/
$(document).ready(function () {
    'use strict';

    /*--------------------------------------
     jQuery to collapse the navbar on scroll
     --------------------------------------*/
    $(function() {
        $(window).on('scroll', function  () {
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
    $(function() {
        $('.navbar-nav a[href*="#"]:not([href="#"]), .get_started').on('click',function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

});
/*--------------------------------------
 jQuery Document Ready
 --------------------------------------*/