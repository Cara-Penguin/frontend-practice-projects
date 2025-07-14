$(document).ready(function() {
    $(".block1").html("更新公告");
  
    $(".block2").css("background-color", "purple");
    $(".block2").css("border-radius", "100%");
  
    $(".block3").addClass("bigblock");
    $(".block4").removeClass("bigblock");
  
    $(".block5").html("<div class='block'>商品</div><div class='block'>商品</div>");
  
    $(".block5").prepend("商品列表 : ");
    $(".block5").append("共有兩項商品");
  
    $(".block6").text("<div class='block'>商品</div><div class='block'>商品</div>");
  });
  