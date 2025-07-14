$(document).ready(function() {
    var shoplist = {};
    var item_url = "ShoppingList.json";
    shoplist.name = "MyBuylist";
    shoplist.time = "2024/07/02";
    shoplist.items = [];

    $.ajax({
    url: item_url,
    dataType: 'json',
    success: function(res){
        shoplist.items = res;
        showlist();
    
    }
    });

    var item_html = "<li id={{id}} class='buy_item'>{{num}}.{{item}}<div class='price'>{{price}}</div><div id={{del_id}} data-del-id ='{{delid}}' class='del_btn' >X</div></li>";

    var total_html = "<li class='buy_item total'>總價<div class='price'>{{price}}</div></li>";

    function showlist(){
    $("#items_list").html("");
    var total_price = 0;
    for(var i=0 ; i<shoplist.items.length; i++){
        var item = shoplist.items[i];
        var item_id = "buyitem_" + i;
        var del_item_id = "del_buyitem_" + i;
        total_price += parseInt(item.price);
        var current_item_html = item_html.replace("{{id}}", item_id)
                                        .replace("{{del_id}}",del_item_id)
                                        .replace("{{num}}", i + 1)
                                        .replace("{{item}}", item.name)
                                        .replace("{{price}}", item.price)
                                        .replace("{{delid}}", i);
        $("#items_list").append(current_item_html);
        $("#" + del_item_id).click(
        function() {
            remove($(this).attr("data-del-id"));
        });
    }
    var current_total_html = total_html.replace("{{price}}",total_price)
    $("#items_list").append(current_total_html);
    
    }

    showlist();

    $(".addbtn").click(
    function(){
        shoplist.items.push(
        {name:$("#input_name").val(),
        price:$("#input_price").val()}
        );
        $("#input_name").val("");
        $("#input_price").val("");
        showlist();
    }
    );

    function remove(id){
    shoplist.items.splice(id,1);
    showlist();
    }
});

