$(document).ready(function() {
    var botton_audio = new Audio("https://monoame.com/awi_class/ballsound/click23.wav");
    var screen_audio = new Audio("https://monoame.com/awi_class/ballsound/click18.wav")
    var home_audio = new Audio("https://monoame.com/awi_class/ballsound/click14.wav")
    var wiggle_audio = new Audio("https://monoame.com/awi_class/ballsound/phonevi.mp3")

    $(".ise").click(function() {
        $(".phone").css({
            "width": "",
            "background-color": "",
            "border-radius": ""
        });
        $(".screen").css({
            "height": "",
            "border-radius": ""
        });
        $(".top, .bottom").css("height", "");
        $(".camera").css({
            "left":"",
            "top":""
        })
        $(".phonename").text($(this).text());
        $(".button, .camera").show();
        $(".hair").hide().removeClass("i14hair i15hair");
        botton_audio.play();
    });

    $(".i14").click(function() {
        $(".phone").css({
            "width": "250px",
            "background-color": "#3C3C3C",
            "border-radius": "15px"
        });
        $(".screen").css({
            "height": "450px",
            "border-radius": "10px"
        });
        $(".phonename").text($(this).text());
        $(".top, .bottom").css("height", "2px");
        $(".button, .camera").hide();
        $(".hair").show();
        $(".hair1").addClass("i14hair");
        botton_audio.play();
    });

    $(".i15").click(function() {
        $(".phone").css({
            "width": "250px",
            "background-color": "#3C3C3C",
            "border-radius": "15px"
        });
        $(".screen").css({
            "height": "500px",
            "border-radius": "15px"
        });
        $(".phonename").text($(this).text());
        $(".top, .bottom").css("height", "2px");
        $(".button, .camera").hide();
        $(".hair").show().removeClass("i14hair");
        $(".hair2").show().addClass("i15hair");
        botton_audio.play();
    });



    $(".ipad").click(function() {
        $(".phone").css({
            "width": "550px",
            "background-color": "#6C6C6C",
            "border-radius": "20px"
        });
        $(".screen").css({
            "height": "600px",
            "border-radius": "20px"
        });
        $(".phonename").text($(this).text());
        $(".top, .bottom").css("height", "10px");
        $(".button").hide();
        $(".camera").show().css({
        "left":"50%",
        "top":"0",
        })
        $(".hair").hide().removeClass("i14hair i15hair");
        botton_audio.play();
    });

    $(".button").click(
    function(){
        page = 0
        $(".pages").css("left","-"+page*100+"%");
        home_audio.play();
    }
    );

    var page = 0;
    $(".screen").click(
    function(){
        page += 1
        if(page > 2){
        page = 0;
        }
        $(".pages").css("left","-"+page*100+"%");
        screen_audio.play();
    }
    );


    $(".turn").click(
    function(){
        $(".phone").css("transform","rotate(360deg)");
    }
    );

    var wiggle_time = 0;

    $(".wiggle").click(
    function(){
        wiggle_time = 0;
        wiggle_audio.play()
    }
    );

    setInterval(function(){
    if(wiggle_time <= 20){
        wiggle_time += 1
        if(wiggle_time % 2 ==0 ){
        $(".phone").css("left","-30px");
        }else{
        $(".phone").css("left","30px");
        }
    }
    if(wiggle_time == 21){
        $(".phone").css("left","");
    }
    },60)

});