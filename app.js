

$(document).ready(function() {
    $('.image-frame').hover(function(){
        $('.image-caption',this).slideToggle('fast');
    }, function(){
        $('.image-caption',this).slideToggle('fast');
    });
});