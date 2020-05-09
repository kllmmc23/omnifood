$(document).ready(function () {

    $('.js--section-features').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
});
$('.js--wp-1').waypoint(function () {
    $('.js--wp-1').addClass('animated fadeIn')
}, {
    offset: '50%;'
});
$('.js--wp-2').waypoint(function () {
    $('.js--wp-2').addClass('animated fadeInLeft')
}, {
    offset: '50%;'
});
$('.js--wp-3').waypoint(function () {
    $('.js--wp-3').addClass('animated zoomIn')
}, {
    offset: '50%;'
});
$('.js--wp-4').waypoint(function () {
    $('.js--wp-4').addClass('animated pulse')
}, {
    offset: '50%;'
});

$('.js--nav-icon').click(function () {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i')
    nav.slideToggle(200)
    
});

/*----------smooth scrolling------------*/
// $('a[href*="#"]')
//   // Remove links that don't actually link to anything
//   .not('[href="#"]')
//   .not('[href="#0"]')
//   .click(function(event) {
//     // On-page links
//     if (
//       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
//       && 
//       location.hostname == this.hostname
//     ) {
//       // Figure out element to scroll to
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       // Does a scroll target exist?
//       if (target.length) {
//         // Only prevent default if animation is actually gonna happen
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000, function() {
//           // Callback after animation
//           // Must change focus!
//           var $target = $(target);
//           $target.focus();
//           if ($target.is(":focus")) { // Checking if the target was focused
//             return false;
//           } else {
//             $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//             $target.focus(); // Set focus again
//           };
//         });
//       }
//     }
//   });

// var waypoint = new Waypoint({
//     element: document.getElementById('px-offset-waypoint'),
//     handler: function(direction) {
//       notify('I am 20px from the top of the window')
//     },
//     offset: 20 
//   })
// $('h1').click(function() {
//     $(this).css('background-color', '#ff0000')
// });