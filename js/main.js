var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');

var $tabs = $('.tabs');
var $panels = $('.panel');

var $ketchmust = $('.ketchmust');


$btnShowHide.on('click', function () {
    $box.toggleClass('js-show-hide')
});

$tabs.on('click','a', function (e) {
    e.preventDefault();
    var id = $(this).attr('href');

   $panels.filter(':not([hidden])').attr('hidden', true);
   $(id).removeAttr('hidden');

   $tabs.find('.js-current').removeClass('js-current');
   $(this).addClass('js-current');
});

$.localScroll({
  target: '.wrapper'
});


$ketchmust.waypoint(function () {
    $ketchmust.toggleClass('js-active');
}, { offset: '50%', context: '.wrapper' });

