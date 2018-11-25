/*================================================
 jQuery document ready
 ===============================================*/
$(document).ready(function () {

    "use strict";

    /*================================================
     jQuery Preloader
     ===============================================*/

    // $(function () {
    //     // Shadow overlay styles
    //     var shadow_css = {
    //         width: '100%',           // Width
    //         height: '100%',          // Height
    //         background: '#FFFFFF',   // Background color of overlay
    //         position: 'fixed',       // Overlay Position
    //         top: 0,
    //         left: 0,
    //         zIndex: 9999             // Z index
    //     };
    //
    //     // Loading icon  CSS
    //     var spinner_css = {
    //         position: 'absolute',    // Icon Position
    //         top: '50%',              // Center Left
    //         left: '50%'              // Center Right
    //     };
    //
    //     // Preloader Custom
    //     $('<div/>', {
    //         id: 'shadow',
    //         css: shadow_css,
    //         html: $('<img/>', {
    //             id: 'spinner',      // CSS ID Spinner
    //             src: 'assets/images/ripple.svg',  // Preloader Icon Image
    //             css: spinner_css
    //         })
    //     }).appendTo('body');
    //
    // });
    //
    // // When is all loaded
    // $(window).load(function() {
    //     $('#spinner').fadeOut('slow', function () { // Fade Out Spinner
    //         $('#shadow').fadeOut();
    //     });
    // });
    /*================================================
     Header Form
     ===============================================*/
    $(function () {
        // Form Header
        $("#header-form").validate({
            errorElement: 'div',
            rules: {
                // Input name = name
                name: "required",
                // Input name = last_name
                last_name: "required",
                // Input name = age
                age: "required",
                // Input Email
                email: {
                    required: true,
                    email: true
                }
            },
            // Do Submit
            submitHandler: function (form) {
                form.submit();
            }
        });
        // Form Modal
        $("#contact").validate({
            errorElement: 'div',
            rules: {
                name: {
                    required: true,
                },
                email: {
                    required: true,
                },
                message: {
                    require: true
                }
            }
        });
    });

    /*================================================
     Hide Header on scroll
     ===============================================*/

    $(".fixed-top").autoHidingNavbar();

    /*================================================
     Scroll Animation
     ===============================================*/

    window.scrollReveal = new scrollReveal();

    /*================================================
     App Gallery slider
     ===============================================*/

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true, // Slider Loop
        margin: 0,  // SLider Margins
        autoplay: true, // Slider autoplay true, for disable use : false-
        autoplayTimeout: 3000, // Slider timeout
        autoplayHoverPause: true, // Pause slider on hover
        nav: true,  // Navigation -> true, for disable use : false
        navText: [
            "<i class='ion-ios-arrow-left icon-slider'></i>",
            "<i class='ion-ios-arrow-right icon-slider'></i>"
        ],
        responsive: {
            0: {
                items: 1, // small screen slides
                nav: true
            },
            600: {
                items: 3, // medium screen slides
                nav: false
            },
            1000: {
                items: 3, // large screen slider
                nav: true,
                loop: false
            }
        }
    });

    /*================================================
     Scroll to section
     ===============================================*/

    $(function () {
        // Scroll to section
        $('.navbar-nav a[href*="#"]:not([href="#"]), .navbar-brand').on('click', (function () {
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
        }));
    });
    /*--------------------------------------------------------
     Particles Animation
     -------------------------------------------------------*/

    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 120,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#3498db"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#ffffff"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.6,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.1,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    /*================================================
     jQuery document ready end
     ===============================================*/

});