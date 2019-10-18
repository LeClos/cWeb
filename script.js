$(document).ready(function () {
    // Fading in header text
    $('.hero-text').fadeIn(2200);
    $('#button').fadeIn(2200);

    // Smooth scroll
    $("#myNav li a").click(function (e) {
        var targetHref = $(this).attr("href");

        $("html, body").animate({
                scrollTop: $(targetHref).offset().top
            },
            500
        );

        e.preventDefault();
    });

    $("#home").click(function (e) {
        var targetHref = $(this).attr("href");

        $("html, body").animate({
                scrollTop: $(targetHref).offset().top
            },
            500
        );

        e.preventDefault();
    });

    // scroll to top
    var btn = $('#button');

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });
});