var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');

$btnShowHide.on('click', function () {
    $box.toggleClass('js-show-hide') 
});