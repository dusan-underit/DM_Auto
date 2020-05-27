/*MAPS*/
/*new GMaps({
    div: '#map',
    lat: -12.043333,
    lng: -77.028333
});*/

/* Navigation scroll */
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


$('.js--scroll-to-about').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000); 
 });