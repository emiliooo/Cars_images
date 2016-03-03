

$(document).ready(function() {
    $('.image-frame').hover(function(){
        $('.image-caption',this).slideToggle('fast');
    }, function(){
        $('.image-caption',this).slideToggle('fast');
    });

    $(".arrow").click(function () {
        $('html, body').animate({scrollTop: $('.middle').offset().top}, 2000);
    });




});