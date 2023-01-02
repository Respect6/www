
(function ($) {

    var list = $('.links');

    list.find('dd').hide();
    list.find('dt').on('click', function () {
        $(this).next().slideToggle()
            .siblings('dd').slideToggle();
    });

})(jQuery);

var btn = $('.btn');
btn.animate({ width: 250 }, 1000);
$('.btn1').animate({ width: 250 }, 1000);


$('#up').click(function () {
    $('html, body').animate({
        scrollTop: $('.iconB').offset().top
    }, 2000);
});

$('.iconB').click(function () {
    $('html, body').animate({
        scrollTop: $('body').offset().top
    }, 2000);
});


$('#zoom li:nth-child(6)').css({
    color: 'blue',
    fontSize: ''

});
$('#zoom li:nth-child(9)').css({
    color: 'red',
    fontSize: ''

});

