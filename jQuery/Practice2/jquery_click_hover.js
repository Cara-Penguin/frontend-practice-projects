$(document).ready(function() {

    $(".buybtn").click(
    function(){
        $(this).text("已經購買");
        $(this).addClass("buyed");
    }
    )

    $(".selbtn").click(
    function(){
        $(".show_info").text($(this).text());
        $(".show_cata").text($(this).attr("data-cata"));
        if($(this).attr("data-cata") == "flower"){
            $(".show_cata").append("，選擇企鵝");
        }else{
            $(".show_cata").append("，不是選擇企鵝");
        }
    }
    )

    $(".mbtn").mouseenter(
    function(){
        $(this).css("background-color","grey");
        $(this).css("color","white");
        $(this).text("滑鼠進入");

    }
    );


    $(".mbtn").mouseleave(
    function(){
        $(this).css("background-color","white");
        $(this).css("color","black");
        $(this).text("滑鼠離開");

    }
    );


    setTimeout(
        function(){
        $(".timerbox").css("background-color","purple")
        }
    ,5000);

    var nowtime=0;
    setInterval(
        function(){
        nowtime +=1
        $(".countbox").text("已經經過"+nowtime+"秒");
        }
    ,1000);
});
