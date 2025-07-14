$(document).ready(function() {
  $(window).mousemove(function(evt) {
    var x = evt.pageX - $("#paw").width() / 2;
    var y = evt.pageY - $("#paw").height() / 2;
    $("#paw").css({ left: x + "px", top: y + "px" });
    
    var place1 = $("#bear1").offset().left + $("#bear1").width() / 2;
    
    if (Math.abs(x - place1) < 80) {
      $("#bear1").css("bottom", "0px");
    } else {
      $("#bear1").css("bottom", "-50px");
    }
    
    
    var place1 = $("#bear1").offset().left + $("#bear1").width() / 2;
    
    if (Math.abs(x - place1) < 80) {
      $("#bear1").css("bottom", "0px");
    } else {
      $("#bear1").css("bottom", "-50px");
    }
    
    var place2 = $("#bear2").offset().left + $("#bear2").width() / 2;
    
    if (Math.abs(x - place2) < 80) {
      $("#bear2").css("bottom", "0px");
    } else {
      $("#bear2").css("bottom", "-50px");
    }
    
    var place3 = $("#bear3").offset().left + $("#bear3").width() / 2;
    
    if (Math.abs(x - place3) < 80) {
      $("#bear3").css("bottom", "0px");
    } else {
      $("#bear3").css("bottom", "-50px");
    }
  });
});

