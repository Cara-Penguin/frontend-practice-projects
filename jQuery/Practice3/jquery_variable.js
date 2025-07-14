$(document).ready(function() {

    var num = 12;

    function check(){
    if(num < 10){
        $(".text").text("數量極少!!!");
        $(".text").css("border-color","#B95756");
        $(".text").css("color","#B95756");
        $(".fill_stock").addClass("fill_stock_open");
        }else if(num < 20){
        $(".text").text("賣的不錯唷!!!");
        $(".text").css("border-color","#FD9270");
        $(".text").css("color","#FD9270");
        $(".fill_stock").removeClass("fill_stock_open");
        }else{
        $(".text").text("還剩下很多!!!");
        $(".text").css("border-color","#ADAAA5");
        $(".text").css("color","#ADAAA5");
        }
    }

    function click(num_var){
        num+=num_var;
        $(".num").text(num);
    }
    $(".minus").click(
    function(){
        click(-1);
        check();
    }
    );

    $(".add").click(
    function(){
        click(1);
        check();
    }
    );

    var wait_time = 0;
    $(".fill_stock").click(
    function(){
        $(".fill_stock").text("📞聯絡中...")
        setInterval(
            function(){
            wait_time += 1;
            $(".fill_stock").text("📞聯絡中..." + wait_time);
            }
        ,1000);
    }
    );

});