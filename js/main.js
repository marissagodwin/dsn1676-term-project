var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');

var $tabs = $('.tabs');
var $panels = $('.panel');

var $thumbs = $('.thumbnails');
var $lbImg =$('.lightbox-img');
var $lb =$('.lightbox');



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

$thumbs.on('click','a', function (e){
    e.preventDefault();
    var big =$(this).attr('href')
    $lbImg.attr('src', big);
    $lb.attr('data-state','visible;');
})

