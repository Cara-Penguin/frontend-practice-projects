$(document).ready(function() {
    $(window).mousemove(
        function(evt){
          var x = evt.pageX - $("#paw").width() / 2;
          var y = evt.pageY - $("#paw").height() / 2;
          $("#paw").css({ left: x + "px", top: y + "px" });
          
          if(x < $(window).width() / 2 - 50){
            $("#bear").attr("src","https://i.postimg.cc/c6yb7sB8/left.png")
          }
          if(x > $(window).width() / 2 + 50){
            $("#bear").attr("src","https://i.postimg.cc/tRZRz2zX/right.png")
          }
          
          if( Math.abs(x - $(window).width() / 2) < 100 ){
            $("#bear").attr("src","https://i.postimg.cc/2jsk9hHn/top.png")
          }
          
          
          
        }
        
      )
});

