$(document).ready(function() {

    $(window).scroll(function(e){
    if ($(window).scrollTop()<=0){
        $(".explore,.navbar").addClass("at_top");
    }
    else{
        $(".explore,.navbar").removeClass("at_top");
    }
    });

    $(document).on("click","a",function(event){
    var target = $(this).attr("href");
    event.preventDefault();
    $("html,body").animate({
        scrollTop: $(target).offset().top
    },900);
    });

});