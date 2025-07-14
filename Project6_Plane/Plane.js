$(document).ready(function() {

    $(window).scroll(function(evt){
    if ($(window).scrollTop()>0){
        $(".navbar").addClass("bg-secondary bg-gradient");
    }
    else {
        $(".navbar").removeClass("bg-secondary bg-gradient");
        }
    
    });
    var s = skrollr.init();

});